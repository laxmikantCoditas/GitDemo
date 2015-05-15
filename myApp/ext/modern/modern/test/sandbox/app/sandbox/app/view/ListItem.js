Ext.define('MyApp.view.ListItem', {
    extend: 'Ext.dataview.component.DataItem',
    requires: ['Ext.Button'],
    xtype: 'mylistitem',
    
    config: {
        nameButton: {
            text: 'Delete',
            width: 100,
            ui: 'delete'
        },
        html: 'test'
    },
    
    applyNameButton: function(config) {
        return Ext.factory(config, Ext.Button, this.getNameButton());
    },

    updateNameButton: function(newNameButton, oldNameButton) {
        if (oldNameButton) {
            this.remove(oldNameButton);
        }

        if (newNameButton) {
            this.add(newNameButton);
        }
    }
});