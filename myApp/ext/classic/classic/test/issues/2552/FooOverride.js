Ext.define('Issue2552.FooOverride', {
    override: 'Issue2552.Foo',

    foo: function (x) {
        return this.callParent(arguments) + '!';
    }
});
