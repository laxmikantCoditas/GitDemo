Ext.Loader.setConfig({enabled: true});
Ext.require(
    [
        'Ext.grid.feature.Grouping',
        'Ext.data.JsonStore'
    ]);

Ext.onReady(function () {
    Ext.define("systemObject",
        {
            extend: "Ext.data.Model",
            fields: [
                { name: "groupDisplayName" },  // Grouping field
                { name: "id" },
                { name: "displayName" },
                { name: "objtype" },
                { name: "hints" }
            ]
        });

    var dataJSON = [
        {
            "id": "BLINDS",
            "groupDisplayName": "Integrated Office",
            "displayName": "Blinds",
            "objtype": "AV,AO,AI,BI,BV,BO,MV",
            "hints": "Blinds"
        },
        {
            "id": "FAN",
            "groupDisplayName": "Integrated Office",
            "displayName": "Fan",
            "objtype": "AV,AO,AI,BI,BV,BO,MV",
            "hints": "Fan"
        },
        {
            "id": "IAT",
            "groupDisplayName": "Integrated Office",
            "displayName": "Indoor Air",
            "objtype": "AI,AO,AV",
            "hints": "Indoor,Air,IAT"
        },
        {
            "id": "LIGHTS",
            "groupDisplayName": "Integrated Office",
            "displayName": "Lights",
            "objtype": "AV,AO,AI,BI,BV,BO,MV",
            "hints": "Lights"
        },
        {
            "id": "OAT",
            "groupDisplayName": "Integrated Office",
            "displayName": "Outdoor Air",
            "objtype": "AI,AO,AV",
            "hints": "Outdoor,Air,OAT"
        },
        {
            "id": "OBJ_ID",
            "groupDisplayName": "one",
            "displayName": "a",
            "objtype": "",
            "hints": "TEST"
        }
    ];


// Grouping grid based on Object Group
    var objectGroupingFeature = Ext.create('Ext.grid.feature.Grouping',
        {
            groupHeaderTpl: 'Group: {name}',
            hideGroupedHeader: false,
            startCollapsed: false,
            id: 'systemObjectGrouping'
        });

// Use ajax JsonStore, proxy on wssystem/gettemplatejson
    var systemObjectStore = new Ext.data.JsonStore(
        {
            storeId: "systemObjectStore",
            model: "systemObject",
            autoload: false,
            data: dataJSON,
            groupField: "groupDisplayName",
            sorters: ["groupDisplayName", "displayName"]
        });

    var gridPanel = Ext.create("Ext.grid.Panel",
        {
            renderTo: Ext.getBody(),
            id: "dataGridPanel",
            //title: "Setup Template Groups and Objects",
            store: Ext.data.StoreManager.lookup('systemObjectStore'),
//                        features: [ objectGroupingFeature ],
            border: false,
            tbar: [
                { xtype: 'button', text: 'ADD',
                    handler: function () {
                        // Create new record
                        var newRecord = {
                            "groupDisplayName": "Integrated Office",
                            "displayName": "",
                            "id": "OBJ_ID", // Used to auto select row.
                            "objtype": "",
                            "hints": ""
                        };

                        // Add record to store.
                        var store = Ext.data.StoreManager.lookup("systemObjectStore");

                        store.add(newRecord);
                        store.commitChanges(true);
//                        gridPanel.getView().refresh();    //Workaround: resolves this issue
                        console.log(store);
                    }
                }
            ],
            columns: [
                {
                    text: "groupDisplayName",
                    dataIndex: "groupDisplayName",
                    flex: 2,
                    editor: { allowBlank: false }
                },
                {
                    text: "displayName",
                    dataIndex: "displayName",
                    flex: 2,
                    editor: { allowBlank: false }
                },
                {
                    text: "id",
                    dataIndex: "id",
                    flex: 2,
                    editor: { allowBlank: false }
                },
                {
                    text: "objtype",
                    dataIndex: "objtype",
                    flex: 2,
                    editor: { allowBlank: false }
                },
                {
                    text: "hints",
                    dataIndex: "hints",
                    flex: 4,
                    editor: { allowBlank: true }
                }
            ]
        });

});