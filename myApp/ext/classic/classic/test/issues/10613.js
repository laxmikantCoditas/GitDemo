Ext.define('MainPage', {
    extend: 'Ext.container.Container',
    alias : 'widget.MainPage',
    itemId: 'mainPage',
    layout: {
    type: 'fit'
    },

initComponent: function() {
    var me = this;
    Ext.apply(me, {
    items: [{
    xtype : 'form',
    itemId : 'myFormId',
    items: [
    {
    xtype: 'ErrorContainer'
    }
],
listeners : {
    fielderrorchange : {
    fn : me.handleFieldErrorChange
    }
}
}]
});
me.callParent(arguments);
},

handleFieldErrorChange: function() {
    console.log('Error change event fired');
    }
});

Ext.define('ErrorContainer', {
    extend : 'Ext.form.FieldContainer',
    alias : 'widget.ErrorContainer',

    initComponent: function() {
    var me = this;
    Ext.apply(me, {
    items: [
    {
    xtype: 'textfield',
    fieldLabel: 'Error Field Container',
    listeners: {
    focus : {
    fn : me.applyValidation,
    scope: me
    },
blur : {
    fn : me.removeValidation,
    scope: me
    },
}
},
                        {
                            xtype: 'label',
                            margin: '0 40 0 0',
                            text : 'Error is applied to field container on focus of text field and removed on blur of text field.'
                            }
]
});
me.callParent(arguments);
},

/**
* Applies validation to fieldContainer
*/
applyValidation: function(errorMsg) {
    console.log('Error Message applied');
    var me = this;
    me.setActiveError('Invalid Field');
    me.doLayout();
    },
/**
* This method removes validation
*/
removeValidation: function(focus) {
    console.log('Error Message removed');
    var me = this;
    me.unsetActiveError();
    me.doLayout();
    }
});

Ext.onReady(function () {


    var mainPage = Ext.create('MainPage',{
    renderTo: Ext.getBody()
    });
});
