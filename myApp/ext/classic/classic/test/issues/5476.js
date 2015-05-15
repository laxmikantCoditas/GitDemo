var testCase = {
    run: function(){
        Ext.define('foo.StretchPanel', {
            extend: 'Ext.container.Container',
            xtype: 'stretchpanel',
            shrinkWrap: 3,
            layout: {
                type: 'table',
                columns: 1
            },
            initComponent: function () {
                // apply columns to the layout config:
                if (this.columns) {
                    this.layout = Ext.apply(this.layout, {columns: this.columns})
                }
                this.callParent();
            }
        });

//       Ext.ComponentManager.create({
//            xtype: 'radiogroup',
//            fieldLabel: 'Two Columns',
//            renderTo: Ext.getBody(),
//            // uncomment this to see the desired behavior
//            /*
//             layout: {
//             type: 'table',
//             columns: 2
//             },
//             /**/
//            items: [
//                { boxLabel: 'Item 1', name: 'rb', inputValue: '1' },
//                { boxLabel: 'Item 2', name: 'rb', inputValue: '2', checked: true}
//            ]
//        });

        Ext.ComponentManager.create({
            xtype: 'stretchpanel',
            renderTo: Ext.getBody(),
            items: [
                {
                    xtype:'fieldset',
                    title: 'Fieldset 1',
                    collapsible: true,
                    checkboxToggle: true,
                    defaults: {anchor: 'none'},
                    items :[
                        {
                            xtype: 'radiogroup',
                            fieldLabel: 'Two Columns',
                            items: [
                                { boxLabel: 'Item 1', name: 'rb', inputValue: '1' },
                                { boxLabel: 'Item 2', name: 'rb', inputValue: '2', checked: true}
                            ]
                        }
                    ]
                }
            ]
        });

    }
};