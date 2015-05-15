Ext.define('SenchaBugs.model.Comment', {
  extend: 'Ext.data.Model',
  fields: [
    { name: 'id', type: 'int' },
    { name: 'body', type: 'string' }
  ],
  belongsTo: 'Post'
});
