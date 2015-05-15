Ext.onReady(function() {

    var ed = Ext.create('Ext.form.field.HtmlEditor', {
        renderTo: document.body
    });    
    
    setInterval(function(){
        console.log(ed.getValue().length);
    }, 500);
    
});