// Ext.require('Ext.diag.layout.ContextItem');

var testCase = {
    zrun: function () {
        Ext.widget({
                xtype      : 'fieldset',
                renderTo: Ext.getBody(),
                width      : 450,    
                height     : 80,
                defaults   : {
                    labelWidth : 70
                },
                layout: {
                    type : 'column'
                },
                title  : 'Umwandlung',
                items : [
                {
                    xtype      : 'numberfield',
                    width      : 120,
                    name       : 'ms_kammer',
                    fieldLabel : 'Kammer'
                },{
                    xtype      : 'numberfield',
                    width      : 120,
                    name       : 'ms_bock',
                    fieldLabel : 'Bock'
                },{
                    xtype      : 'numberfield',
                    width      : 120,
                    name       : 'ms_brett',                    
                    fieldLabel : 'Brett'
                },{
                    xtype      : 'label',
                    height     : 11,
                    margin     : '5 0 0 0',
                    width      : 400,
                    text       : 'Maschine hat x Kammer, wo 1 Kammer = y Bock und 1 Bock = z Bretter'
                }
                ]
            });
    },

    xrun: function () {
        var win = new Ext.window.Window({
            title: 'Top Collapsed',
            collapsed: true,
            closable: false,
            collapsible: true,
            expandOnShow: false,
            width: 200,
            focusOnToFront: false,
            headerPosition: 'top'
        });

        win.render(Ext.getBody());
        win.showAt(10,10);
    },

    run: function () {
        var mgr = this.manager,
            collapsed = !!mgr.hasOption('collapsed'),
            noframe = !!mgr.hasOption('noframe'),
            height = mgr.getOptionNumber('height'),
            width = mgr.getOptionNumber('width'),
            link = ['Alternates:'];

        Ext.getBody().createChild({
            tag: 'b',
            html: 'URL params: nocss3, noframe, collapsed, height=X, width=X'
        });

        this.panel = new Ext.panel.Panel({
            id: 'foo',
            renderTo: Ext.getBody(),
            shrinkWrap: true,
            style: { left: '20px', top: '40px', position: 'absolute' },
            title: 'Hello',
            headerPosition: mgr.hasOption('header') || 'top',
            collapsible: true,
            collapsed: collapsed,
            frame: !noframe,
            height: height,
            width: width,
            dockedItems: [{
                dock: 'bottom',
                xtype: 'component',
                ignoreParentFrame: true,
                style: { height: '30px', backgroundColor: 'red', border: '1px solid black;' }
            }],
            items: [{
                xtype: 'component',
                style: { width: '200px', height: '100px', backgroundColor: 'yellow' }
            }]
        });
    }
};
