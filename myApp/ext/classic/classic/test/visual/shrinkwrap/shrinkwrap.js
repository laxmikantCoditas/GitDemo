var fieldItems = [{
        xtype: 'textfield',
        width: 150
    }, {
        xtype: 'textfield',
        width: 150
    }, {
        xtype: 'textfield',
        width: 150
    }],
    componentItems = [{
        xtype: 'component',
        width: 150,
        html: 'Foo'
    }, {
        xtype: 'component',
        width: 150,
        html: 'Bar'
    }, {
        xtype: 'component',
        width: 150,
        html: 'Baz'
    }];

function createRow(directChildren) {

    Ext.create('Ext.panel.Panel', {
        title: 'Form Panel',
        items: directChildren ? fieldItems : {
            xtype: 'form',
            items: fieldItems
        },
        margin: 10,
        shrinkWrap: true,
        renderTo: Ext.getBody()
    });

    Ext.create('Ext.panel.Panel', {
        title: 'Component Panel',
        items: directChildren ? componentItems : {
            xtype: 'container',
            items: componentItems
        },
        margin: 10,
        shrinkWrap: true,
        renderTo: Ext.getBody()
    });

/* TODO: re-enable these when https://sencha.jira.com/browse/EXTJSIV-5884 is fixed
    Ext.create('Ext.container.Container', {
        style: 'border: 1px solid blue',
        items: directChildren ? fieldItems : {
            xtype: 'form',
            items: fieldItems
        },
        margin: 10,
        shrinkWrap: true,
        renderTo: Ext.getBody()
    });

    Ext.create('Ext.container.Container', {
        style: 'border: 1px solid red',
        items: directChildren ? componentItems : {
            xtype: 'container',
            items: componentItems
        },
        margin: 10,
        shrinkWrap: true,
        renderTo: Ext.getBody()
    });
*/
}

Ext.require([
    'Ext.form.Panel',
    'Ext.form.field.Text'
]);

Ext.onReady(function() {
    createRow(true);
    createRow(false);

});