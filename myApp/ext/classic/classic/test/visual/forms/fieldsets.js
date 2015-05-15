Ext.require([
    'Ext.form.FieldSet'
]);

Ext.onReady(function() {

    var container;

    function makeContainer() {
        container = Ext.create('Ext.Container', {
            renderTo: Ext.getBody(),
            layout: {
                type: 'hbox',
                defaultMargins: {
                    right: 10
                }
            }
        });
    }

    function makeFieldsets(options) {
        var padding = options ? options.padding : undefined;
        function makeFieldSet(options) {
            var hasLegend = options && (options.title || options.collapsible || options.checkboxToggle),
                config = Ext.apply({
                    xtype: 'fieldset',
                    width: 100,
                    padding: padding,
                    items: [{
                        xtype: 'component',
                        height: hasLegend ? 62 : 78,
                        style: 'background-color: #ccc;'
                    }]
                }, options);

            container.add(config);
        }

        makeContainer();
        makeFieldSet();
        makeFieldSet({
            title: 'FieldSet'
        });
        makeFieldSet({
            collapsible: true
        });
        makeFieldSet({
            checkboxToggle: true
        });
        makeFieldSet({
            title: 'FieldSet',
            collapsible: true
        });
        makeFieldSet({
            title: 'FieldSet',
            checkboxToggle: true
        });
        makeContainer();
        makeFieldSet({
            collapsed: true
        });
        makeFieldSet({
            title: 'FieldSet',
            collapsed: true
        });
        makeFieldSet({
            collapsible: true,
            collapsed: true
        });
        makeFieldSet({
            checkboxToggle: true,
            collapsed: true
        });
        makeFieldSet({
            title: 'FieldSet',
            collapsible: true,
            collapsed: true
        });
        makeFieldSet({
            title: 'FieldSet',
            checkboxToggle: true,
            collapsed: true
        });
    }

    makeFieldsets();
    makeFieldsets({
        padding: 5
    });

});