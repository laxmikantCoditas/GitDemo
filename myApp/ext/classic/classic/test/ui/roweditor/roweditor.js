Ext.define('Person', {
    extend: 'Ext.data.Model',
    fields: ['name', 'age', 'dob'] 
});

Ext.onReady(function(){
    
    var edit = Ext.create('Ext.grid.plugin.RowEditing', {
        errorSummary: false
    });
    
    function printCompSize() {
        console.log(Ext.ComponentManager.all.getCount());
    }
    
    printCompSize();
    var grid = Ext.create('Ext.grid.Panel', {
        width: 600,
        height: 300,
        renderTo: document.body,
        selModel: Ext.create('Ext.selection.CheckboxModel', {
            editRenderer: function(){
                return '';
            }
        }),
        plugins: [edit],
        bbar: [{
            text: 'Change age to textfield',
            handler: function(){
                Ext.getCmp('ageCol').setEditor({
                    xtype: 'textfield'
                });
            } 
        }, {
            text: 'Clear age',
            handler: function(){
                Ext.getCmp('ageCol').setEditor(null);
            }
        }, {
            text: 'Destroy',
            handler: function(){
                grid.destroy();
                printCompSize();
            }
        }],
        store: {
            model: 'Person',
            data: [{
                name: 'Alex',
                age: 30,
                dob: Ext.Date.add(new Date(), Ext.Date.YEAR, -30)
            }, {
                name: 'Brian',
                age: 20,
                dob: Ext.Date.add(new Date(), Ext.Date.YEAR, -20)
            }, {
                name: 'Christine',
                age: 10,
                dob: Ext.Date.add(new Date(), Ext.Date.YEAR, -10)
            }, {
                name: 'Dan',
                age: 50,
                dob: Ext.Date.add(new Date(), Ext.Date.YEAR, -50)
            }]
        },
        columns: [{
            width: 50,
            xtype: 'actioncolumn',
            items: [{
                icon: 'http://famfamfam.com/lab/icons/silk/icons/application_form.png'
            }]
        },{
            flex: 1,
            dataIndex: 'name',
            text: 'Name',
            editor: {
                allowBlank: false,
                xtype: 'textfield'
            }
        }, {
            id: 'ageCol',
            flex: 1,
            dataIndex: 'age',
            text: 'Age',
            renderer: function(v){
                return v + ' years old';    
            },
            editor: {
                xtype: 'numberfield'
            }
        }, {
            xtype: 'datecolumn',
            format: 'Y-m-d',
            flex: 1,
            dataIndex: 'dob',
            text: 'D.O.B',
            editRenderer: Ext.util.Format.dateRenderer('d-m-Y')
        }]  
    });
    
});
