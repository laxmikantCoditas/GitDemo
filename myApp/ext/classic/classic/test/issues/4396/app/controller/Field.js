   Ext.define('Test.controller.Field', {
    extend: 'Ext.app.Controller',    
    init: function() {
        this.control({
            'field[id="field"]': {
                change: function(field, newValue) {
                    Ext.getCmp('button').setDisabled(newValue == '');
                }
            }
        });
    }
});