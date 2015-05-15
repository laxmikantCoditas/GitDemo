Ext.require('*');

function r1() {
    Ext.getBody().createChild({
        html: 'Calculated'
    });
    new Ext.container.Container({
        renderTo: document.body,
        width: 600,
        height: 200,
        layout: 'fit',
        items: {
            xtype: 'htmleditor'
        }
    });
}

function r2() {
    Ext.getBody().createChild({
        html: 'Configured'
    });
    new Ext.form.field.HtmlEditor({
        renderTo: document.body,
        width: 600,
        height: 200
    });
}

function r3() {
    Ext.getBody().createChild({
        html: 'ShrinkWrap'
    });
    new Ext.form.field.HtmlEditor({
        renderTo: document.body,
        shrinkWrap: 3
    });
}

function r4() {
    Ext.getBody().createChild({
        html: 'Natural'
    });
    new Ext.form.field.HtmlEditor({
        renderTo: document.body
    });
}

Ext.onReady(function(){
    
    r1();
    r2();
    r3();
    r4();
    
});
