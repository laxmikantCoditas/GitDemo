/**
 * Created by Ilya Ilievski.
 */
Ext.define('Bugs.view.BuggyDataItem', {
    extend:'Ext.dataview.component.DataItem',
    xtype: 'buggydataitem',

    config:{
        dataMap:{

            getName: {
                setHtml:'name'
            }
        },

        name:{

        },
        actionButton: {
            cls     : 'action-button',
            docked  : 'right',
            ui      : 'plain',
            iconCls : 'add',
            iconMask: true
        },
        layout:{
            type: 'hbox',
            align: 'center'
        },
        style:'border: 1px solid #ddd',
        control:{
            '.action-button': {
                tap: 'onActionTap',
                element:'element'
            }
        }
    },

    onActionTap:function() {
        //The store associated with this dataview.
        var store = Ext.getStore('Users');
        store.clearFilter();
        //Bug happens when we apply filters.
        store.filter('number', 3);
        console.log('onActionTap', this.getRecord().get('name'));
    },

    applyName: function(config) {
        return Ext.factory(config, Ext.Component, this.getName());
    },

    updateName: function(newName, oldName) {
        if (newName) {
            this.add(newName);
        }

        if (oldName) {
            this.remove(oldName);
        }
    },

    applyActionButton: function(config) {
        return Ext.factory(config, Ext.Button, this.getActionButton());
    },

    updateActionButton: function(newName, oldName) {
        if (newName) {
            this.add(newName);
        }

        if (oldName) {
            this.remove(oldName);
        }
    }
});