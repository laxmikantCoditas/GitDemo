Ext.define('Qa.Tester.store.Tests', {
   
    extend: 'Ext.data.TreeStore',
    
    model: 'Qa.Tester.model.Test',
    
    root: {
        expanded: true,
        
        children: []
    },
    
    snapshot: [],
    
    failed: [],
    
    filteringFailed: true,
    
    expanded: false,
    
    expandAll: function() {
        var me = this;
        if (!me.expanded) {
            me.getRootNode().expandChildren(true);
            me.expanded = true;
        }
    },
    
    collapseAll: function() {
        var me = this;
        if (me.expanded) {
            me.getRootNode().collapseChildren(true);
            me.expanded = false;
        }
    },
    
    getOnlyFailed: function(item) {
        var me = this,
            failed,
            children, i, length, childItem, prop;
            
        if (!item.passed && item.children) {
            failed = {};
            for (prop in item) {
                failed[prop] = item[prop];
            }
            children = item.children;
            
            failed.children = [];
            
            length = children.length;
            for (i = 0; i < length; i++) {
                childItem = me.getOnlyFailed(children[i]);
                if (childItem) {
                    failed.children.push(childItem);
                }
            }
            
        } else if (!item.passed || item.type == 'expect') {
            failed = item;
        }
        return failed;
    },
    
    // Todo: Remove when extjs 4.1, Ext.data.Model pollute the rawData :/
    temporaryClone: function(obj) {
          return Ext.decode(Ext.encode(obj));
    },
    
    addSuite: function(suite) {
        var me = this,
            node;
 
        me.snapshot.push(suite);
        if (!me.filteringFailed) {
            node = me.getRootNode().appendChild(me.temporaryClone(suite));
            if (me.expanded) {
                node.expand(true);
            }
        }
        me.addFailedSuite(me.getOnlyFailed(suite));
    },
    
    addFailedSuite: function(suite) {
        var me = this,
            node;
        if (suite) {
            me.failed.push(suite);
            if (me.filteringFailed) {
                node = me.getRootNode().appendChild(me.temporaryClone(suite));
                if (me.expanded) {
                    node.expand(true);
                }
            }
        }
    },
    
    unfilterFailed: function() {
        var me = this,
            rootNode = me.getRootNode();
            
        me.filteringFailed = false;
        
        rootNode.removeAll();

        rootNode.appendChild(me.temporaryClone(me.snapshot), true);

        if (me.expanded) {
            rootNode.expandChildren(true);
        } 
    },
    
    filterFailed: function() {
        var me = this,
            rootNode = me.getRootNode();
        me.filteringFailed = true;
        
        rootNode.removeAll();

        rootNode.appendChild(me.temporaryClone(me.failed), true);

        if (me.expanded) {
            rootNode.expandChildren(true);
        } 
    }

});