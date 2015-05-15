Ext.onReady(function() {
    var btn = Ext.create('Ext.button.Button', {
        title: 'Btn',
        id: 'b1',
        text: 'Button'
    });

    var view = Ext.create('Ext.container.Container', {
        id: 'app-mainpanel',
        ariaRole: 'application',
        ariaLabel: 'app-mainpanel',
        plugins: (Ext.getVersion().getMajor() == '5') ? 'viewport' : '',
        items: [btn],
        responsiveConfig: { // required by viewport in ExtJS V5 
            landscape: {}
        }
    });

    var win = Ext.create('Ext.window.Window', {
        title: 'Win',
        id: 'x1',
        width: 300,
        height: 480,
        closeAction: 'hide',
        listeners: {
            hide: function(panel, eOpts) {
                btn.focus();
            }
        }
    });
    win.show();

    var win2 = Ext.create('Ext.window.Window', {
        title: 'Win 2',
        id: 'x2',
        width: 300,
        height: 480
    });
    win2.showAt(310, 310);
});
