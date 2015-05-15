Ext.define('One', {
    extend : 'Ext.data.Model',

    fields : ['field1']
});

Ext.define('Two', {
    extend : 'Ext.data.Model',

    fields : ['field2']
});

Ext.define('Main', {
    extend : 'Ext.data.Model',

    fields : ['foo'],

    hasMany : [
        { model : 'One', name : 'one', associationKey : 'blam[0].one'   },
        { model : 'Two', name : 'two', associationKey : 'boom.nest.two' }
    ]
});

Ext.application({
    name : 'Test',

    requires : ['Ext.data.Store'],

    launch : function () {

        new Ext.data.Store({
            autoLoad  : true,
            model     : 'Main',
            proxy     : {
                type : 'ajax',
                url  : '7527.json'
            },
            listeners : {
                load : function (store, recs) {
                    var rec = recs[0],
                        one = rec.one(),
                        two = rec.two();

                    console.log('This should return a count of 1, if 0 then mapping did not work');
                    console.log('one', one.getCount());

                    console.log('---');

                    console.log('This should return a count of 2, if 0 then mapping did not work');
                    console.log('two', two.getCount());
                }
            }
        });

    }
});