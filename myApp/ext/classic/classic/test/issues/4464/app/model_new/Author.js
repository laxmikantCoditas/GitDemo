Ext.define('SenchaBugs.model.Author', {
  extend: 'Ext.data.Model',
  fields: [
    { name: 'id', type: 'int' },
    { name: 'name', type: 'string' }
  ],

  proxy: {
    type: 'rest',
    url : 'authors.json',
    reader: {
      type: 'json',
      root: 'data'
    }
  }
});
