Qa.ObservableMixin = {};

/**
 * Appends an event handler to this Object.  For example:
 *
 *     myPlayer.on("start", onStart, this);
 */

Qa.ObservableMixin.on = function(eventName, fn, scope) {
    var me = this;
    
    me.listeners = me.listeners || {};
    if (typeof eventName != 'string') {
        fn = eventName.fn;
        scope = eventName.scope;
        eventName = eventName.name;
    }    
    me.listeners[eventName] =  me.listeners[eventName] || [];
    
    me.listeners[eventName].push({
        fn: fn,
        scope: scope || me
    });
    
};

/**
 * Fires the specified event with the passed parameters (minus the event name, plus the `options` object passed
 * to on.
 *
 * @param {String} eventName The name of the event to fire.
 * @param {Object...} args Variable number of parameters are passed to handlers.
 * @return {Boolean} returns false if any of the handlers return false otherwise it returns true.
 */

Qa.ObservableMixin.fireEvent = function(name) {
   this.listeners = this.listeners || {};
   var me = this,
       args = Array.prototype.slice.call(arguments, 1),
       listeners, i, length, ret, listener;
       
   me.listeners = me.listeners || {};
   listeners = me.listeners[name];
   
   if (listeners) {
       length = listeners.length;
       i = 0;

       for (; i < length; i++) {
           listener = listeners[i];
           ret = listener.fn.apply(listener.scope, args);

           if (ret == false) {
               return false;
           }
       }
   }     
   return true;
};

Qa.apply(Qa, Qa.ObservableMixin);