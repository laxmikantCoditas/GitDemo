function makeFields(num, xtype) {
    xtype = xtype || 'textfield';
    var out = [],
        i = 0;
        
    for (; i < num; ++i) {
        out.push({
            xtype: xtype
        });
    }
    return out;
}

Ext.onReady(function() {
    
    Ext.create('Ext.form.Panel', {
        height: 100,
        width: 400,

        items: [{
            xtype: 'fieldcontainer',
            autoScroll: true,
            height: 90,
            width: 300,
            layout: 'vbox',
            items: makeFields(5)
        }],
        renderTo: Ext.getBody()
    });

    Ext.create('Ext.form.Panel', {
        height: 100,
        width: 400,

        items: [{
            xtype: 'fieldcontainer',
            autoScroll: true,
            height: 90,
            width: 300,

            layout: 'anchor',
            defaults: {
                anchor: '100%'
            },
            items: makeFields(5)
        }],
        renderTo: Ext.getBody()
    });

    Ext.create('Ext.form.Panel', {
        height: 100,
        width: 400,

        items: [{
            xtype: 'fieldcontainer',
            autoScroll: true,
            height: 90,
            width: 300,

            layout: 'column',
            defaults: {
                columnWidth: 1
            },
            items: makeFields(5)
        }],
        renderTo: Ext.getBody()
    });
    
    Ext.create('Ext.form.Panel', {
        height: 100,
        width: 400,

        items: [{
            xtype: 'checkboxgroup',
            autoScroll: true,
            height: 90,
            width: 300,
            columns: 1,
            items: makeFields(5, 'checkbox')
        }],
        renderTo: Ext.getBody()
    });
});
