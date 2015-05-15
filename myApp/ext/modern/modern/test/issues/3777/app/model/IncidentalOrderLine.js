Ext.define('3777.model.IncidentalOrderLine',
{
    extend: 'Ext.data.Model',
    config: {
        fields: [
                    { name: 'Quantity', type: 'int' },
                    { name: 'TotalPrice', type: 'float' }
                ],

        associations: [
                {
                    type: 'hasOne',
                    name: 'Article',
                    model: '3777.model.Article',
                    associationKey: 'Article'
                }]
    }
});