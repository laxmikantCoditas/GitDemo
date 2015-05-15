/* Some Qa singleton mocking */

Qa = {
    errorsCount: 0,
    
    generateExtComponentQuerySelector: function(selector) {
        return function() {
            try {
                return Ext.ComponentQuery.query(selector)[0]; 
            } catch(e) {
                return null;
            }
        };
    },
       
    stepTime: 25,
    
    setup: function(config) {
        var refs,
            length,
            i,
            ref;
           
        if (config.refs) {
            refs = config.refs;
            length = refs.length;
            for (i = 0; i < length; i++) {
                ref = refs[i];
                Qa['get' + ref.ref.charAt(0).toUpperCase() + ref.ref.slice(1)] = Qa.generateExtComponentQuerySelector(ref.selector);
            }
            delete config.refs;
        }
        
        config.stepTime = config.stepTime || Qa.stepTime;
        
        Qa.apply(Qa, config);
    },
    
    eventQueue: [],
        
    interaction: {},
    
    pendingMasks: 0,
        
    callbacks: [],
    
    perf: {},
    
    // --------------------- onReady ---------------------

    /**
     * Check if we have bound our global onReady listener
     * @private
     */
    hasBoundOnReady: false,

    /**
     * Check if fireDocReady has been called
     * @private
     */
    hasFiredReady: false,

    /**
     * Timer for the document ready event in old IE versions
     * @private
     */
    readyTimeout: null,

    /**
     * Checks if we have bound an onreadystatechange event
     * @private
     */
    hasOnReadyStateChange: false,

    /**
     * Holds references to any onReady functions
     * @private
     */
    isReady: false,

    /**
     * Check the ready state for old IE versions
     * @private
     * @return {Boolean} True if the document is ready
     */
    checkReadyState: function(){
        var readyState = document.readyState;
            
        if (Qa.hasFiredReady) {
            return;
        }

        /* See here for reference: http://javascript.nwbox.com/IEContentLoaded/
        * licensed courtesy of http://developer.yahoo.com/yui/license.html
        * Notes:
           'doScroll' will NOT work in a IFRAME/FRAMESET.
           The method succeeds but, a DOM query done immediately after -- FAILS.
        */
        if(navigator.appName == 'Microsoft Internet Explorer' && window == top){
            try{
                document.documentElement.doScroll('left');
                readyState = 'complete';
            } catch(e){
                Qa.readyTimeout = setTimeout(Qa.checkReadyState, 2);
                return false;
            }
        }
        if (readyState == 'complete') {
            Qa.fireDocReady();
            return true;
        }
        return false;
    },

    /**
     * Binds the appropriate browser event for checking if the DOM has loaded.
     * @private
     */
    bindReadyEvent: function(){
        if (Qa.hasBoundOnReady) {
            return;
        }

        if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', Qa.fireDocReady, false);
            // fallback, load will ~always~ fire
//            window.addEventListener('load', me.fireDocReady, false);
        } else {
            // check if the document is ready, this will also kick off the scroll checking timer
            if (!Qa.checkReadyState()) {
                document.attachEvent('onreadystatechange', Qa.checkReadyState);
                Qa.hasOnReadyStateChange = true;
            }
            // fallback, onload will ~always~ fire
//            window.attachEvent('onload', me.fireDocReady, false);
        }
        Qa.hasBoundOnReady = true;
    },

    /**
     * We know the document is loaded, so trigger any onReady events.
     * @private
     */
    fireDocReady: function(){
        // only unbind these events once
        if (!Qa.isReady) {
            Qa.isReady = true;

            if (document.addEventListener) {
                document.removeEventListener('DOMContentLoaded', Qa.fireDocReady, false);

            } else {
                if (Qa.readyTimeout !== null) {
                    clearTimeout(Qa.readyTimeout);
                }
                if (Qa.hasOnReadyStateChange) {
                    document.detachEvent('onreadystatechange', Qa.checkReadyState);
                }
            }
           
            Qa.afterReady();
            
            Qa.hasFiredReady = true;
        }
    },

    /**
     * Adds a listener to be notified when the document is ready (before onload and before images are loaded). Can be
     * accessed shorthanded as Ext.onReady().
     * @param {Function} fn The method the event invokes.
     * @param {Object} scope (optional) The scope (<code>this</code> reference) in which the handler function executes. Defaults to the browser window.
     * @param {Boolean} options (optional) Options object as passed to {@link Ext.Element#addListener}.
     */
    onReady: function(fn){
        if (Qa.isReady) {
            fn();
        } else {
            Qa.callbacks.push(fn);
            Qa.bindReadyEvent();
        }
    },
    
    afterReady: function() {
        var length = Qa.callbacks.length,
        i = 0;
        
        for(;i < length; i++) {
            Qa.callbacks[i]();
        }
        Qa.callbacks = [];
    },
    
    addMagicPixel: function() {
        var magicPixel;
        // Create magic pixel for screenshot calibration
        magicPixel = document.createElement('div');
        magicPixel.style.width = magicPixel.style.height = '1px';
        magicPixel.style.position = 'absolute';
        magicPixel.style.zIndex = 99999;
        magicPixel.style.top = 0;
        magicPixel.style.padding = 0;
        magicPixel.style.margin = 0;
        magicPixel.style.left = 0;
        magicPixel.style.background = '#f12345';
        document.body.appendChild(magicPixel);
        this.magicPixel = magicPixel;
    },
    
    removeMagicPixel: function() {
        // Remove magicPixel
        if (this.magicPixel) {
            document.body.removeChild(this.magicPixel);
        }
    },
    
    calculateViewportSize: function() {
        var docEl = Qa.isStrict ? document.documentElement : document.body,
            height,
            overflow;
               
        Qa.docEl = docEl;
    
        Qa.lockResize = true;
        overflow = docEl.style.overflow;
        height = docEl.style.height;
        docEl.style.overflow = 'hidden';
        docEl.style.height = '100%';
        Qa.viewportWidth = docEl.offsetWidth;
        Qa.viewportHeight = docEl.offsetHeight;
        docEl.style.overflow = overflow;
        docEl.style.height = height;
        Qa.lockResize = false;
    },
    
    borders: {l: 'border-left-width', r: 'border-right-width', t: 'border-top-width', b: 'border-bottom-width'},
    
    paddings: {l: 'padding-left', r: 'padding-right', t: 'padding-top', b: 'padding-bottom'},
    
    margins: {l: 'margin-left', r: 'margin-right', t: 'margin-top', b: 'margin-bottom'},
    
    getComputedStyles: function() {
        var view = document.defaultView;
        if (view && view.getComputedStyle) {
            this.computedStyles = view.getComputedStyle(this.docEl, '');
        } else {
            this.computedStyles = this.docEl.currentStyle;
        }
    },
    
    getSizeOf: function(prop) {
        if (!this.computedStyle) {
            this.getComputedStyles();
        }
        return parseInt(this.computedStyles[prop]) || 0;
    },
    
    start: function(config) {
        Qa.started = true;
        Qa.onReady(function() {
            Qa.calculateViewportSize();
        });
        Qa.callback = config ? config.callback: false;
        
        Qa.onLoadBinded = true;
        if (document.addEventListener) {
            window.addEventListener('load', Qa.startOnNextTick, false);
        } else {
            window.attachEvent('onload', Qa.startOnNextTick, false);
        }
    },
    
    startOnNextTick: function() {       
        setTimeout(Qa.doStart, 10);
    },
    
    doStart: function() {
        if (Qa.onLoadBinded) {
            if (document.addEventListener) {
                window.removeEventListener('load', Qa.startOnNextTick, false);
            } else {
                window.detachEvent('onload', Qa.startOnNextTick);
            }           
        }
        // Start polling
        Qa.Connection.poll();
        
        return true;
    },
    
    getPageInfos: function() {
        var viewportWidth, viewportHeight, 
            hScrollable, vScrollable,
            visibleWidth,visibleHeight,
            fullWidth, fullHeight,
            docEl;
           
        docEl = Qa.docEl;

        viewportWidth = Qa.viewportWidth;
        viewportHeight = Qa.viewportHeight;

        fullWidth = docEl.scrollWidth;
        fullHeight = docEl.scrollHeight;

        visibleWidth = docEl.clientWidth;
        visibleHeight = docEl.clientHeight;

        hScrollable = false;
        vScrollable = false;

        // Adjust the visible width calculation if needed
        if (viewportWidth > visibleWidth) {
            visibleWidth += Qa.getSizeOf(Qa.borders.l) + Qa.getSizeOf(Qa.borders.r);
        }

        // Adjust the visible height calculation if needed
        if (viewportHeight > visibleHeight) {
            visibleHeight += Qa.getSizeOf(Qa.borders.t) + Qa.getSizeOf(Qa.borders.b);
        }

        // there is a vertical scrollbar and some content to scroll
        vScrollable = fullHeight > visibleHeight &&
                      viewportWidth > visibleWidth;

        // there is a horizontal scrollbar and some content to scroll
        hScrollable = fullWidth > visibleWidth &&
                      viewportHeight > visibleHeight;
                  
            
        var infos = {
            title: document.title,
            hScroll: hScrollable,
            vScroll: vScrollable,
            screenWidth: window.screen.width,
            screenHeight: window.screen.height,
            strict: Qa.isStrict,
            visible: {
                width: visibleWidth,
                height: visibleHeight
            },
            full: {
                width: fullWidth,
                height: fullHeight
            }
        };
      
        
        return infos;
    },
        
    snap: function(config) {  
        var keyFrame, 
            snapEvent;
            
        if (Qa.started) {
            keyFrame = config.keyFrame;
            if (keyFrame) {
                keyFrame.defer();
            }
            
            snapEvent = {
                event: 'snap',
                express: true,
                scroll: config.scroll || false,
                area: config.area,
                callback: function() {
                    Qa.fireEvent('snap', config);
                    if (keyFrame) {
                        keyFrame.finish();
                    }
                    if (config.callback) {
                        config.callback();
                    }
                }
            };
            
            if (config.eventDescriptor) {
                snapEvent.eventDescriptor = config.eventDescriptor;
            }
            Qa.Connection.emit(snapEvent);
        } else {
            Qa.fireEvent('snap', config);
        }
        
    },
    
    stop: function() {
        Qa.Connection.disconnect();
    },
    
    sendTestSuite: function(json, suite) {
        if (Qa.started) {
            suite.deferComplete();
            Qa.Connection.emit({
                event: 'testsuite',
                suite: json,
                callback: function(){
                    Qa.fireEvent('sendtestsuite', json);
                    suite.finish();
                }
            });
        } else {
            Qa.fireEvent('sendtestsuite', json);
        }
    },
    
    sendBenchmarks: function() {
        Qa.Connection.emit({
            event: 'benchmark',
            benchmark: Qa.perf.Monitor.getData(),
            callback: function(){
                Qa.stop();
            }
        });
    },
    
    sendJsError: function(js_error) {
        if (Qa.Connection) {
            Qa.Connection.emit({
                event: 'js_error',
                js_error: js_error,
                express: true,
                callback: function(){
                    Qa.fireEvent('js_error', js_error);
                }
            });
        } else {
            Qa.fireEvent('js_error', js_error);
        }
    },
    
    open: function(url) {
        Qa.Connection.stop(function() {
            //specific IE9 hack to avoid CPU at 100% when loading some page node doc found on internet
            if (Qa.isIE9) {
              var win = window.open('about:blank', '_blank', 'left=0,top=0,scrollbars=1,width=1200,height=800');  
              win.location = url;
            } else {
                window.open(url, '_blank', 'left=0,top=0,scrollbars=1,width=1200,height=800');
            }
        });
    }

};

Qa.isStrict = document.compatMode == "CSS1Compat";

Qa.isQuirk = !Qa.isStrict;
    
Qa.isWebKit = /WebKit/.test(navigator.userAgent);

Qa.isOpera = /Opera/.test(navigator.userAgent);

Qa.isIon =  /Sencha Ion/.test(navigator.userAgent);

Qa.isIE9 = /MSIE 9\.0/.test(navigator.userAgent);

Qa.K = {
    BACKSPACE: 8,
    TAB: 9,
    NUM_CENTER: 12,
    ENTER: 13,
    RETURN: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAUSE: 19,
    CAPS_LOCK: 20,
    ESC: 27,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    PRINT_SCREEN: 44,
    INSERT: 45,
    DELETE: 46,
    CONTEXT_MENU: 93,
    NUM_ZERO: 96,
    NUM_ONE: 97,
    NUM_TWO: 98,
    NUM_THREE: 99,
    NUM_FOUR: 100,
    NUM_FIVE: 101,
    NUM_SIX: 102,
    NUM_SEVEN: 103,
    NUM_EIGHT: 104,
    NUM_NINE: 105,
    NUM_MULTIPLY: 106,
    NUM_PLUS: 107,
    NUM_MINUS: 109,
    NUM_PERIOD: 110,
    NUM_DIVISION: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123
};

/**
 * Extracts error stack trace.
 * @param {Error} error The javascript error object.
 * @return {Array} An array which contains all stack trace files and lineNumbers.
 */



Qa.apply = function(object1, object2) {
    var property;
    
    for (property in object2) {
        if (object2.hasOwnProperty(property)) {
            object1[property] = object2[property];
        }
    }          
    
    return object1;
};

// TODO: split the beast
Qa.generateEventsQueue = function() {
    var eventQueue = Array.prototype.slice.call(arguments, 0),
        length = eventQueue.length,
        i = 0,
        event,
        queue = [], 
        eventConfig,
        events,
        eventsLength,
        keysArrayLength,
        j, k,
        charCode,
        keys,
        keysLength,
        keyframe,
        keyCode, key, keysArray, type, 
        from, to, step, x, y, incX, incY, after, before, headIdx, by, ts;
        
    for(; i < length; i++) {
        event = eventQueue[i];
        
        if (event.inject) {
            Qa.apply(event, event.inject);
            delete event.inject;
        }
        
        event.description = event.description || "Please add a quick action description";
        
        event.button = event.button || 0;

        headIdx = queue.length;
        

        before = event.before || function() {};
        
        if (event.before) {
            delete event.before;
        }
        
        after = event.after || function() {};;
        
        if (event.after) {
            delete event.after;
        }
        
        if (event.keyframe) {
            keyframe = true;
            delete event.keyframe;
        }
        
        if (!event.type) {
           event.run = Qa.encapsulateFn(event.run || function(){});
        }
        
        if (event.type == 'mduclick') {
            // Left button click
            events = ['mousedown', 'mouseup', 'click'];
            eventsLength = events.length;
            for(j = 0; j < eventsLength; j++) {
                eventConfig = {};
                Qa.apply(eventConfig, event);
                eventConfig.type = events[j];
                queue.push(eventConfig);
            }
            
        } else if (event.type == 'mdrag') {
            // Simple Dragging
            if (event.by) {
                by = event.by;
                
                delete event.by;

                eventConfig = {};
                Qa.apply(eventConfig, event);
                eventConfig.type = 'mousemove';
                queue.push(eventConfig);
                
                eventConfig = {};
                Qa.apply(eventConfig, event);
                eventConfig.type = 'mouseover';
                queue.push(eventConfig);
                
                eventConfig = {};
                Qa.apply(eventConfig, event);
                eventConfig.type = 'mousedown';
                queue.push(eventConfig);
                
                step = event.step || 2;
                
                incX = by[0]/step;
                incY = by[1]/step;
                x = 0;
                y = 0;
                j = 1;
                for(; j <= step; j++) { 
                    x += incX;
                    y += incY;
                    eventConfig = {};
                    Qa.apply(eventConfig, event);
                    eventConfig.by = j == step ? by : [x, y]; // ensure that the last offset is exact
                    eventConfig.type = 'mousemove';
                    queue.push(eventConfig);
                }
                
                eventConfig = {};
                Qa.apply(eventConfig, event);
                Qa.apply(eventConfig, to);
                eventConfig.by = by;
                eventConfig.type = 'mouseup';
                queue.push(eventConfig);
                
            // Drag and Drop    
            } else {
                from = event.from;
                to = event.to;
                
                eventConfig = {};
                Qa.apply(eventConfig, event);
                Qa.apply(eventConfig, from);
                delete eventConfig.from;
                delete eventConfig.to;
                eventConfig.type = 'mousemove';
                queue.push(eventConfig);
                
                eventConfig = {};
                Qa.apply(eventConfig, event);
                Qa.apply(eventConfig, from);
                delete eventConfig.from;
                delete eventConfig.to;
                eventConfig.type = 'mouseover';
                queue.push(eventConfig);
                               
                eventConfig = {};
                Qa.apply(eventConfig, event);
                Qa.apply(eventConfig, from);
                delete eventConfig.from;
                delete eventConfig.to;
                eventConfig.type = 'mousedown';
                queue.push(eventConfig);

                eventConfig = {};
                Qa.apply(eventConfig, event);
                Qa.apply(eventConfig, from);
                eventConfig.xy = [1,1];
                eventConfig.type = 'mousemove';
                delete eventConfig.from;
                delete eventConfig.to;
                queue.push(eventConfig);


                eventConfig = {};
                Qa.apply(eventConfig, event);
                Qa.apply(eventConfig, to);
                delete eventConfig.from;
                delete eventConfig.to; 
                eventConfig.type = 'mousemove';
                queue.push(eventConfig);

                eventConfig = {};
                Qa.apply(eventConfig, event);
                Qa.apply(eventConfig, to);
                delete eventConfig.from;
                delete eventConfig.to; 
                eventConfig.type = 'mousemove';
                queue.push(eventConfig);

                eventConfig = {};
                Qa.apply(eventConfig, event);
                Qa.apply(eventConfig, to);
                delete eventConfig.from;
                delete eventConfig.to; 
                eventConfig.type = 'mouseup';
                queue.push(eventConfig);
            }
            
        } else if (event.type == 'kdpup') {
            // keyboard input typing
            events = ['keydown', 'keypress', 'textInput', 'keyup'];
                        
            eventsLength = events.length;
           
            if (typeof event.keys == 'string' || !isNaN(event.keys)) {
                keys = [event.keys];
            } else {
                keys = event.keys;
            }
         
            keysArray = [];
            
            keysLength = keys.length;
            for (k = 0; k < keysLength; k++) {
                key = keys[k];
                if (isNaN(key)) {
                    keysArray = keysArray.concat(key.split(''));
                } else {
                    keysArray.push(key);
                }
            } 
        
            keysArrayLength = keysArray.length;

            queue.push({
                type: 'focus',
                cmpQuery: event.cmpQuery,
                domQuery: event.domQuery
            });

            for (k = 0; k < keysArrayLength; k++) {
                key = keysArray[k];
                
                if (isNaN(key)) {
                    charCode = key.charCodeAt(0);
                    keyCode = key.toUpperCase().charCodeAt(0);
                } else {
                    keyCode = key;
                    charCode = 0;
                }
                for (j = 0; j < eventsLength; j++) {
                    type = events[j];
                    if (type == 'textInput' && !isNaN(key)) {
                        continue;
                    }
                   
                    eventConfig = {};
                    Qa.apply(eventConfig, event);
                    delete eventConfig.button;
                    eventConfig.charCode = charCode;
                    eventConfig.keyCode = keyCode;
                    eventConfig.type = type;
            
                    queue.push(eventConfig);
                }

            } 
        } else {
           queue.push(event); 
        }
        

    
       Qa.encapsulateFn(after, 'after', queue, queue.length - 1);
       Qa.encapsulateFn(before, 'before', queue, headIdx);
       
       if (keyframe) {
           queue[queue.length - 1].keyframe = true;
           keyframe = false;
       }
        queue[queue.length - 1].ts = queue[queue.length - 1].ts || 250;
    }
    length = queue.length;
    ts = 0;
    for (i = 0; i < length; i++) {
        ts += Qa.stepTime;
        
        if (queue[i].ts) {
            ts += queue[i].ts;
        }
        queue[i].ts = ts;
        
    }

    Qa.eventQueue = queue;
};

Qa.encapsulateFn = function(fn, where, queue, idx) {
    var prefix = '',
        encapsulatedFn;
        
    if (where) {
        prefix = where.charAt(0).toUpperCase() + where.slice(1);
        
    } 
    prefix += ' ';
    
    encapsulatedFn = function(player, currentFrame, eventFrame) {
        var description = '';
        
        if (currentFrame && currentFrame.description) {
            description = currentFrame.description;
        }
        
        if (eventFrame && eventFrame.description) {
            description = eventFrame.description;
        }
        
        description = prefix + description;
            try {
                fn(eventFrame);
            } catch(e) {
                player.stop(e, eventFrame);
            }
    };
    
    if (where) {
        queue[idx][where] = encapsulatedFn;
    }
    
    return encapsulatedFn;
};        

(function() {
    // Simple Ext.LoadMask override to track Mask shown and hidden
    try {
        var showMask = Ext.LoadMask.prototype.show,
            hideMask = Ext.LoadMask.prototype.hide;
            
        Ext.LoadMask.prototype.show = function() {
            Qa.pendingMasks++;
            showMask.apply(this, arguments);
        };
        
        Ext.LoadMask.prototype.hide = function() {
            Qa.pendingMasks--;
            hideMask.apply(this, arguments);
        };
    } catch(e) {}
})();
