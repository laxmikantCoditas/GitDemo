Ext.onReady(function() {

    function getSeries(smooth) {
        return [
            {
                type    : 'line',
                axis    : 'left',
                smooth  : smooth, //causes an error when true and no category axis defined
                xField  : 'name',
                yField  : 'data1'
            }
        ];
    }

    function getAxes(showCategoryAxis) {
        var axes = [];

        axes.push({
            type    : 'Numeric',
            minimum : 0,
            position: 'left',
            fields  : ['data1'],
            hidden  : true // CAN WE DOCUMENT THIS CONFIG????
        });

        if (showCategoryAxis) {
            axes.push({
                type    : 'Category',
                position: 'bottom',
                title   : false,
                hidden  : true
            });
        }

        return axes;
    }

    window.generateData = function(n, floor){
        var data = [],
            p = (Math.random() *  11) + 1,
            i;
            
        floor = (!floor && floor !== 0)? 20 : floor;
        
        for (i = 0; i < (n || 12); i++) {
            data.push({
                name: Ext.Date.monthNames[i % 12],
                data1: Math.floor(Math.max((Math.random() * 100), floor)),
                data2: Math.floor(Math.max((Math.random() * 100), floor)),
                data3: Math.floor(Math.max((Math.random() * 100), floor)),
                data4: Math.floor(Math.max((Math.random() * 100), floor)),
                data5: Math.floor(Math.max((Math.random() * 100), floor)),
                data6: Math.floor(Math.max((Math.random() * 100), floor)),
                data7: Math.floor(Math.max((Math.random() * 100), floor)),
                data8: Math.floor(Math.max((Math.random() * 100), floor)),
                data9: Math.floor(Math.max((Math.random() * 100), floor))
            });
        }
        return data;
    };
    
    window.store1 = Ext.create('Ext.data.JsonStore', {
        fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'data7', 'data9', 'data9'],
        data: generateData()
    });


    Ext.create('widget.panel', {
        renderTo    : Ext.getBody(),
        margin      : 10,
        width       : 900,
        title       : 'Chart issues with Category Axis issue',
        bodyPadding : '10 10 0',
        styleHtmlContent: true,
        html: [
            '<p>In 4.0 you could get away without defining a Category Axis for an Area, Bar, Column, Line and Scatter chart.</p>',
            '<p>In 4.1 you cannot do this for an Area, Line and Scatter chart.  For these, you must define a Category Axis.</p>',
            '<p>If you do not define a Category Axis AND you set the smooth config to true (SEE 2nd TAB BELOW), you will get an path[0]',
            ' is undefined error when the smooth method is called and the chart will not be rendered.</p>',
            '<p>If you set the smooth config to false, the chart will not throw any errors (SEE 3rd TAB BELOW) but the x values for each point',
            ' will be NaN and you will see the chart kind of drawn but squished on the y axis.</p>',
            '<p>ALSO, note that these charts are all drawn with their axes hidden.  This is what the client wanted',
            ' so that they can float the chart above another panel.  After some searching I finally found out that you can',
            ' set hidden: true for an axis but this is NOT documented anywhere.  So it would be nice to get this config added to the docs.</p>'
        ].join('')
    });

    Ext.create('widget.tabpanel', {
        width   : 900,
        height  : 400,
        margin  : 10,
        renderTo: Ext.getBody(),
        header  : false,
        layout  : 'fit',
        items: [
            {
                xtype   : 'chart',
                title   : 'with Category Axis',
                store   : store1,
                axes    : getAxes(true),
                series  : getSeries(true)
            },
            {
                xtype   : 'chart',
                title   : 'without Category Axis and smooth=true (throws error)',
                store   : store1,
                axes    : getAxes(false),
                series  : getSeries(true)
            },
            {
                xtype   : 'chart',
                title   : 'without Category Axis and smooth=false (no error but does not render)',
                store   : store1,
                axes    : getAxes(false),
                series  : getSeries(false)
            }
        ]
    });
    
});