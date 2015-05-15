Ext.define('LayoutEvent', {
    extend: 'Ext.data.Model',
    fields: [
        'elementId', 'componentId', 'width', 'height', 'x', 'y', 'startTime', 'totalTime', 'type', 'mask',
        {
            name: 'component',
            convert: function(value, me) {
                if (value.id) {
                    me.set('componentId', value.id);
                }
                return value;
            }
        },
        {
            name: 'el',
            convert: function(value, me) {
                if (value.id) {
                    me.set('elementId', value.id);
                }
                
                return value;
            }
        }
    ],
    
    /**
     * Some events deal with Components, some with Elements. This always returns the Element underlying any event
     * @return {Ext.core.Element} The Element associated with this event
     */
    getEl: function() {
        return this.get('el') || this.get('component').getEl();
    }
});