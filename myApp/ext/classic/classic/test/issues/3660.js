Ext.require(['Ext.data.*', 'Ext.grid.*']);
Ext.onReady(function(){
    // wrapped in closure to prevent global vars.
    Ext.define('Restaurant', {
        extend: 'Ext.data.Model',
        fields: ['name', 'cuisine']
    });
    
    function createGrid(group){
    
        var Restaurants = Ext.create('Ext.data.Store', {
            storeId: 'restaraunts',
            model: 'Restaurant',
            groupField: group ? 'cuisine' : undefined,
            sorters: ['cuisine', 'name'],
            data: [{
                name: 'Cheesecake Factory',
                cuisine: 'American'
            }, {
                name: 'University Cafe',
                cuisine: 'American'
            }, {
                name: 'Slider Bar',
                cuisine: 'American'
            }, {
                name: 'Shokolaat',
                cuisine: 'American'
            }, {
                name: 'Gordon Biersch',
                cuisine: 'American'
            }, {
                name: 'Crepevine',
                cuisine: 'American'
            }, {
                name: 'Creamery',
                cuisine: 'American'
            }, {
                name: 'Old Pro',
                cuisine: 'American'
            }, {
                name: 'Nola\'s',
                cuisine: 'Cajun'
            }, {
                name: 'House of Bagels',
                cuisine: 'Bagels'
            }, {
                name: 'The Prolific Oven',
                cuisine: 'Sandwiches'
            }, {
                name: 'La Strada',
                cuisine: 'Italian'
            }, {
                name: 'Buca di Beppo',
                cuisine: 'Italian'
            }]
        });
        
        var groupingFeature = Ext.create('Ext.grid.feature.Grouping', {
            groupHeaderTpl: 'Cuisine: {name} ({rows.length} Item{[values.rows.length > 1 ? "s" : ""]})',
            hideGroupedHeader: true
        });
        
        var grid = Ext.create('Ext.grid.Panel', {
            renderTo: Ext.getBody(),
            collapsible: true,
            iconCls: 'icon-grid',
            frame: true,
            store: Restaurants,
            width: 600,
            height: 400,
            title: 'Restaurants',
            features: [groupingFeature],
            dockedItems: [{
                xtype: 'toolbar',
                items: [{
                    text: 'Clear grouping',
                    handler: function(){
                        Restaurants.clearGrouping();
                    }
                }, {
                    text: 'Group by cuisine',
                    handler: function(){
                        Restaurants.group('cuisine');
                    }
                }]    
            }],
            columns: [{
                text: 'Name',
                flex: 1,
                dataIndex: 'name'
            }, {
                text: 'Cuisine',
                flex: 1,
                dataIndex: 'cuisine'
            }]
        });
    }
    
    Ext.create('Ext.button.Button', {
        renderTo: document.body,
        text: 'Create grid with grouping',
        handler: function(){
            createGrid(true);
        }
    });
    
    Ext.create('Ext.button.Button', {
        renderTo: document.body,
        text: 'Create grid without grouping',
        handler: function(){
            createGrid(false);
        }
    });
});
