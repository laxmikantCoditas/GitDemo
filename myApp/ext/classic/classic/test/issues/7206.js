Ext.require([
    'Ext.form.field.File',
    'Ext.form.Panel',
    'Ext.window.MessageBox'
]);

Ext.onReady(function() {


    
    Ext.create('Ext.form.Panel', {
        renderTo: Ext.getBody(),
        width: 500,
        frame: true,
        margin: 20,
        title: 'File Upload Field initially hidden issue',
        bodyPadding: '10 10 0',
        html: [
            '<p>In 4.1.2 the file browse button does not display correctly if initially hidden</p>',
            '<p>The workaround for now is to set hideMode to offsets</p>',
            '<p>In 4.1.1 this worked without having to use hideMode offsets</p>'
        ].join('')
    });

    // THE BUG
    Ext.create('Ext.form.Panel', {
        renderTo: Ext.getBody(),
        width: 500,
        frame: true,
        margin: 20,
        title: 'File Upload Field initially HIDDEN, hideMode = default',
        bodyPadding: '10 10 0',

        defaults: {
            anchor: '100%',
            allowBlank: false,
            msgTarget: 'side',
            labelWidth: 50
        },

        items: [{
            xtype: 'textfield',
            fieldLabel: 'Name'
        },{
            xtype: 'filefield',
            hidden: true, // this causes an issue in 4.1.2 when the filefield is shown
            emptyText: 'Select an image',
            fieldLabel: 'Photo',
            name: 'photo-path',
            buttonText: '',
            buttonConfig: {
                iconCls: 'upload-icon'
            }
        }],

        buttons: [{
            text: 'Show',
            handler: function(){
                var p = this.up('panel'),
                    ff = p.down('filefield');

                if (ff.isHidden()) {
                    this.setText('Hide'),
                    ff.show();
                } else {
                    this.setText('Show'),
                    ff.hide();
                }
            }
        }]
    });

    // The WORKAROUND
    Ext.create('Ext.form.Panel', {
        renderTo: Ext.getBody(),
        width: 500,
        frame: true,
        margin: 20,
        title: 'File Upload Field initially HIDDEN, hideMode = offsets',
        bodyPadding: '10 10 0',

        defaults: {
            anchor: '100%',
            allowBlank: false,
            msgTarget: 'side',
            labelWidth: 50
        },

        items: [{
            xtype: 'textfield',
            fieldLabel: 'Name'
        },{
            xtype: 'filefield',
            hidden: true,
            hideMode: 'offsets', // this fixes the issue of the messed up browse button
            emptyText: 'Select an image',
            fieldLabel: 'Photo',
            name: 'photo-path',
            buttonText: '',
            buttonConfig: {
                iconCls: 'upload-icon'
            }
        }],

        buttons: [{
            text: 'Show',
            handler: function(){
                var p = this.up('panel'),
                    ff = p.down('filefield');

                if (ff.isHidden()) {
                    this.setText('Hide'),
                    ff.show();
                } else {
                    this.setText('Show'),
                    ff.hide();
                }
            }
        }]
    });


    Ext.create('Ext.form.Panel', {
        renderTo: Ext.getBody(),
        width: 500,
        frame: true,
        margin: 20,
        title: 'File Upload Field initially VISIBLE',
        bodyPadding: '10 10 0',

        defaults: {
            anchor: '100%',
            allowBlank: false,
            msgTarget: 'side',
            labelWidth: 50
        },

        items: [{
            xtype: 'textfield',
            fieldLabel: 'Name'
        },{
            xtype: 'filefield',
            emptyText: 'Select an image',
            fieldLabel: 'Photo',
            name: 'photo-path',
            buttonText: '',
            buttonConfig: {
                iconCls: 'upload-icon'
            }
        }],

        buttons: [{
            text: 'Hide',
            handler: function(){
                var p = this.up('panel'),
                    ff = p.down('filefield');

                if (ff.isHidden()) {
                    this.setText('Hide'),
                    ff.show();
                } else {
                    this.setText('Show'),
                    ff.hide();
                }
            }
        }]
    });

});