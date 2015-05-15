var testCase = {
    run: function(){
        Ext.define('foo.StretchPanel', {
            extend: 'Ext.container.Container',
//  extend: 'Ext.panel.Panel',
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


        pHTML = {
            title:'Basics',
            html:'You better watch out You better not cry You better not pout I\'m telling you why Santa Claus is coming to town Santa Claus is coming to town Santa Claus is coming to town'
        };

        var pRadioPanel = {
            title: 'Simple Form with FieldSets',
            xtype:'stretchpanel',
            items: [
                {
                    xtype:'fieldset',
                    title: 'Fieldset 1',
                    collapsible: true,
                    checkboxToggle: true,
                    shrinkWrap: 3,
//                    defaults: {anchor: 'none'},
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
        };

        var pFormPanel = {
            title:'Details',
            xtype:'stretchpanel',
            columns:1,
            items:[
                {fieldLabel:'Date', xtype:'textfield'},
                {fieldLabel:'Location', xtype:'textfield'},
                {fieldLabel:'Description', xtype:'textfield'}
            ]
        };

        var p3Columns = {
            xtype:'stretchpanel',
            columns:3,
            items:[
                pHTML,
                pFormPanel,
                pRadioPanel
//                {
//                    title:'Financials',
//                    html:'hi'
//                }
            ]
        };

        var emptyStoreConfig = {
            fields:['name', 'email', 'phone'],
            proxy: {
                type: 'memory',
                reader: {
                    type: 'json',
                    root: 'items'
                }
            }
        };
        Ext.create('Ext.data.Store', Ext.apply(emptyStoreConfig, {storeId:'emptyStore'}));

        var storeConfig = Ext.apply(emptyStoreConfig, {
            data:{'items':[
                { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
                { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
                { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
                { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
            ]}
        });

        Ext.create('Ext.data.Store', Ext.apply(storeConfig, {storeId:'simpsonsStore'}));

        var pGridEmpty = {
            title: 'Contacts',
            xtype:'grid',
            forceFit:true,
            deferRowRender:false,
            store: Ext.data.StoreManager.lookup('emptyStore'),
            tbar:[
                {xtype:'button', text:'Create Doctor'},
                {xtype:'button', text:'Create Company'},
                {xtype:'button', text:'Create Attorney'}
            ],
            columns: [
                { header: 'Name',  dataIndex: 'name' },
                { header: 'Email', dataIndex: 'email', flex: 1 }
            ]
        };

        var pGrid = {
            title: 'Contacts',
            xtype:'grid',
            forceFit:true,
            deferRowRender:false,
            store: Ext.data.StoreManager.lookup('simpsonsStore'),
            columns: [
                { header: 'Name',  dataIndex: 'name' },
                { header: 'Email', dataIndex: 'email', flex: 1 },
                { header: 'Phone', dataIndex: 'phone' }
            ]
        };

        var pGridBig = {
            title: 'Contacts',
            xtype:'grid',
            forceFit:true,
            store: Ext.data.StoreManager.lookup('simpsonsStore'),
            columns: [
                { header: 'Name',  dataIndex: 'name' },
                { header: 'Email', dataIndex: 'email', flex: 1 },
                { header: 'Phone', dataIndex: 'phone' },
                { header: 'Phone 2', dataIndex: 'phone' },
                { header: 'Phone 3', dataIndex: 'phone' },
                { header: 'Phone 4', dataIndex: 'phone' }
            ]
        };

        var p2Columns = {
            xtype:'stretchpanel',
            columns:3,
            items: [ pGrid, pGridEmpty, pHTML ]
        };

        var centerConfig = {
            autoScroll:true,
            region:'center',
            xtype:'stretchpanel',
            columns:1,
            tabConfig: {title:'Tab 1'},
            items:[
                p3Columns
//                pGridBig,
//                p2Columns
            ]
        };

        var southConfig = {
            region:'south',
            height: 300,
            split:true,
            xtype: 'tabpanel',
            items: centerConfig
        };

        var borderLayout = {
            xtype:'form', // generates a HTML form that contains all input fields
            layout: 'border',
            items: [
                {region:'west', width:200},
                //southConfig,
                centerConfig
            ]
        };

        Ext.ComponentManager.create({
            xtype:'viewport',
            layout:'fit',
            items: borderLayout
        });
    }
};