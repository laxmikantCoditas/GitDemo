Ext.require('Ext.button.Button');

Ext.onReady(function() {
    var beforeBtn = new Ext.button.Button({
        renderTo: 'beforeBtn',
        text: 'Before button',
        width: 100
    });
    
    var afterBtn = new Ext.button.Button({
        renderTo: 'afterBtn',
        text: 'After button',
        width: 100
    });
    
    var view = Ext.get('view');
    
    view.on('focusenter', function() {
        view.set({ tabindex: -1 });
        Ext.get('r1').focus();
    });
    
    view.on('focusleave', function() {
        view.set({ tabindex: 0 });
        view.restoreChildrenTabbableState();
    });
    
    view.on('keydown', function(e) {
        if (e.getKey() === e.TAB) {
            view.saveChildrenTabbableState();
        }
    });
});
