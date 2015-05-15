Ext.define('Territories', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'TerritoryID',
        type: "int"
    }, 'TerritoryDescription', 'RegionDescription', {
        name: 'RegionID',
        type: "int"
    }],
    idProperty: "TerritoryID",
    validations: [{
        type: 'presence',
        field: 'TerritoryDescription'
    }]
});

Ext.define('Region', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'RegionID',
        type: "int"
    }, 'RegionDescription'],
    idProperty: "RegionID"
});

Ext.onReady(function() {
    var datas = [{
        "TerritoryID": 1581,
        "TerritoryDescription": "Westboro",
        "RegionID": 1,
        "RegionDescription": "Eastern"
    }, {
        "TerritoryID": 44122,
        "TerritoryDescription": "Beachwood",
        "RegionID": 3,
        "RegionDescription": "Northern"
    }, {
        "TerritoryID": 72716,
        "TerritoryDescription": "Bentonville",
        "RegionID": 4,
        "RegionDescription": "Southern"
    }, {
        "TerritoryID": 80202,
        "TerritoryDescription": "Denver",
        "RegionID": 2,
        "RegionDescription": "Western"
    }];

    var TerritoriesStore = Ext.create("Ext.data.Store", {
        model: 'Territories',
        data: datas
    });
    RegionStore = Ext.create("Ext.data.Store", {
        model: 'Region',
        data: [{
            "RegionID": 1,
            "RegionDescription": "Eastern"
        }, {
            "RegionID": 2,
            "RegionDescription": "Western"
        }, {
            "RegionID": 3,
            "RegionDescription": "Northern"
        }, {
            "RegionID": 4,
            "RegionDescription": "Southern"
        }]
    });

    Ext.create("Ext.grid.Panel", {
        height: 500,
        width: 600,
        renderTo: Ext.getBody(),
        store: TerritoriesStore,
        columns: [{
            text: 'TerritoryID',
            dataIndex: 'TerritoryID',
            width: 40
        }, {
            text: 'TerritoryDescription',
            dataIndex: 'TerritoryDescription',
            flex: 1,
            field: {
                xtype: "textfield",
                allowBlank: false
            }
        }, {
            text: 'Region',
            dataIndex: 'RegionID',
            flex: 1,
            renderer: function(v, meta, rec) {
                return rec.get('RegionDescription');
            }
        }]
    });

    setTimeout(function() {
        var region = RegionStore.getById(4),
            rec = TerritoriesStore.getAt(0);
            
        // In the real test case, the user was listening to the edit event on the Region column
        // Which means the region id had already been set.
        rec.set("RegionID", 4);
        rec.set('RegionDescription', region.get('RegionDescription'));
    }, 2000);
});
