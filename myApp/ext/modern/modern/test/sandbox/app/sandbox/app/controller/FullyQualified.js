Ext.define('MyApp.controller.FullyQualified', {
    extend: 'Ext.app.Controller',
    
    config: {
        before: {
            'someFunction': 'authenticate'
        },
        
        routes: {
            'simpleUrl': {
                action: 'routeAction'
            }
        },
        
        views: [
            'FromController',
            'deeply.FromController'
        ],
        
        models: [
            'FromController',
            'deeply.FromController'
        ],
        
        stores: [
            'FromController',
            'deeply.FromController'
        ]
    },
    
    init: function() {
        if (
            MyApp.view.FromController && MyApp.view.deeply.FromController &&
            MyApp.model.FromController && MyApp.model.deeply.FromController &&
            MyApp.store.FromController && MyApp.store.deeply.FromController
        ) {
            console.log('Loaded controller dependencies');
        } else {
            console.log('CONTROLLER DEPENDENCIES NOT LOADED');
        }
        
        if (Ext.getStore('FromController')) {
            console.log('Found Store defined in a Controller');
        } else {
            console.warn("CONTROLLER-DEFINDED STORE NOT FOUND");
        }
    },
    
    someFunction: function() {
        console.log('Ran someFunction ok. Arguments (should be an array of 2):');
        console.log(arguments);
        
        Ext.create('MyApp.view.FullyQualified', {
            fullscreen: true,
            store: {
                fields: ['name'],
                data: [
                    {name: 'Ed Spencer'},
                    {name: 'Nick Poulden'}
                ]
            }
        });
        
        this.getApplication().redirectTo('simpleUrl');
    },
    
    routeAction: function() {
        console.log('called a route action');
    },
    
    authenticate: function(action) {
        console.log('running a before filter');
        
        setTimeout(function() {
            action.resume();
        }, 500);
    }
});