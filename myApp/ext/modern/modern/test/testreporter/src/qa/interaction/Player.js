/**
 * @class Ext.test.event.Player
 * @extends Ext.test.event.Driver
 *
 * This class manages the playback of an array of "event descriptors". For details on the
 * contents of an "event descriptor", see {@link Recorder}. The events recorded by the
 * {@link Recorder} class are designed to serve as input for this class.
 * 
 * The simplest use of this class is to instantiate it with an {@link #eventQueue} and call
 * {@link #start}. Like so:
 *
 *      var player = Ext.create('Ext.test.event.Player', {
 *          eventQueue: [ ... ],
 *          speed: 2,  // play at 2x speed
 *          listeners: {
 *              stop: function () {
 *                  player = null; // all done
 *              }
 *          }
 *      });
 *
 *      player.start();
 *
 * A more complex use would be to incorporate keyframe generation after playing certain
 * events.
 *
 *      var player = Ext.create('Ext.test.event.Player', {
 *          eventQueue: [ ... ],
 *          keyFrameEvents: {
 *              click: true
 *          },
 *          listeners: {
 *              stop: function () {
 *                  // play has completed... probably time for another keyframe...
 *                  player = null;
 *              },
 *              keyframe: onKeyFrame
 *          }
 *      });
 *
 *      player.start();
 *
 * If a keyframe can be handled immediately (synchronously), the listener would be:
 *
 *      function onKeyFrame () {
 *          handleKeyFrame();
 *      }
 *
 *  If the keyframe event is always handled asynchronously, then the event listener is only
 *  a bit more:
 *
 *      function onKeyFrame (p, eventDescriptor) {
 *          eventDescriptor.defer(); // pause event playback...
 *
 *          handleKeyFrame(function () {
 *              eventDescriptor.finish(); // ...resume event playback
 *          });
 *      }
 *
 * Finally, if the keyframe could be either handled synchronously or asynchronously (perhaps
 * differently by browser), a slightly more complex listener is required.
 *
 *      function onKeyFrame (p, eventDescriptor) {
 *          var async;
 *
 *          handleKeyFrame(function () {
 *              // either this callback is being called immediately by handleKeyFrame (in
 *              // which case async is undefined) or it is being called later (in which case
 *              // async will be true).
 *
 *              if (async) {
 *                  eventDescriptor.finish();
 *              } else {
 *                  async = false;
 *              }
 *          });
 *
 *          // either the callback was called (and async is now false) or it was not
 *          // called (and async remains undefined).
 *
 *          if (async !== false) {
 *              eventDescriptor.defer();
 *              async = true; // let the callback know that we have gone async
 *          }
 *      }
 *
 */
Qa.interaction.Player = function (config) {
    var me = this,
        name;
    /**
     * @cfg {Array} eventQueue The event queue to playback. This must be provided before
     * the {@link #start} method is called.
     */

    for (name in config) {
        if (config.hasOwnProperty(name)) {
            me[name] = config[name];
        }
    }
    /**
     * @cfg {Number} missingTargetTimeout The maximum amount of time to wait for a target to be present. 
     * Default is 5000ms.
     */
    me.missingTargetTimeout = me.missingTargetTimeout || 5000;
    
//    me.listeners = {};
    /**
     * @cfg {Object} keyFrameEvents An object that describes the events that should generate
     * keyframe events. For example, `{ click: true }` would generate keyframe events after
     * each `click` event. default to null all events are keyframe)
     */
    
    me.keyFrameEvents = me.keyFrameEvents || null;
    
    /**
     * @cfg {Boolean} pauseForAnimations True to pause event playback during animations, false
     * to ignore animations. Default is true.
     */    
    me.pauseForAnimations = me.pauseForAnimations || true;

    /**
     * @cfg {Number} maxAnimationsTimeout The maximum amount of time to wait for all animations to complete. 
     * Default is 1500ms.
     */

    me.maxAnimationsTimeout =  me.maxAnimationsTimeout || 1500;
    
    //private
    me.animationTimeout = Infinity;
    
    /**
     * @cfg {Boolean} pauseForStores True to pause event playback during stores load, false
     * to ignore stores. Default is true.
     */    
    me.pauseForStores = me.pauseForStores || true;
    
     /**
     * @cfg {Number} maxStoresTimeout The maximum amount of time to wait for stores to load. 
     * Default is 5000ms.
     */

    me.maxStoresTimeout =  me.maxStoresTimeout || 5000;
    
    
    
    //private
    me.storesTimeout = Infinity;
    
    
    /**
     * @cfg {Boolean} pauseForStores True to pause event playback during stores load, false
     * to ignore stores. Default is true.
     */    
    me.pauseForMasks = me.pauseForMasks || true;
    
     /**
     * @cfg {Number} maxStoresTimeout The maximum amount of time to wait for stores to load. 
     * Default is 5000ms.
     */

    me.maxMasksTimeout =  me.maxMasksTimeout || 5000;
    
    
    
    //private
    me.masksTimeout = Infinity;
    
    /**
     * @cfg {Number} speed The playback speed multiplier. Default is 1.0 (to playback at the
     * recorded speed). A value of 2 would playback at 2x speed.
     */
    me.speed = config.speed || 1.0;
    
   /**
     * @cfg {Number} scheduleInterval The scheduling default interval in ms (default to 25).
     */
    me.scheduleInterval = config.scheduleInterval || 25;
    
    me.stallTime = 0;
    
    // private
    me.tagPathRegEx = /(\w+)(?:\[(\d+)\])?/;
        
    me.timerFn = function () {
        me.onTick();
    };
    
    me.attachTo = me.attachTo || window;
    
    me.active = null;
    
    if (me.autoStart) {
        me.start();
    }
};


     
/**
 * Returns the element given is XPath-like description.
 * @param {String} xpath The XPath-like description of the element.
 * @return {HTMLElement}
 */
Qa.interaction.Player.prototype.getElementFromXPath = function (xpath) {
    var me = this,
        parts = xpath.split('/'),
        regex = me.tagPathRegEx,
        i, n, m, count, tag, child,
        el = me.attachTo.document;

    el = (parts[0] == '~') ? el.body
                : el.getElementById(parts[0].substring(1)); // remove '#'

    for (i = 1, n = parts.length; el && i < n; ++i) {
        m = regex.exec(parts[i]);
        count = m[2] ? parseInt(m[2], 10) : 1;
        tag = m[1].toUpperCase();

        for (child = el.firstChild; child; child = child.nextSibling) {
            if (child.tagName == tag) {
                if (count == 1) {
                    break;
                }
                --count;
            }
        }

        el = child;
    }

    return el;
};

/**
 * This method is called after an event has been played to prepare for the next event.
 * @param {Object} eventDescriptor The descriptor of the event just played.
 */
Qa.interaction.Player.prototype.nextEvent = function (eventDescriptor) {
    var me = this, 
        index,
        tmp,
        i,
        j, length;

    index = ++me.queueIndex;
    
    if (eventDescriptor._keyframe || eventDescriptor.beforeFn || eventDescriptor.afterFn) {
        return;
    }
    

    if (eventDescriptor.after) {
        tmp = [];
        length = me.eventQueue.length;
        if (index == length) {
            me.eventQueue.push({ 
                afterFn: eventDescriptor.after
            });
            delete eventDescriptor.after;
        } else {
            for (i = 0, j = 0; i < length; i++) {
                if (i == index) {
                    tmp[j] = { 
                        afterFn: eventDescriptor.after
                    };

                    j++;
                    delete eventDescriptor.after;
                }
                tmp[j] = me.eventQueue[i];
                j++;
            }

            me.eventQueue = tmp;
        }
        index++;
    } 
    
        // keyframe events are inserted after a keyFrameEvent is played.
    if (me.keyFrameEvents == 'all' || 
        me.keyFrameEvents && me.keyFrameEvents[eventDescriptor.type] ||
        eventDescriptor.keyframe) {
        tmp = [];
        length = me.eventQueue.length;
        if (index == length) {
            me.eventQueue.push({ 
                _keyframe: true
            });
        } else {
            for (i = 0, j = 0; i < length; i++) {
                if (i == index) {
                    tmp[j] = { 
                        _keyframe: true
                    };

                    j++;
                }
                tmp[j] = me.eventQueue[i];
                j++;
            }
            me.eventQueue = tmp;
        }
        
    }
    
};

/**
 * This method returns the event descriptor at the front of the queue. This does not
 * dequeue the event. Repeated calls return the same object (until {@link #nextEvent}
 * is called).
 */
Qa.interaction.Player.prototype.peekEvent = function () {
    var me = this,
        queue = me.eventQueue,
        index = me.queueIndex,
        eventDescriptor = queue[index] || null,
        tmp, length, i, j;
        
    if (eventDescriptor && eventDescriptor.before) {
        tmp = [];
        length = me.eventQueue.length;
        for (i = 0, j = 0; i < length; i++) {
            if (i == index) {
                tmp[j] = { 
                    beforeFn: eventDescriptor.before
                };

                j++;
                delete eventDescriptor.before;
            }
            tmp[j] = me.eventQueue[i];
            j++;
        }
        me.eventQueue = tmp;
        eventDescriptor = me.eventQueue[index];
    } 
    
    return eventDescriptor;
};
    
    
    
    
Qa.interaction.Player.prototype.pendingAnimations = function() {
    var me = this,
        animations = me.pauseForAnimations;
    
    if (animations) {
        try {
            return me.attachTo.Ext.fx.Manager.items.getCount();
        } catch(e) {}
    }
    
    return false;
}; 

Qa.interaction.Player.prototype.loadingStores = function() {
    var me = this,
        stores = me.pauseForStores,
        length,
        i;
    
    if (stores) {
        try {
            stores = Ext.StoreManager.items;
            length = stores.length;
            for(i = 0; i < length; i++) {
                if (stores[i].isLoading()) {
                    return true;
                }
            }
            
        } catch(e) {}
    }
    
    return false;
}; 

Qa.interaction.Player.prototype.loadingMasks = function() {    
    return Qa.pendingMasks !== 0;
}; 
    
/**
 * This method dequeues and injects events until it has arrived at the time index. If
 * no events are ready (based on the time index), this method does nothing.
 * @return {Boolean} True if there is more to do; false if not (at least for now).
 */
Qa.interaction.Player.prototype.processEvents = function () {
    var me = this,
        eventDescriptor = me.peekEvent();

    if (eventDescriptor !== null) {
        
        // Wait for animations
        if (me.pendingAnimations() && me.animationTimeout > (new Date).getTime()) {
            if (me.animationTimeout === Infinity) {
                me.animationTimeout =  (new Date).getTime() + me.maxAnimationsTimeout;
            }
            return true;
        }

        me.animationTimeout = Infinity;
        
        // Wait for stores
        if (me.loadingStores() && me.storesTimeout > (new Date).getTime()) {
            if (me.storesTimeout === Infinity) {
                me.storesTimeout =  (new Date).getTime() + me.maxStoresTimeout;
            }
            return true;
        }

        me.storesTimeout = Infinity;
        
        // Wait for masks
        if (me.loadingMasks() && me.masksTimeout > (new Date).getTime()) {
            if (me.masksTimeout === Infinity) {
                me.masksTimeout = (new Date).getTime() + me.maxMasksTimeout;
            }
            return true;
        }

        me.masksTimeout = Infinity;

        if (eventDescriptor.run) {
            if (!me.processRun(eventDescriptor)) {
                return false;
            }
            me.nextEvent(eventDescriptor);
        } else if (eventDescriptor._keyframe) {
            if (!me.processKeyFrame(eventDescriptor)) {
                return false;
            }
            me.nextEvent(eventDescriptor);
        } else if (eventDescriptor.beforeFn) {
            if (!me.processBeforeFn(eventDescriptor)) {
                return false;
            }
            me.nextEvent(eventDescriptor);
        } else if (eventDescriptor.afterFn) {
            if (!me.processAfterFn(eventDescriptor)) {
                return false;
            }
            me.nextEvent(eventDescriptor);
        } else if (me.isPlayable(eventDescriptor.ts) &&
                   me.onBeforePlay(eventDescriptor) !== false &&
                   me.playEvent(eventDescriptor)) {
                   me.nextEvent(eventDescriptor);
        } 
        return true;
    }

    me.stop();
    return false;
};

Qa.interaction.Player.prototype.onBeforePlay = function(eventDescriptor) {
    return this.fireEvent('beforeplay', this, eventDescriptor);
}

Qa.interaction.Player.prototype.isPlayable = function (eventTs) {
    var me = this,
        timeIndex = (me.getTimestamp() - me.stallTime) * me.speed;

    if (timeIndex >= eventTs) {
        me.stallTime += timeIndex - eventTs; // correct stallTime in case we are a bit late
        return true;
    }
    
    return false;
};


Qa.interaction.Player.prototype.makeToken = function(eventDescriptor, signal) {
    var me = this,
        t0;
        
    eventDescriptor[signal] = true;
    eventDescriptor.defer = function () {
        eventDescriptor[signal] = false;
        t0 = (new Date).getTime();
    };
    
    eventDescriptor.finish = function () {
        eventDescriptor[signal] = true;
        me.stallTime += (new Date).getTime() - t0;
        me.schedule();
    };
};

/**
    * This method is called when a keyframe is reached. This will fire the keyframe event.
    * If the keyframe has been handled, true is returned. Otherwise, false is returned.
    * @param {Object} The event descriptor of the keyframe.
    * @return {Boolean} True if the keyframe was handled, false if not.
    */
Qa.interaction.Player.prototype.processKeyFrame = function (eventDescriptor) {
    var me = this,
        previousEvent;
    // only fire keyframe event (and setup the eventDescriptor) once...
    if (!eventDescriptor.defer) {
        me.makeToken(eventDescriptor, 'done');

        previousEvent = me.eventQueue[me.queueIndex - 1];
        
        if (previousEvent.afterFn) {
            previousEvent = me.eventQueue[me.queueIndex - 2];
        }

        me.fireEvent('keyframe', me, eventDescriptor, previousEvent);
    }

    return eventDescriptor.done;
};

Qa.interaction.Player.prototype.processBeforeFn = function (eventDescriptor) {
    var me = this,
        event;
    // only fire keyframe event (and setup the eventDescriptor) once...
    if (!eventDescriptor.defer) {
        me.makeToken(eventDescriptor, 'done');
       
        event = me.eventQueue[me.queueIndex + 1];
        
        eventDescriptor.beforeFn(me, eventDescriptor, event);
        
    }

    return eventDescriptor.done;
};

Qa.interaction.Player.prototype.processRun = function(eventDescriptor){
    var me = this;
 
    if (!eventDescriptor.defer) {
        me.makeToken(eventDescriptor, 'done');
        eventDescriptor.run(me, eventDescriptor);
    }

    return eventDescriptor.done;
};

Qa.interaction.Player.prototype.processAfterFn = function (eventDescriptor) {
    var me = this,
        event;   
    // only fire keyframe event (and setup the eventDescriptor) once...
    if (!eventDescriptor.defer) {
        me.makeToken(eventDescriptor, 'done');        
        event = me.eventQueue[me.queueIndex - 1];
        eventDescriptor.afterFn(me, eventDescriptor, event);
    }

    return eventDescriptor.done;
};


/**
 * Called to inject the given event on the specified target.
 * @param {HTMLElement} target The target of the event.
 */
Qa.interaction.Player.prototype.injectEvent = function (target, event) {
    Qa.interaction.Event.inject(target, event);
};

Qa.interaction.Player.prototype.playEvent = function (eventDescriptor) {    
    var me = this,
        target,
        event;
    try {
        if (eventDescriptor.cmpQuery || eventDescriptor.domQuery || eventDescriptor.ref) {
            me.getTarget(eventDescriptor);
        }

        if (eventDescriptor.target) {
            target = me.getElementFromXPath(eventDescriptor.target);
        }

        if (!target) {
            me.missingTargetStartedAt = me.missingTargetStartedAt || (new Date).getTime();

            if ((new Date).getTime() - me.missingTargetStartedAt > me.missingTargetTimeout) {
                throw new Error('Unable to locate target.');
            }
            return false;
        }
        me.missingTargetStartedAt = null;
        event = me.translateEvent(eventDescriptor, target);
        eventDescriptor.timestamp = (new Date).getTime();

        if (eventDescriptor.type == 'focus') {
            target.focus();
            return true;
        }

        me.injectEvent(target, event);
    
    } catch(e) {
        me.stop(e, eventDescriptor)
    }
    return true;
};

Qa.interaction.Player.prototype.schedule = function () {
    var me = this;
    if (!me.timer) {
        me.timer = setTimeout(me.timerFn, me.scheduleInterval);
    }
};

Qa.interaction.Player.prototype.translateEvent = function (eventDescriptor, target) {
    var event = {},
        modKeys = eventDescriptor.modKeys || '',
        xy, body;
  
    if (eventDescriptor.xy) {
        event.xy = xy = Ext.fly(target).getXY();
        xy[0] += eventDescriptor.xy[0];
        xy[1] += eventDescriptor.xy[1];
        eventDescriptor.coords = xy;
        body = Ext.isStrict || Ext.isWebKit ? document.body : document.documentElement ;
        eventDescriptor.coords[0] -= body.scrollLeft;
        eventDescriptor.coords[1] -= body.scrollTop;
    }

    event.type = eventDescriptor.type;
    event.button = eventDescriptor.button;
    event.charCode = eventDescriptor.charCode;
    event.keyCode = eventDescriptor.keyCode;
    event.altKey = modKeys.indexOf('A') > 0;
    event.ctrlKey = modKeys.indexOf('C') > 0;
    event.metaKey = modKeys.indexOf('M') > 0;
    event.shiftKey = modKeys.indexOf('S') > 0;


    return event;
};

Qa.interaction.Player.prototype.getTarget = function(eventDescriptor) {
    var me = this,
        ref = eventDescriptor.ref;
    eventDescriptor.el = eventDescriptor.el || 'el';
    
    if (ref) {
        me.findTarget(eventDescriptor, Qa['get' + ref.charAt(0).toUpperCase() + ref.slice(1)]());
    } else if (eventDescriptor.cmpQuery) {
        me.findTarget(eventDescriptor, Ext.ComponentQuery.query(eventDescriptor.cmpQuery)[0]);
    } else {
        me.findTarget(eventDescriptor);
    }

    return eventDescriptor;
};
    
Qa.interaction.Player.prototype.findTarget = function(eventDescriptor, cmp) {
    var me = this,
        x, y, el, offsetX, offsetY;

    try {
        if (cmp) {
            if (!eventDescriptor.domQuery) {
                el = cmp[eventDescriptor.el];
            } else {
                el = cmp.el.down(eventDescriptor.domQuery);
            }
        } else {
            el = Ext.get(Ext.DomQuery.selectNode(eventDescriptor.domQuery));
        }

        eventDescriptor.target = '#' + el.dom.id;
        if (!eventDescriptor.xy) {
            if (eventDescriptor.offset) {
                offsetX = eventDescriptor.offset[0];
                offsetY = eventDescriptor.offset[1];
                
                if (!offsetX) {
                    x = (el.getWidth() / 2);
                } else if (offsetX >= 0) {
                    x = offsetX;
                } else {
                    x = el.getWidth() - offsetX;
                }

                if (!offsetY) {
                    y = (el.getHeight() / 2);
                } else if (offsetY >= 0) {
                    y = offsetY;
                } else {
                    y = el.getHeight() - offsetY;
                }
                
                if (eventDescriptor.by) {
                    offsetX = eventDescriptor.by[0];
                    offsetY = eventDescriptor.by[1];

                    if (offsetX) {
                        x += offsetX;
                    }

                    if (offsetY) {
                        y += offsetY;
                    }
                }
          
            // default centering
            } else {
                x = (el.getWidth() / 2);
                y = (el.getHeight() / 2);
            }
            eventDescriptor.xy = [x,y];
        }


    } catch(e) {}

    return eventDescriptor;
};

//---------------------------------
// Driver overrides

Qa.interaction.Player.prototype.onStart = function () {
    var me = this;

    me.queueIndex = 0;
    me.schedule();
};

Qa.interaction.Player.prototype.onStop = function () {
    var me = this;

    if (me.timer) {
        clearTimeout(me.timer);
        me.timer = null;
    }

};

//---------------------------------

Qa.interaction.Player.prototype.onTick = function () {
    var me = this;

    me.timer = null;

    if (me.active && me.processEvents()) {
        me.schedule();
    }
};

/**
 * Returns the number of milliseconds since start was called.
 */
Qa.interaction.Player.prototype.getTimestamp = function () {
    var d = new Date();
    return d.getTime() - this.startTime;
};


/**
 * Starts this object. If this object is already started, nothing happens.
 */
Qa.interaction.Player.prototype.start = function () {
    var me = this;

    if (!me.active) {
        me.active = new Date();
        me.startTime = me.active.getTime();
        me.onStart();
        me.fireEvent('start', me);
    }
};

/**
 * Stops this object. If this object is not started, nothing happens.
 */
Qa.interaction.Player.prototype.stop = function (error, eventDescriptor) {
    var me = this;
    
    if (me.active) {
        me.active = null;
        me.onStop();
        if (error) {
            me.fireEvent('error', me, error, eventDescriptor);
        }
        me.fireEvent('stop', me);
    }
};

Qa.apply(Qa.interaction.Player.prototype, Qa.ObservableMixin);