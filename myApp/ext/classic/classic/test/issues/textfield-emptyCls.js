var config = { xtype: 'textfield' };

config = [config, Ext.applyIf({value:'lol'},config)];
config.push(Ext.applyIf({xtype:'combo'},config[0]));
config.push(Ext.applyIf({emptyText:'emptyText'},config[0]));


function afterrender(){
    
}

