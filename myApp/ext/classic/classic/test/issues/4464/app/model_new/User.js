Ext.define('SenchaBugs.model.User', {
  extend: 'Ext.data.Model',
  fields: [
    { name: 'id', type: 'int' },
    { name: 'username', type: 'string' },
    { name: 'iconUrl', type: 'string' }
  ],
  hasMany: 'Post',
  proxy: {
    type: 'rest',
    url : 'users.json',
    //url : 'data/users',
    reader: {
      type: 'json',
      root: 'data'
    }
  }
});
