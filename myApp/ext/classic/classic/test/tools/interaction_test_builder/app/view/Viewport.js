Ext.define('Qa.Tester.view.Viewport', {
    
    extend: 'Ext.container.Viewport',
    
    alias: 'widget.t-viewport',
    

    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    
    items: [{
        xtype: 'tabpanel',
        
        flex: 1,
        
        items: [{
            title: 'Jasmine tests',
            flex: 1,
            layout: 'fit',
            items: [{
                xtype: 't-test-tree'
                
            }]
            
        },{
            title: 'Interaction keyframes',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            
            items: [{
                xtype: 't-keyframe-grid',
                flex: 1
            },{
                xtype: 'splitter'
            },{
                xtype: 't-keyframe-detail-panel',
                height: 600
            }]
            
        }]
    },{
        xtype: 'splitter'
    },{
   
            xtype: 't-test-runner-panel'

    
    }]
});