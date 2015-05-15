var config = [
    
    {
        title: 'South',
        region: 'south',
        height: 200,
        layout: { type: 'border', padding: 5 },
        items: [
            { title: 'South Central', region: 'center', minWidth: 80, html: 'South Central' },
            { title: 'South Eastern', region: 'east', flex: 1, minWidth: 80, html: 'South Eastern', split: true, collapsible: true },
            { title: 'South Western', region: 'west', flex: 1, minWidth: 80, html: 'South Western<br>I collapse to nothing', split: true, collapsible: true, collapseMode: 'mini' }
        ]
    },
    {
        xtype:'container',
        layout: { type: 'vbox' , align: 'stretchmax' , autoSize: true },
        items:[
            {
                xtype: 'buttongroup',
                title: 'User options',
                columns: 2,
                defaults: { xtype: 'button', scale: 'large', iconAlign: 'left' },
                items: [ { text: 'User<br/>manager', width: 90 }, { text: 'Hi', tooltip: 'Add user', width: 40 }, { colspan: 2, text: 'Import', scale: 'small', width: 130 }, { colspan: 2, text: 'Who is online?', scale: 'small', width: 130 } ]
            }
            
        ]
    },
    {
        xtype:'container',
        layout: { type: 'vbox' , align: 'stretchmax' , autoSize: true },
        items:[
            {
                xtype: 'panel',
                title: 'User options',
                defaults: { xtype: 'button', scale: 'large', iconAlign: 'left' },
                items: [ { text: 'User<br/>manager', width: 90 }, { text: 'Hi', tooltip: 'Add user', width: 40 }, { colspan: 2, text: 'Import', scale: 'small', width: 130 }, { colspan: 2, text: 'Who is online?', scale: 'small', width: 130 } ]
            }
            
        ]
    },
    {
        xtype:'container',
        layout: { type: 'vbox' , align: 'stretchmax' , autoSize: true },
        items:[
            {
                xtype: 'buttongroup',
                items: [ { xtype: 'button', scale: 'large', iconAlign: 'left', text: 'User<br/>manager', width: 90 } ]
            }
            
        ]
    },
    {
        xtype:'container',
        items:[
            { layout:{ type: 'vbox' , align: 'stretchmax' , autoSize: true }, xtype: 'button', scale: 'large', iconAlign: 'left',
                text: 'User<br/>manager', width: 90 }
        ]
    },
    {
        "xtype": "panel",
        "margin": 5,
        "bodyPadding": 5,
        "layout": { "type": "vbox", "autoSize": true, "align": "stretchmax" },
        "title": "panel title framed vbox autoSize stretchmax",
        "items": [
            { "xtype": "panel", "frame": true, "title": "panel title framed vbox autoSize stretchmax", "padding": 5, "bodyPadding": 5, "items": [ { "xtype": "component", "html": "panel title framed vbox autoSize stretchmax 1 <br>1" } ] },
            { "xtype": "panel", "frame": true, "title": "panel title framed vbox autoSize stretchmax", "padding": 5, "bodyPadding": 5, "items": [ { "xtype": "component", "html": "panel title framed vbox autoSize stretchmax 22 <br>2<br>2" } ] },
            { "xtype": "panel", "frame": true, "title": "panel title framed vbox autoSize stretchmax", "padding": 5, "bodyPadding": 5, "items": [ { "xtype": "component", "html": "panel title framed vbox autoSize stretchmax 333 <br>3<br>3<br>3" } ] }
        ],
        "listeners": {},
        "_index": 1
    },
    {
        "xtype": "panel",
        "margin": 5,
        "bodyPadding": 5,
        "layout": { "type": "vbox", "autoSize": true, "align": "stretchmax" },
        "title": "panel title        vbox autoSize stretchmax",
        "items": [
            { "xtype": "panel", "frame": false, "title": "panel title vbox autoSize stretchmax", "padding": 5, "bodyPadding": 5, "items": [ { "xtype": "component", "html": "panel title vbox autoSize stretchmax 1 <br>1" } ] },
            { "xtype": "panel", "frame": false, "title": "panel title vbox autoSize stretchmax", "padding": 5, "bodyPadding": 5, "items": [ { "xtype": "component", "html": "panel title vbox autoSize stretchmax 22 <br>2<br>2" } ] },
            { "xtype": "panel", "frame": false, "title": "panel title vbox autoSize stretchmax", "padding": 5, "bodyPadding": 5, "items": [ { "xtype": "component", "html": "panel title vbox autoSize stretchmax 333 <br>3<br>3<br>3" } ] }
        ],
        "listeners": {},
        "_index": 2
    },
    {
        "xtype": "panel",
        "margin": 5,
        "bodyPadding": 5,
        "layout": { "type": "vbox", "autoSize": true, "align": "stretch" },
        "title": "panel title framed vbox autoSize stretch",
        "items": [
            { "xtype": "panel", "frame": true, "title": "panel title framed vbox autoSize stretch", "padding": 5, "bodyPadding": 5, "items": [ { "xtype": "component", "html": "panel title framed vbox autoSize stretch 1 <br>1" } ] },
            { "xtype": "panel", "frame": true, "title": "panel title framed vbox autoSize stretch", "padding": 5, "bodyPadding": 5, "items": [ { "xtype": "component", "html": "panel title framed vbox autoSize stretch 22 <br>2<br>2" } ] },
            { "xtype": "panel", "frame": true, "title": "panel title framed vbox autoSize stretch", "padding": 5, "bodyPadding": 5, "items": [ { "xtype": "component", "html": "panel title framed vbox autoSize stretch 333 <br>3<br>3<br>3" } ] }
        ],
        "listeners": {},
        "_index": 3
    },
    {
        "xtype": "panel",
        "margin": 5,
        "bodyPadding": 5,
        "layout": { "type": "vbox", "autoSize": true, "align": "stretch" },
        "title": "panel title        vbox autoSize stretch",
        "items": [
            { "xtype": "panel", "frame": false, "title": "panel title vbox autoSize stretch", "padding": 5, "bodyPadding": 5, "items": [ { "xtype": "component", "html": "panel title vbox autoSize stretch 1 <br>1" } ] },
            { "xtype": "panel", "frame": false, "title": "panel title vbox autoSize stretch", "padding": 5, "bodyPadding": 5, "items": [ { "xtype": "component", "html": "panel title vbox autoSize stretch 22 <br>2<br>2" } ] },
            { "xtype": "panel", "frame": false, "title": "panel title vbox autoSize stretch", "padding": 5, "bodyPadding": 5, "items": [ { "xtype": "component", "html": "panel title vbox autoSize stretch 333 <br>3<br>3<br>3" } ] }
        ],
        "listeners": {},
        "_index": 4
    }
];
