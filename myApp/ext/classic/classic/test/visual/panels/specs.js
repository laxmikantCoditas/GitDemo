describe("Panel Visual Tests", function() {

    var yPosition = 0,
        defaultOptions = {
            xtype: 'panel',
            frame: false,
            fixedWidth: true,
            fixedHeight: true,
            collapsed: false,
            shadow: false
        },
        panels = [],
        icon = '../../examples/shared/icons/fam/feed_add.png',
        contentHeight, contentWidth, options;

    function create(opts) {
        options = Ext.apply(Ext.clone(defaultOptions), opts || {});   

        contentHeight = 37;
        contentWidth = 62;
        if(options.xtype === 'window') {
            contentHeight -= 5;
            contentWidth -= 10;
        } else if(options.frame) {
            contentHeight -= 11;
            contentWidth -= 10;
        }

        createPanelRow('top');
        createPanelRow('right');
        createPanelRow('bottom');
        createPanelRow('left');
        takeScreenshot({
            area: {
                x: 0,
                y: 0,
                width: 440,
                height: 440
            },
            scroll: false
        });
    }

    function createPanelRow(headerPosition) {
        var y = yPosition;

        createPanel(0, y, {
            headerPosition: headerPosition,
            tbar: {
                xtype: 'component',
                style: 'background-color:red;border:1px solid black;',
                height: 18,
                weight: 1
            },
            bbar: {
                xtype: 'component',
                style: 'background-color:orange;border:1px solid blue;',
                height: 18,
                weight: 3
            },
            lbar: {
                xtype: 'component',
                style: 'background-color:yellow;border:1px solid blue;',
                width: 18,
                weight: 5
            },
            rbar: {
                xtype: 'component',
                style: 'background-color:#0f0;border:1px solid black;',
                width: 18,
                weight: 7
            }
        });
        createPanel(110, y, {
            headerPosition: headerPosition,
            icon: icon
        });
        createPanel(220, y, {
            headerPosition: headerPosition,
            closable: true
        });
        createPanel(330, y, {
            headerPosition: headerPosition,
            icon: icon,
            closable: true,
            collapsible: true
        });

        yPosition += 110;
    }

    function createPanel(x, y, config) {
        var fixedHeight = options.fixedHeight,
            fixedWidth = options.fixedWidth,
            itemHeight = config.tbar ? contentHeight : contentHeight + (config.frame ? 38 : 36),
            itemWidth = config.tbar ? contentWidth : contentWidth + (config.frame ? 38 : 36),
            vertical = config.headerPosition === 'top' || config.headerPosition === 'bottom',
            panel;
        
        Ext.applyIf(config, {
            floating: true,
            shadow: options.shadow,
            minWidth: 0,
            minHeight: 0,
            height: fixedHeight ? 100 : undefined,
            width: fixedWidth ? 100 : undefined,
            collapsed: options.collapsed,
            expandOnShow: false,
            title: 'Lorem ipsum',
            frame: options.frame,
            closable: false,
            items: [{
                xtype: 'component',
                html: 'dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                height: fixedHeight ? undefined : vertical ? itemHeight : itemWidth,
                width: fixedWidth ? undefined : vertical ? itemWidth : itemHeight
            }]
        });
        panels.push(panel = Ext.createWidget(options.xtype, config));
        panel.showAt(x, y);
    }
    
    afterEach(function() {
        var i = panels.length;

        for(; i--;) {
            panels[i].destroy();
        }
        panels = [];

        yPosition = 0; 
    });

    it("should render panels", function() {
        create();
    });

    it("should render panels with shrink-wrapped widths", function() {
        create({
            fixedWidth: false
        });
    });

    it("should render collapsed panels", function() {
        create({
            collapsed: true
        });
    });

    it("should render collapsed panels with shrink-wrapped widths", function() {
        create({
            collapsed: true,
            fixedWidth: false
        });
    });

    it("should render panels with shrink-wrapped heights", function() {
        create({
            fixedHeight: false
        });
    });

    it("should render collapsed panels with shrink-wrapped heights", function() {
        create({
            collapsed: true,
            fixedHeight: false
        });
    });

    it("should render panels with shrink-wrapped widths and shrink-wrapped heights", function() {
        create({
            fixedWidth: false,
            fixedHeight: false
        });
    });

    it("should render collapsed panels with shrink-wrapped widths and shrink-wrapped heights", function() {
        create({
            collapsed: true,
            fixedWidth: false,
            fixedHeight: false
        });
    });

    it("should render framed panels", function() {
        create({
            frame: true
        });
    });

    it("should render framed panels with shrink-wrapped widths", function() {
        create({
            frame: true,
            fixedWidth: false
        });
    });

    it("should render collapsed framed panels", function() {
        create({
            frame: true,
            collapsed: true
        });
    });

    it("should render collapsed framed panels with shrink-wrapped widths", function() {
        create({
            frame: true,
            collapsed: true,
            fixedWidth: false
        });
    });

    it("should render framed panels with shrink-wrapped heights", function() {
        create({
            frame: true,
            fixedHeight: false
        });
    });

    it("should render collapsed framed panels with shrink-wrapped heights", function() {
        create({
            frame: true,
            collapsed: true,
            fixedHeight: false
        });
    });

    it("should render framed panels with shrink-wrapped widths and shrink-wrapped heights", function() {
        create({
            frame: true,
            fixedWidth: false,
            fixedHeight: false
        });
    });

    it("should render collapsed framed panels with shrink-wrapped widths and shrink-wrapped heights", function() {
        create({
            frame: true,
            collapsed: true,
            fixedWidth: false,
            fixedHeight: false
        });
    });

    it("should render windows", function() {
        create({
            xtype: 'window'
        });
    });

    it("should render windows with shrink-wrapped widths", function() {
        create({
            xtype: 'window',
            fixedWidth: false
        });
    });

    it("should render collapsed windows", function() {
        create({
            xtype: 'window',
            collapsed: true
        });
    });

    it("should render collapsed windows with shrink-wrapped widths", function() {
        create({
            xtype: 'window',
            collapsed: true,
            fixedWidth: false
        });
    });

    it("should render windows with shrink-wrapped heights", function() {
        create({
            xtype: 'window',
            fixedHeight: false
        });
    });

    it("should render collapsed windows with shrink-wrapped heights", function() {
        create({
            xtype: 'window',
            collapsed: true,
            fixedHeight: false
        });
    });

    it("should render windows with shrink-wrapped widths and shrink-wrapped heights", function() {
        create({
            xtype: 'window',
            fixedWidth: false,
            fixedHeight: false
        });
    });

    it("should render collapsed windows with shrink-wrapped widths and shrink-wrapped heights", function() {
        create({
            xtype: 'window',
            collapsed: true,
            fixedWidth: false,
            fixedHeight: false
        });
    });
});