Ext.require([
    'Ext.Editor'
]);


Ext.onReady(function() {
    var ed = Ext.create('Ext.Editor', {
        alignment: "tl-tl",
        autoSize: {
            width: 'boundEl'
        },
        field: {
            xtype: 'textfield'
        },
        hideEl: false
    });
    
    Ext.fly('editor1').on('click', function() {
        ed.startEdit('editor1');
    });

    var ed2 = Ext.create('Ext.Editor', {
        alignment: "tl-tl",
        autoSize: {
            width: 'boundEl',
            height: 'boundEl'
        },
        field: {
            xtype: 'textarea'
        },
        hideEl: false
    });
    Ext.fly('editor2').on('click', function() {
        ed2.startEdit('editor2');
    });
    
    
    var ed3 = Ext.create('Ext.Editor', {
        alignment: "tl-tl",
        autoSize: {
            width: 'boundEl'
        },
        field: {
            xtype: 'textarea'
        },
        hideEl: false
    });
    Ext.fly('editor3').on('click', function() {
        ed3.startEdit('editor3');
    });
    
    
    var ed4 = Ext.create('Ext.Editor', {
        alignment: "tl-tl",
        autoSize: {
            height: 'boundEl'
        },
        field: {
            xtype: 'textarea'
        },
        hideEl: false
    });
    Ext.fly('editor4').on('click', function() {
        ed4.startEdit('editor4');
    });
});
