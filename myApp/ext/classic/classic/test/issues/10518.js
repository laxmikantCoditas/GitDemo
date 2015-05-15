Ext.onReady(function () {

    new Ext.grid.Panel({
        renderTo : document.body,
        width    : 400,
        height   : 400,
        title    : 'Grouping Bug',
        columns  : [
            {
                flex      : 1,
                header    : 'Group',
                dataIndex : 'group'
            },
            {
                flex      : 1,
                header    : 'Title',
                dataIndex : 'title'
            }
        ],
        features : [
            { ftype : 'grouping' }
        ],
        store    : {
            fields     : ['group', 'title'],
            groupField : 'group',
            data       : [
                { id : 1,  group : 'a',      title : 'A1'  },
                { id : 2,  group : 'b',      title : 'B2'  },
                { id : 3,  group : 'c&amp;', title : 'C3'  },
                { id : 4,  group : 'b',      title : 'B4'  },
                { id : 5,  group : 'c&amp;', title : 'C5'  },
                { id : 6,  group : 'a',      title : 'A6'  },
                { id : 7,  group : 'c&amp;', title : 'C7'  },
                { id : 8,  group : 'b',      title : 'B8'  },
                { id : 9,  group : 'b',      title : 'B9'  },
                { id : 10, group : 'a',      title : 'A10' }
            ]
        }
    });

    new Ext.Component({
        renderTo : document.body,
        html     : 'Try to collapse the c&amp; group. without the &amp; it will work just fine.'
    });

});
