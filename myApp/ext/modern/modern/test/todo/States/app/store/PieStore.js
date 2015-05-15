Ext.define("StatesMVC.store.PieStore", {
    extend: "Ext.data.Store",
    alias: 'store.PieStore',
    config: {
        fields: ['name', 'value']
    }
});