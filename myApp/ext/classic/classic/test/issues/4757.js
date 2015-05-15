var store = Ext.create('Ext.data.JsonStore', {
  fields: ['date', 'data1', 'data2', 'data3', 'data4', 'data5'],
  data: [
    {'date':new Date('Oct 21 2011'), 'data1':10},
    {'date':new Date('Dec 01 2011'), 'data1':1}
    // more data would go here, removed to conserve space
  ]
});

// Dates that are formatted as "YYYY-MM-DD" are interpreted as GMT dates and may result
// into a different date when displayed in local time. Dates that are formatted as 
// "Month DD YYYY" are interpreted as local dates.

Ext.create('Ext.chart.Chart', {
  renderTo: Ext.getBody(),
  width: 1000,
  height: 800,
  store: store,
  axes: [{
    type: 'Numeric',
    position: 'left',
    grid: true,
    fields: ['data1'],
    title: 'Sample Values',
    minimum: 0
  }, {
    type: 'Time',
    position: 'bottom',
    fields: ['date'],
    dateFormat: 'Y-m-d',
    grid: true,
    step: [Ext.Date.DAY, 15],
    fromDate: new Date('Oct 20 2011'),
    toDate: new Date('Jan 31 2012')
  }],
  series: [{
    type: 'line',
    highlight: false,
    axis: ['bottom', 'left'],
    xField: ['date'],
    yField: ['data1'],
    style: {
      opacity: 0.93
    }
  }]
});
