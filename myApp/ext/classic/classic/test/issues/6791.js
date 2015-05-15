Ext.require([
    '*'
]);

Ext.onReady(function () {
    new Ext.container.Container({
        renderTo : document.body,
        width    : 400,
        height   : 400,
        cls      : 'overlay-footer',
        test     : 'dang yo',
        items    : [
            {
                html : 'Imprint',
                cls  : 'overlay-footer-item overlay-footer-imprint'
            },
            {
                xtype   : 'button',
                text    : 'Run Tests',
                handler : function () {
                    console.log(Ext.ComponentQuery.query('container[cls~="overlay-footer-imprint"]'));  //should return 1
                    console.log(Ext.ComponentQuery.query('container[test~="yo"]'));                     //should return 1
                    console.log(Ext.ComponentQuery.query('container[test~="ng"]'));                     //should return 0
                }
            }
        ]
    });
});