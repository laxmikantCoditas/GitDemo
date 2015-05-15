Ext.define('SenchaBugs.model.Post', {
  extend: 'Ext.data.Model',
  fields: [
    { name: 'id', type: 'int' },
    { name: 'title', type: 'string' },
    { name: 'body', type: 'string' }
  ],
  belongsTo: 'User',
  hasMany: 'Comment'
});
