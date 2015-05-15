Ext.onReady(function() 
{
    var root = {text : 'root', children :[]},
        counter = 0;
    for (var i = 0; i < 99; i++)
       {
        root.children.push({text : 'child'+i, leaf:true});
       }
    Ext.create('Ext.container.Viewport',
    {
        layout: 'border',
        items:
        [
            Ext.create('Ext.tree.Panel',
            {
                title : 'tree',
                region: 'west',
                split: true,
                width: 300,
                selModel : Ext.create('Ext.selection.RowModel', 
                {
                    listeners : 
                    {
                        selectionChange : function()
                        {
                            counter++;
                            console.log(counter);
                        }
                    }
                }),
                store : Ext.create('Ext.data.TreeStore',
                {
                    root : root
                })
            })
        ]
    });
});
