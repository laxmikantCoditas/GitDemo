Ext.define('3777.model.IncidentalOrder',
{
    extend: 'Ext.data.Model',
    config: 
        {
            fields: [
                        { name: 'ContractId', type: 'int' },
                        { name: 'OrderId', type: 'int' },
                        { name: 'OrderNumber', type: 'string' },
                        { name: 'ServiceObject', type: 'string' },
                        { name: 'OrderDate', type: 'date' },
                        { name: 'DeclineReason', type: 'string' },
                        { name: 'DeliveryCosts', type: 'float' },
                        { name: 'DeliveryDate', type: 'date' },
                        { name: 'TotalCosts', type: 'float'},
                        { name: 'CostAllocationId', type: 'int' }
                    ],

            associations: [
                {
                    type: 'hasOne',
                    name: 'Status',
                    model: '3777.model.IncidentalOrderStatus',
                    associationKey: 'Status'
                },
                {
                    type: 'hasOne',
                    name: 'DeliveryPeriod',
                    model: '3777.model.DeliveryPeriod',
                    associationKey: 'DeliveryPeriod'
                },
                {
                    type: 'hasMany',
                    name: 'IncidentalOrderLines',
                    model: '3777.model.IncidentalOrderLine',
                    associationKey: 'IncidentalOrderLines'
                }]
        }
});
