var FAIL = true;

Ext.require('Ext.AbstractComponent', function(){
    Ext.override(Ext.AbstractComponent, {
        getHeight: function(){
            try {
                return this.callOverridden(arguments);
            } catch(e){
                throw Error('FAIL: ' + Ext.versions.extjs.version + ' -- EXTJSIV-3498-config-throws-error: ' + e.message);
            }
        }
    });
});

function afterrender(){
    console.log('PASS: ' + Ext.versions.extjs.version + ' -- EXTJSIV-3498-config-throws-error');
}

var config = [
    {
        xtype: 'panel',
        anchor: '100%',
        title: 'panel 1 expanded',
        collapsible: true,
        collapsed: false,
        titleCollapse: true,
        animCollapse: false,
        html: 'panel 1 expanded'
    },
    {
        xtype: 'panel',
        anchor: '100%',
        title: 'panel 2 collapsed',
        collapsible: true,
        collapsed: true,
        titleCollapse: true,
        animCollapse: false,
        html: 'panel 2 collapsed'
    }
    ,
    {
        xtype: 'panel',
        title: 'Initially collapsed panel',
        collapsible: true,
        collapsed: true,
        html: 'Initially collapsed panel'
    }
    ,
    {
        xtype: 'panel',
        title: 'Initially hidden panel',
        collapsible: true,
        html: 'Initially hidden panel',
        hidden: true
    }
    ,
    {
        xtype: 'panel',
        title: 'Initially collapsed and hidden panel',
        collapsible: true,
        collapsed: true,
        html: 'Initially collapsed and hidden panel',
        hidden: true
    }
];

Ext.Array.forEach(config.slice(), function(conf){
    config.push(Ext.applyIf({ framed:true }, conf));
    config.push(Ext.applyIf({ width:200 }, conf));
    config.push(Ext.applyIf({ width:'auto' }, conf));
});

