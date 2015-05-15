        Ext.define('MyModel', {
            extend  : 'Ext.data.Model',
            fields  : ['name'],
            hasMany : [
                {
                    model : 'MyModel2',
                    name  : 'data2'
                },
                {
                    model : 'MyModel3',
                    name  : 'data3'
                }
            ]
        });

        Ext.define('MyModel2', {
            extend : 'Ext.data.Model',
            fields : ['section']
        });

        Ext.define('MyModel3', {
            extend : 'Ext.data.Model',
            fields : ['department']
        });

        Ext.onReady(function () {
            var store = Ext.create('Ext.data.Store', {
                model   : 'MyModel',
                storeId : 'MyStore',
                proxy   : {
                    type   : 'ajax',
                    url    : 'xxxx.json',
                    reader : {
                        type : 'json',
                        root : 'data'
                    }
                }
            });

            store.load();

            Ext.create('Ext.Container', {
                renderTo : Ext.getBody(),
                items    : [
                    {
                        xtype        : 'combobox',
                        fieldLabel   : 'Name',
                        store        : store,
                        displayField : 'name',
                        valueField   : 'name',
                        queryMode    : 'local',
                        listeners    : {
                            change : function(field, newValue) {
                                var store     = field.getStore(),
                                    record    = store.findRecord(field.displayField, newValue),
                                    nextField = field.next(),
                                    lastField = nextField.next();

                                nextField.bindStore(record.data2());
                                lastField.bindStore(record.data3());
                            }
                        }
                    },
                    {
                        xtype        : 'combobox',
                        fieldLabel   : 'Section',
                        store        : store,
                        displayField : 'section',
                        valueField   : 'section',
                        queryMode    : 'local'
                    },
                    {
                        xtype        : 'combobox',
                        fieldLabel   : 'Department',
                        store        : store,
                        displayField : 'department',
                        valueField   : 'department',
                        queryMode    : 'local'
                    }
                ]
            });
        });
