Ext.require(['Ext.menu.Menu', 'Ext.form.field.Checkbox']);

Ext.onReady(function(){
    
    var checker = Ext.create('Ext.form.field.Checkbox', {
        renderTo: document.body,
        boxLabel: 'Return false in menu 2 listener'
    });

    var menu = Ext.create('Ext.menu.Menu', {
        id: 'menu1',
        listeners: {
            click: function(){
                console.log('menu1');
            }
        },
        floating: false,
        renderTo: document.body,
        items: [{
            id: 'item1',
            text: 'item1',
            menu: {
                id: 'menu2',
                listeners: {
                    click: function(){
                        console.log('menu2');
                        return !checker.getValue();
                    }
                },
                items: [{
                    id: 'item2',
                    text: 'item2',
                    menu: {
                        //bubbleEvents: ['click'],
                        id: 'menu3',
                        listeners: {
                            click: function(){
                                console.log('menu3');
                            }
                        },
                        items: [{
                            id: 'item3',
                            text: 'item3'
                        }]
                    }
                }, {
                    id: 'item4',
                    text: 'item4',
                    menu: {
                        id: 'menu4',
                        listeners: {
                            click: function(){
                                console.log('menu4');
                            }
                        },
                        items: [{
                            id: 'item5',
                            text: 'item5'
                        }]
                    }
                }]
            }
        }]
    });
});