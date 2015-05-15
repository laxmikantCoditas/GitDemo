Ext.require('*');
Ext.onReady(function(){
    var floater, constrainedWin, constrainedWin2;
    Ext.util.Region.override({
        colors: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
        nextColor: 0,
        show: function(){
            var style = {
                display: 'block',
                position: 'absolute',
                top: this.top + 'px',
                left: this.left + 'px',
                height: ((this.bottom - this.top) + 1) + 'px',
                width: ((this.right - this.left) + 1) + 'px',
                opacity: 0.3,
                'pointer-events': 'none',
                'z-index': 9999999
            };
            if (!this.highlightEl) {
                style['background-color'] = this.colors[this.nextColor];
                Ext.util.Region.prototype.nextColor++;
                this.highlightEl = Ext.getBody().createChild({
                    style: style
                });
                if (this.nextColor >= this.colors.length) {
                    this.nextColor = 0;
                }
            } else {
                this.highlightEl.setStyle(style);
            }
        },
        hide: function(){
            if (this.highlightEl) {
                this.highlightEl.setStyle({
                    display: 'none'
                });
            }
        }
    });

    var win2 = Ext.create('widget.window', {
        height: 200,
        width: 400,
        animate: false,
        x: 450,
        y: 10,
        title: 'Constraining Window, plain: true',
        closable: false,
        plain: true,
        layout: 'fit',
        floating: {
            shadow: false
        },
        items: [floater = Ext.create('Ext.Component', {
            xtype: 'component',
            floating: {
                shadow: false
            },
            height: 50,
            width: 50,
            x: 175,
            y: 75
        }), constrainedWin = Ext.create('Ext.Window', {
            title: 'Constrained Window',
            width: 200,
            height: 100,
            x: 20,
            y: 20,
            constrain: true,
            layout: 'fit',
            items: {
                border: false
            }
        }), constrainedWin2 = Ext.create('Ext.Window', {
            title: 'Header-Constrained Win',
            width: 200,
            height: 100,
            x: 120,
            y: 120,
            constrainHeader: true,
            layout: 'fit',
            items: {
                border: false
            }
        }),{
            border: false
        }]
    });
    win2.show();
    floater.show();
    constrainedWin.show();
    constrainedWin2.show();

    Ext.create('Ext.Window', {
        title: 'Win1',
        width: 400,
        height: 100,
        animate: false,
        x: 10,
        y: 10,
        floating: {
            shadow: false
        },
        plain: true,
        headerPosition: 'left',
        layout: 'fit',
        items: {
            border: false
        }
    }).show();

    Ext.create('Ext.Window', {
        title: 'Win2',
        width: 400,
        height: 100,
        animate: false,
        x: 10,
        y: 120,
        floating: {
            shadow: false
        },
        headerPosition: 'right',
        layout: 'fit',
        items: {
            border: false
        }
    }).show();

    Ext.create('Ext.Window', {
        title: 'Win3',
        width: 400,
        height: 100,
        animate: false,
        x: 10,
        y: 230,
        plain: true,
        floating: {
            shadow: false
        },
        headerPosition: 'bottom',
        layout: 'fit',
        items: {
            border: false
        }
    }).show();
    
    Ext.create('widget.window', {
        title: 'Win4',
        closable: true,
        closeAction: 'hide',
        width: 400,
        height: 200,
        animate: false,
        y: 340,
        x: 10,
        layout: 'border',
        floating: {
            shadow: false
        },
        bodyStyle: 'padding: 5px;',
        items: [{
            region: 'west',
            title: 'Navigation',
            width: 100,
            split: true,
            collapsible: true,
            floatable: false
        }, {
            region: 'center',
            xtype: 'tabpanel',
            items: [{
                title: 'Bogus Tab',
                html: 'Hello world 1'
            }, {
                title: 'Another Tab',
                html: 'Hello world 2'
            }, {
                title: 'Closable Tab',
                html: 'Hello world 3',
                closable: true
            }]
        }]
    }).show();
    
  Ext.createWidget('window', {
        x: 450, 
        y: 270,
        width   : 400,
        title: 'Win5',
        bodyPadding: '5 5 0 5',
        floating: {
            shadow: false
        },
        collapsible: true,
        closable   : false,
        draggable  : false,
        animate: false,
        items: [
            {
                xtype : 'fieldset',
                title : 'Plain Fieldset',
                items: [
                    {
                        fieldLabel: 'TextField',
                        xtype     : 'textfield',
                        name      : 'someField',
                        emptyText : 'Enter a value',
                        anchor    : '100%'
                    },
                    {
                        fieldLabel: 'NumberField',
                        xtype     : 'numberfield',
                        name      : 'number',
                        emptyText : '(This field is optional)',
                        allowBlank: true,
                        anchor    : '100%'
                    },
                    {
                        fieldLabel: 'TextArea',
                        xtype     : 'textareafield',
                        name      : 'message',
                        cls       : 'x-form-valid',
                        value     : 'This field is hard-coded to have the "valid" style (it will require some code changes to add/remove this style dynamically)',
                        anchor    : '100%'
                    },
                    {
                        fieldLabel: 'Checkboxes',
                        xtype: 'checkboxgroup',
                        columns: [100,100],
                        items: [
                            {boxLabel: 'Foo', checked: true,id:'fooChk',inputId:'fooChkInput'},
                            {boxLabel: 'Bar'}
                        ]
                    },
                    {
                        xtype: 'radiogroup',
                        columns: [100,100],
                        fieldLabel: 'Radio Group',
                        items: [
                            {boxLabel: 'Radion A', checked: true, name: 'radiogrp2'},
                            {boxLabel: 'Radion B', name: 'radiogrp2'}
                        ]
                    }
                ]
            }
        ],
        
        buttons: [
            {
                text   : 'Submit'
            }
        ]
    }).show();
});
