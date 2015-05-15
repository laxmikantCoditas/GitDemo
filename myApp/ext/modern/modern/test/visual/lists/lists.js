Ext.setup({
    requires: ['Ext.ComponentQuery', 'Ext.dataview.List'],
    viewport: {
        layout: 'hbox'
    },
    onReady: function() {
        var defaultConfig = {
                flex: 1,
                store: 'ListStore',
                itemTpl: '<div class="contact"><strong>{firstName}</strong> {lastName}</div>'
            },
            configs = [
            {
            },{
                striped: true
            },{
               grouped: true,
               indexBar: true
            },{
                onItemDisclosure: function() {}
            },
            {
                ui: 'round'
            },{
                ui: 'round',
                striped: true
            },{
                ui: 'round',
               grouped: true,
               indexBar: true
            },{
                ui: 'round',
                onItemDisclosure: function() {}
            }
        ];

        Ext.define('Contact', {
            extend: 'Ext.data.Model',
            config: {
                fields: ['firstName', 'lastName']
            }
        });

        Ext.create('Ext.data.Store', {
            id: 'ListStore',
            model: 'Contact',
            sorters: ['firstName', 'lastName'],
            grouper : function(record) {
                return record.get('firstName')[0];
            },
            data: [
                {firstName: 'Julio', lastName: 'Benesh'},
                {firstName: 'Julio', lastName: 'Minich'},
                {firstName: 'Tania', lastName: 'Ricco'},
                {firstName: 'Kenya', lastName: 'Morocco'},
                {firstName: 'Rae', lastName: 'Pasquariello'},
                {firstName: 'Ted', lastName: 'Abundis'},
                {firstName: 'Jessie', lastName: 'Schacherer'},
                {firstName: 'Jamie', lastName: 'Gleaves'},
                {firstName: 'Hillary', lastName: 'Spiva'}
            ]
        });

        Ext.each(configs, function(config) {
            Ext.Viewport.add(Ext.create('Ext.List', Ext.apply(config, defaultConfig)));
        });
    }
});