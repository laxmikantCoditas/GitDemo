Ext.onReady(function () {
    Ext.create('Ext.data.Store', {
        storeId:'simpsonsStore',
        fields:['name', 'email', 'phone'],
        data:{'items':[
            { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
            { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
            { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
            { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
        ]},
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: 'items'
            }
        }
    });




    var grid = {
        title: 'Simpsons',
        shrinkWrap: true,
        shrinkWrapDock: true,
        xtype: 'grid',
        store: Ext.data.StoreManager.lookup('simpsonsStore'),
        columns: [
            { text: 'Name',  dataIndex: 'name', width:200 },
            { text: 'Name2',  dataIndex: 'name', width:200 },
            { text: 'Name3',  dataIndex: 'name', width:200 },
            { text: 'Email', dataIndex: 'email', flex: 1 },
            { text: 'Phone', dataIndex: 'phone' }
        ]
    };




    Ext.define('foo.tablecontainer', {
//            extend: 'Ext.container.Container',
        extend: 'Ext.panel.Panel',
        border: false,
        alias:'widget.tablecontainer',
        defaultType: 'tablecontainer',


        layout:{
            tableAttrs: {
                style: {width:'100%'}
            },
            type:'table'
        },


        initComponent: function() {
            this.callParent(arguments);
            if (this.columns) {
                this.layout.columns = this.columns;
            }
        }
    });


    var centerConfig = {
        items:[
            {
                columns: 1,
                items: [{
                            fieldLabel:'name',
                            width: 250,
                            value: 'Joe Smith',
                            xtype:'textfield'
                        },
                        {
                            fieldLabel:'email',
                            xtype:'textfield'
                        }]
            },
            grid
        ]
    };




    Ext.onReady(function () {


        Ext.create('Ext.container.Viewport', {
            title: 'Border Layout',
            layout: 'border',
            items: [{
                        title: 'North Region',
                        region: 'north',
                        tbar:{
                            items:[
                                {
                                    handler: function() {
                                        var center = Ext.ComponentManager.get('center');
                                        Ext.suspendLayouts();
                                        center.removeAll();
                                        center.add(centerConfig);
                                        Ext.resumeLayouts(true);
                                    },
                                    text:'Update Center'
                                }
                            ]
                        },
                        height: 100
                    },{
                        title: 'West Region',
                        region:'west',
                        width: 200,
                        split: true,
                        collapsible: true
                    },{
                        title: 'Center Region',
                        region: 'center',
                        id: 'center',
                        xtype:'tablecontainer',
                        autoScroll: true,
                        items: centerConfig
                    }]
        });
    });
});