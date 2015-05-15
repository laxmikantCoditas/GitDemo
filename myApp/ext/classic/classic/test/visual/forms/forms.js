Ext.onReady(function () {
    Ext.create('Ext.form.Panel', {
        frame: true,
        title: 'Simple Form',
        bodyStyle:'padding:5px 5px 0',
        style: {margin: '5px'},
        renderTo: Ext.getBody(),
        width: 600,
        fieldDefaults: {
            msgTarget: 'side',
            labelWidth: 75
        },
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },

        items: [{
            fieldLabel: 'First Name',
            name: 'first',
            allowBlank:false
        },{
            fieldLabel: 'Last Name',
            name: 'last'
        },{
            fieldLabel: 'Company',
            name: 'company'
        }, {
            fieldLabel: 'Number',
            xtype: 'numberfield'
        }, {
            xtype: 'timefield',
            fieldLabel: 'Time',
            name: 'time',
            minValue: '8:00am',
            maxValue: '6:00pm'
        }, {
            xtype: 'filefield',
            fieldLabel: 'File'
        }],

        buttons: [{
            text: 'Save'
        },{
            text: 'Cancel'
        }]
    });
    
    Ext.create('Ext.form.Panel', {

        title: 'Simple Form with FieldSets',
        bodyStyle:'padding:5px 5px 0',
        style: {margin: '5px'},
        width: 600,
        fieldDefaults: {
            msgTarget: 'side',
            labelWidth: 75
        },
        defaults: {
            anchor: '100%'
        },
        renderTo: Ext.getBody(),
        items: [{
            xtype:'fieldset',
            title: 'Phone Number',
            collapsible: true,
            defaultType: 'textfield',
            layout: 'anchor',
            defaults: {
                anchor: '100%'
            },
            items :[{
                fieldLabel: 'Home',
                name: 'home',
                value: '(888) 555-1212'
            },{
                fieldLabel: 'Business',
                name: 'business'
            },{
                fieldLabel: 'Mobile',
                name: 'mobile'
            },{
                fieldLabel: 'Fax',
                name: 'fax'
            }]
        }],

        buttons: [{
            text: 'Save'
        },{
            text: 'Cancel'
        }]
    });
    
    Ext.create('Ext.form.Panel', {
        title: 'Multi Column, Nested Layouts and Anchoring',
        bodyStyle:'padding:5px 5px 0',
        style: {margin: '5px'},
        width: 600,
        fieldDefaults: {
            labelAlign: 'top',
            msgTarget: 'side'
        },
        frame:true,
        renderTo: Ext.getBody(),
        items: [{
            xtype: 'container',
            anchor: '100%',
            layout:'column',
            items:[{
                xtype: 'container',
                columnWidth:.5,
                layout: 'anchor',
                items: [{
                    xtype:'textfield',
                    fieldLabel: 'First Name',
                    name: 'first',
                    anchor:'96%'
                }, {
                    xtype:'textfield',
                    fieldLabel: 'Company',
                    name: 'company',
                    anchor:'96%'
                }]
            },{
                xtype: 'container',
                columnWidth:.5,
                layout: 'anchor',
                items: [{
                    xtype:'textfield',
                    fieldLabel: 'Last Name',
                    name: 'last',
                    anchor:'100%'
                },{
                    xtype:'textfield',
                    fieldLabel: 'Email',
                    name: 'email',
                    vtype:'email',
                    anchor:'100%'
                }]
            }]
        }],

        buttons: [{
            text: 'Save'
        },{
            text: 'Cancel'
        }]
    });
        
    Ext.create('Ext.form.Panel', {
        title: 'Inner Tabs',
        bodyStyle:'padding:5px',
        style: {margin: '5px'},
        width: 600,
        renderTo: Ext.getBody(),
        fieldDefaults: {
            labelAlign: 'top',
            msgTarget: 'side'
        },
        defaults: {
            anchor: '100%'
        },

        items: [{
            layout:'column',
            border:false,
            items:[{
                columnWidth:.5,
                border:false,
                layout: 'anchor',
                defaultType: 'textfield',
                items: [{
                    fieldLabel: 'First Name',
                    name: 'first',
                    anchor:'95%'
                }, {
                    fieldLabel: 'Company',
                    name: 'company',
                    anchor:'95%'
                }]
            },{
                columnWidth:.5,
                border:false,
                layout: 'anchor',
                defaultType: 'textfield',
                items: [{
                    fieldLabel: 'Last Name',
                    name: 'last',
                    anchor:'95%'
                },{
                    fieldLabel: 'Email',
                    name: 'email',
                    vtype:'email',
                    anchor:'95%'
                }]
            }]
        },{
            xtype:'tabpanel',
            plain:true,
            activeTab: 0,
            height:235,
            defaults:{bodyStyle:'padding:10px'},
            items:[{
                title:'Personal Details',
                defaults: {width: 230},
                defaultType: 'textfield',

                items: [{
                    fieldLabel: 'First Name',
                    name: 'first',
                    allowBlank:false,
                    value: 'Jamie'
                },{
                    fieldLabel: 'Last Name',
                    name: 'last',
                    value: 'Avins'
                },{
                    fieldLabel: 'Company',
                    name: 'company',
                    value: 'Ext JS'
                }, {
                    fieldLabel: 'Email',
                    name: 'email',
                    vtype:'email'
                }]
            },{
                title:'Phone Numbers'
            },{
                title: 'Biography'
            }]
        }]
    });
    
    
    /*====================================================================
     * Individual checkbox/radio examples
     *====================================================================*/

    // Using checkbox/radio groups will generally be more convenient and flexible than
    // using individual checkbox and radio controls, but this shows that you can
    // certainly do so if you only have a single control at a time.
    var individual = {
        xtype: 'container',
        layout: 'hbox',
        margin: '0 0 10',
        items: [{
            xtype: 'fieldset',
            flex: 1,
            title: 'Individual Checkboxes',
            defaultType: 'checkbox', // each item will be a checkbox
            layout: 'anchor',
            defaults: {
                anchor: '100%',
                hideEmptyLabel: false
            },
            items: [{
                xtype: 'textfield',
                name: 'txt-test1',
                fieldLabel: 'Alignment Test'
            }, {
                fieldLabel: 'Favorite Animals',
                boxLabel: 'Dog',
                name: 'fav-animal-dog',
                inputValue: 'dog'
            }, {
                boxLabel: 'Cat',
                name: 'fav-animal-cat',
                inputValue: 'cat'
            }, {
                checked: true,
                boxLabel: 'Monkey',
                name: 'fav-animal-monkey',
                inputValue: 'monkey'
            }]
        }, {
            xtype: 'component',
            width: 10
        }, {
            xtype: 'fieldset',
            flex: 1,
            title: 'Individual Radios',
            defaultType: 'radio', // each item will be a radio button
            layout: 'anchor',
            defaults: {
                anchor: '100%',
                hideEmptyLabel: false
            },
            items: [{
                xtype: 'textfield',
                name: 'txt-test2',
                fieldLabel: 'Alignment Test'
            }, {
                checked: true,
                fieldLabel: 'Favorite Color',
                boxLabel: 'Red',
                name: 'fav-color',
                inputValue: 'red'
            }, {
                boxLabel: 'Blue',
                name: 'fav-color',
                inputValue: 'blue'
            }, {
                boxLabel: 'Green',
                name: 'fav-color',
                inputValue: 'green'
            }]
        }]
    };


    /*====================================================================
     * CheckGroup example
     *====================================================================*/
    var checkGroup = {
        xtype: 'fieldset',
        title: 'Checkbox Groups (initially collapsed)',
        layout: 'anchor',
        defaults: {
            anchor: '100%',
            labelStyle: 'padding-left:4px;'
        },
        collapsible: true,
        collapsed: true,
        items: [{
            xtype: 'textfield',
            name: 'txt-test3',
            fieldLabel: 'Alignment Test'
        },{
            // Use the default, automatic layout to distribute the controls evenly
            // across a single row
            xtype: 'checkboxgroup',
            fieldLabel: 'Auto Layout',
            cls: 'x-check-group-alt',
            items: [
                {boxLabel: 'Item 1', name: 'cb-auto-1'},
                {boxLabel: 'Item 2', name: 'cb-auto-2', checked: true},
                {boxLabel: 'Item 3', name: 'cb-auto-3'},
                {boxLabel: 'Item 4', name: 'cb-auto-4'},
                {boxLabel: 'Item 5', name: 'cb-auto-5'}
            ]
        },{
            xtype: 'checkboxgroup',
            fieldLabel: 'Single Column',
            // Put all controls in a single column with width 100%
            columns: 1,
            items: [
                {boxLabel: 'Item 1', name: 'cb-col-1'},
                {boxLabel: 'Item 2', name: 'cb-col-2', checked: true},
                {boxLabel: 'Item 3', name: 'cb-col-3'}
            ]
        },{
            xtype: 'checkboxgroup',
            fieldLabel: 'Multi-Column (horizontal)',
            cls: 'x-check-group-alt',
            // Distribute controls across 3 even columns, filling each row
            // from left to right before starting the next row
            columns: 3,
            items: [
                {boxLabel: 'Item 1', name: 'cb-horiz-1'},
                {boxLabel: 'Item 2', name: 'cb-horiz-2', checked: true},
                {boxLabel: 'Item 3', name: 'cb-horiz-3'},
                {boxLabel: 'Item 4', name: 'cb-horiz-4'},
                {boxLabel: 'Item 5', name: 'cb-horiz-5'}
            ]
        },{
            xtype: 'checkboxgroup',
            fieldLabel: 'Multi-Column (vertical)',
            // Distribute controls across 3 even columns, filling each column
            // from top to bottom before starting the next column
            columns: 3,
            vertical: true,
            items: [
                {boxLabel: 'Item 1', name: 'cb-vert-1'},
                {boxLabel: 'Item 2', name: 'cb-vert-2', checked: true},
                {boxLabel: 'Item 3', name: 'cb-vert-3'},
                {boxLabel: 'Item 4', name: 'cb-vert-4'},
                {boxLabel: 'Item 5', name: 'cb-vert-5'}
            ]
        },{
            xtype: 'checkboxgroup',
            fieldLabel: 'Multi-Column<br />(custom widths)',
            cls: 'x-check-group-alt',
            // Specify exact column widths (could also include float values for %)
            columns: [100, 100],
            vertical: true,
            items: [
                {boxLabel: 'Item 1', name: 'cb-custwidth', inputValue: 1},
                {boxLabel: 'Item 2', name: 'cb-custwidth', inputValue: 2, checked: true},
                {boxLabel: 'Item 3', name: 'cb-custwidth', inputValue: 3},
                {boxLabel: 'Item 4', name: 'cb-custwidth', inputValue: 4},
                {boxLabel: 'Item 5', name: 'cb-custwidth', inputValue: 5}
            ]
        },{
            xtype: 'checkboxgroup',
            fieldLabel: 'Custom Layout<br />(w/ validation)',
            allowBlank: false,
            msgTarget: 'side',
            autoFitErrors: false,
            anchor: '-18',
            // You can change the 'layout' to anything you want, and include any nested
            // container structure, for complete layout control. In this example we only
            // want one item in the middle column, which would not be possible using the
            // default 'checkboxgroup' layout's columns config.  We also want to put
            // headings at the top of each column.
            layout: 'column',
            defaultType: 'container',
            items: [{
                columnWidth: .25,
                items: [
                    {xtype: 'component', html: 'Heading 1', cls:'x-form-check-group-label'},
                    {xtype: 'checkboxfield', boxLabel: 'Item 1', name: 'cb-cust-1'},
                    {xtype: 'checkboxfield', boxLabel: 'Item 2', name: 'cb-cust-2'}
                ]
            },{
                columnWidth: .5,
                items: [
                    {xtype: 'component', html: 'Heading 2', cls:'x-form-check-group-label'},
                    {xtype: 'checkboxfield', boxLabel: 'A long item just for fun', name: 'cb-cust-3'}
                ]
            },{
                columnWidth: .25,
                items: [
                    {xtype: 'component', html: 'Heading 3', cls:'x-form-check-group-label'},
                    {xtype: 'checkboxfield', boxLabel: 'Item 4', name: 'cb-cust-4'},
                    {xtype: 'checkboxfield', boxLabel: 'Item 5', name: 'cb-cust-5'}
                ]
            }]
        }]
    };

    /*====================================================================
     * RadioGroup examples
     *====================================================================*/
    // NOTE: These radio examples use the exact same options as the checkbox ones
    // above, so the comments will not be repeated.  Please see comments above for
    // additional explanation on some config options.

    var radioGroup = {
        xtype: 'fieldset',
        title: 'Radio Groups',
        layout: 'anchor',
        defaults: {
            anchor: '100%',
            labelStyle: 'padding-left:4px;'
        },
        collapsible: true,
        items: [{
            xtype: 'textfield',
            name: 'txt-test4',
            fieldLabel: 'Alignment Test'
        },{
            xtype: 'radiogroup',
            fieldLabel: 'Auto Layout',
            cls: 'x-check-group-alt',
            items: [
                {boxLabel: 'Item 1', name: 'rb-auto', inputValue: 1},
                {boxLabel: 'Item 2', name: 'rb-auto', inputValue: 2, checked: true},
                {boxLabel: 'Item 3', name: 'rb-auto', inputValue: 3},
                {boxLabel: 'Item 4', name: 'rb-auto', inputValue: 4},
                {boxLabel: 'Item 5', name: 'rb-auto', inputValue: 5}
            ]
        },{
            xtype: 'radiogroup',
            fieldLabel: 'Single Column',
            columns: 1,
            items: [
                {boxLabel: 'Item 1', name: 'rb-col', inputValue: 1},
                {boxLabel: 'Item 2', name: 'rb-col', inputValue: 2, checked: true},
                {boxLabel: 'Item 3', name: 'rb-col', inputValue: 3}
            ]
        },{
            xtype: 'radiogroup',
            fieldLabel: 'Multi-Column (horizontal)',
            cls: 'x-check-group-alt',
            columns: 3,
            items: [
                {boxLabel: 'Item 1', name: 'rb-horiz-1', inputValue: 1},
                {boxLabel: 'Item 2', name: 'rb-horiz-1', inputValue: 2, checked: true},
                {boxLabel: 'Item 3', name: 'rb-horiz-1', inputValue: 3},
                {boxLabel: 'Item 1', name: 'rb-horiz-2', inputValue: 1, checked: true},
                {boxLabel: 'Item 2', name: 'rb-horiz-2', inputValue: 2}
            ]
        },{
            xtype: 'radiogroup',
            fieldLabel: 'Multi-Column (vertical)',
            columns: 3,
            vertical: true,
            items: [
                {boxLabel: 'Item 1', name: 'rb-vert', inputValue: 1},
                {boxLabel: 'Item 2', name: 'rb-vert', inputValue: 2, checked: true},
                {boxLabel: 'Item 3', name: 'rb-vert', inputValue: 3},
                {boxLabel: 'Item 4', name: 'rb-vert', inputValue: 4},
                {boxLabel: 'Item 5', name: 'rb-vert', inputValue: 5}
            ]
        },{
            xtype: 'radiogroup',
            fieldLabel: 'Multi-Column<br />(custom widths)',
            cls: 'x-check-group-alt',
            columns: [100, 100],
            vertical: true,
            items: [
                {boxLabel: 'Item 1', name: 'rb-custwidth', inputValue: 1},
                {boxLabel: 'Item 2', name: 'rb-custwidth', inputValue: 2, checked: true},
                {boxLabel: 'Item 3', name: 'rb-custwidth', inputValue: 3},
                {boxLabel: 'Item 4', name: 'rb-custwidth', inputValue: 4},
                {boxLabel: 'Item 5', name: 'rb-custwidth', inputValue: 5}
            ]
        },{
            xtype: 'radiogroup',
            fieldLabel: 'Custom Layout<br />(w/ validation)',
            allowBlank: false,
            msgTarget: 'side',
            autoFitErrors: false,
            anchor: '-18',
            layout: 'column',
            defaultType: 'container',
            items: [{
                columnWidth: .25,
                items: [
                    {xtype: 'component', html: 'Heading 1', cls:'x-form-check-group-label'},
                    {xtype: 'radiofield', boxLabel: 'Item 1', name: 'rb-cust', inputValue: 1},
                    {xtype: 'radiofield', boxLabel: 'Item 2', name: 'rb-cust', inputValue: 2}
                ]
            },{
                columnWidth: .5,
                items: [
                    {xtype: 'component', html: 'Heading 2', cls:'x-form-check-group-label'},
                    {xtype: 'radiofield', boxLabel: 'A long item just for fun', name: 'rb-cust', inputValue: 3}
                ]
            },{
                columnWidth: .25,
                items: [
                    {xtype: 'component', html: 'Heading 3', cls:'x-form-check-group-label'},
                    {xtype: 'radiofield', boxLabel: 'Item 4', name: 'rb-cust', inputValue: 4},
                    {xtype: 'radiofield', boxLabel: 'Item 5', name: 'rb-cust', inputValue: 5}
                ]
            }]
        }]
    };


    // combine all that into one huge form
    var fp = Ext.create('Ext.FormPanel', {
        title: 'Check/Radio Groups Example',
        style: {margin: '5px'},
        frame: true,
        fieldDefaults: {
            labelWidth: 110
        },
        width: 600,
        renderTo: Ext.getBody(),
        bodyPadding: 10,
        items: [
            individual,
            checkGroup,
            radioGroup
        ]
    });
    
    Ext.create('Ext.form.Panel', {
        width: 600,
        height: 160,
        title: 'Sound Settings',
        style: {margin: '5px'},
        bodyPadding: 10,
        renderTo: Ext.getBody(),
        defaultType: 'sliderfield',
        defaults: {
            anchor: '95%'
        },
        items: [{
            fieldLabel: 'Sound Effects',
            value: 50,
            name: 'fx'
        },{
            fieldLabel: 'Ambient Sounds',
            value: 80,
            name: 'ambient'
        },{
            fieldLabel: 'Interface Sounds',
            value: 25,
            name: 'iface'
        }]
    });
    
    Ext.create('Ext.form.Panel', {
        border: false,
        frame: true,
        title: 'Pickers',
        renderTo: Ext.getBody(),
        style: {margin: '5px'},
        width : 600,
        layout: {
            type: 'hbox'
        },
        items: [
            {
                xtype: 'datepicker',
                value: new Date(1)
            }, {
                xtype: 'monthpicker',
                value: new Date(1),
                margin: '0 5 0 5'
            }, {
                xtype: 'colorpicker',
                value: '#FF0000',
                margin: '0 5 0 0'
            }, {
                xtype: 'boundlist',
                displayField: 'text',
                flex: 1,
                id: 'boundlist',
                store: {
                    fields: ['text'],
                    data: [
                        {text: 'White'},
                        {text: 'Red'},
                        {text: 'Yellow'},
                        {text: 'Green'},
                        {text: 'Brown'},
                        {text: 'Blue'},
                        {text: 'Pink'},
                        {text: 'Black'}
                    ]
                }
            }
        ]
    });

    Ext.getCmp('boundlist').select(1);
});