Ext.define('Tasks.controller.List', {
    extend: 'Ext.app.Controller',
    
    model: 'Tasks.model.List',
    store: 'Tasks.store.List',

    init: function(application, eventbus) {
        // this.control(application.viewport, {
        //     listtree: {
        //         selectionchange: true,
        //         quickbar: {
        //             createList: {
        //                 click: true
        //             }
        //         }
        //     },
        // });
        
        console.log('init list controller', application, eventbus);
    },
    
    
    
        // 
        // index: function(interaction) {
        //     // if (!this.tree) {
        //     //     this.tree = this.render({
        //     //         view: 'ListTree',
        //     //         store: this.store
        //     //     }, this.application.viewport.view);
        //     // 
        //     //     this.control(this.tree, {
        //     //         selectionchange: this.onListSelect,
        //     //         
        //     //         quickbar: {
        //     //             createList:     {click: this.bind({controller: 'List', action: 'create'})},
        //     //             createFolder:   {click: this.bind({controller: 'List', action: 'create'})},
        //     //             destroyList:     {click: this.bind({controller: 'List', action: 'destroy'})},
        //     //             destroyFolder:   {click: this.bind({controller: 'List', action: 'destroy'})}
        //     //         }
        //     //     });
        //     // }
        // },
        // 
        // show: function(interaction) {
        //     // var list = interaction.list;
        //     // 
        //     // if (Ext.isString(list)) {
        //     //     list = this.store.getNodeById(list);
        //     // }
        //     // 
        //     // if (list) {
        //     //     this.tree.getSelectionModel().select(list);
        //     // }
        // },
        // 
        // create: function(interaction) {
        //     console.log('create', interaction);
        // },
        // 
        // destroy: function(interaction) {
        //     console.log('destroy', interaction);
        // },
        // 
        // onListSelect: function(selModel, selection) {
        //     console.log('select ', selection[0])
        // }
});