Ext.define('MyApp.view.List', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.centraltablist',
	store: '', // carregado dinamicamente
	title: '',
	multiSelect: true,
	columnLines: true,
	columns: MyApp.gridColumns['system'],
	
    viewConfig: {
    	emptyText:'<div class="emptyText"><br><br>&nbsp;&nbsp;Nenhum componente encontrado...</div>',
    	loadMask: {
            msg : 'Carregando...'
        },
    	enableTextSelection: true, // somente 4.1 - selecionar o texto para copy/paste ao passar o mouse
    	deferEmptyText:false
	},
	
    initComponent: function() {

    	this.selModel = Ext.create('Ext.selection.CheckboxModel', { showHeaderCheckbox: false });
    	
    	this.callParent(arguments);
    },
    listeners : {

    	render: function(grid) { 
    		grid.view.refresh(); 
    		grid.store.load();
    	},
    	reconfigure: function(grid) {
    		grid.view.refresh(); // precisa fazer o refresh por que o restore state se baseia em elementos graficos tb e nao somente variaveis internas
    	}
    }
});
