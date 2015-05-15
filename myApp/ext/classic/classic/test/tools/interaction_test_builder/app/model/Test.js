Ext.define('Qa.Tester.model.Test', {
    extend: 'Ext.data.Model',
    fields: [{
       name: 'children'
    },{
       name: 'text'
    },{
       name: 'description'
    },{
       name: 'message'
    },{
       name: 'startTime'
    },{
       name: 'endTime'
    },{
       name: 'type'
    },{
       name: 'hash'
    },{
       name: 'specsCount'
    },{
       name: 'suitesCount'
    },{
       name: 'failures'
    },{
       name: 'passed'
    },{
       name: 'loaded'
    },{
        name: 'iconCls',
        convert: function() {
            return 'no-icon';
        }
    },{
       name: 'leaf',
       convert: function(value, record) {
           var type = record.data.type;
           if (type == 'expect' || type == 'spec' && !record.raw.children) {
               return true;
           }
           return false;
       } 
     }]
});
