Ext.onReady(function() {
    Ext.create('Ext.form.Panel', {
        title: 'Checkbox Group',
        width: 900,
        height: 300,
        bodyPadding: 10,
        renderTo: Ext.getBody(),
        items:[{
            xtype: 'checkboxgroup',
            id: 'cbg',
            fieldLabel: 'Two Columns',
            // Arrange checkboxes into two columns, distributed vertically
//            columns: 1,
//            columns: 2,
            columns: 'auto',
            vertical: true,
            items: [
                  { id: 'cb1', boxLabel: 'cb1', name: 'rb', inputValue: '1' }
                , { id: 'cb2', boxLabel: 'cb2', name: 'rb', inputValue: '2', checked: true }
                , { id: 'cb3', boxLabel: 'cb3', name: 'rb', inputValue: '3' }
                , { id: 'cb4', boxLabel: 'cb4', name: 'rb', inputValue: '4' }
                , { id: 'cb5', boxLabel: 'cb5', name: 'rb', inputValue: '5' }
                , { id: 'cb6', boxLabel: 'cb6', name: 'rb', inputValue: '6' }
            ]
        }]
    });
    
    var lastId = 0;
    
    Ext.create('Ext.form.field.Text', {
        id: 'checkboxId',
        fieldLabel: 'Checkbox ID',
        renderTo: Ext.getBody()
    });

    Ext.create('Ext.Button', {
        text: 'Add checkbox',
        renderTo: Ext.getBody(),
        handler: function() {
            var explicitId = !Ext.isEmpty(Ext.getCmp('checkboxId').getValue()) ? Ext.getCmp('checkboxId').getValue() : undefined;
            var checkboxId = 'cb-' + (explicitId || ++lastId);
            var checkbox = Ext.create('Ext.form.Checkbox', {
                id: checkboxId,
                boxLabel: checkboxId
            });
            Ext.getCmp('cbg').add(checkbox);
        }
    });
    
    Ext.create('Ext.Button', {
        text: 'Remove checkbox',
        renderTo: Ext.getBody(),
        handler: function() {
            var explicitId = !Ext.isEmpty(Ext.getCmp('checkboxId').getValue()) ? Ext.getCmp('checkboxId').getValue() : undefined;
            var checkboxId = 'cb-' + (explicitId || lastId);
            var checkbox = Ext.getCmp(checkboxId);
            Ext.getCmp('cbg').remove(checkbox);
        }
    });
    
//    var group = Ext.getCmp('cbg');
//    var checkbox = new Ext.form.Checkbox({ boxLabel: 'Item 7' });
//    group.add(checkbox);
});