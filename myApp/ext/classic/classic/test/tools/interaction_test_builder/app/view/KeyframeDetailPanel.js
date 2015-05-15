Ext.define('Qa.Tester.view.KeyframeDetailPanel', {
    
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.t-keyframe-detail-panel',
        
    autoScroll: true,
    
    title: 'Details',
    
    tpl: [
       
        '<tpl if="values.target">',
             '<h3>Target</h3>',
             '<span>{target}</span>',
        '</tpl>',
        
        '<tpl if="values.coords">',
            '<h3>Event coordinates</h3>',
             'X: {[values.coords[0] + " px"]},',
             'Y: {[values.coords[1] + " px"]}',
        '</tpl>',
        
        '<h3>Screenshot</h3>', 
        '<div class="keyframe-screenshot">',
            '<img src="{screenshot}" />',
        '</div>'

    ].join(''),
    
     html: 'Please select a keyframe.'
});