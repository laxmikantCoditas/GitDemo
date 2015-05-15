Ext.Loader.setConfig({
    paths: {
        'CustomNS': 'CustomNS',
        'lowerCustomNS': 'lowerCustomNS'
    }
});

Ext.application({
    name: 'MyApp',
    
    requires: [
        'MyApp.model.AppModel'
    ],
    
    controllers: [
        'LocallyQualified',
        'MyApp.controller.FullyQualified',
        'MyApp.controller.deeply.Nested',
        'CustomNS.controller.Custom',
        'deeply.LocallyQualified',
        'lowerCustomNS.controller.Custom'
    ],
    
    stores: [
        'LocallyQualified',
        'MyApp.store.FullyQualified',
        'MyApp.store.deeply.Nested',
        'CustomNS.store.Custom',
        'deeply.LocallyQualified',
        'lowerCustomNS.store.Custom'
    ],
    
    models: [
        'LocallyQualified',
        'MyApp.model.FullyQualified',
        'MyApp.model.deeply.Nested',
        'CustomNS.model.Custom',
        'deeply.LocallyQualified',
        'lowerCustomNS.model.Custom'
    ],
    
    views: [
        'LocallyQualified',
        'MyApp.view.FullyQualified',
        'MyApp.view.deeply.Nested',
        'CustomNS.view.Custom',
        'deeply.LocallyQualified',
        'lowerCustomNS.view.Custom'
    ],
    
    profiles: [
        'Phone',
        'MyApp.profile.Tablet',
        'CustomNS.profile.Custom',
        'deeply.LocallyQualified',
        'lowerCustomNS.profile.Custom'
    ],
    
    launch: function() {
        var controllers = this.getControllerInstances(),
            stores = this.getStores(),
            errors = [];
        
        var expectedControllers = [
            'MyApp.controller.FullyQualified',
            'MyApp.controller.LocallyQualified',
            'MyApp.controller.deeply.Nested',
            'CustomNS.controller.Custom',
            'MyApp.controller.deeply.LocallyQualified',
            'lowerCustomNS.controller.Custom'
        ];
        
        var expectedStores = [
            'MyApp.store.LocallyQualified',
            'MyApp.store.FullyQualified',
            'MyApp.store.deeply.Nested',
            'CustomNS.store.Custom',
            'MyApp.store.deeply.LocallyQualified',
            'lowerCustomNS.store.Custom'
        ];
        
        var expectedModels = [
            'MyApp.model.LocallyQualified',
            'MyApp.model.FullyQualified',
            'MyApp.model.deeply.Nested',
            'CustomNS.model.Custom',
            'MyApp.model.deeply.LocallyQualified',
            'lowerCustomNS.model.Custom',
            'MyApp.model.AppModel'
        ];
        
        var expectedViews = [
            'MyApp.view.LocallyQualified',
            'MyApp.view.FullyQualified',
            'MyApp.view.deeply.Nested',
            'CustomNS.view.Custom',
            'MyApp.view.deeply.LocallyQualified',
            'lowerCustomNS.view.Custom',
            'MyApp.view.phone.Profile',
            'MyApp.view.phone.nested.Profile'
        ];
        
        var expectedProfiles = [
            'MyApp.profile.Phone',
            'MyApp.profile.Tablet',
            'CustomNS.profile.Custom',
            'MyApp.profile.deeply.LocallyQualified',
            'lowerCustomNS.profile.Custom'
        ];
        
        Ext.each(expectedControllers, function(name) {
            if (!controllers[name]) {
                errors.push(name + " should have been loaded but was not");
            }
        }, this);
        
        Ext.each(expectedStores, function(name, index) {
            if (!(stores[index] instanceof Ext.ClassManager.classes[name])) {
                errors.push("Expected " + name + " to be ready");
            }
        }, this);
        
        Ext.each(expectedModels, function(name) {
            if (!Ext.ClassManager.classes[name]) {
                errors.push("Expected Model " + name + " to be defined");
            }
        }, this);
        
        Ext.each(expectedViews, function(name) {
            if (!Ext.ClassManager.classes[name]) {
                errors.push("Expected View " + name + " to be defined");
            }
        }, this);
        
        Ext.each(expectedProfiles, function(name) {
            if (!Ext.ClassManager.classes[name]) {
                errors.push("Expected Profile " + name + " to be defined");
            }
        }, this);
        
        if (errors.length) {
            Ext.each(errors, function(e) {
                console.error(e);
            });
        } else {
            console.log('Everything seemed to load ok');
        }
        
        this.dispatch({
            controller: 'FullyQualified',
            action: 'someFunction',
            args: ['arg1', 'arg2']
        });
    }
});