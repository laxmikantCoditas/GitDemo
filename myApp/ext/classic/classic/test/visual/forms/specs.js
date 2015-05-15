describe("Form Visual Tests", function() {

    var fields = [
        {
            xtype: 'label',
            text : 'Plain Label'
        },
        {
            fieldLabel: 'TextField',
            xtype     : 'textfield',
            name      : 'someField',
            emptyText : 'Enter a value'
        },
        {
            fieldLabel: 'ComboBox',
            xtype: 'combo',
            store: ['Foo', 'Bar']
        },
        {
            fieldLabel: 'DateField',
            xtype     : 'datefield',
            name      : 'date'
        },
        {
            fieldLabel: 'TimeField',
            name: 'time',
            xtype: 'timefield'
        },
        {
            fieldLabel: 'NumberField',
            xtype     : 'numberfield',
            name      : 'number',
            emptyText : '(This field is optional)',
            allowBlank: true
        },
        {
            fieldLabel: 'SearchField',
            xtype: 'triggerfield',
            trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
            trigger2Cls: Ext.baseCSSPrefix + 'form-search-trigger'
        },
        {
            fieldLabel: 'Checkboxes',
            xtype: 'checkboxgroup',
            columns: [100,100],
            items: [
                {boxLabel: 'Foo', checked: true},
                {boxLabel: 'Bar'}
            ]
        },
        {
            fieldLabel: 'Radios',
            xtype: 'radiogroup',
            columns: [100,100],
            items: [{boxLabel: 'Foo', checked: true, name: 'radios'},{boxLabel: 'Bar', name: 'radios'}]
        }
    ],
    toolbarFields;

    toolbarFields = Ext.clone(fields);

    Ext.each(toolbarFields, function(field) {
        delete field.fieldLabel;
    });

    it("should render form fields in a Form", function() {
        var form = Ext.widget({
            renderTo: document.body,
            xtype: 'form',

            id   : 'form-widgets',
            title: 'Form Widgets',

            width : 630,

            frame: true,
            collapsible: true,

            tools: [
                {type:'toggle'},
                {type:'close'},
                {type:'minimize'},
                {type:'maximize'},
                {type:'restore'},
                {type:'gear'},
                {type:'pin'},
                {type:'unpin'},
                {type:'right'},
                {type:'left'},
                {type:'down'},
                {type:'refresh'},
                {type:'minus'},
                {type:'plus'},
                {type:'help'},
                {type:'search'},
                {type:'save'},
                {type:'print'}
            ],

            bodyPadding: '10 20',

            defaults: {
                anchor    : '98%',
                msgTarget : 'side',
                allowBlank: false
            },

            items: fields.concat([
                {
                    fieldLabel: 'CB - before',
                    xtype: 'checkboxgroup',
                    columns: [100,100],
                    defaults: { boxLabelAlign: 'before' },
                    items: [
                        {boxLabel: 'Foo', checked: true},
                        {boxLabel: 'Bar'}
                    ]
                },
                {
                    fieldLabel: 'RD - before',
                    xtype: 'radiogroup',
                    columns: [100,100],
                    defaults: { boxLabelAlign: 'before' },
                    items: [{boxLabel: 'Foo', checked: true, name: 'radiosBefore'},{boxLabel: 'Bar', name: 'radiosBefore'}]
                },
                {
                    fieldLabel: 'TextArea',
                    xtype     : 'textareafield',
                    name      : 'message',
                    cls       : 'x-form-valid',
                    value     : 'This field is hard-coded to have the "valid" style (it will require some code changes to add/remove this style dynamically)'
                },
                {
                    hideLabel   : true,
                    id          : 'htmleditor',
                    xtype       : 'htmleditor',
                    name        : 'html',
                    enableColors: false,
                    value       : 'Mouse over toolbar for tooltips.<br /><br />The HTMLEditor IFrame requires a refresh between a stylesheet switch to get accurate colors.',
                    height      : 110
                },
                {
                    xtype : 'fieldset',
                    title : 'Plain Fieldset',
                    items: [
                        {
                            hideLabel: true,
                            xtype: 'radiogroup',
                            items: [
                                {boxLabel: 'Radio A', checked: true, name: 'radiogrp2'},
                                {boxLabel: 'Radio B', name: 'radiogrp2'}
                            ]
                        }
                    ]
                },
                {
                    xtype      : 'fieldset',
                    title      : 'Collapsible Fieldset',
                    collapsible: true,
                    items: [
                        { xtype: 'checkbox', boxLabel: 'Checkbox 1' },
                        { xtype: 'checkbox', boxLabel: 'Checkbox 2' }
                    ]
                },
                {
                    xtype         : 'fieldset',
                    title         : 'Checkbox Fieldset',
                    checkboxToggle: true,
                    items: [
                        { xtype: 'radio', boxLabel: 'Radio 1', name: 'radiongrp1' },
                        { xtype: 'radio', boxLabel: 'Radio 2', name: 'radiongrp1' }
                    ]
                }
            ]),

            buttons: [
                {
                    text   :'Toggle Enabled',
                    handler: function() {
                        this.up('form').items.each(function(item) {
                            item.setDisabled(!item.disabled);
                        });
                    }
                },
                {
                    text   : 'Reset Form',
                    handler: function() {
                        Ext.getCmp('form-widgets').getForm().reset();
                    }
                },
                {
                    text   : 'Validate',
                    handler: function() {
                        Ext.getCmp('form-widgets').getForm().isValid();
                    }
                }
            ]
        
        });

        takeScreenshot({
            area: {
                x: 0,
                y: 0,
                width: 630,
                height: 820
            },
            scroll: false
        });
        
        form.destroy();
    });

    it("should render form fields in a toolbar", function() {
        var toolbar = Ext.widget({
            renderTo: document.body,
            xtype: 'toolbar',
            width: 1300,
            items: toolbarFields
        });
        
        takeScreenshot({
            area: {
                x: 0,
                y: 0,
                width: 1300,
                height: 30
            },
            scroll: false
        });

        toolbar.destroy();
    });
});