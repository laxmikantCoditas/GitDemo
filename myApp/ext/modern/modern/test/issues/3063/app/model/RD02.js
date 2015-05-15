//
// Report - 02 - Revenue by Collection Type
//
Ext.define('Sencha.model.RD02', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'id',            type: 'integer'},
            {name: 'report02_id',   type: 'string'},
            {name: 'period',        type: 'string'},
            {name: 'Service',       type: 'float'},
            {name: 'PrePaid',       type: 'float'},
            {name: 'Redemption',    type: 'float'}
        ]
    }
});

