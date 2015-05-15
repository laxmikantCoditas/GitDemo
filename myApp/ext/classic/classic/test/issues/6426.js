Ext.onReady(function() {
    Ext.QuickTips.init();
    viewport = new Ext.Viewport({
        layout: 'fit',
        items: {
            tbar: [
                { text: 'Open window', handler: function () {
                    var outer = new Ext.window.Window({
                        width: 400,
                        height: 400,
                        tbar: [{ text: 'Open modal window', handler: function() {
                            var inner = new Ext.window.Window({
                                width: 300,
                                height: 200,
                                modal: true,
                                constrain: true,
                                items: [
                                    {
                                        xtype: 'propertygrid',
                                        source: {
                                            a: 'b',
                                            c: 'd',
                                            e: 'f'
                                        }
                                    }
                                ]
                            });
                            outer.add(inner);
                            inner.show();
                        }}]
                    });
                    outer.show();
                }}
            ]
        }
    });
});