Ext.require('*');
Ext.onReady(function() {
    Ext.create('Ext.grid.Panel', {
        header: false,
        border: false,
        columns: [
            {
                text: 'Column A'
            },
            {
                text: 'Column B',
                columns: [{
                    text: 'Column C'
                }]
            },
            {
                text: 'Column D',
                columns: [{
                    text: 'Column E'
                }, {
                    text: 'Column<br/>F',
                    columns: [{
                        text: 'Column G'
                    }]
                }]
            }
        ],
        height: 84,
        width: 400,
        renderTo: Ext.getBody()
    });
});