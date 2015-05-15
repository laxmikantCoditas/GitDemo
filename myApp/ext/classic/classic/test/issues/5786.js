Ext.require('*');
Ext.require('Ext.diag.layout.Context');

Ext.onReady(function() {
    Ext.create('Ext.Panel', {
        header: false,
        style: 'margin:10px 0 0 10px;',
        width: 250,
        title: "HBox Panel",
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        renderTo: document.body,
        items: [{
            xtype: 'textfield',
            height: 50,
            flex: 1,
            value: 'My height was honoured'
        }, {
            xtype: 'button',
            text: 'I am a button'
        }]
    });
    
    Ext.create('Ext.Panel', {
        header: false,
        style: 'margin:10px 0 0 10px;',
        width: 250,
        title: "HBox Panel",
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        renderTo: document.body,
        items: [{
            xtype: 'textfield',
            flex: 1,
            value: 'My height was honoured'
        }, {
            xtype: 'button',
            height: 50,
            text: 'I am a button'
        }]
    });
    
    Ext.create('Ext.grid.Panel', {
        header: false,
        style: 'margin:10px 0 0 10px;',
        columns: [
            {
                text: 'Column A'
            },
            {
                text: 'Column B',
                columns: [{
                    text: 'Column C'
                }]
            },
            {
                text: 'Column D',
                columns: [{
                    text: 'Column E'
                }, {
                    text: 'Column<br/>F',
                    columns: [{
                        text: 'Column G'
                    }]
                }]
            }
        ],
        height: 84,
        width: 400,
        renderTo: Ext.getBody()
    });
    
    Ext.create('Ext.container.Container', {
        style: 'margin:10px 0 0 10px;',
        defaultType: 'component',
        height: 200,
        layout: 'border',
        renderTo: Ext.getBody(),
        width: 200,
        items: [{
                region: 'west',
                xtype: 'container',
                style: 'background-color:red',
                layout: {
                    align: 'stretch',
                    type: 'hbox' // simulate fit using hbox as it supports margins properly
                },
                items: [{
                    margins: '10 10 10 10',
                    style: 'background-color:blue',
                    width: 30,
                    xtype: 'component'
                }]
            }, {
                region: 'center',
                style: 'background-color:green'
        }]
    });
});