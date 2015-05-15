Ext.onReady( function() {
    var mainContainer = Ext.create( 'Ext.panel.Panel', {
        renderTo: document.body,
        height: 400, width: 600,
        title: 'Component should not lose its scroll position on layout',
        layout: 'auto',

        items: {
            id: 'auto1',
            xtype: 'component',
            style: 'border:1px solid blue',
            autoScroll: true,
            maxHeight: 100,
            html: '1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>'
        },
        bbar: [{
            text: 'Update layout',
            handler: function() {
                mainContainer.child('#auto1').updateLayout({
                    isRoot: true
                });
            }
        }]
    });
});