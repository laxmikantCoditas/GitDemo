var html = '';

for (var i=0; i<50; i++) {
    html += '<p>Test content, line ' + i + '</p>';
}

Ext.application({
    name : 'Foo',

    requires : [
        'Ext.Container',
        'Ext.Toolbar',
        'Ext.Ajax'
    ],

    launch : function () {

        var content = Ext.create('Ext.Container', {
            flex       : 1,
            scrollable : {
                direction     : 'vertical',
                directionLock : true
            }
        });

        var container = Ext.Viewport.add({
            xtype      : 'container',
            fullscreen : true,
            layout     : 'card',

            items : [
                {
                    xtype  : 'container',
                    layout : {
                        type  : 'vbox',
                        align : 'stretch'
                    },

                    items  : [
                        {
                            xtype  : 'toolbar',
                            docked : 'top',
                            height : 30,
                            items  : [
                                {
                                    xtype : 'button',
                                    text  : 'test1'
                                }
                            ]
                        },
                        {
                            id: 'content',
                                    flex       : 1,
                                    scrollable : {
                                        direction     : 'vertical',
                                        directionLock : true
                                    }
                                },
                        {
                            xtype  : 'toolbar',
                            docked : 'bottom',
                            height : 30,
                            items  : [
                                {
                                    xtype : 'button',
                                    text  : 'test2'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        Ext.Ajax.request({
            url      : 'app.js',
            callback : function (options, success, response) {
                if (success) {
                    content = Ext.getCmp('content');
                    content.setHtml(html);
                    Ext.TaskQueue.requestWrite(function() {
                        content.getInnerHtmlElement().repaint();
                        content.getInnerHtmlElement().redraw();
                    });
                }
            }
        });
    }
});