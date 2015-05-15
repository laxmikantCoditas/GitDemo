// Ext.require('Ext.diag.layout.ContextItem');

var testCase = {
    run: function () {
        var win = Ext.create('Ext.Window', {
                title: "Revision",
                id          : 'revwin',
                layout      : 'fit',
                frame       : false,
                width       : '90%',
                height      : '90%',
                closeAction : 'hide',
                closable    : true,
                modal       : true,
                x: '5%',
                y: '5%',
                plain       : true,
                autoShow    : true,
                monitorResize: true,
                items       : [
                    { xtype: 'component', style: 'background-color:red' }
                ]                
        });
    }
};
