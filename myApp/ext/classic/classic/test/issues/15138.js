Ext.require('Ext.FocusManager');

Ext.onReady(function() {
    Ext.FocusManager.enable();
    
    Ext.create('Ext.form.Panel', {
        title: 'RadioGroup Example',
        width: 300,
        height: 300,
        bodyPadding: 10,
        renderTo: Ext.getBody(),
        items:[
            {
                xtype:'textfield'
            },
            {
            xtype: 'radiogroup',
            fieldLabel: 'Two Columns',
            // Arrange radio buttons into two columns, distributed vertically
            columns: 2,
            vertical: true,
            items: [
                { boxLabel: 'Item 1', name: 'rb', inputValue: '1' },
                { boxLabel: 'Item 2', name: 'rb', inputValue: '2', checked: true},
                { boxLabel: 'Item 3', name: 'rb', inputValue: '3' },
                { boxLabel: 'Item 4', name: 'rb', inputValue: '4' },
                { boxLabel: 'Item 5', name: 'rb', inputValue: '5' },
                { boxLabel: 'Item 6', name: 'rb', inputValue: '6' }
            ]
        }]
    });
});
