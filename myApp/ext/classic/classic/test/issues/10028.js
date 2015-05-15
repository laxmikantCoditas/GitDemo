(function () {

    Ext.application({

        name: 'dummy', // Required by IE8

        launch: function () {
            var cmpMan = Ext.ComponentManager,
                win,
                toolbar,
                formPanel,
                fieldSetItems = [],
                rowContainer,
                fieldName,
                fieldsPerRow = 2,
                numRows = 4,
                col,
                row,
                fieldSuffix,
                store,
                onMarkErrors,
                onClearErrors,
                errors;

            errors = Ext.create(Ext.data.Errors);

            store = Ext.create('Ext.data.Store', {
                fields: ['abbr', 'name'],
                data: [
                    { "abbr": "AL", "name": "Alabama" },
                    { "abbr": "AK", "name": "Alaska" },
                    { "abbr": "AZ", "name": "Arizona" }
                ]
            });

            for (row = 0; row < numRows; row++) {
                rowContainer = {
                    xtype: 'container',
                    layout: 'hbox',
                    items: []
                };

                for (col = 0; col < fieldsPerRow; col++) {
                    fieldSuffix = (fieldsPerRow * row + col + 1).toString();
                    fieldName = 'field_' + fieldSuffix;
                    rowContainer.items.push({
                        xtype: 'combo',
                        name: fieldName,
                        fieldLabel: 'Field ' + fieldSuffix,
                        flex: 1,
                        store: store,
                        queryMode: 'local',
                        displayField: 'name',
                        valueField: 'abbr'
                    });

                    errors.add({ field: fieldName, message: 'Error message' });
                }

                fieldSetItems.push(rowContainer);
            }

            onMarkErrors = function () {
                formPanel.getForm().markInvalid(errors);
            };

            onClearErrors = function () {
                formPanel.getForm().clearInvalid();
            };

            toolbar = cmpMan.create({
                xtype: 'toolbar',
                dock: 'bottom',
                ui: 'footer',
                items: [
                    {
                        xtype: 'button',
                        text: 'Mark Errors',
                        listeners: {
                            click: onMarkErrors
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Clear Errors',
                        listeners: {
                            click: onClearErrors
                        }
                    }
                ]
            });

            formPanel = cmpMan.create({
                xtype: 'form',
                bodyPadding: 10,
                bodyStyle: 'background-color: #DFE8F6',
                border: false,

                fieldDefaults: {
                    msgTarget: 'side',
                    labelWidth: 80,
                    labelAlign: 'top',
                      margin: '0 8 0 0'
                },

                defaults: {
                    anchor: '100%'
                },

                items: [
                    {
                        xtype: 'fieldset',
                        layout: 'anchor',
                        defaults: {
                            anchor: '100%'
                        },

                        style: {
                            paddingBottom: 10
                        },
                        title: 'Main',
                        items: fieldSetItems
                    }
                ],

                dockedItems: [
                    toolbar
                ]
            });

            win = cmpMan.create({
                xtype: 'window',
                width: 450,
                bodyPadding: 5,
                title: 'Test',
                items: [
                    formPanel
                ]
            });

            win.show();

        }
    });


}());