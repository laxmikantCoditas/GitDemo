/**
 * Created by Ilya Ilievski.
 */
Ext.define('Bugs.view.Main', {
    extend:'Ext.Container',

    requires:'Bugs.view.BuggyDataItem',

    config:{
        fullscreen:true,
        items:[
            {
                xtype           : 'dataview',
                defaultType     : 'buggydataitem',
                store           : 'Users',
                useComponents   : true,
                height          : '400px',
                width           : '150px'
            }
        ]
    }
});