/**
 * Created by Ilya Ilievski.
 */
Ext.define('Bugs.store.Users', {
    extend:'Ext.data.Store',
    config:{
        model   : 'Bugs.model.User',
        data    :[

            {name: 'Player1',  number:1},
            {name: 'Player2',  number:2},
            {name: 'Player3',  number:3},
            {name: 'Player4',  number:4},
            {name: 'Player5',  number:5},
            {name: 'Player6',  number:6},
            {name: 'Player7',  number:7},
            {name: 'Player8',  number:8},
            {name: 'Player9',  number:9},
            {name: 'Player0',  number:10}
        ]
    }
});