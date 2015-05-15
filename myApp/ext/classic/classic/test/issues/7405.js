Ext.onReady(function() {

    var propsGrid = Ext.create('Ext.grid.property.Grid', {
        propertyNames: {
            tested: 'QA',
            borderWidth: 'Border Width'
        },
        source: {
            "(name)": "Properties Grid",
            "grouping": false,
            "autoFitColumns": true,
            "productionQuality": false,
            "created": Ext.Date.parse('10/15/2006', 'm/d/Y'),
            "tested": false,
            "version": 0.01,
            "borderWidth": 1
        }
    });

    var w = Ext.create('Ext.window.Window', {
        width: 500,
        height: 250,
        layout: 'fit',
        items: [
            propsGrid
        ]
    });

    w.show();
});
