Ext.onReady(function() {
    Ext.createWidget('tabpanel', {
        renderTo: Ext.getBody(),
        resizeTabs: true,
        enableTabScroll: true,
        width: 600,
        height: 90,
        items: [{
            title: 'Tab 1',
            iconCls: 'tabs',
            closable: true,
            html: 'Sencha Rocks.'
        },{
            title: 'Tab 2'
        },{
            title: 'Foo Foo Foo Foo',
            iconCls: 'tabs'
        },{
            title: 'Tab 3'
        },{
            title: 'Tab 3'
        },{
            title: 'Tab 3'
        },{
            title: 'Tab 3'
        },{
            title: 'Tab 3'
        },{
            title: 'Tab 3'
        },{
            title: 'Tab 3'
        },{
            title: 'Tab 3'
        }]
    });
    
    Ext.createWidget('tabpanel', {
        renderTo: Ext.getBody(),
        resizeTabs: true,
        enableTabScroll: true,
        width: 600,
        height: 90,
        items: [{
            title: 'Tab 1',
            iconCls: 'tabs',
            closable: true,
            html: 'Sencha Rocks.'
        },{
            title: 'Tab 2'
        },{
            title: 'Tab 3'
        }]
    });
    
    Ext.createWidget('panel',{
        height: 200,
        width: 600,
        renderTo: Ext.getBody(),
        title: 'Standard',
        tbar: [{
            xtype:'splitbutton',
            text: 'Menu Button',
            iconCls: 'add16',
            menu: [{text: 'Menu Button 1'}]
        },'-',{
            xtype:'splitbutton',
            text: 'Cut',
            iconCls: 'add16',
            menu: [{text: 'Cut Menu Item'}]
        },{
            text: 'Copy',
            iconCls: 'add16'
        },{
            text: 'Paste',
            iconCls: 'add16',
            menu: [{text: 'Paste Menu Item'}]
        },'-',{
            text: 'Format',
            iconCls: 'add16'
        }]
    });

    Ext.createWidget('panel',{
        height: 200,
        width: 600,
        renderTo: Ext.getBody(),
        title: 'Multi columns',
        tbar: [{
            xtype: 'buttongroup',
            title: 'Clipboard',
            columns: 2,
            defaults: {
                scale: 'small'
            },
            items: [{
                xtype:'splitbutton',
                text: 'Menu Button',
                iconCls: 'add16',
                menu: [{text: 'Menu Item 1'}]
            },{
                xtype:'splitbutton',
                text: 'Cut',
                iconCls: 'add16',
                menu: [{text: 'Cut Menu Item'}]
            },{
                text: 'Copy',
                iconCls: 'add16'
            },{
                text: 'Paste',
                iconCls: 'add16',
                menu: [{text: 'Paste Menu Item'}]
            },{
                text: 'Format',
                iconCls: 'add16'
            }]
        },{
            xtype: 'buttongroup',
            title: 'Other Bogus Actions',
            columns: 2,
            defaults: {
                scale: 'small'
            },
            items: [{
                xtype:'splitbutton',
                text: 'Menu Button',
                iconCls: 'add16',
                menu: [{text: 'Menu Button 1'}]
            },{
                xtype:'splitbutton',
                text: 'Cut',
                iconCls: 'add16',
                menu: [{text: 'Cut Menu Item'}]
            },{
                text: 'Copy',
                iconCls: 'add16'
            },{
                text: 'Paste',
                iconCls: 'add16',
                menu: [{text: 'Paste Menu Item'}]
            },{
                text: 'Format',
                iconCls: 'add16'
            }]
        }]
    });
    
    Ext.createWidget('panel',{
        height: 200,
        width: 600,
        renderTo: Ext.getBody(),
        title: 'Multi columns (No titles, double stack)',
        tbar: [{
            xtype: 'buttongroup',
            columns: 3,
            defaults: {
                scale: 'small'
            },
            items: [{
                xtype:'splitbutton',
                text: 'Menu Button',
                iconCls: 'add16',
                menu: [{text: 'Menu Item 1'}]
            },{
                xtype:'splitbutton',
                text: 'Cut',
                iconCls: 'add16',
                menu: [{text: 'Cut Menu Item'}]
            },{
                text: 'Copy',
                iconCls: 'add16'
            },{
                text: 'Paste',
                iconCls: 'add16',
                menu: [{text: 'Paste Menu Item'}]
            },{
                text: 'Format',
                iconCls: 'add16'
            }]
        },{
            xtype: 'buttongroup',
            columns: 3,
            defaults: {
                scale: 'small'
            },
            items: [{
                xtype:'splitbutton',
                text: 'Menu Button',
                iconCls: 'add16',
                menu: [{text: 'Menu Item 1'}]
            },{
                xtype:'splitbutton',
                text: 'Cut',
                iconCls: 'add16',
                menu: [{text: 'Cut Menu Item'}]
            },{
                text: 'Copy',
                iconCls: 'add16'
            },{
                text: 'Paste',
                iconCls: 'add16',
                menu: [{text: 'Paste Menu Item'}]
            },{
                text: 'Format',
                iconCls: 'add16'
            }]
        }]
    });
    
    Ext.createWidget('panel',{
        height: 200,
        width: 600,
        renderTo: Ext.getBody(),
        title: 'Mix and match icon sizes to create a huge unusable toolbar',
        tbar: [{
            xtype: 'buttongroup',
            columns: 3,
            title: 'Clipboard',
            items: [{
                text: 'Paste',
                scale: 'large',
                rowspan: 3, iconCls: 'add',
                iconAlign: 'top',
                cls: 'x-btn-as-arrow'
            },{
                xtype:'splitbutton',
                text: 'Menu Button',
                scale: 'large',
                rowspan: 3,
                iconCls: 'add',
                iconAlign: 'top',
                arrowAlign:'bottom',
                menu: [{text: 'Menu Item 1'}]
            },{
                xtype:'splitbutton', text: 'Cut', iconCls: 'add16', menu: [{text: 'Cut Menu Item'}]
            },{
                text: 'Copy', iconCls: 'add16'
            },{
                text: 'Format', iconCls: 'add16'
            }]
        },{
            xtype: 'buttongroup',
            columns: 3,
            title: 'Other Actions',
            items: [{
                text: 'Paste',
                scale: 'large',
                rowspan: 3, iconCls: 'add',
                iconAlign: 'top',
                cls: 'x-btn-as-arrow'
            },{
                xtype:'splitbutton',
                text: 'Menu Button',
                scale: 'large',
                rowspan: 3,
                iconCls: 'add',
                iconAlign: 'top',
                arrowAlign:'bottom',
                menu: [{text: 'Menu Button 1'}]
            },{
                xtype:'splitbutton', text: 'Cut', iconCls: 'add16', menu: [{text: 'Cut Menu Item'}]
            },{
                text: 'Copy', iconCls: 'add16'
            },{
                text: 'Format', iconCls: 'add16'
            }]
        }]
    });
    
    Ext.createWidget('panel',{
        height: 200,
        width: 600,
        renderTo: Ext.getBody(),
        title: 'Medium icons, arrows to the bottom',
        tbar: [{
            xtype: 'buttongroup',
            title: 'Clipboard',
            defaults: {
                scale: 'medium',
                iconAlign:'top'
            },
            items: [{
                xtype:'splitbutton',
                text: 'Menu Button',
                iconCls: 'add24',
                arrowAlign:'bottom',
                menu: [{text: 'Menu Item 1'}]
            },{
                xtype:'splitbutton',
                text: 'Cut',
                iconCls: 'add24',
                arrowAlign:'bottom',
                menu: [{text: 'Cut Menu Item'}]
            },{
                text: 'Copy',
                iconCls: 'add24',
                cls: 'x-btn-as-arrow'
            },{
                text: 'Paste',
                iconCls: 'add24',
                arrowAlign:'bottom',
                menu: [{text: 'Paste Menu Item'}]
            },{
                text: 'Format<br/>Stuff',
                iconCls: 'add24'
            }]
        },{
            xtype: 'buttongroup',
            title: 'Other Bogus Actions',
            defaults: {
                scale: 'medium',
                iconAlign:'top'
            },
            items: [{
                xtype:'splitbutton',
                text: 'Menu Button',
                iconCls: 'add24',
                arrowAlign:'bottom',
                menu: [{text: 'Menu Item 1'}]
            },{
                xtype:'splitbutton',
                text: 'Cut',
                iconCls: 'add24',
                arrowAlign:'bottom',
                menu: [{text: 'Cut Menu Item'}]
            },{
                text: 'Copy',
                iconCls: 'add24',
                cls: 'x-btn-as-arrow'
            },{
                text: 'Paste',
                iconCls: 'add24',
                arrowAlign:'bottom',
                menu: [{text: 'Paste Menu Item'}]
            },{
                text: 'Format',
                iconCls: 'add24',
                cls: 'x-btn-as-arrow'
            }]
        }]
    });
    
    
    Ext.createWidget('panel',{
        height: 200,
        width: 600,
        renderTo: Ext.getBody(),
        title: 'Medium icons, text and arrows to the left',
        tbar: [{
            xtype:'buttongroup',
            items: [{
                text: 'Cut',
                iconCls: 'add24',
                scale: 'medium'
            },{
                text: 'Copy',
                iconCls: 'add24',
                scale: 'medium'
            },{
                text: 'Paste',
                iconCls: 'add24',
                scale: 'medium',
                menu: [{text: 'Paste Menu Item'}]
            }]
        }, {
            xtype:'buttongroup',
            items: [{
                text: 'Format',
                iconCls: 'add24',
                scale: 'medium'
            }]
        }]
    });
    
    Ext.createWidget('panel',{
        height: 200,
        width: 600,
        renderTo: Ext.getBody(),
        title: 'Small icons, text and arrows to the left',
        tbar: [{
            xtype:'buttongroup',
            items: [{
                text: 'Cut',
                iconCls: 'add16',
                scale: 'small'
            },{
                text: 'Copy',
                iconCls: 'add16',
                scale: 'small'
            },{
                text: 'Paste',
                iconCls: 'add16',
                scale: 'small',
                menu: [{text: 'Paste Menu Item'}]
            }]
        }, {
            xtype:'buttongroup',
            items: [{
                text: 'Format',
                iconCls: 'add16',
                scale: 'small'
            }]
        }]
    });
    
   var html = '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed metus nibh, sodales a, '+
    'porta at, vulputate eget, dui. Pellentesque ut nisl. Maecenas tortor turpis, interdum non, sodales non, iaculis ac, '+
    'lacus. Vestibulum auctor, tortor quis iaculis malesuada, libero lectus bibendum purus, sit amet tincidunt quam turpis '+
    'vel lacus. In pellentesque nisl non sem. Suspendisse nunc sem, pretium eget, cursus a, fringilla vel, urna.<br/><br/>'+
    'Aliquam commodo ullamcorper erat. Nullam vel justo in neque porttitor laoreet. Aenean lacus dui, consequat eu, adipiscing '+
    'eget, nonummy non, nisi. Morbi nunc est, dignissim non, ornare sed, luctus eu, massa. Vivamus eget quam. Vivamus tincidunt '+
    'diam nec urna. Curabitur velit. Lorem ipsum dolor sit amet.</p>';
    
    var configs = [{
        title: 'Basic Panel',
        collapsible:true,
        width:600,
        html: html
    },{
        width: 600,
        height: 320,
        title: 'Masked Panel with a really long title',
        bodyStyle: "padding: 5px;",
        html: 'Some content',
        collapsible: true,
        collapseDirection: Ext.Component.DIRECTION_LEFT,
        listeners: {
            render: function(p){
                p.body.mask('Loading...');
            },
            delay: 50
        }    
    },{
        width: 600,
        height: 150,
        unstyled: true,
        title: 'Panel with unstyled:true',
        bodyPadding: 0,
        html: 'Some content'
    },{
        width: 600,
        height: 150,
        border: false,
        frame: true,
        title: 'Panel with border:false',
        html: 'Some content'
    },{
        title: 'Framed panel: Width 280/Height 180',
        html: html,
        collapsible: true,
        frame: true,
        autoScroll: true,
        width: 600,
        height: 180
    },{
        title : 'Panel as child',
        width : 600,
        height: 400,
        layout: 'fit',
        bodyStyle: 'padding:5px',
        items: [
            {
                xtype: 'panel',
                border: false,
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [
                    {
                        html: 'top, with no title',
                        height: 100,
                        margin: '0 0 5 0'
                    },{
                        xtype: 'panel',
                        title: 'test',
                        html: 'bottom',
                        flex: 1
                    }
                ]
            }
        ]
    },{
        title : 'Framed panel as child',
        width : 600,
        height: 100,
        html  : null,
        layout: 'fit',
        items: [
            {
                xtype: 'panel',
                title: 'Framed panel',
                html : '123',
                frame: true
            }
        ]
    },{
        title : 'Framed panel with normal child',
        width : 600,
        height: 100,
        html  : null,
        frame: true,
        layout: 'fit',
        items: [
            {
                xtype: 'panel',
                title: 'Non-framed child',
                html : 'Hello'
            }
        ]
    },{
        title: 'Width 180/No Height',
        animCollapse: true,
        collapsible: true,
        width: 600,
        html: html
    }];
    
    Ext.each(configs, function(config) {
        Ext.createWidget('panel', Ext.applyIf(config, {
            renderTo: Ext.getBody(),
            bodyPadding: 7
        }));
    });
    
    Ext.createWidget('panel',{
        height: 200,
        width: 600,
        renderTo: Ext.getBody(),
        title: 'Standard (lbar)',
        lbar: [{
                iconCls: 'add16'
            },
            '-',
            {
                iconCls: 'add16'
            },{
                iconCls: 'add16'
            },{
                iconCls: 'add16'
            },
            '-',
            {
                iconCls: 'add16'
            }
        ]
    });

    Ext.createWidget('panel',{
        height: 200,
        width: 600,
        renderTo: Ext.getBody(),
        title: 'Standard w/Split Buttons (rbar)',
        rbar: [{
                iconCls: 'add16',
                menu: [{text: 'Menu Button 1'}]
            },'-',{
                iconCls: 'add16',
                menu: [{text: 'Cut Menu Item'}]
            },{
                iconCls: 'add16'
            },{
                iconCls: 'add16',
                menu: [{text: 'Paste Menu Item'}]
            },'-',{
                iconCls: 'add16'
            }
        ]
    });

    Ext.createWidget('panel',{
        height: 200,
        width: 600,
        renderTo: Ext.getBody(),
        title: 'Standard w/Short Text',
        lbar: [{
                xtype:'splitbutton',
                text: 'Menu',
                iconCls: 'add16',
                menu: [{text: 'Menu Button 1'}]
            },
            //'-',
            {
                xtype:'splitbutton',
                text: 'Cut',
                textAlign: 'left',
                iconCls: 'add16',
                menu: [{text: 'Cut Menu Item'}]
            },{
                text: 'Copy',
                textAlign: 'left',
                iconCls: 'add16'
            },{
                text: 'Paste',
                textAlign: 'left',
                iconCls: 'add16',
                menu: [{text: 'Paste Menu Item'}]
            },
            //'-',
            {
                text: 'Format',
                textAlign: 'left',
                iconCls: 'add16'
            }
        ]
    });

    Ext.createWidget('panel',{
        height: 200,
        width: 600,
        renderTo: Ext.getBody(),
        title: 'Standard w/Long Text',
        rbar: [{
                xtype:'splitbutton',
                text: 'Menu Button',
                iconCls: 'add16',
                textAlign: 'left',
                menu: [{text: 'Menu Button 1'}]
            },'-',{
                xtype:'splitbutton',
                text: 'Cut Selection',
                iconCls: 'add16',
                textAlign: 'left',
                menu: [{text: 'Cut Menu Item'}]
            },{
                text: 'Copy Selection',
                textAlign: 'left',
                iconCls: 'add16'
            },{
                text: 'Paste',
                iconCls: 'add16',
                textAlign: 'left',
                menu: [{text: 'Paste Menu Item'}]
            },'-',{
                text: 'Format',
                textAlign: 'left',
                iconCls: 'add16'
            }
        ]
    });

    Ext.createWidget('panel',{
        height: 200,
        width: 600,
        renderTo: Ext.getBody(),
        title: 'One of Everything',
        tbar: [{
                iconCls: 'add16',
                text: 'Button 1'
            },
            '-',
            {
                iconCls: 'add16',
                text: 'Button 2'
            },{
                iconCls: 'add16'
            },{
                iconCls: 'add16'
            },
            '-',
            {
                iconCls: 'add16'
            }
        ],
        lbar: [{
                iconCls: 'add16'
            },
            '-',
            {
                iconCls: 'add16'
            },{
                iconCls: 'add16'
            },{
                iconCls: 'add16'
            },
            '-',
            {
                iconCls: 'add16'
            }
        ],
        rbar: [{
                iconCls: 'add16'
            },
            '-',
            {
                iconCls: 'add16'
            },{
                iconCls: 'add16'
            },{
                iconCls: 'add16'
            },
            '-',
            {
                iconCls: 'add16'
            }
        ],
        bbar: [{
                iconCls: 'add16',
                text: 'Button 3'
            },
            '-',
            {
                iconCls: 'add16',
                text: 'Button 4'
            },{
                iconCls: 'add16'
            },{
                iconCls: 'add16'
            },
            '-',
            {
                iconCls: 'add16',
                text: 'Button 5',
                menu: [
                    { text: "Menu Item 1" }
                ]
            }
        ]
    });
});
