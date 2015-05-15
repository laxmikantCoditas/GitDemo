Ext.define('Tasks.controller.Task', {
    extend: 'Ext.app.Controller',
    model: 'Task',

    index: function(interaction) {
        if (!this.taskView) {
            this.taskView = this.render({
                view: 'TaskGrid'
            }, this.application.viewport.view);
            
            this.control(this.taskView, {
                itemselect: this.onTaskSelect
            });
        }
    },
    
    onTaskSelect: function() {
        console.log('task select', arguments);
    }
});