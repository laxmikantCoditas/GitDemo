Ext.require([
    'Ext.data.*',
    'Ext.util.*',
    'Ext.view.View'
]);

Ext.onReady(function(){
    ImageModel = Ext.define('ImageModel', {
        extend: 'Ext.data.Model',
        fields: [
           {name: 'name'},
           {name: 'url'},
           {name: 'size', type: 'float'},
           {name:'lastmod', type:'date', dateFormat:'timestamp'}
        ]
    });

    var view,
        store = Ext.create('Ext.data.Store', {
        model: 'ImageModel',
        proxy: {
            type: 'ajax',
            url: '../../examples/view/get-images.php',
            reader: {
                type: 'json',
                root: 'images'
            }
        }
    });
    store.load();

    w = Ext.create('Ext.window.Window', {
        id: 'images-view',
        layout: 'fit',
        plain: true,
        bodyStyle: 'background-color:white',
        width: 535,
        height: 350,
        x: 100,
        y: 80,
        title: 'Mask & hide/show this DataView',
        tbar: [{
            text: 'View hidden when pressed',
            enableToggle: true,
            toggleHandler: function(b, pressed) {
                if (pressed) {
                    view.hide();
                } else {
                    view.show();
                }
            }
        }, {
            text: 'Simulates Store load while pressed',
            enableToggle: true,
            toggleHandler: function(b, pressed) {
                if (pressed) {
                    view.store.fireEvent('beforeload', view.store, {})
                } else {
                    view.store.fireEvent('load', view.store, [], true);
                }
            }
        }],
        items: view = Ext.create('Ext.view.View', {
            store: store,
            tpl: [
                '<tpl for=".">',
                    '<div class="thumb-wrap" id="{name}">',
                    '<div class="thumb"><img src="../../examples/view/{url}" title="{name}"></div>',
                    '<span class="x-editable">{shortName}</span></div>',
                '</tpl>',
                '<div class="x-clear"></div>'
            ],
            multiSelect: true,
            trackOver: true,
            overItemCls: 'x-item-over',
            itemSelector: 'div.thumb-wrap',
            emptyText: 'No images to display',
            prepareData: function(data) {
                Ext.apply(data, {
                    shortName: Ext.util.Format.ellipsis(data.name, 15),
                    sizeString: Ext.util.Format.fileSize(data.size),
                    dateString: Ext.util.Format.date(data.lastmod, "m/d/Y g:i a")
                });
                return data;
            }
        })
    });
    w.show();
});