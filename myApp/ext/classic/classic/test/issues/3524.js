var borders = [false, 0, '0 0 0 0', undefined, true, '1 2 3 4', 10];

var item, config = [];

Ext.Array.forEach(['fieldset','container'], function(xtype){

    Ext.Array.forEach(borders, function(border){

        item = config[config.length] = {xtype:xtype, border:border, margin:10};
        if (xtype == 'container') {
            item.style = 'border:0 dotted #000';
        }

    });
});

Ext.Array.forEach(borders, function(border){
    var xtype = 'panel';
    item = config[config.length] = {xtype:xtype, border:border, margin:10};
});
Ext.Array.forEach(borders, function(border){
    var xtype = 'panel';
    item = config[config.length] = {xtype:xtype, frame:true, border:border, margin:10};
});
Ext.Array.forEach(borders, function(border){
    var xtype = 'panel';
    item = config[config.length] = {xtype:xtype, frame:true, bodyBorder:border, margin:10};
});

config = config.concat(Ext.Array.map(config, function(item){

    var newItem = Ext.Object.merge({}, item);
    newItem.title = newItem.xtype;
    if (newItem.frame) {
        newItem.title += " with frame"
    }
    item.html = newItem.title;
    return newItem;
}));

Ext.Array.forEach(config, function(item){
    if (!item.html) item.html = '';
    if ('border' in item) {
        item.html += "  border:" + item.border;
    }
    if ('bodyBorder' in item) {
        item.html += "  bodyBorder:" + item.bodyBorder;
    }
    // item.html = Ext.JSON.encode(item).replace('null','undefined').replace(/["{}]/ig,'');
    // item.html = Ext.JSON.encode(item.border).replace('null','undefined').replace(/["{}]/ig,'');
});
