Ext.define('Sencha.model.Report02', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'id', type: 'string'},
            {name: 'Name', type: 'string'}
        ],
        associations: [
            {
                type: 'hasMany',
                model: 'Sencha.model.RD02',
                associatedName: 'rd02s'
            }
        ]
    }
});
