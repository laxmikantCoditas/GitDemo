Ext.define('MyApp.profile.Phone', {
    extend: 'Ext.app.Profile',
    
    config: {
        views: [
            "Profile",
            "nested.Profile"
        ]
    }
});