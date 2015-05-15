Ext.define('LayoutInstrumenter', {
    config: {
        isMeasuring: true,
        autoInstrument: true,
        count: {}
    },
    
    requires: ['Ext.data.Store', 'Layout'],
    
    constructor: function(config) {
        this.initConfig(config);
        
        /**
         * @property store
         * @type Ext.data.Store
         * A Store containing all of the capture Layout information
         */
        this.store = new Ext.data.Store({
            model: 'Layout'
        });
        
        if (this.getAutoInstrument()) {
            this.instrument();
            this.instrumentRender();
            this.instrumentDomInsert();
        }
    },
    
    /**
     * Instruments every DomHelper insert. Sadly, the actual doInsert function is hidden in a closure in
     * Ext.core.DomHelper so we have to instrument 4 separate functions here
     */
    instrumentDomInsert: function() {
        var DomHelper = Ext.core.DomHelper,
            me = this,
            store = me.store,
            originals;
        
        originals = {
            append: DomHelper.append,
            insertBefore: DomHelper.insertBefore,
            insertAfter: DomHelper.insertAfter,
            insertFirst: DomHelper.insertFirst
        };
        
        Ext.iterate(originals, function(name, origFunction) {
            DomHelper[name] = function() {
                var el = origFunction.apply(this, arguments);

                if (me.getIsMeasuring()) {
                    store.add({
                        type: 'dominsert',
                        el: el,
                        height: el.getHeight(),
                        width: el.getWidth()
                    });
                }

                return el;
            };
        });
    },
    
    instrumentRender: function() {
        var compProto = Ext.Component.prototype,
            origRender = compProto.render,
            me = this,
            store = me.store;
        
        compProto.render = function() {
            var startTime = new Date().getTime();
            
            if (me.getIsMeasuring()) {
                store.add({
                    component: this,
                    type: 'render',
                    totalTime: new Date().getTime() - startTime,
                    startTime: startTime
                });
            }
            
            return origRender.apply(this, arguments);
        };
    },
    
    /**
     * Wraps the beforeLayout call in every layout, adding each call to this.store
     */
    instrument: function() {
        var count = this.getCount(),
            layoutProto = Ext.layout.Layout.prototype,
            origLayout = layoutProto.beforeLayout,
            me = this,
            store = me.store;
        
        layoutProto.beforeLayout = function(width, height, isSetSize, callingContainer) {
            //if we're not currently measuring, just pass straight through to the layout
            if (!me.getIsMeasuring()) {
                return origLayout.apply(this, arguments);
            }
            
            var owner = this.owner,
                el    = owner.getEl(),
                id    = owner.getId();
            
            count[id] = count[id] || {
                layouts: [],
                el: this.owner.getEl()
            };
            
            var startTime = new Date().getTime();
            
            //we only count a layout if beforeLayout did not return false. If it did, don't add this to the stats
            if (origLayout.apply(this, arguments) == false) {
                return;
            }
            
            count[id].layouts.push({
                width: width,
                height: height,
                isSetSize: isSetSize,
                time: new Date().getTime() - startTime
            });
            
            var measuredWidth, measuredHeight, box;
            
            if (el && el.dom) {
                measuredWidth = el.getWidth();
                measuredHeight = el.getHeight();
                box = el.getBox();
            }
            
            store.add({
                component: this.owner,
                isSetSize: isSetSize,
                height: measuredHeight || height,
                width: measuredWidth || width,
                x: box.x,
                y: box.y,
                totalTime: new Date().getTime() - startTime,
                startTime: startTime,
                type: this instanceof Ext.layout.container.Container ? 'container' : 'component'
            });
        };
    }
});