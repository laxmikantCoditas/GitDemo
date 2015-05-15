Ext.define('Details', {
    extend: 'Ext.window.Window',
    
    title : "Analysis Details",
    layout: 'fit',
    width : 500,
    height: 600,
    
    initComponent: function() {
        var store = Ext.create('Ext.data.Store', {
            fields: [
                'componentId', 'renderIndex',
                {name: 'totalEvents', type: 'int'},
                {name: 'totalTime', type: 'int'}
            ]
        });
        
        var elCache = {}, cmpId, elId, cmp,
            allCmps = Ext.ComponentManager.all.map;
        
        for (cmpId in allCmps) {
            cmp = allCmps[cmpId];
            
            if (cmp.rendered) {
                elCache[cmp.getEl().id] = allCmps[cmpId];
            }
        }
        
        var components = {};
        
        this.eventsStore.each(function(event) {
            var type = event.get('type'),
                el   = Ext.get(event.get('el')),
                data = {};
            
            for (var key in event.data) {
                data[key] = event.data[key];
            }
            
            if (type == 'dominsert' || type == 'render') {
                data.component = data.component || elCache[el.id];
            } else {
                data.component = event.data.component;
            }
            
            var component = data.component;
            
            if (component) {
                var componentId = data.componentId || component.getId();
                
                components[componentId] = components[componentId] || {
                    component: component,
                    componentId: componentId,
                    totalTime: 0,
                    totalEvents: 0,
                    events: []
                };
                
                components[componentId].totalTime += parseInt(data.totalTime || 0, 10);
                components[componentId].totalEvents++;
                components[componentId].events.push(event);
            } else {
                // console.log('could not find component for this element');
            }
        });
        
        var rootComponents = {},
            rootTreeNodes  = [];
        
        this.eventsStore.each(function(event) {
            var component   = event.get('component'),
                componentId = event.get('componentId');
            
            if (!component.ownerCt && !rootComponents[componentId]) {
                rootComponents[componentId] = component;
            }
        });

        function getChildTimes(component, componentId) {
            var items = component.items ? component.items.items : [],
                length = items.length,
                cmpData = components[componentId],
                events  = cmpData ? cmpData.events : [],
                selfNode, node, i;
            
            selfNode = {
                componentId: 'Self',
                component: component,
                totalTime: cmpData ? cmpData.totalTime : 0,
                totalEvents: cmpData ? cmpData.totalEvents : 0,
                children: []
            };
            
            Ext.each(events, function(event) {
                selfNode.children.push({
                    componentId: event.get('type'),
                    totalTime: event.get('totalTime'),
                    leaf: true
                });
            }, this);
            
            node = {
                children: [selfNode],
                componentId: componentId,
                component: component,
                expanded: false
            };
            
            if (length) {
                for (i = 0; i < length; i++) {
                    node.children.push(getChildTimes(items[i], items[i].id));
                }
            }
            
            node.totalTime = Ext.Array.sum(Ext.Array.pluck(node.children, 'totalTime'));
            node.totalEvents = Ext.Array.sum(Ext.Array.pluck(node.children, 'totalEvents'));
            
            return node;
        }
        
        Ext.iterate(rootComponents, function(componentId, component) {
            if (componentId) {
                rootTreeNodes.push(getChildTimes(component, componentId));
            }
        });

        var treeStore = Ext.create('Ext.data.TreeStore', {
            fields: ['component', 'componentId', 'totalTime', 'totalEvents'],
            root: {
                expanded: true,
                componentId: "All",
                children: rootTreeNodes
            },
            sorters: [
                {
                    property: 'totalTime',
                    direction: 'DESC'
                }
            ]
        });
        
        var tree = Ext.create('Ext.tree.Panel', {
            height: 400,
            width : 600,
            store: treeStore,
            rootVisible: true,
            forceFit: true,
            
            columns: [
                {flex: 3, header: 'Component', dataIndex: 'componentId', xtype: 'treecolumn'},
                {flex: 1, header: 'Time', dataIndex: 'totalTime'},
                {flex: 1, header: 'Events', dataIndex: 'totalEvents'}
            ],
            
            listeners: {
                scope: this,
                itemmouseenter: function(grid, record) {
                    if (!record.get('component')) {
                        return;
                    }
                    
                    var el = record.get('component').getEl(),
                        highlighter = this.highlighter;
                    
                    if (el && el.dom) {
                        highlighter.setWidth(el.getWidth());
                        highlighter.setHeight(el.getHeight());
                        highlighter.setTop(el.getY());
                        highlighter.setLeft(el.getX());
                        highlighter.show();
                    }
                },
                itemmouseleave: function(grid, record) {
                    this.highlighter.hide();
                }
            }
        });
        
        Ext.iterate(components, function(component, data) {
            data.renderIndex = store.data.length + 1;
            store.add(data);
        }, this);
        
        var grid = {
            xtype: 'grid',
            features: [
                {
                    ftype:'grouping',
                    startCollapsed: true,
                    groupHeaderTpl: "{name}: {rows.length} operations in {time}"
                }
            ],
            store: store,
            forceFit: true,
            columns: [
                {header: 'Order', dataIndex: 'renderIndex', width: 40},
                {header: 'Component', dataIndex: 'componentId'},
                {header: 'Events', dataIndex: 'totalEvents'},
                {header: 'Time', dataIndex: 'totalTime'}
            ],
            
            listeners: {
                scope: this,
                itemmouseenter: function(grid, record) {
                    var el = record.get('component').getEl(),
                        highlighter = this.highlighter;
                    
                    if (el && el.dom) {
                        highlighter.setWidth(el.getWidth());
                        highlighter.setHeight(el.getHeight());
                        highlighter.setTop(el.getY());
                        highlighter.setLeft(el.getX());
                        highlighter.show();
                    }
                },
                itemmouseleave: function(grid, record) {
                    this.highlighter.hide();
                }
            }
        };
        
        Ext.apply(this, {
            items: [
                tree
            ]
        });
        
        this.callParent();
        
        /**
         * @property highlighter
         * @type Ext.core.Element
         * A reusable highlighter element that is overlaid on top of an Element when the user hovers over a row in the 
         * grid
         */
        this.highlighter = Ext.get(Ext.core.DomHelper.append(Ext.getBody(), {
            tag: 'div',
            cls: 'highlighter'
        }));
        
        this.highlighter.show();
        
        this.highlighter.setOpacity(0.35);
    }
});