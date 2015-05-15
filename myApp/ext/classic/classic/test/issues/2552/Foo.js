Ext.define('Issue2552.Foo', {
    requires: [
        'Issue2552.FooOverride'
    ],
    foo: function (x) {
        return x;
    }
});
