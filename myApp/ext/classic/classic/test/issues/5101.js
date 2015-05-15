Ext.onReady(function() {
   
    var items = [
        {"text":"Item 1"},
        {"text":"Item 2","menu":{"items":[{"text":"Item 2 1"}, {"text":"Item 2 2"}, {"text":"Item 2 3"}, {"text":"Item 2 4"}, {"text":"Item 2 5"}]}},
        {"text":"Item 3"},
        {"text":"Item 4","menu":{"items":[{"text":"Item 4 1"}, {"text":"Item 4 2"}, {"text":"Item 4 3"}, {"text":"Item 4 4"}, {"text":"Item 4 5"}]}},
        {"text":"Item 5"},
        {"text":"Item 6","menu":{"items":[{"text":"Item 6 1"}, {"text":"Item 6 2"}, {"text":"Item 6 3"}, {"text":"Item 6 4"}, {"text":"Item 6 5"}]}},
        {"text":"Item 7"},
        {"text":"Item 8","menu":{"items":[{"text":"Item 8 1"}, {"text":"Item 8 2"}, {"text":"Item 8 3"}, {"text":"Item 8 4"}, {"text":"Item 8 5"}]}},
        {"text":"Item 9"},
        {"text":"Item 10","menu":{"items":[{"text":"Item 10 1"}, {"text":"Item 10 2"}, {"text":"Item 10 3"}, {"text":"Item 10 4"}, {"text":"Item 10 5"}]}},
        {"text":"Item 11"},
        {"text":"Item 12","menu":{"items":[{"text":"Item 12 1"}, {"text":"Item 12 2"}, {"text":"Item 12 3"}, {"text":"Item 12 4"}, {"text":"Item 12 5"}]}},
        {"text":"Item 13"},
        {"text":"Item 14","menu":{"items":[{"text":"Item 14 1"}, {"text":"Item 14 2"}, {"text":"Item 14 3"}, {"text":"Item 14 4"}, {"text":"Item 14 5"}]}},
        {"text":"Item 15"},
        {"text":"Item 16","menu":{"items":[{"text":"Item 16 1"}, {"text":"Item 16 2"}, {"text":"Item 16 3"}, {"text":"Item 16 4"}, {"text":"Item 16 5"}]}},
        {"text":"Item 17"},
        {"text":"Item 18","menu":{"items":[{"text":"Item 18 1"}, {"text":"Item 18 2"}, {"text":"Item 18 3"}, {"text":"Item 18 4"}, {"text":"Item 18 5"}]}},
        {"text":"Item 19"},
        {"text":"Item 20","menu":{"items":[{"text":"Item 20 1"}, {"text":"Item 20 2"}, {"text":"Item 20 3"}, {"text":"Item 20 4"}, {"text":"Item 20 5"}]}},
        {"text":"Item 21"},
        {"text":"Item 22","menu":{"items":[{"text":"Item 22 1"}, {"text":"Item 22 2"}, {"text":"Item 22 3"}, {"text":"Item 22 4"}, {"text":"Item 22 5"}]}},
        {"text":"Item 23"},
        {"text":"Item 24","menu":{"items":[{"text":"Item 24 1"}, {"text":"Item 24 2"}, {"text":"Item 24 3"}, {"text":"Item 24 4"}, {"text":"Item 24 5"}]}},
        {"text":"Item 25"},
        {"text":"Item 26","menu":{"items":[{"text":"Item 26 1"}, {"text":"Item 26 2"}, {"text":"Item 26 3"}, {"text":"Item 26 4"}, {"text":"Item 26 5"}]}},
        {"text":"Item 27"},
        {"text":"Item 28","menu":{"items":[{"text":"Item 28 1"}, {"text":"Item 28 2"}, {"text":"Item 28 3"}, {"text":"Item 28 4"}, {"text":"Item 28 5"}]}},
        {"text":"Item 29"},
        {"text":"Item 30","menu":{"items":[{"text":"Item 30 1"}, {"text":"Item 30 2"}, {"text":"Item 30 3"}, {"text":"Item 30 4"}, {"text":"Item 30 5"}]}},
        {"text":"Item 31"},
        {"text":"Item 32","menu":{"items":[{"text":"Item 32 1"}, {"text":"Item 32 2"}, {"text":"Item 32 3"}, {"text":"Item 32 4"}, {"text":"Item 32 5"}]}},
        {"text":"Item 33"},
        {"text":"Item 34","menu":{"items":[{"text":"Item 34 1"}, {"text":"Item 34 2"}, {"text":"Item 34 3"}, {"text":"Item 34 4"}, {"text":"Item 34 5"}]}},
        {"text":"Item 35"},
        {"text":"Item 36","menu":{"items":[{"text":"Item 36 1"}, {"text":"Item 36 2"}, {"text":"Item 36 3"}, {"text":"Item 36 4"}, {"text":"Item 36 5"}]}},
        {"text":"Item 37"},
        {"text":"Item 38","menu":{"items":[{"text":"Item 38 1"}, {"text":"Item 38 2"}, {"text":"Item 38 3"}, {"text":"Item 38 4"}, {"text":"Item 38 5"}]}},
        {"text":"Item 39"},
        {"text":"Item 40","menu":{"items":[{"text":"Item 40 1"}, {"text":"Item 40 2"}, {"text":"Item 40 3"}, {"text":"Item 40 4"}, {"text":"Item 40 5"}]}},
        {"text":"Item 41"},
        {"text":"Item 42","menu":{"items":[{"text":"Item 42 1"}, {"text":"Item 42 2"}, {"text":"Item 42 3"}, {"text":"Item 42 4"}, {"text":"Item 42 5"}]}},
        {"text":"Item 43"},
        {"text":"Item 44","menu":{"items":[{"text":"Item 44 1"}, {"text":"Item 44 2"}, {"text":"Item 44 3"}, {"text":"Item 44 4"}, {"text":"Item 44 5"}]}},
        {"text":"Item 45"},
        {"text":"Item 46","menu":{"items":[{"text":"Item 46 1"}, {"text":"Item 46 2"}, {"text":"Item 46 3"}, {"text":"Item 46 4"}, {"text":"Item 46 5"}]}},
        {"text":"Item 47"},
        {"text":"Item 48","menu":{"items":[{"text":"Item 48 1"}, {"text":"Item 48 2"}, {"text":"Item 48 3"}, {"text":"Item 48 4"}, {"text":"Item 48 5"}]}},
        {"text":"Item 49"},
        {"text":"Item 50","menu":{"items":[{"text":"Item 50 1"}, {"text":"Item 50 2"}, {"text":"Item 50 3"}, {"text":"Item 50 4"}, {"text":"Item 50 5"}]}}
    ];

    start = new Date();

    new Ext.Panel({
        width: 800,
        height: 300,
        renderTo: document.body,
        tbar: {
            xtype: 'toolbar',
            items: items,
            enableOverflow: true
        }
    });
    
    alert(new Date() - start);
   
});
