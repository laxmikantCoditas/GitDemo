Ext.define('SenchaBugs.model.User', {
  extend: 'Ext.data.Model',
  fields: [
    { name: 'id', type: 'int' },
    { name: 'username', type: 'string' },
    { name: 'iconUrl', type: 'string' }
  ],
  associations: [{
      type: 'hasMany',
      model: 'SenchaBugs.model.Post',
      name: 'posts'
  }],
  proxy: {
    type: 'rest',
    url : 'users.json',
    reader: {
      type: 'json',
      root: 'data'
    }
  }
});
