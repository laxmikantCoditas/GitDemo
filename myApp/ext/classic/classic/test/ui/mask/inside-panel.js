Ext.require(['Ext.LoadMask', 'Ext.button.Button', 'Ext.panel.Panel']);
Ext.onReady(function() {

    var component = Ext.create('Ext.Component');
    
    var panel1 = Ext.create('Ext.panel.Panel', {
        width: 100,
        height: 100,
        title: 'Panel1',
        x: 50,
        y: 50,
        floating: true,
        layout: 'fit',
        items: {
            xtype: 'container',
            layout: 'fit',
            items: component
        }
    }).show();
    
    var panel2 = Ext.create('Ext.panel.Panel', {
        width: 100,
        height: 100,
        title: 'Panel2',
        x: 150,
        y: 150,
        floating: true,
        layout: 'fit',
        items: {
            xtype: 'container',
            layout: 'fit'
        }
    }).show();
    
    var mask = new Ext.LoadMask(component).show();
    
    Ext.create('Ext.button.Button', {
        text: 'Move',
        renderTo: document.body,
        handler: function(){
            var x = Math.floor(Math.random() * 400),
                y = Math.floor(Math.random() * 400);
                
            panel1.setPosition(x, y);
            
            x = Math.floor(Math.random() * 400);
            y = Math.floor(Math.random() * 400);
                
            panel2.setPosition(x, y);
        }    
    });
    
    Ext.create('Ext.button.Button', {
        text: 'Switch',
        renderTo: document.body,
        handler: function(){
            var owner = component.up('panel');
            owner = owner == panel1 ? panel2 : panel1;
            
            owner.items.first().add(component);
        }    
    });
    
});