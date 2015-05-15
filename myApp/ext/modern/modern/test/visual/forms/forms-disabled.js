Ext.setup({
    requires: ['Ext.Toolbar', 'Ext.field.*', 'Ext.Button', 'Ext.tab.Panel', 'Ext.form.*'],
    onReady: function () {
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            id: 'basicform',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'fieldset',
                title: 'Personal Info',
                instructions: 'Please enter the information above.',
                defaults: {
                    labelWidth: '35%',
                    disabled: true
                },
                items: [{
                    xtype: 'textfield',
                    name: 'name',
                    label: 'Name',
                    value: 'Tom Roy',
                    autoCapitalize: true,
                    required: true,
                    clearIcon: true
                }, {
                    xtype: 'numberfield',
                    name: 'number',
                    label: 'Number',
                    value: 19,
                    maxValue: 20,
                    minValue: 2
                }, {
                    xtype: 'sliderfield',
                    name: 'slider',
                    label: 'Slider',
                    value: 40
                }, {
                    xtype: 'spinnerfield',
                    name: 'spinner',
                    label: 'Spinner',
                    value: 4
                }, {
                    xtype: 'checkboxfield',
                    name: 'cool',
                    label: 'Cool'
                }, {
                    xtype: 'passwordfield',
                    name: 'password',
                    label: 'Password',
                    value: 'asdasd'
                }, {
                    xtype: 'emailfield',
                    name: 'email',
                    label: 'Email',
                    value: 'me@sencha.com',
                    clearIcon: true
                }, {
                    xtype: 'urlfield',
                    name: 'url',
                    label: 'Url',
                    value: 'http://sencha.com',
                    clearIcon: true
                }, {
                    xtype: 'datepickerfield',
                    name: 'birthday',
                    label: 'Birthday',
                    value: new Date('05/01/89'),
                    picker: {
                        yearFrom: 1900
                    }
                }, {
                    xtype: 'selectfield',
                    name: 'rank',
                    label: 'Rank',
                    options: [{
                        text: 'Master',
                        value: 'master'
                    }, {
                        text: 'Journeyman',
                        value: 'journeyman'
                    }, {
                        text: 'Apprentice',
                        value: 'apprentice'
                    }]
                }, {
                    xtype: 'hiddenfield',
                    name: 'secret',
                    value: false
                }, {
                    xtype: 'textareafield',
                    name: 'bio',
                    label: 'Bio',
                    value: 'This is a fake value'
                }]
            }]
        });
    }
});