Ext.define('Tasks.view.TaskGrid', {
   alias: 'widget.view.taskgrid',
   extend: 'Ext.Panel',

   // title: 'Tasks',
   // flex: 1,
   // margins: '3 3 3 0',
   
   initComponent: function() {
       this.columns = [{
           text: 'Task',
           flex: 1,
           dataIndex: 'task'
       }, {
           text: 'List',
           width: 100,
           dataIndex: 'list'
       }, {
           text: 'Due Date',
           width: 100,
           dataIndex: 'duedate'
       }];
       
       this.callParent(arguments);
   } 
});