Ext.require('*');
Ext.onReady(function() {
    Ext.QuickTips.init();

    var columns = new Array();
    for (var i = 0; i < 30; i++) {
        columns.push({
            name: ('Column' + i),
            type: 'String'
        });
    }

    Ext.define('TestModel', {
        extend: 'Ext.data.Model',
        fields: columns
    });

    var dataJson = '[{"Column0":"0,0","Column1":"1,0","Column2":"2,0","Column3":"3,0","Column4":"4,0","Column5":"5,0","Column6":"6,0","Column7":"7,0","Column8":"8,0","Column9":"9,0","Column10":"10,0","Column11":"11,0","Column12":"12,0","Column13":"13,0","Column14":"14,0","Column15":"15,0","Column16":"16,0","Column17":"17,0","Column18":"18,0","Column19":"19,0","Column20":"20,0","Column21":"21,0","Column22":"22,0","Column23":"23,0","Column24":"24,0","Column25":"25,0","Column26":"26,0","Column27":"27,0","Column28":"28,0","Column29":"29,0"},{"Column0":"0,1","Column1":"1,1","Column2":"2,1","Column3":"3,1","Column4":"4,1","Column5":"5,1","Column6":"6,1","Column7":"7,1","Column8":"8,1","Column9":"9,1","Column10":"10,1","Column11":"11,1","Column12":"12,1","Column13":"13,1","Column14":"14,1","Column15":"15,1","Column16":"16,1","Column17":"17,1","Column18":"18,1","Column19":"19,1","Column20":"20,1","Column21":"21,1","Column22":"22,1","Column23":"23,1","Column24":"24,1","Column25":"25,1","Column26":"26,1","Column27":"27,1","Column28":"28,1","Column29":"29,1"},{"Column0":"0,2","Column1":"1,2","Column2":"2,2","Column3":"3,2","Column4":"4,2","Column5":"5,2","Column6":"6,2","Column7":"7,2","Column8":"8,2","Column9":"9,2","Column10":"10,2","Column11":"11,2","Column12":"12,2","Column13":"13,2","Column14":"14,2","Column15":"15,2","Column16":"16,2","Column17":"17,2","Column18":"18,2","Column19":"19,2","Column20":"20,2","Column21":"21,2","Column22":"22,2","Column23":"23,2","Column24":"24,2","Column25":"25,2","Column26":"26,2","Column27":"27,2","Column28":"28,2","Column29":"29,2"},{"Column0":"0,3","Column1":"1,3","Column2":"2,3","Column3":"3,3","Column4":"4,3","Column5":"5,3","Column6":"6,3","Column7":"7,3","Column8":"8,3","Column9":"9,3","Column10":"10,3","Column11":"11,3","Column12":"12,3","Column13":"13,3","Column14":"14,3","Column15":"15,3","Column16":"16,3","Column17":"17,3","Column18":"18,3","Column19":"19,3","Column20":"20,3","Column21":"21,3","Column22":"22,3","Column23":"23,3","Column24":"24,3","Column25":"25,3","Column26":"26,3","Column27":"27,3","Column28":"28,3","Column29":"29,3"},{"Column0":"0,4","Column1":"1,4","Column2":"2,4","Column3":"3,4","Column4":"4,4","Column5":"5,4","Column6":"6,4","Column7":"7,4","Column8":"8,4","Column9":"9,4","Column10":"10,4","Column11":"11,4","Column12":"12,4","Column13":"13,4","Column14":"14,4","Column15":"15,4","Column16":"16,4","Column17":"17,4","Column18":"18,4","Column19":"19,4","Column20":"20,4","Column21":"21,4","Column22":"22,4","Column23":"23,4","Column24":"24,4","Column25":"25,4","Column26":"26,4","Column27":"27,4","Column28":"28,4","Column29":"29,4"},{"Column0":"0,5","Column1":"1,5","Column2":"2,5","Column3":"3,5","Column4":"4,5","Column5":"5,5","Column6":"6,5","Column7":"7,5","Column8":"8,5","Column9":"9,5","Column10":"10,5","Column11":"11,5","Column12":"12,5","Column13":"13,5","Column14":"14,5","Column15":"15,5","Column16":"16,5","Column17":"17,5","Column18":"18,5","Column19":"19,5","Column20":"20,5","Column21":"21,5","Column22":"22,5","Column23":"23,5","Column24":"24,5","Column25":"25,5","Column26":"26,5","Column27":"27,5","Column28":"28,5","Column29":"29,5"},{"Column0":"0,6","Column1":"1,6","Column2":"2,6","Column3":"3,6","Column4":"4,6","Column5":"5,6","Column6":"6,6","Column7":"7,6","Column8":"8,6","Column9":"9,6","Column10":"10,6","Column11":"11,6","Column12":"12,6","Column13":"13,6","Column14":"14,6","Column15":"15,6","Column16":"16,6","Column17":"17,6","Column18":"18,6","Column19":"19,6","Column20":"20,6","Column21":"21,6","Column22":"22,6","Column23":"23,6","Column24":"24,6","Column25":"25,6","Column26":"26,6","Column27":"27,6","Column28":"28,6","Column29":"29,6"},{"Column0":"0,7","Column1":"1,7","Column2":"2,7","Column3":"3,7","Column4":"4,7","Column5":"5,7","Column6":"6,7","Column7":"7,7","Column8":"8,7","Column9":"9,7","Column10":"10,7","Column11":"11,7","Column12":"12,7","Column13":"13,7","Column14":"14,7","Column15":"15,7","Column16":"16,7","Column17":"17,7","Column18":"18,7","Column19":"19,7","Column20":"20,7","Column21":"21,7","Column22":"22,7","Column23":"23,7","Column24":"24,7","Column25":"25,7","Column26":"26,7","Column27":"27,7","Column28":"28,7","Column29":"29,7"},{"Column0":"0,8","Column1":"1,8","Column2":"2,8","Column3":"3,8","Column4":"4,8","Column5":"5,8","Column6":"6,8","Column7":"7,8","Column8":"8,8","Column9":"9,8","Column10":"10,8","Column11":"11,8","Column12":"12,8","Column13":"13,8","Column14":"14,8","Column15":"15,8","Column16":"16,8","Column17":"17,8","Column18":"18,8","Column19":"19,8","Column20":"20,8","Column21":"21,8","Column22":"22,8","Column23":"23,8","Column24":"24,8","Column25":"25,8","Column26":"26,8","Column27":"27,8","Column28":"28,8","Column29":"29,8"},{"Column0":"0,9","Column1":"1,9","Column2":"2,9","Column3":"3,9","Column4":"4,9","Column5":"5,9","Column6":"6,9","Column7":"7,9","Column8":"8,9","Column9":"9,9","Column10":"10,9","Column11":"11,9","Column12":"12,9","Column13":"13,9","Column14":"14,9","Column15":"15,9","Column16":"16,9","Column17":"17,9","Column18":"18,9","Column19":"19,9","Column20":"20,9","Column21":"21,9","Column22":"22,9","Column23":"23,9","Column24":"24,9","Column25":"25,9","Column26":"26,9","Column27":"27,9","Column28":"28,9","Column29":"29,9"},{"Column0":"0,10","Column1":"1,10","Column2":"2,10","Column3":"3,10","Column4":"4,10","Column5":"5,10","Column6":"6,10","Column7":"7,10","Column8":"8,10","Column9":"9,10","Column10":"10,10","Column11":"11,10","Column12":"12,10","Column13":"13,10","Column14":"14,10","Column15":"15,10","Column16":"16,10","Column17":"17,10","Column18":"18,10","Column19":"19,10","Column20":"20,10","Column21":"21,10","Column22":"22,10","Column23":"23,10","Column24":"24,10","Column25":"25,10","Column26":"26,10","Column27":"27,10","Column28":"28,10","Column29":"29,10"},{"Column0":"0,11","Column1":"1,11","Column2":"2,11","Column3":"3,11","Column4":"4,11","Column5":"5,11","Column6":"6,11","Column7":"7,11","Column8":"8,11","Column9":"9,11","Column10":"10,11","Column11":"11,11","Column12":"12,11","Column13":"13,11","Column14":"14,11","Column15":"15,11","Column16":"16,11","Column17":"17,11","Column18":"18,11","Column19":"19,11","Column20":"20,11","Column21":"21,11","Column22":"22,11","Column23":"23,11","Column24":"24,11","Column25":"25,11","Column26":"26,11","Column27":"27,11","Column28":"28,11","Column29":"29,11"},{"Column0":"0,12","Column1":"1,12","Column2":"2,12","Column3":"3,12","Column4":"4,12","Column5":"5,12","Column6":"6,12","Column7":"7,12","Column8":"8,12","Column9":"9,12","Column10":"10,12","Column11":"11,12","Column12":"12,12","Column13":"13,12","Column14":"14,12","Column15":"15,12","Column16":"16,12","Column17":"17,12","Column18":"18,12","Column19":"19,12","Column20":"20,12","Column21":"21,12","Column22":"22,12","Column23":"23,12","Column24":"24,12","Column25":"25,12","Column26":"26,12","Column27":"27,12","Column28":"28,12","Column29":"29,12"},{"Column0":"0,13","Column1":"1,13","Column2":"2,13","Column3":"3,13","Column4":"4,13","Column5":"5,13","Column6":"6,13","Column7":"7,13","Column8":"8,13","Column9":"9,13","Column10":"10,13","Column11":"11,13","Column12":"12,13","Column13":"13,13","Column14":"14,13","Column15":"15,13","Column16":"16,13","Column17":"17,13","Column18":"18,13","Column19":"19,13","Column20":"20,13","Column21":"21,13","Column22":"22,13","Column23":"23,13","Column24":"24,13","Column25":"25,13","Column26":"26,13","Column27":"27,13","Column28":"28,13","Column29":"29,13"},{"Column0":"0,14","Column1":"1,14","Column2":"2,14","Column3":"3,14","Column4":"4,14","Column5":"5,14","Column6":"6,14","Column7":"7,14","Column8":"8,14","Column9":"9,14","Column10":"10,14","Column11":"11,14","Column12":"12,14","Column13":"13,14","Column14":"14,14","Column15":"15,14","Column16":"16,14","Column17":"17,14","Column18":"18,14","Column19":"19,14","Column20":"20,14","Column21":"21,14","Column22":"22,14","Column23":"23,14","Column24":"24,14","Column25":"25,14","Column26":"26,14","Column27":"27,14","Column28":"28,14","Column29":"29,14"},{"Column0":"0,15","Column1":"1,15","Column2":"2,15","Column3":"3,15","Column4":"4,15","Column5":"5,15","Column6":"6,15","Column7":"7,15","Column8":"8,15","Column9":"9,15","Column10":"10,15","Column11":"11,15","Column12":"12,15","Column13":"13,15","Column14":"14,15","Column15":"15,15","Column16":"16,15","Column17":"17,15","Column18":"18,15","Column19":"19,15","Column20":"20,15","Column21":"21,15","Column22":"22,15","Column23":"23,15","Column24":"24,15","Column25":"25,15","Column26":"26,15","Column27":"27,15","Column28":"28,15","Column29":"29,15"},{"Column0":"0,16","Column1":"1,16","Column2":"2,16","Column3":"3,16","Column4":"4,16","Column5":"5,16","Column6":"6,16","Column7":"7,16","Column8":"8,16","Column9":"9,16","Column10":"10,16","Column11":"11,16","Column12":"12,16","Column13":"13,16","Column14":"14,16","Column15":"15,16","Column16":"16,16","Column17":"17,16","Column18":"18,16","Column19":"19,16","Column20":"20,16","Column21":"21,16","Column22":"22,16","Column23":"23,16","Column24":"24,16","Column25":"25,16","Column26":"26,16","Column27":"27,16","Column28":"28,16","Column29":"29,16"},{"Column0":"0,17","Column1":"1,17","Column2":"2,17","Column3":"3,17","Column4":"4,17","Column5":"5,17","Column6":"6,17","Column7":"7,17","Column8":"8,17","Column9":"9,17","Column10":"10,17","Column11":"11,17","Column12":"12,17","Column13":"13,17","Column14":"14,17","Column15":"15,17","Column16":"16,17","Column17":"17,17","Column18":"18,17","Column19":"19,17","Column20":"20,17","Column21":"21,17","Column22":"22,17","Column23":"23,17","Column24":"24,17","Column25":"25,17","Column26":"26,17","Column27":"27,17","Column28":"28,17","Column29":"29,17"},{"Column0":"0,18","Column1":"1,18","Column2":"2,18","Column3":"3,18","Column4":"4,18","Column5":"5,18","Column6":"6,18","Column7":"7,18","Column8":"8,18","Column9":"9,18","Column10":"10,18","Column11":"11,18","Column12":"12,18","Column13":"13,18","Column14":"14,18","Column15":"15,18","Column16":"16,18","Column17":"17,18","Column18":"18,18","Column19":"19,18","Column20":"20,18","Column21":"21,18","Column22":"22,18","Column23":"23,18","Column24":"24,18","Column25":"25,18","Column26":"26,18","Column27":"27,18","Column28":"28,18","Column29":"29,18"},{"Column0":"0,19","Column1":"1,19","Column2":"2,19","Column3":"3,19","Column4":"4,19","Column5":"5,19","Column6":"6,19","Column7":"7,19","Column8":"8,19","Column9":"9,19","Column10":"10,19","Column11":"11,19","Column12":"12,19","Column13":"13,19","Column14":"14,19","Column15":"15,19","Column16":"16,19","Column17":"17,19","Column18":"18,19","Column19":"19,19","Column20":"20,19","Column21":"21,19","Column22":"22,19","Column23":"23,19","Column24":"24,19","Column25":"25,19","Column26":"26,19","Column27":"27,19","Column28":"28,19","Column29":"29,19"},{"Column0":"0,20","Column1":"1,20","Column2":"2,20","Column3":"3,20","Column4":"4,20","Column5":"5,20","Column6":"6,20","Column7":"7,20","Column8":"8,20","Column9":"9,20","Column10":"10,20","Column11":"11,20","Column12":"12,20","Column13":"13,20","Column14":"14,20","Column15":"15,20","Column16":"16,20","Column17":"17,20","Column18":"18,20","Column19":"19,20","Column20":"20,20","Column21":"21,20","Column22":"22,20","Column23":"23,20","Column24":"24,20","Column25":"25,20","Column26":"26,20","Column27":"27,20","Column28":"28,20","Column29":"29,20"}]';
    var myData = Ext.decode(dataJson);

    var column = new Array();
    for (var j = 0; j < 8; j++) {
        var map = {
            text: columns[j]['name'],
            sortable: false,
            dataIndex: columns[j]['name'],
            width: 100,
            menuDisabled: true
        };

        if (j == 0) {
            map['renderer'] = function(v, m, r) {
                var row = v.split(',')[0];
                var column = v.split(',')[1];
                return 'row: ' + row + '<br/>column: ' + column;
            };
            map['locked'] = true;

        } else {
            map['editor'] = {
                allowBlank: false
            }
        }

        column.push(map);
    }

    // create the data store
    var store = Ext.create('Ext.data.Store', {
        model: 'TestModel',
        proxy: {
            type: 'memory',
            reader: {
                type: 'json'
            }
        }
    });

    store.loadData(myData);

    var editing = Ext.create('Ext.grid.plugin.CellEditing', {
        clicksToEdit: 1
    });

    var checkboxModel = Ext.create('Ext.selection.CheckboxModel', {
        checkOnly: true
    });

    // create the Grid
    var grid = Ext.create('Ext.grid.Panel', {
        id: 'grid',
        store: store,
        selModel: checkboxModel,
        columns: column,
        height: 500,
        renderTo: document.body,
        width: 1000,
        viewConfig: {
            stripeRows: true
        },
        plugins: [editing]
    });
}); 