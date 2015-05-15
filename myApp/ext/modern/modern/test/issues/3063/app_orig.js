Ext.define("Sencha.view.Main", {
    extend: "Ext.tab.Panel",
    requires: ["Ext.TitleBar", "Ext.Video"],
    config: {
        tabBarPosition: "bottom",
        items: [{
            title: "localStorage",
            iconCls: "home",
            styleHtmlContent: true,
            items: [{
                docked: "top",
                xtype: "titlebar",
                title: "localStorage Demo"
            }, {
                xtype: "button",
                text: "Save",
                handler: function () {
                    localStorage.setItem("testing", "abc");
                    Ext.getCmp("output").setHtml("Saved.")
                }
            }, {
                xtype: "button",
                text: "Empty",
                handler: function () {
                    localStorage.removeItem("testing");
                    Ext.getCmp("output").setHtml("Emptied.")
                }
            }, {
                xtype: "button",
                text: "Read",
                handler: function () {
                    var b = localStorage.getItem("testing");
                    if (b) {
                        Ext.getCmp("output").setHtml("Exists!")
                    } else {
                        Ext.getCmp("output").setHtml("Nothing there!")
                    }
                }
            }, {
                id: "output",
                html: ""
            }]
        }]
    }
});
Ext.application({
    name: "Sencha",
    requires: ["Ext.MessageBox"],
    views: ["Main"],
    icon: {
        "57": "resources/icons/Icon.png",
        "72": "resources/icons/Icon~ipad.png",
        "114": "resources/icons/Icon@2x.png",
        "144": "resources/icons/Icon~ipad@2x.png"
    },
    isIconPrecomposed: true,
    startupImage: {
        "320x460": "resources/startup/320x460.jpg",
        "640x920": "resources/startup/640x920.png",
        "768x1004": "resources/startup/768x1004.png",
        "748x1024": "resources/startup/748x1024.png",
        "1536x2008": "resources/startup/1536x2008.png",
        "1496x2048": "resources/startup/1496x2048.png"
    },
    launch: function () {
        Ext.fly("appLoadingIndicator").destroy();
        Ext.Viewport.add(Ext.create("Sencha.view.Main"))
    }
});