Ext.require('Ext.chart.*');
Ext.require(['Ext.Window', 'Ext.layout.container.Fit', 'Ext.fx.target.Sprite']);

Ext.onReady(function () {
   new Ext.chart.Chart( {
      width: 844,
      height: 400,
      renderTo: Ext.getBody(),
      legend: { position: 'right' },
      xtype: 'chart',
      animate: true,
      shadow: true,
      store: {
        data: [
          {"name":"Data1","Excellent":4.5,"Good":7.7,"Only fair":41.3,"Poor":46.1,"Don't know\/Refused":0.3},
          {"name":"Data2","Excellent":4.5,"Good":7.7,"Only fair":41.3,"Poor":46.1,"Don't know\/Refused":0.3}
        ],
        fields: ["name","Excellent","Good","Only fair","Poor","Don't know\/Refused"]
      },
      axes: [{
          type: 'Category',
          position: 'bottom',
          fields: ['name']
        },{
          type: 'Numeric',
          position: 'left',
          fields: ["Excellent","Good","Only fair","Poor","Don't know\/Refused"],
          label: {
            renderer: Ext.util.Format.numberRenderer('0,0')
          },
          title: '% Response',
          grid: true,
          minimum: 0,
          maximum: 100
        }
      ],
      series: [
        {
          type: 'column',
          axis: 'left',
          highlight: true,
          label: {
            display: 'outside',
            field: ["Excellent","Good","Only fair","Poor","Don't know\/Refused"],
            renderer: function(value){
              var number_render = Ext.util.Format.numberRenderer('0.0');
              return number_render(value) + '%';
            },
            orientation: 'horizontal',
            color: '#333',
            'text-anchor': 'middle'
          },
          xField: 'name',
          yField: ["Excellent","Good","Only fair","Poor","Don't know\/Refused"]
        }
      ]
    });
});