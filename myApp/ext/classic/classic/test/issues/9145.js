Ext.require('*');
Ext.onReady(function() {
   Ext.define('AM.model.nav.system_update', {
        extend     : 'Ext.data.Model', 
        fields     : [{ 
            name : 'id', 
            type : 'int' 
        }, { 
            name : 'prg_version' 
        }, { 
            name       : 'prg_time_real', 
            type       : 'date', 
            dateFormat : 'Y-m-d H:i:s' 
        },{ 
            name    : 'prg_time_year', 
            convert : function(value, record) {
                if (record.data.prg_time_real) {
                    return record.data.prg_time_real.getFullYear(); 
                }
            } 
        }, { 
            name : 'prg_kategorie' 
        }, { 
            name : 'prg_text' 
        }, { 
            name : 'prg_document_path' 
        }], 
        idProperty : 'id' 
    });
    
    var store = new Ext.data.Store({ 
        extend     : 'Ext.data.Store', 
        model      : 'AM.model.nav.system_update', 
        autoLoad   : true, 
        groupDir   : 'DESC', 
        groupField : 'prg_time_year', 
        proxy      : { 
            type   : 'ajax', 
            url    : '9145.json', 
            reader : { 
                root          : 'data', 
                totalProperty : 'count', 
                id            : 'id' 
            } 
        } 
    });

    grid = new Ext.grid.Panel({ 
        title      : 'Updateverlauf', 
        store      : store, 
        renderTo   : document.body,
        width      : 600,
        height     : 400,
        collapsible: true,
        //collapsed  : true,
        columns    : [{ 
            text            : 'Build kalkTOOL', 
            flex            : 1, 
            dataIndex       : 'prg_version', 
            summaryType     : 'count', 
            summaryRenderer : function(value) { 
                return ((value === 0 || value > 1) ? '' + value + ' Patches' : '1 Patch'); 
            } 
        }, { 
            text      : 'Kategorie', 
            dataIndex : 'prg_kategorie' 
        }, { 
            text      : 'Datum', 
            dataIndex : 'prg_time_real', 
            renderer  : Ext.util.Format.dateRenderer('d.m.Y H:i') 
        }, { 
            xtype : 'actioncolumn', 
            width : 20, 
            items : [{ 
                icon    : 'system/icons/page_white_acrobat.png', 
                handler : function(grid, rowIndex, colIndex) { 
                    this.fireEvent('show_pdf', this, grid, rowIndex, colIndex); 
                } 
            }] 
        }], 
        viewConfig : { 
            stripeRows  : true, 
            loadingText : 'Daten werden geladen...' 
        },     
        features   : [{ 
            ftype              : 'groupingsummary', 
            groupHeaderTpl     : '{name}', 
            startCollapsed     : true, 
            enableGroupingMenu : false 
        }], 
        plugins    : { 
            ptype      : 'rowexpander', 
            rowBodyTpl : ['<p><b>Informationen zum Patch:<br><br></b> {prg_text}</p>'] 
        } 
    });
});