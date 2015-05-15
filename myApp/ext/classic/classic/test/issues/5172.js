Ext.define('Sample', {
    extend: 'Ext.data.Model',
    fields: ['label', 'cfg', 'layout']
});

Ext.require([
    'Ext.form.field.ComboBox', 
    'Ext.data.Store'
]);

Ext.onReady(function() {

    var store = new Ext.data.Store({
        model: 'Sample',
        data: [{
            label: 'natural, no html',
            cfg: {
                text: 'User Manager',
                shrinkWrap: false,
                style: {
                    width: '50%',
                    height: '50%'
                }
            }
        }, {
            label: 'natural, with html',
            cfg: {
                text: 'User<br />Manager',
                shrinkWrap: false,
                style: {
                    width: '50%',
                    height: '50%'
                }
            }
        }, {
            label: 'shrinkwrapped, no html',
            cfg: {
                text: 'User Manager'
            }
        }, {
            label: 'shrinkwrapped, with html',
            cfg: {
                text: 'User <br />Manager'
            }
        }, {
            label: 'configured, no html',
            cfg: {
                text: 'User Manager',
                width: 100,
                height: 100
            }
        }, {
            label: 'configured, html',
            cfg: {
                text: 'User<br />Manager',
                width: 100,
                height: 100
            }
        }, {
            label: 'calculated, no html',
            layout: 'fit',
            cfg: {
                text: 'User Manager'
            }
        }, {
            label: 'calculated, html',
            layout: 'fit',
            cfg: {
                text: 'User<br />Manager'
            }
        }]
    });
    
    var item;

    new Ext.form.field.ComboBox({
        renderTo: document.body,
        width: 300,
        store: store,
        editable: false,
        forceSelection: true,
        displayField: 'label',
        valueField: 'label',
        queryMode: 'local',
        listeners: {
            select: function(field, records){
                var rec = records[0],
                    cfg = rec.get('cfg');
                
                Ext.destroy(item);
                
                item = Ext.create('Ext.container.Container', {
                    renderTo: document.body,
                    width: 200,
                    height: 200,
                    layout: rec.get('layout'),
                    style: 'border: 1px solid red',
                    defaultType: 'button',
                    items: cfg
                });
            }
        }
    });
});
