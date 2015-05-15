Ext.onReady(function(){
    
    function hide(btn) {
        var p = viewport.child('panel[region=' + btn.region + ']');
        p.hide();
    }
    
    function show(btn) {
        var p = viewport.child('panel[region=' + btn.region + ']');
        p.show();
    }
    
    var buttons = [];
    Ext.each(['north', 'south', 'east', 'west'], function(region){
        buttons.push({
            region: region,
            text: 'Hide ' + region,
            handler: hide
        });
        
        buttons.push({
            region: region,
            text: 'Show ' + region,
            handler: show
        });
    });
    
    var viewport = Ext.create('Ext.container.Viewport', {
        layout: 'border',
        defaults: {
            collapsible: true
        },
        items: [{
            region: 'north',
            height: 100,
            html: 'North'
        }, {
            region: 'south',
            height: 100,
            html: 'South',
            collapseMode: 'mini'
        }, {
            region: 'west',
            width: 100,
            html: 'West'
        }, {
            region: 'east',
            width: 100,
            html: 'East',
            collapseMode: 'mini'
        }, {
            region: 'center',
            html: 'Center',
            dockedItems: [{
                xtype: 'toolbar',
                items: buttons
            }]
        }]
    });
    
});
