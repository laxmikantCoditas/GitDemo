Ext.onReady(function() {
    Ext.create('Ext.window.Window', {
        title: 'Hello',
        modal: true,
        width: 200,
        height: 200,
        items: [{
            xtype: 'textfield',
            fieldLabel: 'name',
            allowBlank: false,
            maxLength: 100
        }]
    }).show();
    
    Ext.getBody().createChild({
        tag: 'ul',
        cn: [{
            tag: 'li',
            html: 'Click inside text field'
        }, {
            tag: 'li',
            html: 'Type in a character'
        }, {
            tag: 'li',
            html: 'Backspace so the field is empty and the error shows'
        }, {
            tag: 'li',
            html: 'Click on the modal mask'
        }, {
            tag: 'li',
            html: 'Hover over the field so the error tip shows'
        }, {
            tag: 'li',
            html: 'Click inside text field'
        }]
    });
});
