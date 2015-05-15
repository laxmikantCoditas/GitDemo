        Ext.onReady(function () {
            Ext.define('CommonRadioButton', {
                extend: 'Ext.container.Container',
//                extend: 'Ext.form.Panel',
                alias: 'widget.CommonRadioButton',
                initComponent: function () {
                    var me = this;
                    Ext.apply(me, {
                        items: [{
                            xtype: 'container',
                            border: false,
                            layout: 'hbox',
                            width: '100%',
                            margins: '5 0 5 10',
                            items: [{
                                xtype: 'label',
                                labelAlign: 'left',
                                text: 'Protocol:',
                                padding: '0 55 0 0'
                            }, {
                                xtype: 'radiogroup',
                                itemId: 'radioProtocolId',
                                items: [{
                                    boxLabel: 'FTP',
                                    width: 50,
                                    name: 'protocol',
                                    checked: true,
                                    inputValue: 'ftp'
                                }, {
                                    boxLabel: 'TFTP',
                                    width: 50,
                                    name: 'protocol',
                                    inputValue: 'tftp'
                                }, {
                                    boxLabel: 'HTTP',
                                    width: 50,
                                    name: 'protocol',
                                    inputValue: 'http'
                                }]
                            }]
                        }]
                    });
                    this.callParent(arguments);
                }
            });

            Ext.define('MainPage', {
                extend: 'Ext.form.Panel',
                alias: 'widget.MainPage',
                initComponent: function () {
                    var me = this;
                    Ext.apply(me, {
                        items: [{

                            xtype: 'container',
                            layout: 'vbox',
                            padding: '20 20 20 20',
                            items: [

                            ]
                        }, {
                            xtype: 'CommonRadioButton',
                            itemId: 'comp1',
                        }, {
                            xtype: 'CommonRadioButton',
                            itemId: 'comp2'
                        }]
                    });
                    this.callParent(arguments);
                }
            });

            Ext.define('MyApp.controller.Controller', {
                extend: 'Ext.app.Controller',
                refs: [

                ],
                init: function () {
                    var me = this;
                    me.control({
                        '#comp1 #radioProtocolId': {
                            change: me.onComp1ProtocolChange
                        },
                        '#comp2 #radioProtocolId': {
                            change: me.onComp2ProtocolChange
                        }
                    });
                },
                /**
                 * cmp1 protocol change
                 */
                onComp1ProtocolChange: function (radioType, newValue, oldValue) {
                    var me = this;
                    var selectedValue = newValue['protocol'];
                    console.log('upgrade protocol change to', selectedValue);
                    switch (selectedValue) {
                    case 'ftp':

                        break;
                    case 'tftp':

                        break;
                    case 'http':

                        break;
                    }
                },

                /**
                 * cmp2 protocol change
                 */
                onComp2ProtocolChange: function (radioType, newValue, oldValue) {
                    var me = this;
                    var selectedValue = newValue['protocol'];
                    console.log('upgrade protocol change to', selectedValue);
                    switch (selectedValue) {
                    case 'ftp':

                        break;
                    case 'tftp':

                        break;
                    case 'http':

                        break;
                    }
                }

            });

            var mainPage = Ext.create('MainPage', {
                renderTo: Ext.getBody()
            });
        });
