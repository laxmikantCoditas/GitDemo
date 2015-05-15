var gStore = null;

Ext.define("Sencha.view.Main", {
    extend: "Ext.Panel",
    requires: ["Ext.TitleBar", "Ext.data.Store"],
    config: {
        tabBarPosition: "bottom",
        layout: {
            type: 'vbox',
            align: 'center'
        },
        items: [
            {
                xtype: "button",
                text: "Load data.json",
                handler: function() {
                    gStore = new Ext.data.Store({
                        model: 'Sencha.model.Report02',
                        autoLoad: true,
                        proxy: {
                            type: 'ajax',
                            url: 'data.json',
                            reader: {
                                type: 'json',
                                rootProperty: 'report',
                                totalProperty: 'total',
                                successProperty: 'success',
                                messageProperty: 'message'
                            }
                        }
                    });
				}
            },
            {
                xtype: "button",
                text: "Load data2.json",
                handler: function() {
                    gStore.load({
                        url:'data2.json'
                    });
                }
            },
            {
                xtype: "button",
                text: "Check",
                handler: function() {
                    var tpl = Ext.create('Ext.XTemplate',
                        '<div align=center class="rptDiv">',
                            '<table class="rptTable">',
                                '<tr class="odd">',
                                    '<th class="rptTableHeader">Period</th>',
                                    '<th class="rptTableHeader">Service</th>',
                                    '<th class="rptTableHeader">Pre-Paid</th>',
                                    '<th class="rptTableHeader">Redemption</th>',
                                '</tr>',
                                '<tpl for="rd02s">',
                                    '<tr class="{[xindex % 2 === 0 ? "even" : "odd"]}">',
                                        '<td class="rptTableDataLeft">{period}</td>',
                                        '<td class="rptTableDataRight">{Service}</td>',
                                        '<td class="rptTableDataRight">{PrePaid}</td>',
                                        '<td class="rptTableDataRight">{Redemption}</td>',
                                    '</tr>',
                                '</tpl>',
                            '</table>',
                        '</div>'
                    );

                    var data = gStore.getAt(0).getData(true);
					Ext.getCmp("output1").setHtml(tpl.apply(data));
                }
            },
            {
                id: "output1"
            }
        ]
    }
});
