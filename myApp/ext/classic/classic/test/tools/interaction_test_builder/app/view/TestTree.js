Ext.define('Qa.Tester.view.TestTree', {
    
    extend: 'Ext.tree.Panel',
    
    alias: 'widget.t-test-tree',
    
    title: 'Status: idle.',
    
    store: 'Tests',
    
    cls: 't-test-tree',
    
    rootVisible: false,
        
    useArrows: true,
    
    hideHeaders: true,
    
    columns: [{
        xtype: 'treecolumn', //this is so we know which column will show the tree
        text: 'Description',
        flex: 1,
        renderer: function(value, meta, record) {
            var type = record.data.type,
                text, time;
            if (type == 'expect'){
                text =  record.data.message;
            } else {
                time = record.data.endTime - record.data.startTime;
                if (type == 'suite') {
                    text = record.data.description + ', ' + 
                        record.data.specsCount + ' spec(s) with ' + 
                        record.data.failures + ' failure(s) ran in ' + time + 'ms.';
                } else if (type == 'spec') {
                    text = 'it ' + record.data.description + ' ran in ' + time + 'ms.';
                }
            }
            return '<div class="jasmine-result jasmine-result-'+ type + 
                   ' jasmine-result-' + record.data.passed + '">' + text + '</div>';
        }
    }],
    
    dockedItems: [{
        xtype: 'toolbar',
        position: 'top',
        items: [{
            xtype: 'checkbox',
            boxLabel: 'Expand All',
            handler: function(cbx, checked) {
                if (checked) {
                    Ext.StoreManager.lookup('Tests').expandAll();
                } else {
                    Ext.StoreManager.lookup('Tests').collapseAll();
                }
            }
        },{
            xtype: 'checkbox',
            boxLabel: "Show all",
            handler: function(cbx, checked) {
                var testsStore = Ext.StoreManager.lookup('Tests');
                if (checked) {
                    testsStore.unfilterFailed();
                } else {
                    testsStore.filterFailed();
                }
            }
        }]
    }]
});
