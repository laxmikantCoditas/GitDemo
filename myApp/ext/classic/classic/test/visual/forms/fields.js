//Ext.
Ext.onReady(function() {
    var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

    Ext.widget({
        xtype: 'container',
        renderTo: document.body,
        layout: {
            type: 'table',
            columns: 2,
            tdAttrs: {
                style: 'padding: 5px; vertical-align: top;'
            }
        },
        items: [{
            xtype: 'toolbar',
            colspan: 2,
            items: [{
                xtype: 'displayfield',
                fieldLabel: 'Display',
                labelWidth: 40,
                value: 'Field'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Text',
                labelWidth: 30,
                width: 80,
                value: 'Field'
            }, {
                xtype: 'checkbox',
                boxLabel: 'Foo',
                boxLabelAlign: 'before',
                checked: true
            }, {
                xtype: 'checkbox',
                name: 'bob'
            }, {
                xtype: 'checkbox',
                boxLabel: 'Bar',
                name: 'topping'
            }, {
                xtype: 'datefield',
                fieldLabel: 'Date',
                labelWidth: 30,
                width: 130,
                value: '1/1/2013'
            }, {
                xtype: 'numberfield',
                fieldLabel: 'Number',
                labelWidth: 40,
                width: 100,
                value: '500'
            }, {
                xtype: 'radiofield',
                boxLabel: 'Foo',
                name: 'color',
                checked: true
            }, {
                xtype: 'radiofield',
                name: 'herp'
            }, {
                xtype: 'radiofield',
                boxLabel: 'Bar',
                name: 'color'
            }]
        }, {
            xtype: 'form',
            bodyPadding: 10,
            width: 300,
            items: [{
                xtype: 'displayfield',
                fieldLabel: 'Display',
                value: 'Field'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Text',
                value: 'Field'
            }, {
                xtype: 'checkbox',
                boxLabel: 'Foo',
                boxLabelAlign: 'before',
                checked: true
            }, {
                xtype: 'checkbox',
                name: 'chuck'
            }, {
                xtype: 'checkbox',
                boxLabel: 'Bar',
                name: 'topping'
            }, {
                xtype: 'datefield',
                fieldLabel: 'Date',
                value: '1/1/2013'
            }, {
                xtype: 'numberfield',
                fieldLabel: 'Number',
                value: '500'
            }, {
                xtype: 'radiofield',
                boxLabel: 'Foo',
                name: 'color',
                checked: true
            }, {
                xtype: 'radiofield',
                name: 'derp'
            }, {
                xtype: 'radiofield',
                boxLabel: 'Bar',
                name: 'color'
            }, {
                xtype: 'checkboxfield',
                boxLabel: 'Really really really really really really really really really really long label',
                name: 'derp'
            }, {
                xtype: 'radiofield',
                boxLabel: 'Really really really really really really really really really really long label',
                name: 'derpy'
            }, {
                xtype: 'checkboxfield',
                boxLabel: 'Really really really really really really really really really really long label',
                boxLabelAlign: 'before',
                name: 'herp'
            }, {
                xtype: 'radiofield',
                boxLabel: 'Really really really really really really really really really really long label',
                boxLabelAlign: 'before',
                name: 'herpy'
            }]
        }, {
            xtype: 'form',
            bodyPadding: 10,
            width: 300,
            items: [{
                xtype: 'checkboxgroup',
                fieldLabel: 'Checkbox Group',
                items: [
                    { boxLabel: 'Foo', checked: true },
                    { boxLabel: 'Bar' }
                ]
            }, {
                xtype: 'radiogroup',
                fieldLabel: 'Radio Group',
                items: [
                    { boxLabel: 'Foo', checked: true },
                    { boxLabel: 'Bar' }
                ]
            }, {
                xtype: 'textfield',
                fieldLabel: lorem,
                labelAlign: 'top',
                width: 200,
                value: 'Lorem ipsum??!!'
            }, {
                xtype: 'textarea',
                fieldLabel: 'Text Field',
                height: 100,
                value: lorem
            }]
        }]
    });
});
