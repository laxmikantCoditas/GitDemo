Ext.define( 'ESearch.view.Portal', {
    extend: 'Ext.window.Window',
    alias: 'widget.portal',
        width: 800,
        height:600,
        x: 150,
        y: 80,
        layout:'fit',
        border: false,
        closable: true,
        maximizable: true,
        collapsible: true,
        title: 'EParts Search',
        items: [{
            xtype: 'partslist',
            itemId:'myPartList'
        }]
});