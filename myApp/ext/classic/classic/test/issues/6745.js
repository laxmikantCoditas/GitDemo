Ext.onReady(function(){

    Ext.create("Ext.panel.Panel",{
        title: "Wait mask should flash momentarily on Save",
        width:  400,
        height: 400,
        renderTo: Ext.getBody(),
        bodyStyle: "background:#DFE9F6",
        layout: "fit",
        margin: 10,
        defaults:{
            xtype: "form",
            bodyPadding: 5,
            bodyStyle: "background:#DFE9F6",
            url: "6745.json",
            defaultType: "textfield",
            fieldDefaults:{
                labelWidth: 80,
                anchor: "0"
            },                    
            bbar:[{
                text:"Save",handler:function(){
                    var f=this.up("form").getForm();
                    if (f.isValid()) {
                        f.submit({
                            waitMsg: "Save",
                            waitTitle: "Save"
                        });
                    }
                }
            }]
        },
        items: {
            header: false,
            border: false,
            items:[
                {fieldLabel:"field1",name:"field1"},
                {fieldLabel:"field2",name:"field2",msgTarget:"side"},
                {fieldLabel:"field3",name:"field3",msgTarget:"title"},
                {fieldLabel:"field4",name:"field4",msgTarget:"under"},
                {fieldLabel:"field5",name:"field5",msgTarget:"label1"},
                {xtype:"label",id:"label1"}
            ]
        }
    });
});