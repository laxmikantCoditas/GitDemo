Ext.application({
    name: 'EditorApp',

    requires: [
        'Ext.MessageBox',
        'EditorApp.Entity',
        'EditorApp.entity.FillStroke',
        'EditorApp.entity.RectEntity',
        'EditorApp.entity.CircleEntity',
        'EditorApp.entity.PathEntity',
        'EditorApp.picker.HSVPicker',
        'EditorApp.picker.RGBPicker',
        'EditorApp.picker.GradientPicker',
        'EditorApp.Action',
        'EditorApp.action.Selection',
        'EditorApp.action.PanZoom',
        'EditorApp.action.Draw',
        'EditorApp.Command',
        'EditorApp.command.Create',
        'EditorApp.command.Delete',
        'EditorApp.command.Drag',
        'EditorApp.command.SetFill'
    ],

    controller: ['Main'],
    
    views: ['Main', 'Editor', 'GradientPanel'],

    icon: {
        57: 'resources/icons/Icon.png',
        72: 'resources/icons/Icon~ipad.png',
        114: 'resources/icons/Icon@2x.png',
        144: 'resources/icons/Icon~ipad@2x.png'
    },

    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    launch: function() {
        EditorApp.RADIUS = 11;
        // Initialize the main view
        Ext.Viewport.add(Ext.create('EditorApp.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
