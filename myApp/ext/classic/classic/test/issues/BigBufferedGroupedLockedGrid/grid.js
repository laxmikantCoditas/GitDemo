Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.state.*',
    'Ext.grid.plugin.BufferedRenderer',
    'Ext.grid.feature.GroupingSummary',
    'Ext.grid.feature.Grouping'
]);

Ext.onReady(function() {

    // create the data store
    var store = Ext.create('Ext.data.ArrayStore', {
        model: 'RPMGridTabs.model.DealTitlesGridModel',
        groupField: 'seasonId',
        proxy: {
             type: 'ajax',
             url: 'data.json',
             reader: {
                 type: 'json',
                 root: 'data'
             }
         },
        autoLoad: true
    });
    
    var groupingFeature =  Ext.create('Ext.grid.feature.GroupingSummary',{
    	id : 'dealTitlesGroupId',
        ftype : 'groupingsummary',
        groupHeaderTpl : '{name}',
        hideGroupedHeader : false,
        enableGroupingMenu : true
    });

    // Configure the Grid
    var gridCfg = {
        xtype: 'gridpanel',
        store: store,
        columnLines: true,
        plugins: 'bufferedrenderer',
        features: [groupingFeature],
        columns: [{
            xtype: 'rownumberer',
            locked: true,
            fixed: false,
            resizable: true,
            width: 60
        }, {
            text     : 'Product ID',
            locked   : true,
            dataIndex: 'productId', filter: true

        }, {
            text     : 'Title',
            locked   : true,
            dataIndex: 'fullTitle', filter: true
        }, {
            text     : 'Status',
            locked   : true,
            dataIndex: 'dealProductStatus', filter: true
        }, {
            text     : 'Term Year Desc',
            dataIndex: 'termYearDesc', filter: true
        }, {
            text     : 'Rel Yr',
            dataIndex: 'releaseYear', filter: true
        }, {
            text     : 'Product Type',
            dataIndex: 'productType', filter: true
        }, {
            text     : 'SPTI Rating',
            dataIndex: 'sptiSalesRating', filter: true
        }, {
            text     : 'Rights Template',
            dataIndex: 'rightsDefined', filter: true
        }, {
            text     : 'Risk (Low)',
            dataIndex: 'lowRiskAmount', filter: true
        }, {
            text     : 'Risk (High)',
            dataIndex: 'highRiskAmount', filter: true
        }, {
            text     : 'Key Category',
            dataIndex: 'keyCategory', filter: true
        }, {
            text     : 'Risk (Med)',
            dataIndex: 'medRiskAmount', filter: true
        }, {
            text     : 'Pricing Category',
            dataIndex: 'pricingCategory', filter: true
        }, {
            text     : 'FR/RR',
            dataIndex: 'firstRunRerunFlag', filter: true
        }, {
            text     : 'Qualifying',
            dataIndex: 'qualifyingFlag', filter: true
        }, {
            text     : 'Start Date',
            dataIndex: 'licenseStartDate', filter: true
        }, {
            text     : 'End Date',
            dataIndex: 'licenseEndDate', filter: true
        }, {
            text     : 'Product Fee',
            dataIndex: 'productFee', filter: true,
            //summaryType: 'count',
            summaryRenderer: function(value){
                return '01010';
            }
        }, {
            text     : 'Overage',
            dataIndex: 'overageFee', filter: true
        }, {
            text     : 'Other Fee',
            dataIndex: 'otherFee', filter: true
        },  {
            text     : 'Total License Fee',
            dataIndex: 'totalLicenseFee', filter: true
        }, {
            text     : 'Confirmed/Tentative',
            dataIndex: 'confirmedStatus', filter: true
        }, {
            text     : 'Conflict Status',
            dataIndex: 'conflictStatus', filter: true
        }, {
            text     : 'Conflict Override',
            dataIndex: 'conflictOverride', filter: true
        }, {
            text     : 'Country of Origin',
            dataIndex: 'countryOfOriginList', filter: true
        }, {
            text     : 'US Production Budget',
            dataIndex: 'productionBudget', filter: true
        }, {
            text     : 'US Box Office Gross',
            dataIndex: 'usBoxOffice', filter: true
        }, {
            text     : 'Local Box Office Gross',
            dataIndex: 'localBoxOffice', filter: true
        }, {
            text     : 'Local Admissions',
            dataIndex: 'localAdmissions', filter: true
        }, {
            text     : 'Term Year',
            dataIndex: 'termYear', filter: true
        }, {
            text     : 'Deal Product ID',
            dataIndex: 'dealProductId', filter: true
        }, {
            text     : 'Notes',
            dataIndex: 'notes', filter: true
        }, {
            text     : 'Last Start Order #',
            dataIndex: 'lastStartOrderNumber', filter: true
        }, {
            text     : 'Budget Category',
            dataIndex: 'budgetCategoryId', filter: true
        }, {
            text     : 'Season Id',
            dataIndex: 'seasonId', filter: true
        }],
        title: 'Sony Grid Tuning 4.2 NEW (Plugin)',
        viewConfig: {
            stripeRows: true
        }
    };
	
    Ext.widget({
        xtype: 'viewport',
        layout: 'fit',
        items: gridCfg
    });
});