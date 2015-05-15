describe("Tree Visual Tests", function() {

    var data = [
            { text: "loading", loading: true },
            { text: "expanded", expanded: true, children: [
                { text: "check leaf", checked: true, leaf: true },
                { text: "collapsed" },
                { text: "leaf end", leaf: true}
            ] },
            { text: "check expanded", expanded: true, checked: true, children: [
                // TODO: shouldn't need to specify children here if there are no children! https://sencha.jira.com/browse/EXTJSIV-7528
                { text: "expanded end", expanded: true, children: [] }
            ] },
            { text: "collapsed end" }
        ],
        hoverData = Ext.clone(data),
        store, hoverStore, container;

    store = Ext.create('Ext.data.TreeStore', {
        root: {
            expanded: true,
            children: data
        }
    });

    // a separate store for testing the mousover state of nodes' expander icons
    hoverStore = Ext.create('Ext.data.TreeStore', {
        root: {
            expanded: true,
            children: hoverData
        }
    });

    hoverStore.getRootNode().cascadeBy(function(node) {
        // simulate a mouseover on all expander elements in this store
        node.set('cls', Ext.baseCSSPrefix + 'tree-expander-over');
    });

    function create(config) {
        var width = 150,
            height = 170,
            items = [];

        Ext.each([
            {},
            { lines: false },
            { useArrows: true },
            { useArrows: true, store: hoverStore }
        ], function(colCfg, colIndex) {
            Ext.each([
                {},
                { viewConfig: { stripeRows: true } },
                { rowLines: true },
                { rowLines: true, viewConfig: { stripeRows: true } }
            ], function(rowCfg, rowIndex) {
                items.push(Ext.apply({
                    xtype: 'treepanel',
                    width: width,
                    height: height,
                    store: store,
                    rootVisible: false,
                    x: (rowIndex * (width + 10)) + 50,
                    y: (colIndex * (height + 10)) + 50
                }, rowCfg, colCfg));
            });
        });

        container = Ext.widget({
            renderTo: document.body,
            xtype: 'container',
            layout: 'absolute',
            items: items
        });
    }

    afterEach(function() {
        container.destroy();
    });

    it("should render trees", function() {
        create();
        takeScreenshot({
            area: {
                x: 0,
                y: 0,
                width: 630,
                height: 710
            },
            scroll: false
        });
    });
    
});
