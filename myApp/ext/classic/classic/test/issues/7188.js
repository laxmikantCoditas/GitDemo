Ext.onReady(function() {
    
    // WORKS
    Ext.create('Ext.Panel', {
        title: 'headerPosition = top',
        headerPosition: 'top',
        width: 300,
        bodyPadding: 5,
        margin: 20,
        renderTo: Ext.getBody(),
        layout: {
            type : 'hbox', 
            align: 'stretch'
        },
        defaults: {
            xtype   : 'button',
            margin  : 5
        },
        items: [
            { text: 'button1', flex: 1 },
            { text: 'button2', flex: 1 }
        ]    
    });

    // DOES NOT WORK
    Ext.create('Ext.Panel', {
        title: 'headerPosition = top',
        headerPosition: 'left',
        width: 300,
        bodyPadding: 5,
        margin: 20,
        renderTo: Ext.getBody(),
        layout: {
            type : 'hbox', //vbox also does not work
            align: 'stretch'
        },
        defaults: {
            xtype   : 'button',
            margin  : 5
        },
        items: [
            { text: 'button1', flex: 1 },
            { text: 'button2', flex: 1 }
        ]    
    });

    // OVERNESTING HACK to get headerPosition left|right to work
    Ext.create('Ext.Panel', {
        title: 'using nested container hack',
        headerPosition: 'left',
        width: 300,
        bodyPadding: 5,
        margin: 20,
        renderTo: Ext.getBody(),
        items: {
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            defaults: {
                xtype   : 'button',
                margin  : 5
            },
            items: [
                { text: 'button1', flex: 1 },
                { text: 'button2', flex: 1 }
            ]    
        }   
    });


});