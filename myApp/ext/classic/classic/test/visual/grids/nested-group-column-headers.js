Ext.require('*');
Ext.onReady(function() {
    var smallWidth = 50,
        largeWidth = 200;

    Ext.create('Ext.grid.Panel', {
        header: false,
        border: false,
        columns: [
            {
                text: 'A',
                width: largeWidth
            },
            {
                text: 'B',
                columns: [{
                    text: 'C'
                }, {
                    text: 'D',
                    columns: [{
                        text: 'E',
                        width: smallWidth

                    },{
                        text: 'F',
                        width: smallWidth
                    }]
                }]
            },
            {
                text: 'G',
                columns: [{
                    text: 'H',
                    width: smallWidth
                }, {
                    text: 'I',
                    columns: [{
                        text: 'J',
                        width: smallWidth
                    }]
                }]
            },
            {
                text: 'K',
                columns: [{
                    text: 'L',
                    columns: [{
                        text: 'M',
                        width: smallWidth
                    },{
                        text: 'N',
                        width: smallWidth
                    }]
                },{
                    text: 'O'
                }]
            },
            {
                text: 'P',
                columns: [{
                    text: 'Q',
                    columns: [{
                        text: 'R',
                        columns: [{
                            text: 'S',
                            width: smallWidth
                        },{
                            text: 'T',
                            width: smallWidth
                        }]
                    },{
                        text: 'U',
                        width: smallWidth
                    }]
                },{
                    text: 'V',
                    width: smallWidth
                }]
            },
            {
                text: 'W',
                width: largeWidth
            }
        ],
        height: 91,
//        width: 500,
        renderTo: Ext.getBody()
    });
});