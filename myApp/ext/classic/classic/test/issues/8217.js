Ext.application({
    name: 'QLP',
    appFolder: '8217',
    
    requires: [
        'QLP.view.Foo'
    ],
    
    autoCreateViewport: true,
    
    launch: function() {
        new QLP.view.Foo();
    }
});
