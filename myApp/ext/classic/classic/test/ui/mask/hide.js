Ext.require(['Ext.window.Window', 'Ext.LoadMask', 'Ext.button.Button']);
Ext.onReady(function() {
    
    Ext.create('Ext.button.Button', {
        text: 'Hide win',
        renderTo: document.body,
        handler: function(){
            win.hide();
        }    
    });
    
    Ext.create('Ext.button.Button', {
        text: 'Show win',
        renderTo: document.body,
        handler: function(){
            win.show();
        }    
    });
    
    Ext.create('Ext.button.Button', {
        text: 'Hide mask',
        renderTo: document.body,
        handler: function(){
            mask.hide();
        }    
    });
    
    Ext.create('Ext.button.Button', {
        text: 'Show mask',
        renderTo: document.body,
        handler: function(){
            mask.show();
        }    
    });
    
    var component = new Ext.Component({
        html: 'Mask me'
    });
    
    var win = new Ext.window.Window({
        width: 400,
        height: 400,
        title: 'A window',
        layout: 'fit',
        items: {
            title: 'Nest 1',
            layout: 'fit',
            items: {
                title: 'Nest 2',
                layout: 'fit',
                items: {
                    title: 'Nest 3',
                    layout: 'fit',
                    items: {
                        title: 'Nest 4',
                        layout: 'fit',
                        items: component
                    }
                }
            }
        }
    });
    
    var mask = new Ext.LoadMask(component);
    
});