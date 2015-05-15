var fieldItems = [{
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
    }];

function createRow (config) {
    var title = config.title || config.xtype;

    delete config.title;

    Ext.widget(Ext.apply({
        title: title,
        x: 5,
        items: componentItems
    }, config));

    Ext.widget(Ext.apply({
        title: 'Wrap ' + title,
        x: 200,
        items: {
            xtype: 'form',
            border: false,
            items: componentItems
        }
    }, config));

    Ext.widget(Ext.apply({
        title: 'Form ' + title,
        x: 400,
        items: fieldItems
    }, config));

    Ext.widget(Ext.apply({
        title: 'Wrap Form ' + title,
        x: 600,
        items: {
            xtype: 'form',
            border: false,
            items: fieldItems
        }
    }, config));
}

Ext.require([
    'Ext.window.*',
    'Ext.form.Panel',
    'Ext.form.field.Text'
]);

Ext.onReady(function() {
    var floating = { shadow: false },
        style = 'border: 1px solid blue;';

    createRow({ xtype: 'container', y: 5, floating: floating, autoShow: true, style: style });
    createRow({ xtype: 'window', y: 80, autoShow: true });
    createRow({ xtype: 'panel', y: 190, floating: floating, autoShow: true });
    createRow({ xtype: 'panel', y: 290, floating: floating, autoShow: true, frame: true,
                title: 'Frame panel'});
});
