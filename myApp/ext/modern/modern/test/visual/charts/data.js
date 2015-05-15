var seed = 0.5;

function random() {
    seed *= 15.1;
    seed -= Math.floor(seed);
    return seed - 0.5;
}
Ext.define('OrderItems', {
    alias: 'store.OrderItems',
    extend: 'Ext.data.Store',
    config: {
        fields: ['id', 'time', 'g1', 'g2', 'g3', 'g4', 'g5', 'name'],
        data: []
    },

    generateData: function (count) {
        var data = [], i = 0, record = {
            'time': new Date(),
            'g1': 20 + random() * 50,
            'g2': 20 + random() * 50,
            'g3': 20 + random() * 50,
            'g4': 20 + random() * 50,
            'g5': 20 + random() * 50
        };
        for (i = 0; i < count; i++) {
            record = {
                'id': i,
                'time': Ext.Date.add(record.time, Ext.Date.DAY, 1),
                'g1': Math.abs(record.g1 + random() * 50),
                'g2': Math.abs(record.g2 + random() * 50),
                'g3': Math.abs(record.g3 + random() * 50),
                'g4': Math.abs(record.g4 + random() * 50),
                'g5': Math.abs(record.g5 + random() * 50),
                'name': 'Item-' + i
            };
            data.push(record);
        }
        this.setData(data);
    },
    constructor: function () {
        this.callParent(arguments);
        this.generateData(100);
        return this;
    }
});