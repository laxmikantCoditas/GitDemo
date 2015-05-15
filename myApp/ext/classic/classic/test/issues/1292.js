Ext.require('*');
Ext.onReady(function(){
    var tooltip = Ext.create("Ext.tip.ToolTip", {
        target    : Ext.getBody(),
        delegate  : '.target',
        html      : 'This is a tooltip',
        listeners : {
            beforeshow : function(tip) {
                var target = Ext.get(tip.triggerElement.id),
                    valid  = target.id === 'show';
                console.log(valid);
                return valid;
            }
        }
    });
});