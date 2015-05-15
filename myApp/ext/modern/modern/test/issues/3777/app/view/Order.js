Ext.define('3777.view.Order',
{
    extend: 'Ext.Container',
    requires: ['Ext.TitleBar', 'Ext.field.Search', 'Ext.dataview.List'],
    xtype: 'Order',

    config: {
        OrderId: 0,
        NextDeliveryWeek: null,

        id: 'OrderDetail',
        layout: 'vbox',
        items:
        [
            {
                xtype: 'titlebar',
                docked: 'top',
                ui: 'orange',
                width: '100%',
                title: 'Incidentele bestelling',
                items: [
                    {
                        xtype: 'button',
                        text: 'Terug',
                        name: 'btnBack',
                        ui: 'red-back',
                        align: 'left'
                    },
                    {
                        xtype: 'button',
                        name: 'btnShowFrameworkMenu',
                        text: 'Dashboard',
                        ui: 'red',
                        align: 'left'
                    },
                    {
                        xtype: 'button',
                        text: 'Voeg Artikel Toe',
                        name: 'btnAddArticle',
                        id: 'btnAddArticle',
                        ui: 'red',
                        align: 'right'
                    }
                ]
            },
            {
                xtype: 'panel',
                flex: 1,
                layout: 'vbox',
                margin: '5% 5% 0 5%',
                items:
                [

                    {
                        xtype: 'panel',
                        layout: 'vbox',
                        flex: 4,
                        items: [
                                    {
                                        xtype: 'panel',
                                        html: '<div class="x-html-custom-grid-header">' +
                                                  '<div class="x-html-custom-grid-header-item" style="width:10%">Artikelnr</div>' +
                                                  '<div class="x-html-custom-grid-header-item" style="width:50%">Omschrijving</div>' +
                                                  '<div class="x-html-custom-grid-header-item-right" style="width:7%">Prijs/Stuk</div>' +
                                                  '<div class="x-html-custom-grid-header-item-right" style="width:10%">Aantal</div>' +
                                                  '<div class="x-html-custom-grid-header-item-right" style="width:15%;padding-right: 7px;">Totaal</div>' +
                                               '</div>'
                                    },
                                    {
                                        flex: 1,
                                        xtype: 'list',
                                        itemId: 'ibarticles',
										store:'OrderDetail',
									
                                        onItemDisclosure: true,
                                        disclosureProperty: 'Disclosure',
                                        itemTpl: new Ext.XTemplate('<div class="x-html-custom-grid-item">' +
                                                  '<div class="x-html-custom-grid-item-value" style="width:10%;margin-left:-13px;">{Article.Number}</div>' +
                                                  '<div class="x-html-custom-grid-item-value" style="width:50%;margin-left:3px;">{Article.Name}</div>' +
                                                  '<div class="x-html-custom-grid-item-value-right" style="width:7%;margin-left:18px;">{Article.Price}</div>' +
                                                  '<div class="x-html-custom-grid-item-value-right" style="width:10%;">{Quantity}</div>' +
                                                  '<div class="x-html-custom-grid-item-value-right" style="width:15%">{TotalPrice}</div>' +
                                               '</div>', {
                                                   format: function (item) { return Shared.util.Format.toCurrency(item); }
                                               })
                                    }
                             ]
                    }
                ]
            }
        ],

        listeners:
        [
            {
                delegate: 'button[name=btnAddArticle]',
                event: 'tap',
                fn: 'btnAddArticle_tapped'
            }
        ]
    },

    btnAddArticle_tapped: function () {
      store = Ext.getStore("OrderDetail");
      record = store.getAt(0);
      article = Ext.create("3777.model.Article", {
            Id: 99,
            Number: 99,
            Name: 'Test',
            Price: 99
        });
        orderLine = Ext.create("3777.model.IncidentalOrderLine", {
            Quantity: 99,
            TotalPrice: 99
        });
         
        orderLine.setArticle(article);
 		record.IncidentalOrderLinesStore.add(orderLine);
    },

    setFields: function (orderDetail) {

        // Set orderlines
        this.down("#ibarticles").setStore(orderDetail.IncidentalOrderLines());
        
    }

});