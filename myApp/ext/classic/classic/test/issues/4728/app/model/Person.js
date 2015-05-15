Ext.define('Example.model.Person', {
    extend: 'Ext.data.Model',
    fields: [
            { name: 'Id', type: 'int' },
            { name: 'Name', type: 'string' },
            { name: 'NumberOfPets', type: 'int', defaultValue: 0 },
            { name: 'DateOfBirth', type: 'date', dateFormat: 'MS' },
            { name: 'Rating', type: 'int', defaultValue: 0 }
        ],

    validations: [
        { type: 'length', field: 'Name', max: 10 },
    ]
});