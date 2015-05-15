/**
 * @class Player
 * @extends Ext.toolbar.Toolbar
 * 
 * Enables playback of a recorded layout sequence, controlling playback speed and showing progress
 * 
 */
Ext.define('Player', {
    extend: 'Ext.toolbar.Toolbar',
    
    config: {
        interval: 35,
        showComponentLayouts: true,
        showContainerLayouts: true,
        showRenders: true,
        showDomInserts: true,
        enableKeys: true
    },
    
    /**
     * Tracks the index of the last event that was replayed
     * @property currentIndex
     * @type Number
     * @private
     */
    currentIndex: -1,
    
    constructor: function(config) {
        this.initConfig(config);
        
        this.callParent(arguments);
        
        if (this.getEnableKeys()) {
            this.createKeyNav();
        }
        
        /**
         * @property isPlaying
         * @type Boolean
         * True if the Player is currently playing back events
         */
        this.isPlaying = false;
    },
    
    initComponent: function() {
        Ext.apply(this, {
            items: [
                {
                    text: 'Play',
                    handler: this.play,
                    scope: this
                },
                {
                    text: 'Pause',
                    handler: this.pause,
                    scope: this
                },
                {
                    text: 'Reset',
                    handler: this.reset,
                    scope: this
                },
                {
                    xtype: 'tbseparator'
                },
                {
                    text: '&laquo; Prev',
                    handler: this.unplayLastTick,
                    scope: this
                },
                {
                    text: 'Next &raquo;',
                    handler: this.playNextTick,
                    scope: this
                },
                {
                    xtype: 'tbseparator'
                },
                {
                    xtype: 'fieldset',
                    title: 'Speed',
                    padding: '2 5',
                    items: [
                        {
                            xtype: 'slider',
                            width: 200,
                            minValue: 25,
                            maxValue: 2000,
                            value: 35,
                            listeners: {
                                scope : this,
                                change: function(slider, value) {
                                    this.setInterval(value);
                                }
                            }
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Show',
                    padding: '0 5',
                    layout: 'hbox',
                    width: 350,
                    defaults: {
                        xtype: 'checkboxfield',
                        margin: '0 5 5 0'
                    },
                    items: [
                        {
                            checked: this.getShowRenders(),
                            name: 'showRenders',
                            boxLabel: 'Renders'
                        },
                        {
                            checked: this.getShowDomInserts(),
                            name: 'showDomInserts',
                            boxLabel: 'Dom Inserts'
                        },
                        {
                            checked: this.getShowComponentLayouts(),
                            name: 'showComponentLayouts',
                            boxLabel: 'Cmp Layouts'
                        },
                        {
                            checked: this.getShowContainerLayouts(),
                            name: 'showContainerLayouts',
                            boxLabel: 'Ct Layouts'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Progress',
                    padding: '2 5 4 5',
                    items: [
                        {
                            xtype: 'progressbar',
                            width: 300
                        }
                    ]
                },
                {
                    text: 'Analysis',
                    handler: this.showDetails,
                    scope: this
                }
            ]
        });
        
        this.callParent();
        
        this.updateProgressBar();
        
        Ext.each(this.query('fieldset checkboxfield'), function(checkbox) {
            checkbox.on('change', this.onCheckboxChange, this);
        }, this);
        
        /**
         * @property autoPlayTask
         * @type Object
         * @private
         * A TaskRunner spec object that is used to perform automatic playback of the recorded events
         */
        this.autoPlayTask = {
            run: this.playNextTick,
            scope: this,
            interval: this.getInterval()
        };
    },
    
    /**
     * @private
     * Listens to changes in the value of the 'Show' checkboxes and filters the store accordingly
     * @param {Ext.form.field.Checkbox} field The checkbox that changed
     * @param {Boolean} checked True if checked
     */
    onCheckboxChange: function(field, checked) {
        var update  = {},
            store   = this.store,
            checked;
        
        update[field.name] = checked;
        this.setConfig(update);
        
        checked = {
            component: this.getShowContainerLayouts(),
            container: this.getShowComponentLayouts(),
            dominsert: this.getShowDomInserts(),
            render   : this.getShowRenders()
        };
        
        store.clearFilter();
        store.filter(function(record) {
            return checked[record.get('type')];
        });
        
        this.updateProgressBar();
    },
    
    /**
     * Plays back the event at the given index. This finds the event in the Store, renders a masking div to show the
     * activity, then frames the element
     */
    playTick: function(index) {
        this.currentIndex = index;
        
        var store = this.store,
            event = store.getAt(index),
            el    = event.getEl(),
            total = store.getCount(),
            percentage = (index + 1) / total,
            enabledMapping;
        
        enabledMapping = {
            container: this.getShowContainerLayouts,
            component: this.getShowComponentLayouts,
            render   : this.getShowRenders,
            dominsert: this.getShowDomInserts
        };
        
        if (el && el.dom) {
            var style = 'top: ' + el.getY() + 'px; left: ' + el.getX() + 'px; width: ' + el.getWidth() + 'px; height: ' + el.getHeight() + "px",
                type  = event.get('type'),
                color, injected;
            
            if (enabledMapping[type].apply(this)) {
                switch (type) {
                    case 'container': color = 'blue';   break;
                    case 'component': color = 'green';  break;
                    case 'render'   : color = 'yellow'; break;
                    case 'dominsert': color = 'red';    break;
                }

                Ext.fly(el).frame(color);

                Ext.fly(el).setStyle({
                    visibility: 'visible'
                });

                injected = Ext.core.DomHelper.append(Ext.getBody(), {
                    tag: 'div',
                    cls: 'layout-counter layout-type-' + event.get('type'),
                    style: style
                });

                injected = Ext.get(injected);
                event.set('mask', injected);
                
                //IE needs this :(
                injected.setOpacity(0.15);
            }
            
            this.updateProgressBar();
        }
    },
    
    /**
     * Undoes playback of a given tick by removing its mask
     * @param {Number} index The index of the event to unplay
     */
    unplayTick: function(index) {
        var store = this.store,
            data  = store.data.items,
            hide  = true,
            event = store.getAt(index),
            el    = event.getEl(),
            mask  = event.get('mask'),
            i;
        
        if (mask) {
            mask.destroy();
        }
        
        //here we figure out if we need to hide the related Element or not. We only do this when we've reached the
        //earliest event that involves that element
        for (i = index - 1; i >= 0; i--) {
            if (data[i].getEl().id == el.id) {
                hide = false;
            }
        }
        
        //if this is true it means we're unplaying the earliest event that involves this Element, so we hide it
        if (hide) {
            el.setStyle({
                visibility: 'hidden'
            });
        }
        
        this.updateProgressBar();
    },
    
    /**
     * Plays the next event in the Store, stopping if it has reached the end
     * @private
     */
    playNextTick: function() {
        if (this.currentIndex == -1) {
            this.hideComponents();
        }
        
        if (this.currentIndex + 1 == this.store.getCount()) {
            this.pause();
            this.currentIndex = -1;
        } else {
            this.playTick(++this.currentIndex);
        }
    },
    
    /**
     * Undoes playback of the last tick
     * @private
     */
    unplayLastTick: function() {
        if (this.currentIndex == -1) {
            this.showComponents();
        } else {
            this.unplayTick(this.currentIndex);
            this.currentIndex--;
        }
    },
    
    /**
     * Plays back a recorded series of Layout events. Renders a colored <div> over the position of each component
     * to show when and where the layout occurred
     */
    play: function() {
        this.isPlaying = true;
        
        Ext.TaskManager.start(this.autoPlayTask);
    },
    
    /**
     * Pauses automatic playback
     */
    pause: function() {
        this.isPlaying = false;
        
        Ext.TaskManager.stop(this.autoPlayTask);
    },
    
    /**
     * Creates an {@link Ext.util.KeyNav} to control playback via the arrow and space keys
     */
    createKeyNav: function() {
        this.keyNav = Ext.create('Ext.util.KeyNav', Ext.getBody(), {
            scope: this,
            left : function() {
                this.pause();
                this.unplayLastTick();
            },
            right: function() {
                this.pause();
                this.playNextTick();
            },
            up: function() {
                this.setInterval(this.getInterval() / 1.05);
                this.updateSlider();
            },
            down: function() {
                this.setInterval(this.getInterval() * 1.05);
                this.updateSlider();
            },
            space: function() {
                if (this.isPlaying) {
                    this.pause();
                } else {
                    this.play();
                }
            }
        });
    },
    
    /**
     * Hides all of the elements that the instrumentation phase detected were rendered or laid out
     * @private
     */
    hideComponents: function() {
        this.store.each(function(event) {
            event.getEl().setStyle({
                visibility: 'hidden'
            });
        });
    },
    
    /**
     * Shows all of the elements that the instrumentation phase detected were rendered or laid out
     */
    showComponents: function() {
        this.store.each(function(event) {
            var mask = event.get('mask');
            
            event.getEl().setStyle({
                visibility: 'visible'
            });
            
            if (mask) {
                mask.destroy();
            }
        });
    },
    
    /**
     * Stops playback and optionally clears
     * @param {Boolean} clear True to also clear the masks (defaults to true)
     */
    reset: function(clear) {
        this.pause();
        this.currentIndex = -1;
        this.updateProgressBar();
        
        if (clear !== false) {
            this.showComponents();
        }
    },
    
    /**
     * Updates the progress bar text based on the current index
     * @private
     */
    updateProgressBar: function() {
        var index = this.currentIndex + 1,
            total = this.store.getCount(),
            fraction = index / total;
        
        this.down('progressbar').updateProgress(fraction, index + ' of ' + total);
    },
    
    /**
     * @private
     */
    applyInterval: function(value) {
        value = Math.round(Ext.Number.constrain(value, 25, 2000));
        
        if (this.autoPlayTask) {
            this.autoPlayTask.interval = value;
        }
        
        return value;
    },
    
    /**
     * @private
     * Updates the slider based on the current interval
     */
    updateSlider: function() {
        var slider = this.down('slider'),
            value  = this.getInterval();
        
        if (slider && slider.getValue() != value) {
            slider.setValue(value);
        }
    },
    
    /**
     * Creates a {@link Details} window
     * @private
     */
    showDetails: function() {
        Ext.create('Details', {
            eventsStore: this.store
        }).show();
    }
});