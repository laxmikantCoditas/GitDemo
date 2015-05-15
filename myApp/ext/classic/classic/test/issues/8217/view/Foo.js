Ext.define('QLP.view.Foo', {
    extend: 'Ext.panel.Panel',
    
    width: 200,
    height: 200,
    x: 400,
    y: 400,
    
    html: 'qux moo',
    
    renderTo: Ext.getBody()
});