Ext.application({
    name: 'Test',
    launch: function () {
        Ext.Viewport.add(Ext.create('Test.view.LineChart'));
    }
});