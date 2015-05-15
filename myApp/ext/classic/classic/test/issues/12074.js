Ext.onReady(function () {
    Ext.regModel('State', {
        fields: [
            {type: 'string', name: 'abbr'},
            {type: 'string', name: 'name'}
        ]
    });

    var store = Ext.create('Ext.data.Store', {
        model: 'State',
        data : [
            {"abbr":"AL", "name":"Alabama"},
            {"abbr":"AK", "name":"Alaska"},
            {"abbr":"AZ", "name":"Arizona"}
        ]
    });

    var multiCombo = Ext.create('Ext.form.field.ComboBox', {
        fieldLabel: 'Select multiple states',
        renderTo: Ext.getBody(),
        multiSelect: true,
        displayField: 'name',
        width: 500,
        labelWidth: 130,
        store: store,
        queryMode: 'local',
        listeners: {
            blur: function(){
                console.log(this);
            }
        }
    });
});
