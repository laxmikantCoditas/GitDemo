Ext.onReady(function () {

    new Ext.grid.Panel({
        renderTo  : document.body,
        width     : 400,
        height    : 400,
        title     : 'Grouping Bug',
        columns   : [
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
        features  : [
            {
                ftype          : 'grouping',
                startCollapsed : true
            }
        ],
        store     : {
            fields     : ['group', 'title'],
            groupField : 'group',
            data       : [
                { id : 1, group : 'a', title : 'A1'  },
                { id : 2, group : 'b', title : 'B2'  },
                { id : 3, group : 'c', title : 'C3'  },
                { id : 4, group : 'b', title : 'B4'  },
                { id : 5, group : 'c', title : 'C5'  },
                { id : 6, group : 'a', title : 'A6'  },
                { id : 7, group : 'c', title : 'C7'  },
                { id : 8, group : 'b', title : 'B8'  },
                { id : 9, group : 'b', title : 'B9'  },
                { id : 10, group : 'a', title : 'A10' }
            ]
        },
        listeners : {
            select : function(selModel, record) {
                console.log(record.get('title'), record);
            }
        }
    });

    new Ext.Component({
        renderTo : document.body,
        html     : 'Expand group b or c, try selecting a row. It will not select the correct row. console.log the record on select.'
    });

});
