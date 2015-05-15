Ext.require('*');
Ext.onReady(function() {
    Ext.define('ForumThread', {
        extend: 'Ext.data.Model',
        fields: [
            'title', 'forumtitle', 'forumid', 'username',
            {name: 'replycount', type: 'int'},
            {name: 'lastpost', mapping: 'lastpost', type: 'date', dateFormat: 'timestamp'},
            'lastposter', 'excerpt', 'threadid'
        ],
        idProperty: 'threadid',
        proxy: {
            // load using script tags for cross domain, if the data in on the same domain as
            // this page, an HttpProxy would be better
            type: 'jsonp',
            url: 'https://www.sencha.com/forum/topics-browse-remote.php',
            reader: {
                rootProperty: 'topics',
                totalProperty: 'totalCount'
            },
            // sends single sort as multi parameter
            simpleSortMode: true
        },
        toString: function() {
            return this.get('threadid') + ' ' + this.get('title');
        }
    });

    Ext.application({
        name : 'PagedComboBoxIssue',
        requires:[
          'Ext.container.Viewport',
          'Ext.form.field.ComboBox',  
          'Ext.form.Panel'
        ],
        autoCreateViewport:false,
        launch : function() {
            var thread=Ext.create('ForumThread',{
                dateline: "1296097557",
                excerpt: "Hi, does Extjs 4.0 will fully support IE9? in other words if application developed in Extjs 4.0 and tested using IE9 is there anything expected to be ...",
                forumid: "6",
                forumtitle: "Ext: Open Discussion",
                lastpost: 1305841535,
                lastposter: "edspencer",
                postid: "565503",
                replycount: 30,
                threadid: "122352",
                title: "Extjs 4.0 support for IE9",
                userid: "48017",
                username: "extdev22"
            });

    // Create the combo box, attached to the states data store
            Ext.create('Ext.container.Viewport', {
                layout: 'border',
                items:[{
                    region: 'center',
                    xtype:'form',
                    id: 'myView',
                    title:'Paged ComboBox Issue',
                    defaults: {
                        width: 400,
                        labelWidth: 130
                    },
                    viewModel:{
                        stores:{
                            store:{
                                autoLoad:false,
                                pageSize: 20,
                                model: 'ForumThread',
                                sorters: [{
                                    property: 'lastpost',
                                    direction: 'DESC'
                                }]
                            },
                            store2:{
                                autoLoad:false,
                                pageSize: 1,
                                model: 'ForumThread',
                                sorters: [{
                                    property: 'lastpost',
                                    direction: 'DESC'
                                }]
                            }
                        },
                        data:{
                            thread:thread
                        }
                    },
                    items:[{
                        xtype:'combobox',
                        fieldLabel: 'Thread',
                        minChars: 3,
                        queryMode: 'remote',
                        queryDelay: 100,
                        anyMatch: true,
                        valuePublishEvent: 'select',
                        displayField: 'title',
                        valueField: 'threadid',
                        pageSize: 20,
                        grow:true,
                        matchFieldWidth: false,
                        bind:{
                            store: '{store}',
                            selection: '{thread}'
                        },
                        autoLoadOnValue: true,
                        listeners:{
                            select: function(combo, record) {
                                console.log('First combo selected ' + record);
                                Ext.getCmp('myView').getViewModel().setData({
                                    thread: record
                                });
                            }
                        }
                    },  {
                        xtype:'combobox',
                        fieldLabel: 'Thread don\'t work',
                        minChars: 3,
                        queryMode: 'remote',
                        queryDelay: 100,
                        anyMatch: true,
                        pageSize: 20,
                        grow:true,
                        matchFieldWidth: false,
                        valuePublishEvent: 'select',
                        displayField: 'title',
                        valueField: 'threadid', 
                        bind:{
                            store: '{store2}',
                            selection: '{thread}'
                        },
                        autoLoadOnValue: true,
                        listeners:{
                            'select':function(combo,record){
                                console.log('Second combo selected ' + record);
                            }
                        }
                    }]
                }]
            });
        }
    });
});