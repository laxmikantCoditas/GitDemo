Ext.create('Ext.app.Application', {
    name: 'Tasks',
    
    routes: {
        "list/show/:list": {controller: 'List', action: 'show', list: ':list'}
    },
    
    //defaultUrl: 'list/show/all',
    
    enableHistory: true,
    enableQuickTips: true,
    
    controllers: [
        'List'
    ],
    
    launch: function() {
        this.viewport = Ext.create('Tasks.view.Viewport');        
        this.control(this.viewport, {
            listtree: {
                selectionchange: true,
                quickbar: {
                    createList: {
                        click: true
                    }
                }
            },
            taskgrid: {
                selectionchange: true
            }
        });
    }
});

