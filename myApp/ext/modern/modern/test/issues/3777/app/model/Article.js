Ext.define('3777.model.Article',
{
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'Id', type: 'int' },
            { name: 'Number', type: 'int' },
            { name: 'Name', type: 'string' },
            { name: 'Price', type: 'float' }
        ]
    }
});