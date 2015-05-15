// Ext.require('Ext.diag.layout.ContextItem');

var testCase = {
    run: function () {
        function makeHBoxWithHBox () {
            return {
                xtype: 'container',
                defaultType: "container",
                width: 200,
                style: 'border: 1px solid black;',
                layout: {
                    type: 'hbox',
                    align: 'stretchmax'
                },
                items: [{
                    title: 'Column 1',
                    defaultType: 'component',
                    style: 'background-color:yellow',
                    layout: 'hbox',
                    flex: 1,
                    overflowX: 'auto',
                    items: [{
                        width: 500,
                        height: 50
                    }]
                }, {
                    xtype: 'splitter'
                }, {
                    title: 'Column 2',
                    defaultType: 'component',
                    style: 'background-color:blue',
                    layout: 'hbox',
                    flex: 1,
                    overflowX: 'auto',
                    items: [{
                        width: 500,
                        height: 50
                    }]
                }]
            };
        }

        function makeVBoxWithVBox () {
            return {
                xtype: 'container',
                defaultType: "container",
                height: 200,
                style: 'border: 1px solid black;',
                shrinkWrap: true,
                componentLayout: {
                    setWidthInDom: true
                },
                layout: {
                    type: 'vbox',
                    align: 'stretchmax'
                },
                items: [{
                    title: 'Row 1',
                    defaultType: 'component',
                    style: 'background-color:yellow',
                    layout: 'vbox',
                    flex: 1,
                    overflowY: 'auto',
                    items: [{
                        width: 80,
                        height: 500
                    }]
                }, {
                    xtype: 'splitter'
                }, {
                    title: 'Row 2',
                    defaultType: 'component',
                    style: 'background-color:blue',
                    layout: 'vbox',
                    flex: 1,
                    overflowY: 'auto',
                    items: [{
                        width: 80,
                        height: 500
                    }]
                }]
            };
        }
        
        function renderCt (ct, x, y) {
            ct.renderTo = Ext.getBody();
            ct.x = x;
            ct.y = y;
            ct.style = 'position:absolute;' + ct.style;
            Ext.widget(ct);
        }

        var ct = makeHBoxWithHBox();
        renderCt(ct, 20, 20);

        ct = makeHBoxWithHBox();
        ct.margin = 5;
        renderCt({
            xtype: 'container',
            layout: 'hbox',
            width: 100,
            autoScroll: true,
            style: 'border: 1px solid red; background-color: cyan',
            items: [ct]
        }, 125, 100);
        
        ct = makeVBoxWithVBox();
        renderCt(ct, 20, 100);

        ct = makeVBoxWithVBox();
        ct.margin = 5;
        renderCt({
            xtype: 'container',
            layout: 'vbox',
            height: 100,
            autoScroll: true,
            shrinkWrap: true,
            componentLayout: {
                setWidthInDom: true
            },
            style: 'border: 1px solid red; background-color: cyan',
            items: [ct]
        }, 125, 200);
    }
};
