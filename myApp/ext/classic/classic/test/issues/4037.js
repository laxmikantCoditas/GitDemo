Ext.require('Ext.tab.*');

Ext.onReady(function(){

    // second tabs built from JS
    var tabs2 = Ext.createWidget('tabpanel', {
        renderTo: document.body,
        activeTab: 0,
        width: 600,
        height: 250,
        items: [{
            title: 'Progress Bars',
            items: [{
                xtype: 'progressbar',
                text: 'In a panel',
                id: 'panelProgressBar',
                width: 200
            }, {
                xtype: 'button',
                text: 'update Progress Bar',
                handler: function(){
                    Ext.getCmp('testProgressBar').updateProgress(0.5, '.5 pct done');
                    Ext.getCmp('panelProgressBar').updateProgress(0.25, '.25 pct done');
                }
            }],
            dockedItems: [{
                dock: 'top',
                items: [{
                    xtype: 'toolbar',
                    items: [{
                        xtype: 'progressbar',
                        text: 'In a toolbar',
                        id: 'testProgressBar',
                        width: 200
                    }]
                }]
            }]
        
        }, {
            title: 'ProgressBar Tester',
            items: [{
                xtype: 'button',
                text: 'update Progress Bar',
                handler: function(){
                    Ext.getCmp('testProgressBar').updateProgress(0.5, '.5 pct done');
                    Ext.getCmp('panelProgressBar').updateProgress(0.25, '.25 pct done');
                }
            }]
        }]
    });
});
