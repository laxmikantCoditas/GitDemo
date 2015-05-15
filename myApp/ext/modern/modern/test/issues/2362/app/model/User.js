/**
 * Created by Ilya Ilievski.
 */
Ext.define('Bugs.model.User', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'name',  type: 'string'},
            {name: 'number',type: 'int'}
        ]
    }
});