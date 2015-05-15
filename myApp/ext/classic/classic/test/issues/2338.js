Ext.define('Foo', {
    extend: 'Ext.container.Container',
    width: 330,
    height: 155,
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    initComponent: function(){
        this.items = [{
            xtype: 'container',
            flex: 4,
            layout: 'fit',
            items: [{
                xtype: 'fieldset',
                height: 150,
                title: 'Patent Collections',
                layout: 'anchor',
                items: {
                    anchor: '100%',
                    xtype: 'checkboxgroup',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%',
                        checked: true,
                        width: 120
                    },
                    items: [{
                        boxLabel: 'US Patents',
                        name: 'uspt'
                    }, {
                        boxLabel: 'US Applications',
                        name: 'usapp'
                    }, {
                        boxLabel: 'EP Documents',
                        name: 'ep'
                    }, {
                        boxLabel: 'WIPO (PCT)',
                        name: 'wipo'
                    }, {
                        boxLabel: 'JP Abstracts',
                        name: 'jp'
                    }]
                }
            }]
        }, {
            xtype: 'container',
            flex: 5,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'fieldset',
                margin: '0 3',
                flex: 1,
                title: 'Other Collections',
                layout: 'anchor',
                items: {
                    anchor: '100%',
                    xtype: 'checkboxgroup',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%',
                        width: 120
                    },
                    items: [{
                        boxLabel: 'Non-Patent Docs',
                        name: 'npl'
                    }]
                }
            }, {
                anchor: '100%',
                xtype: 'fieldset',
                title: 'Internal Collections',
                flex: 2,
                margin: '0 3',
                layout: 'anchor',
                items: {
                    anchor: '100%',
                    xtype: 'checkboxgroup',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%',
                        width: 137
                    },
                    items: [{
                        boxLabel: 'Unpublished Apps',
                        name: 'PE2E_PREPUB'
                    }, {
                        boxLabel: 'Office Actions',
                        name: 'PE2E_OA'
                    }, {
                        boxLabel: 'Non-Patent Literature',
                        name: 'PE2E_NPL'
                    }]
                }
            }]
        }];
        this.callParent();
    }
});
Ext.onReady(function(){

    Ext.create('Foo', {
        renderTo: document.body
    });
});