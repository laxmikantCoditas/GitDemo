Qa.interaction.Event = { 
 /**
     * Injects a DOM event using the data in this object and (optionally) a new target.
     * This is a low-level technique and not likely to be used by application code. The
     * currently supported event types are:
     * <p><b>HTMLEvents</b></p>
     * <ul>
     * <li>load</li>
     * <li>unload</li>
     * <li>select</li>
     * <li>change</li>
     * <li>submit</li>
     * <li>reset</li>
     * <li>resize</li>
     * <li>scroll</li>
     * </ul>
     * <p><b>MouseEvents</b></p>
     * <ul>
     * <li>click</li>
     * <li>dblclick</li>
     * <li>mousedown</li>
     * <li>mouseup</li>
     * <li>mouseover</li>
     * <li>mousemove</li>
     * <li>mouseout</li>
     * </ul>
     * <p><b>UIEvents</b></p>
     * <ul>
     * <li>focusin</li>
     * <li>focusout</li>
     * <li>activate</li>
     * <li>focus</li>
     * <li>blur</li>
     * </ul>
     * @param {Ext.Element/HTMLElement} target (optional) If specified, the target for the event. This
     * is likely to be used when relaying a DOM event. If not specified, {@link #getTarget}
     * is used to determine the target.
     */
    inject: function () {
        var API,
            dispatchers = {}; // keyed by event type (e.g., 'mousedown')

        // Good reference: http://developer.yahoo.com/yui/docs/UserAction.js.html

        // IE9 has createEvent, but this code causes major problems with htmleditor (it
        // blocks all mouse events and maybe more). TODO

  
        
        if (navigator.appName != 'Microsoft Internet Explorer'  && document.createEvent) { // if (DOM compliant)
            API = {
                createHtmlEvent: function(doc, type, bubbles, cancelable) {
                    var event = doc.createEvent('HTMLEvents');

                    event.initEvent(type, bubbles, cancelable);
                    return event;
                },

                createMouseEvent: function(doc, type, bubbles, cancelable, detail,
                                            clientX, clientY, ctrlKey, altKey, shiftKey, metaKey,
                                            button, relatedTarget) {
                    var event = doc.createEvent('MouseEvents'),
                        view = doc.defaultView || window;

                    if (event.initMouseEvent) {
                        event.initMouseEvent(type, bubbles, cancelable, view, detail,
                                    clientX, clientY, clientX, clientY, ctrlKey, altKey,
                                    shiftKey, metaKey, button, relatedTarget);
                    }

                    return event;
                },

                fixTextInput: function (target, charCode) {
                    if (Qa.isOpera) {
                        var key = String.fromCharCode(charCode),
                        startPos, endPos;
                        
                        if (target.selectionStart || target.selectionStart == '0') {
                            startPos = target.selectionStart;
                            endPos = target.selectionEnd;
                            target.value = target.value.substring(0, startPos) + key + target.value.substring(endPos, target.value.length);
                        }
        
                    }
                },
                
                createKeyboardEvent: function(doc, type, bubbles,  cancelable,
                             ctrlKey, altKey, shiftKey, metaKey, keyCode, charCode, target) {
                                
                        var view = doc.defaultView || window,
                            event;
                            
                        // webkit special...
                        if (type == 'textInput') {
                            try {
                                event = document.createEvent('TextEvent');
                                event.initTextEvent ('textInput', bubbles, cancelable, view, String.fromCharCode(charCode));
                                return event;
                            } catch (e) {
                                this.fixTextInput(target, charCode);
                                return null;
                            }
                        } else {
                            try {         
                                event = doc.createEvent('KeyEvents');
                                event.initKeyEvent(type, bubbles, cancelable, view, ctrlKey,
                                                    altKey, shiftKey, metaKey, keyCode, charCode);
                                return event;
                            } catch (e) {}


                            try {
                                event = doc.createEvent("Events");
                                event.initEvent(type, bubbles, cancelable);
                                event.view = doc.defaultView || window;
                                event.altKey = altKey;
                                event.ctrlKey = ctrlKey;
                                event.shiftKey = shiftKey;
                                event.metaKey = metaKey;
                                event.keyCode = keyCode;
                                event.charCode = charCode;
                                return event;
                            } catch (e) {}
                        }
                    
                },
                
                createUIEvent: function(doc, type, bubbles, cancelable, detail) {
                    var event = doc.createEvent('UIEvents'),
                        view = doc.defaultView || window;

                    event.initUIEvent(type, bubbles, cancelable, view, detail);
                    return event;
                },

                fireEvent: function (target, type, event) {
                    if (event) {
                        target.dispatchEvent(event);
                    }
                },

                fixTarget: function (target) {
                    // Safari3 doesn't have window.dispatchEvent()
                    if (target == window && !target.dispatchEvent) {
                        return document;
                    }

                    return target;
                }
            };
        } else if (document.createEventObject) { // else if (IE)
            var crazyIEButtons = {0: 1, 1: 4, 2: 2};

            API = {
                createHtmlEvent: function (doc, type, bubbles, cancelable) {
                    var event = doc.createEventObject();
                    event.bubbles = bubbles;
                    event.cancelable = cancelable;
                    return event;
                },

                createMouseEvent: function (doc, type, bubbles, cancelable, detail,
                                            clientX, clientY, ctrlKey, altKey, shiftKey, metaKey,
                                            button, relatedTarget) {
                    var event = doc.createEventObject();
                    event.bubbles = bubbles;
                    event.cancelable = cancelable;
                    event.detail = detail;
                    event.screenX = clientX;
                    event.screenY = clientY;
                    event.clientX = clientX;
                    event.clientY = clientY;
                    event.ctrlKey = ctrlKey;
                    event.altKey = altKey;
                    event.shiftKey = shiftKey;
                    event.metaKey = metaKey;
                    event.button = crazyIEButtons[button] || button;
                    event.relatedTarget = relatedTarget; // cannot assign to/fromElement
                    return event;
                },
                
                fixTextInput: function(target, charCode) {
                    var range, key;
                                      // keypress doesn't fill input and textarea so we add the char manually !

                       range = document.selection.createRange();
                       key = String.fromCharCode(charCode);
                       if (key !== '' && range.parentElement() === target) {
                           range.text = key;
                       }

                },
                
                createKeyboardEvent: function(doc, type, bubbles,  cancelable,
                             ctrlKey, altKey, shiftKey, metaKey, keyCode, charCode, target) {
                    
                    if  (type == 'textInput') {
                        this.fixTextInput(target, charCode);
                        
                        return null;
                    }
                    
                    var event = doc.createEventObject();
     
                    event.bubbles = bubbles;
                    event.cancelable = cancelable;
                    event.view = doc.defaultView || window;
                    event.ctrlKey = ctrlKey;
                    event.altKey = altKey;
                    event.shiftKey = shiftKey;
                    event.metaKey = metaKey;
                    event.keyCode = charCode > 0 ? charCode: keyCode;

                    return event;       
                },
                
                createUIEvent: function (doc, type, bubbles, cancelable, detail) {
                    var event = doc.createEventObject();
                    event.bubbles = bubbles;
                    event.cancelable = cancelable;
                    return event;
                },

                fireEvent: function (target, type, event) {
                    if (event) {
                        target.fireEvent('on' + type, event);
                    }
                },

                fixTarget: function (target) {
                    if (target == document) {
                        // IE6,IE7 thinks window==document and doesn't have window.fireEvent()
                        // IE6,IE7 cannot properly call document.fireEvent()
                        return document.documentElement;
                    }

                    return target;
                }
            };
        }

        //----------------
        // HTMLEvents

        var htmlEvents = {
            load:   [false, false],
            unload: [false, false],
            select: [true, false],
            change: [true, false],
            submit: [true, true],
            reset:  [true, false],
            resize: [true, false],
            scroll: [true, false]
        }, name, value, bubbles, cancelable;
        
        for (name in htmlEvents) {
            if (htmlEvents.hasOwnProperty(name)) {
                value = htmlEvents[name];
                bubbles = value[0];
                cancelable = value[1];
                dispatchers[name] = function(targetEl, srcEvent) {
                     var e = API.createHtmlEvent(name, bubbles, cancelable);
                     API.fireEvent(targetEl, name, e);
                };
            }
        }
        

        //----------------
        // MouseEvents

        var mouseEvents = [
            'click', 
            'dblclick', 
            'mousedown', 
            'mouseup', 
            'mouseover', 
            'mousemove', 
            'mouseout'
        ], 
        length = mouseEvents.length,
        i = 0;
        
        function createMouseEventDispatcher (type) {
            var cancelable = (type != 'mousemove');
            return function (targetEl, srcEvent) {
               
                var xy = srcEvent.xy,
                    e = API.createMouseEvent(targetEl.ownerDocument, type, true, cancelable,
                                1, xy[0], xy[1], srcEvent.ctrlKey, srcEvent.altKey,
                                srcEvent.shiftKey, srcEvent.metaKey, srcEvent.button,
                                srcEvent.relatedTarget);
                API.fireEvent(targetEl, type, e);
            };
        }
        
        for (;i < length; i++) {
            name = mouseEvents[i];
            dispatchers[name] = createMouseEventDispatcher(name);
        }


        //----------------
        // KeyboardEvents
        var keyboardEvents = [
            'keyup', 
            'keydown', 
            'keypress', 
            'textInput'
        ];
        
        length = keyboardEvents.length,
        i = 0;
        
        function createKeyBoardEventDispatcher (type) {
            return function (targetEl, srcEvent) {
//                console.log('srcEvent', srcEvent);
                var e = API.createKeyboardEvent(targetEl.ownerDocument, type, true, true,
                                srcEvent.ctrlKey, srcEvent.altKey,
                                srcEvent.shiftKey, srcEvent.metaKey, srcEvent.keyCode, srcEvent.charCode, targetEl);
                
                API.fireEvent(targetEl, type, e);
            };
        }
        
                
        for (;i < length; i++) {
            name = keyboardEvents[i];
            dispatchers[name] = createKeyBoardEventDispatcher(name);
        }

        //----------------
        // UIEvents
        var UIEvents = {
                focusin:  [true, false],
                focusout: [true, false],
                activate: [true, true],
                focus:    [false, false],
                blur:     [false, false]
        };
        
        
        for (name in UIEvents) {
            if (UIEvents.hasOwnProperty(name)) {
                value = UIEvents[name];
                bubbles = value[0];
                cancelable = value[1];
                dispatchers[name] = function (targetEl, srcEvent) {
                        var e = API.createUIEvent(targetEl.ownerDocument, name, bubbles, cancelable, 1);
                        API.fireEvent(targetEl, name, e);
                };
            }
        }
 
        //---------
        if (!API) {
            throw new Error("Browser not supported");
        }

        function cannotInject () {
//            throw new Error("Unable to inject event");
        }

        return function (target, eventConfig) {
            var me = this,
                dispatcher = dispatchers[eventConfig.type] || cannotInject,
                t = target ? (target.dom || target) : me.getTarget();

            t = API.fixTarget(t);
            dispatcher(t, eventConfig);
        };
    }() // call to produce method
};
