Ext.require([
    'Ext.window.MessageBox'
]);

Ext.onReady(function(){
    Ext.get('mb6').on('click', function(){

       Ext.MessageBox.progress('Updating', 'Updating', 'Setting...');
        var f = function() {
            Ext.MessageBox.updateProgress(0.5, 'Clearing log selection');
            setTimeout(Ext.MessageBox.hide, 500);
       };
       setTimeout(f, 500);
    });

});
