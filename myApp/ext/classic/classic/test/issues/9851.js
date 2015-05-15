Ext.require('*');

Ext.onReady(function(){
    Ext.define('MyApp.view.user.List', {    
        extend : 'Ext.grid.Panel',
        alias  : 'widget.user-list',

        // store      : 'Users',

        initComponent : function () {
            var me = this;

            // autoLoad: true, ???

            Ext.apply(me, {
                columns  : me.buildColumns(),
                features : me.buildFeatures(),
                plugins  : me.buildPlugins()
            });

            // apply parent
            me.callParent(arguments);
        },

        buildColumns : function () {
            return [
                { header: 'Name',  dataIndex: 'name' },
                { header: 'Email', dataIndex: 'email', flex: 1 },
                { header: 'Phone', dataIndex: 'phone' }
            ]
        },

        buildFeatures : function () {
            return [
                { 
                    ftype: 'grouping',
                    startCollapsed : false // true
                }
            ]
        },

        buildPlugins : function () {
            return [
                { 
                    ptype: 'bufferedrenderer',
                    trailingBufferZone: 20,  // Keep 20 rows rendered in the table behind scroll
                    leadingBufferZone: 50   // Keep 50 rows rendered in the table ahead of scroll
                }
            ]
        }


    });

    // create store for testing
    var store = Ext.create('Ext.data.Store', {
        // remoteSort: true,
        fields:['name', 'email', 'phone', 'role'],

        //pageSize: 100,

        data:{'items':[
            { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244", "role":"Parent" },
            { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254", "role":"Parent" },
            { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224", "role":"Child" },
            { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234", "role":"Child" }
        ]},
        groupField: 'role',
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: 'items'
            }
        }
    });

    // create grid
    Ext.create('MyApp.view.user.List', {
        store    : store,
        height: 400,
        width: 600,
        frame: true,
        renderTo : Ext.getBody()
    });    

}); 