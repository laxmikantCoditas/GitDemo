var testCase = {
    run: function(){

        Ext.create('Ext.form.Panel', {
            renderTo: Ext.getBody(),
            hight: 500,
            width: 500,
            frame: true,
            items: [
                {
                    xtype: 'checkboxgroup',
                    fieldLabel: 'Cbox group 1',
                    name: 'checkboxGroup1',
                    id: 'checkboxGroupCmp1',
                    columns: 4,
                    vertical: false, //or true, occurs in both cases.
                    items: [
                        {
                            boxLabel: 'box1',
                            name: 'box1',
                            inputValue: '1'
                        },
                        {
                            boxLabel: 'box2',
                            name: 'box2',
                            inputValue: '2'
                        }
                        ,{
                            boxLabel: 'box3',
                            name: 'box3',
                            inputValue: '3',
                            hidden: true
                        }
                        ,{
                            boxLabel: 'box4',
                            name: 'box4',
                            inputValue: '4'
                        }
                    ]
                }
            ]
        });

        Ext.getCmp('checkboxGroupCmp1').add({
            boxLabel: 'box5',
            name: 'box5',
            inputValue: '5'
        });

    }
};