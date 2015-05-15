Ext.require('*');
Ext.onReady(function() {

    Ext.define('Product', {
        extend: 'Ext.data.Model',
        fields: [{
            name: 'id',
            type: 'int'
        }, {
            name: 'company'
        }, {
            name: 'price',
            type: 'float'
        }, {
            name: 'date',
            type: 'date'
        }, {
            name: 'visible',
            type: 'boolean'
        }, {
            name: 'size'
        }]
    });

    var store = Ext.create('Ext.data.JsonStore', {
        model: 'Product',
        proxy: {
            type: 'ajax',
            url: '9262.json',
            reader: {
                type: 'json',
                root: 'data',
                totalProperty:'totalCount'
            }
        },
        remoteSort: false,
        sorters: [{
            property: 'company',
            direction: 'ASC'
        }]
    });

    var grid = Ext.create('Ext.grid.Panel', {
        border: false,
        store: store,
        columns: {
            defaults: { sortable: true }, 
            items: [{
                dataIndex: 'id',
                header: 'Id',
                flex: 1
            }, {
                dataIndex: 'company',
                header: 'Company',
                flex: 1,
                id: 'company'
            }, {
                dataIndex: 'price',
                flex: 1,
                header: 'Price'
            }, {
                dataIndex: 'size',
                flex: 1,
                header: 'Size'
            }, {
                dataIndex: 'date',
                flex: 1,
                header: 'Date',
                renderer: Ext.util.Format.dateRenderer('m/d/Y')   
            }, {
                dataIndex: 'visible',
                flex: 1,
                header: 'Visible'
            }]
        },
        viewConfig: {    
            plugins: {
                ptype: 'gridviewdragdrop',
                dragGroup: 'DDdrop'
            },
            loadMask: false,
            emptyText: 'No Data Found', 
            stripeRows: true,
            preserveScrollOnRefresh: true
        },
        selModel:{ 
            preventFocus: true
        },
        listeners: {
            render: function() {
                Ext.TaskManager.start({
                    run: function(){ 
                        console.info( ' reload data!' );
                        store.load({ params: { start: 0, limit: 50 } });
                    },
                    interval: 2000
                });
            }
        },
        title: 'Grid Filters Example',
        height: 400,
        layout: 'fit'
    });

    var form = Ext.create('Ext.form.Panel', {
        layout: 'anchor',
        border: false,
        defaultType: 'textfield',
        bodyPadding: 5,
        width: 650,
        items: [{
            fieldLabel: 'Company Name',
            name: 'to',
            anchor:'100%' 
        },{
            fieldLabel: 'Notes',
            name: 'subject',
            anchor: '100%' 
        }, grid],
        renderTo: document.body
    });

//    setTimeout(function() {
//        Ext.getDoc().on('DOMFocusIn', function(){debugger;});
//    }, 10000);
});