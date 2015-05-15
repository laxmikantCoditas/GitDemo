Ext.application({
    name: 'My Demo App',
    requires: ['Ext.window.MessageBox'],
    launch: function () {
        Ext.create('Ext.form.Panel', {
            bodyPadding: 10,
            width: 300,
            renderTo: Ext.getBody(),
            title: 'Textfield IE8 issue',
            items: [
                {
                    xtype: 'textfield',
                    name: 'txtField',
                    fieldLabel: 'Textfield',
                    emptyText: 'Paste here',
                    listeners: {
                        paste: {
                            element: 'inputEl',
                            fn: function (event, inputEl) {
                                var mystr;
                                if (Ext.isIE) {
                                    var strNewlines = window.clipboardData.getData('Text').replace(/\r?\n/g, " ");
                                    var strTabs = strNewlines.replace(/\t/g, " ");
                                    console.log('Before Length of strTabs ' + strTabs.length);
                                    console.log('strNewlines ' + strNewlines);
                                    var mystr = strTabs.replace(/^\s+|\s+$/g, '');
                                    console.log('After Length of mystr ' + mystr.length);
                                    window.clipboardData.setData('Text', mystr);
                                }
                            }
                        }
                    }
                }
            ]
        });
    }
});

