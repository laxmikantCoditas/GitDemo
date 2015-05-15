function makeForm(labelAlign, labelWidth, fieldLabel, width, inputWidth, shrinkWrap) {
    shrinkWrap = shrinkWrap || 2;
    new Ext.form.Panel({
        renderTo: document.body,
        shrinkWrap: shrinkWrap,
        title: Ext.String.format('labelAlign: {0}, labelWidth: {1}, width: {2}, inputWidth: {3}, shrinkWrap: {4}', labelAlign, labelWidth, width, inputWidth, shrinkWrap),
        defaults: {
            labelWidth: labelWidth,
            labelAlign: labelAlign,
            fieldLabel: fieldLabel,
            width: width,
            inputWidth: inputWidth
        },
        items: [{
            xtype: 'textfield'
        }, {
            xtype: 'triggerfield'
        }]
    });
}

Ext.require([
    'Ext.form.Panel',
    'Ext.form.field.Text',
    'Ext.form.field.Trigger'
]);

Ext.onReady(function() {
    
    Ext.Array.forEach(['top', 'left'], function(labelAlign){
        Ext.Array.forEach([100, 300, 500], function(labelWidth) {
            Ext.Array.forEach(['Field label', 'The quick brown fox jumps over the lazy dog\'s back'], function(label){
                Ext.Array.forEach([600, undefined], function(width){
                    Ext.Array.forEach([70, 90], function(inputWidth){
                        makeForm(labelAlign, labelWidth, label, width, inputWidth);
                        makeForm(labelAlign, labelWidth, label, width, inputWidth, 3); 
                    });
                });
            });
        });
    });
}); 

