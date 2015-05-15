// Ext.require('Ext.diag.layout.ContextItem');

function doTest () {
    var panel1 = {
            xtype: 'panel',
            title: 'H/VBox Layout',
            x: 20, y: 20,

            height: 340,
            width: 300,

            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                labelAlign: 'top',
                //margins: '0 0 10 0',
                style: 'background-color: #dd0'
            },

            bodyPadding: 10,
            bodyStyle:'background-color:yellow;',
            border: true,

            items: [
                {
                    xtype: 'fieldcontainer',
                    fieldLabel: 'Your Name',
                    labelStyle: 'font-weight:bold;padding:0',
                    layout: 'hbox',
                    defaultType: 'textfield',

                    fieldDefaults: {
                        labelAlign: 'top',
                        style: 'background-color: #dd0'
                    },

                    items: [{
                        //flex: 1,
                        name: 'firstName',
                        fieldLabel: 'First',
                        allowBlank: false
                    }, {
                        width: 30,
                        name: 'middleInitial',
                        fieldLabel: 'MI',
                        margins: '0 0 0 5'
                    }, {
                        flex: 2,
                        name: 'lastName',
                        fieldLabel: 'Last',
                        allowBlank: false,
                        margins: '0 0 0 5'
                    }]
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Your Email Address',
                    vtype: 'email',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Subject',
                    allowBlank: false
                },
                {
                    xtype: 'textareafield',
                    fieldLabel: 'Message',
                    labelAlign: 'top',
                    flex: 1,
                    margins: '0',
                    allowBlank: false
                }
            ]
        };

    var panel2 = {
            title: 'Auto Layout',
            xtype: 'form',
            x: 340, y: 20,
            width: 300,

            defaultType: 'textfield',

            bodyPadding: 10,
            bodyStyle:'background-color:yellow;',
            border: true,

            defaults: {
                labelWidth: 100,
                style: 'background-color: #dd0'
            },

            items: [{
                fieldLabel: 'First Name',
                name: 'firstname'
            }, {
                fieldLabel: 'Last Name',
                name: 'lastname'
            }, {
                xtype: 'datefield',
                name: 'dob',
                fieldLabel: 'D.O.B'
            }, {
                xtype: 'radiogroup',
                fieldLabel: 'Gender',
                items: [
                    { boxLabel: 'Male' },
                    { boxLabel: 'Female' }
                ]
            }, {
                xtype: 'numberfield',
                fieldLabel: 'IQ',
                value: 45
            }, {
                xtype:'fieldset',
                checkboxToggle:true,
                title: 'Optional Information',
                defaultType: 'textfield',
                collapsed: true,
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },
                items: {
                    fieldLabel: 'Optional',
                    name: 'optional',
                    allowBlank:false
                }
            }]
        };

    var panel3 = Ext.mergeIf({
        title: 'Form Layout',
        y: 285,
        layout: 'form'
    }, panel2);

    var panel4 = Ext.mergeIf({
        title: 'Anchor Layout',
        x: 660,
        layout: 'anchor',
        defaults: {
            anchor: '0'
        }
    }, panel2);

    Ext.widget({
        xtype: 'container',
        defaults: {
            style: 'position: absolute;'
        },
        renderTo: Ext.getBody(),
        items: [
            panel1,
            panel2,
            panel3,
            panel4
        ]
    });
}

Ext.onReady(doTest);
