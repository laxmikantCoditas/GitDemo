Ext.define("themer.views.OptionField", {
    extend: 'Ext.form.field.Text',
    alias: 'widget.optionfield',

    model: null,
    
    initComponent: function() {
        var store = Ext.data.StoreManager.get('Variables'),
            index = store.find('variable', this.name);
        
        this.model = store.getAt(index);
        
        Ext.apply(this, {
            labelAlign: 'top',
            fieldLabel: this.model.get('variable'),
            value     : this.model.get('default') || '',
            width     : 220
        });
        
        themer.views.OptionField.superclass.initComponent.call(this);
    }
});