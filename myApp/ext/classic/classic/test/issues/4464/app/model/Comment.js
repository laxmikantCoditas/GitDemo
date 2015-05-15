Ext.define('SenchaBugs.model.Comment', {
  extend: 'Ext.data.Model',
  requires: [
    'SenchaBugs.model.Author'
  ],
  fields: [
    { name: 'id', type: 'int' },
    { name: 'body', type: 'string' }
  ],
  associations: [{
      ownerName:'comment',
      type: 'belongsTo',
      model: 'SenchaBugs.model.Author',
      associationKey: 'author',
      associatedName: 'SenchaBugs.model.Author',
      getterName: 'getAuthor',
      setterName: 'setAuthor',
      name: 'author',
      instanceName: 'author'
  }]
});
