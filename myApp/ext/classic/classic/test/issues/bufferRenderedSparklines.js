Ext.require('*');
Ext.onReady(function() {


    Ext.define('Foo', {
        extend: 'Ext.data.Model',
        fields: [
            'test'
        ]
    });
    var data = [], field;
    
    for (var i = 0; i < 1000; i++) {
        var rec = [field = []];
        for (var j = 0; j < 10; j++) {
            field.push(Ext.Number.randomInt(0, 100));
        }
        data.push(rec);
    }
    
    var store = new Ext.data.Store({
        model: 'Foo',
        proxy: {
            type: 'memory',
            reader: 'array'
        },
        data: data
    });
    
    new Ext.grid.Panel({
        style: 'margin:20px',
        title: '1000 rows of sparklines',
        height: 400,
        width: 600,
        plugins: {
            ptype: 'bufferedrenderer'
        },
        store: store,
        columns: [{
            text: 'WIdget',
            xtype: 'widgetcolumn',
            dataIndex: 'test',
            widget: {
                xtype: 'sparkline.line'
            }
        }, {
            text: 'WIdget',
            xtype: 'widgetcolumn',
            dataIndex: 'test',
            width: 80,
            widget: {
                xtype: 'sparkline.bar'
            }
        }, {
            text: 'WIdget',
            xtype: 'widgetcolumn',
            dataIndex: 'test',
            widget: {
                xtype: 'sparkline.discrete'
            }
        }, {
            text: 'WIdget',
            xtype: 'widgetcolumn',
            dataIndex: 'test',
            widget: {
                xtype: 'sparkline.bullet'
            }
        }, {
            text: 'WIdget',
            xtype: 'widgetcolumn',
            dataIndex: 'test',
            width: 50,
            widget: {
                xtype: 'sparkline.pie'
            }
        }, {
            text: 'WIdget',
            xtype: 'widgetcolumn',
            dataIndex: 'test',
            widget: {
                xtype: 'sparkline.box'
            }
        }, {
            text: 'WIdget',
            xtype: 'widgetcolumn',
            dataIndex: 'test',
            widget: {
                xtype: 'sparkline.tristate'
            }
        }],
        renderTo: document.body
    });

});