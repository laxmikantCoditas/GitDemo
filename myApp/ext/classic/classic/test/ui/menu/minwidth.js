Ext.require([
    'widget.menu',
    'widget.textfield'
]);


Ext.onReady(function() {
    var btnClick = function(btn) {
        alert('Clicked ' + btn.text);
    };
    
    var toolbar = Ext.createWidget('toolbar', {
        renderTo: Ext.getBody(),
        
        items: [
            {
                text: 'Users Menu',
                iconCls: 'group',
                itemId: 'testBtn',
                menu: {
                    minWidth: 800,
                    title: 'Test Menu',
                    headerPosition: 'left',
                    items: [
                        {
                            text: 'Add User',
                            iconCls: 'add',
                            handler: btnClick,
                            disabled: true
                        },
                        {
                            text: 'Edit User',
                            iconCls: 'edit',
                            handler: btnClick
                        },
                        {
                            text: 'Hidden Feature',
                            hidden: true
                        },
                        '-',
                        {
                            text: 'Delete User',
                            iconCls: 'delete',
                            disabled: true,
                            handler: btnClick
                        }
                    ]
                }
            }
        ]
    });
});
