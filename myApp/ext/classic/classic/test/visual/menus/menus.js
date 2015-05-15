Ext.require([
    'Ext.menu.Menu'
]);

Ext.onReady(function() {

    var count = 0,
        container, item;

    function getItems() {
        count++;
        return [
            { text: 'icon', iconCls: 'feed' },
            { checked: true, text: 'check item' },
            { text: 'plain item', plain: true },
            { text: 'Sub Menu', menu: [
                { text: 'no icon' },
            ] },
            { xtype: 'menucheckitem', text: 'check icon', iconCls: 'feed' },
            { checked: false, text: 'check icon right', iconCls: 'feed', iconAlign: 'right' },
            { text: 'icon menu', iconCls: 'feed', menu: [
                { text: 'fubar' }
            ] },
            { text: 'icon right menu', iconCls: 'feed', iconAlign: 'right', menu: [
                { text: 'fubar' }
            ] },
            { checked: true, text: 'check icon right menu', iconCls: 'feed', iconAlign: 'right', menu: [
                { text: 'fubar' }
            ] },
            { text: 'icon right', iconCls: 'feed', iconAlign: 'right' },
            { text: 'some awesome<br/>wrapping text' },
            { xtype: 'textfield' },
            { xtype: 'combo' },
            { xtype: 'numberfield' },
            {text: 'Checked Option', checked: true,  group: 'opts' + count},
            {text: 'Unchecked Option', checked: false, group: 'opts' + count},
            {text: 'Ck Option Menu', checked: true,  group: 'grp' + count, menu: [
                { text: 'fubar' }
            ] },
            {text: 'Ck Opt Menu Icon', iconCls: 'feed', checked: true,  group: 'foo' + count, menu: [
                { text: 'fubar' }
            ] },
            {text: 'Ck Opt Icon', iconCls: 'feed', checked: true, group: 'bar' + count},
            {text: 'Ck Opt Icon Right', iconCls: 'feed', iconAlign: 'right', checked: true, group: 'baz' + count}
        ];
    }

    container = Ext.widget({
        xtype: 'container',
        layout: {
            type: 'table',
            columns: 3,
            tdAttrs: {
                width: 250
            }
        },
        renderTo: document.body,
        defaults: {
            xtype: 'menu',
            floating: false,
            shrinkWrap: true,
            margin: '0 10 0 0'
        },
        items: [
            { xtype: 'component', html: '<h3>showSeparator: true</h3>' },
            { xtype: 'component', html: '<h3>showSeparator: false</h3>' },
            { xtype: 'component', html: '<h3>plain: true</h3>' },
            { items: getItems(), showSeparator: true },
            { items: getItems(), showSeparator: false },
            { items: getItems(), plain: true }
        ]
    });
    
    item = container.items.getAt(3).items.getAt(4);
    item.activate();

    item = container.items.getAt(4).items.getAt(19);
    item.activate();

    item = container.items.getAt(5).items.getAt(3);
    item.activate();
    item.expandMenu();

});