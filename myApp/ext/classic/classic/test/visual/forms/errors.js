Ext.require([
    'Ext.form.Panel',
    'Ext.form.field.Text'
]);

function makeForm(xtype, labelAlign, msgTarget, hideLabel, showError) {
    var form = new Ext.form.Panel({
        renderTo: Ext.getBody(),
        width: 600,
        title: Ext.String.format('labelAlign: {0}, msgTarget: {1}, hideLabel: {2}, error: {3}', labelAlign, msgTarget ? msgTarget : '\'\'', hideLabel, showError),
        items: {
            hideLabel: hideLabel,
            xtype: xtype,
            fieldLabel: 'My Field',
            anchor: '100%',
            msgTarget: msgTarget,
            labelAlign: labelAlign
        }
    });
    
    if (showError) {
        form.items.first().markInvalid('Invalid');
    }
}

Ext.onReady(function() {
    
    var xtypes = ['textfield'],
        labels = ['left', 'right', 'top'],
        targets = ['', 'side', 'under'];
        
    Ext.Array.forEach(xtypes, function(xtype) {        
        Ext.Array.forEach(labels, function(label){
            Ext.Array.forEach(targets, function(target){
                makeForm(xtype, label, target, false, false);
                makeForm(xtype, label, target, false, true);
                makeForm(xtype, label, target, true, false);
                makeForm(xtype, label, target, true, true);
            });
        });
    });
}); 