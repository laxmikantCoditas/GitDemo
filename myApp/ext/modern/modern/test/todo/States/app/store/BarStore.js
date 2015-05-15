Ext.define("StatesMVC.store.BarStore", {
    extend: "Ext.data.Store",
    alias: 'store.BarStore',
    config: {
        fields: ['name', 'population']
    }
});