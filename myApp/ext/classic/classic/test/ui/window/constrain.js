Ext.require('Ext.window.*');
Ext.onReady(function() {
    var win = Ext.create("widget.window", {
        width : 300,
        height : 200,
        title : "Constrained window",
        html : "I should be constrained to the browser viewport, I have a shadow",
        constrain : true,
        shadow: true
    });
    win.show();
    var win2 = Ext.create("widget.window", {
        width : 300,
        height : 200,
        title : "Constrained window 2",
        html : "I should be constrained to a dom element, no shadow",
        constrain: true,
        shadow: false,
        renderTo: Ext.get('constrain-with-shadow')
    });
    win2.show();
    
   var win3 = Ext.create("widget.window", {
        width : 300,
        height : 200,
        title : "Constrained window 3",
        html : "I should be constrained to a dom element, I have a shadow",
        constrain: true,
        hidden: false,
        renderTo: 'constrain-with-shadow2'
    });
       var win5 = Ext.create("widget.window", {
        width : 300,
        height : 200,
        title : "Constrained window 5",
        html : "header constrain",
        constrainHeader: true,
        hidden: false,
        renderTo: 'constrain-with-shadow2'
    });
    var win4 = Ext.create("widget.window", {
        width : 300,
        height : 200,
        title : "Constrained window 4",
        html : "I am not constrained, I have a shadow",
        hidden: false,
        renderTo: Ext.getBody()
    });
});