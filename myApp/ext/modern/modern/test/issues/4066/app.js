Ext.Loader.setPath({
    'Ext': '../../../src'
});

//define the application
Ext.application({
    //require any components/classes what we will use in our example
    requires: [
        'Class2'
    ],

    launch: function() {
        console.log("Launched")
    }
});
