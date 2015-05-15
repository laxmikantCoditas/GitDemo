Ext.Loader.setPath({
    'Issue2552': '.'
});

Ext.require([
    'Issue2552.TextFieldOverride',
    'Issue2552.Foo'
]);

Ext.onReady(function () {
    var f = new Issue2552.Foo();
    Ext.DomHelper.append(document.body, {
        tag: 'div',
        html: f.foo('abc')
    });
});
