Ext.require('Ext.chart.*');
Ext.require(['Ext.Window', 'Ext.layout.container.Fit', 'Ext.fx.target.Sprite']);

Ext.onReady(function() { 
    var myData = 
            [ 
                ['Users_1','4'], 
                ['Users_2','1'], 
                ['Users_3','3'] 
            ]; 

    var store = new Ext.data.ArrayStore({ 
        fields: [ 
            {name: 'title'}, 
            {name: 'value'} 
        ], 
        data: myData 
    }); 

    var panel_usr = Ext.create('widget.panel', { 
        width: 580, 
        height: 300, 
        renderTo: Ext.getBody(), 
        title: 'Users', 
        layout: 'fit', 
        items: 
        { 
            id: 'chartCmp', 
            xtype: 'chart', 
            animate: true, 
            shadow: true, 
            store: store, 
            axes: [{ 
                    type: 'Numeric', 
                    position: 'left', 
                    fields: ['value'], 
                    maximum: 10, 
                    minimum: 0, 
                    majorTickSteps: 3, 
                    minorTickSteps: 1, 
                    title: 'Numeric', 
                    grid: true, 
                    label: { 
                        renderer: Ext.util.Format.numberRenderer('0.0') 
                    } 
                }, 
                { 
                    type: 'Category', 
                    position: 'bottom', 
                    fields: ['title'] 
                } 
            ], 
            series: 
                    [ 
                        { 
                            type: 'column', 
                            axis: 'left', 
                            label: 
                            { 
                                display: 'insideEnd', 
                                orientation: 'vertical', 
                                'text-anchor': 'middle', 
                                field: 'value' 
                            }, 
                            xField: 'title', 
                            yField: 'value' 
                        } 
                    ] 
        } 
    }); 
});  