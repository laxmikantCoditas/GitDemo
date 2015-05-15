Ext.require('*');

// entry point
Ext.onReady(function () {
    Ext.state.Manager.setProvider(new Ext.state.CookieProvider);
    var gridData = [
        [{
                id: 1,
                text: 'Item 1',
                type: 'a'
            }, {
                id: 2,
                text: 'Item 2',
                type: 'c'
            }, {
                id: 3,
                text: 'Item 3',
                type: 'b'
            }, {
                id: 4,
                text: 'Item 4',
                type: 'b'
            }, {
                id: 5,
                text: 'Item 5',
                type: 'a'
            }, {
                id: 6,
                text: 'Item 6',
                type: 'b'
            }, {
                id: 7,
                text: 'Item 7',
                type: 'c'
            }, {
                id: 8,
                text: 'Item 8',
                type: 'a'
            }, {
                id: 9,
                text: 'Item 9',
                type: 'c'
            }, {
                id: 10,
                text: 'Item 10',
                type: 'b'
            }
        ],
        [{
                id: 1,
                city: 'New York',
                country: 'U.S.A.'
            }, {
                id: 2,
                city: 'London',
                country: 'United Kingdom'
            }, {
                id: 3,
                city: 'Sydney',
                country: 'Australia'
            }, {
                id: 4,
                city: 'Los Angeles',
                country: 'U.S.A.'
            }, {
                id: 5,
                city: 'Melbourne',
                country: 'Australia'
            }, {
                id: 6,
                city: 'Montreal',
                country: 'Canada'
            }, {
                id: 7,
                city: 'Paris',
                country: 'France'
            }, {
                id: 8,
                city: 'Nice',
                country: 'France'
            }, {
                id: 9,
                city: 'Rome',
                country: 'Italy'
            }, {
                id: 10,
                city: 'Liverpool',
                country: 'United Kingdom'
            }
        ]
    ],
        fields = [
            [
                    'id', 'text', 'type'
            ],
            [
                    'id', 'city', 'country'
            ]
        ],
        sorters = [
            [{
                    property: 'type',
                    direction: 'ASC'
                }
            ],
            [{
                    property: 'country',
                    direction: 'DESC'
                }
            ]
        ]

        // working
        //            ,gridColumns = [[
        //                {header:'Item', dataIndex:'text', flex:1},{header:'Type', dataIndex:'type'}
        //            ],[
        //                {header:'City', dataIndex:'city', flex:1},{header:'Country', dataIndex:'country'}
        //            ]]

        // misaligned columns and header
        ,
        gridColumns = [
            [{
                    header: 'Item',
                    dataIndex: 'text'
                }, {
                    header: 'Type',
                    dataIndex: 'type'
                }
            ],
            [{
                    header: 'City',
                    dataIndex: 'city'
                }, {
                    header: 'Country',
                    dataIndex: 'country'
                }
            ]
        ],
        rIndex = 0,
        stores = [];

    Ext.create('Ext.grid.Panel', {
        title: 'Grid reconfigure',
        forceFit: true,
        deferRowRender: false,
        renderTo: Ext.getBody(),
        width: 300,
        height: 400,
        columns: [],
        stateful: true,
        stateId: 'grid',
        viewConfig: {
            emptyText: 'No records found. Click Reconfigure button.',
            deferEmptyText: false
        },
        tbar: [{
            text: 'Reconfigure',
            handler: function () {
                if (!stores[rIndex]) {
                    stores[rIndex] = Ext.create('Ext.data.Store', {
                        fields: fields[rIndex],
                        data: gridData[rIndex],
                        sorters: sorters[rIndex]
                    });
                }
                this.up('gridpanel').reconfigure(stores[rIndex], gridColumns[rIndex]);
                rIndex = rIndex === 0 ? 1 : 0;
            }
        }]
    });
});