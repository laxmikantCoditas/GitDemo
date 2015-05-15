function make() {
    Ext.create('Ext.form.TextField', {
        id: 'foo',
        renderTo: Ext.getBody()
    });
}

Ext.onReady(function() {
    Ext.getBody().createChild({
        html: 'The first value should be empty, every subsequent line should read (n) is: test(n-1)'
    });
    make();
    var i = 0,
        interval;
        
    interval = setInterval(function(){
        ++i;
        // some number reasonably > 30 to give the gc time to kick in
        if (i === 40) {
            clearInterval(interval);
        }
        Ext.getBody().createChild({
            html: '(' + i + ') is: ' + Ext.getCmp('foo').getValue()
        });
        Ext.getCmp('foo').destroy();
        make();
        Ext.getCmp('foo').setValue('test' + i);    
    }, 1000);
});