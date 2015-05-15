var FAIL = true;

Ext.require('Ext.AbstractComponent', function(){
    Ext.override(Ext.AbstractComponent, {
        getHeight: function(){
            try {
                return this.callOverridden(arguments);
            } catch(e){
                throw Error('FAIL: ' + Ext.versions.extjs.version + ' -- EXTJSIV-3498-config-throws-error: ' + e.message);
            }
        }
    });
});

function afterrender(){
    setTimeout(function(){
        Ext.Array.forEach(Ext.ComponentQuery.query('panel[collapsible]:not(messagebox)'), function(component){
            // Collapsed
            console.group(component.ownerCt.title +' '+ component.title);
            console.log(component.el.dom);
            
            if (component.initialConfig.hidden) {
                if (!component.hidden) {
                    console.error('FAIL: hidden config must hide the component');
                } else {
                    // console.log('PASS: hidden config must hide the component');
                }
            }
            if (component.hidden && component.show) {
                component.show();
            }
            // if (component.initialConfig.collapsed) {
            //     if (!component.collapsed) {
            //         console.error('FAIL: collapsed config must collapse the component');
            //     } else {
            //         console.log('PASS: collapsed config must collapse the component');
            //     }
            // }
            if (!component.el) {
                console.warn('no el found', component);
                console.groupEnd(component.ownerCt.title +' '+ component.title)
                return;
            }
            
            if (component.el.getWidth() < 5) {
                console.error('FAIL: ' + Ext.versions.extjs.version + ' - EXTJSIV-4190 has 0px width', component.title, component.ownerCt.title, component.ownerCt.ownerCt.title);
            }
            if (component.el.getWidth() > 500) {
                console.error('FAIL: ' + Ext.versions.extjs.version + ' - EXTJSIV-4190 has ' + component.el.getWidth() + ' width. That\'s way too wide', component.title, component.ownerCt.title, component.ownerCt.ownerCt.title);
            }
            console.groupEnd(component.ownerCt.title +' '+ component.title);
        });
        // console.log('PASS: ' + Ext.versions.extjs.version + ' -- EXTJSIV-4190 has 0px width or body is too short');
    },100);
}

function assertSaneWidth(el) {
    if (!(el && el.getWidth)) {
        console.warn('cannot getWidth');
        return;
    }
    if (el.getWidth() < 5) {
        console.error('FAIL: ' + Ext.versions.extjs.version + ' -- EXTJSIV-4190 has 0px width', el.getWidth());
    }
}
function assertHasHeight(el) {
    if (!(el && el.getHeight)) {
        console.warn('cannot getHeight');
        return;
    }
    if (el.getHeight() <= 5) {
        console.error('FAIL: ' + Ext.versions.extjs.version + ' -- body is too short', el.dom);
    }
}


var config = {
    xtype: 'panel',
    collapsible: true,
    collapsed: true,
    title: '',
    titleCollapse: true,
    bodyPadding: 5,
    items: [{ xtype: 'component', html: 'Hello from a component' }]
};

config = [expandConfig(config)];
Ext.apply(config[config.length-1], {title:'initially collapsed', bodyPadding:5});

function expandConfig(config){
    config = Ext.Array.from(config);
    
    
    var newConfig = [];
    Ext.Array.forEach(config.slice(), function(conf){
        newConfig.push(Ext.applyIf({ title: conf.title + ' 99x99', width:99, height:99 }, conf));
        newConfig.push(Ext.applyIf({ title: conf.title + ' auto Y', width:99 }, conf));
        newConfig.push(Ext.applyIf({ title: conf.title + ' auto X', width:undefined, height:99 }, conf));
        newConfig.push(Ext.applyIf({ title: conf.title + ' auto auto', width:undefined }, conf));
        // newConfig.push(Ext.applyIf({ title: conf.title + ' frame', frame:true }, conf));
        // conf.title += ' no width';
        // newConfig.push(Ext.applyIf({ title: conf.title + ' width:auto', width:'auto' }, conf)); // This is not a fix. 'auto' should not be used as a width
    });
    config = newConfig;

    // Ext.Array.forEach(config.slice(), function(conf){
    //     config.push(Ext.applyIf({ xtype:'buttongroup' }, conf));
    // });

    // Ext.Array.forEach(config, function(config){
    //     config.title += ' ' + config.xtype;
    // });

    config = {height:1000, layout:{type:'vbox',align:'stretch'}, items:[
        {layout:'hbox', items:[
            {frame:true, title:'initially collapsed', bodyPadding:10, items:config}
            ,
            {frame:true, title:'initially expanded, collapsed afterrender', bodyPadding:10, items:Ext.Array.map(config, function(config){
                return Ext.Object.merge({},config,{collapsed:false});
            }), listeners:{afterrender:function(){
                Ext.Array.forEach(this.items.items, function(component){
                    setTimeout(function(){
                        component.collapse && component.collapse();
                    },0);
                })
            }}}
            ,
            {frame:true, title:'initially NOT collapsed', bodyPadding:10, items:Ext.Array.map(config, function(config){
                return Ext.Object.merge({},config,{collapsed:false});
            })}
            ,
            {frame:true, title:'initially collapsed, expanded afterrender', bodyPadding:10, items:config, listeners:{afterrender:function(){
                Ext.Array.forEach(this.items.items, function(component){
                    setTimeout(function(){
                        component.expand && component.expand();
                    },0);
                })
            }}}
        ]}
        ,
        {layout:{type:'vbox',align:'stretch'}, minHeight:600, items:[
            {frame:true, layout:'hbox', title:'initially collapsed', bodyPadding:10, items:config}
            ,
            {frame:true, layout:'hbox', title:'initially expanded, collapsed afterrender', bodyPadding:10, items:Ext.Array.map(config, function(config){
                return Ext.Object.merge({},config,{collapsed:false});
            }), listeners:{afterrender:function(){
                Ext.Array.forEach(this.items.items, function(component){
                    setTimeout(function(){
                        component.collapse && component.collapse();
                    },0);
                })
            }}}
            ,
            {frame:true, layout:'hbox', title:'initially NOT collapsed', bodyPadding:10, items:Ext.Array.map(config, function(config){
                return Ext.Object.merge({},config,{collapsed:false});
            })}
            ,
            {frame:true, layout:'hbox', title:'initially collapsed, expanded afterrender', bodyPadding:10, items:config, listeners:{afterrender:function(){
                Ext.Array.forEach(this.items.items, function(component){
                    setTimeout(function(){
                        component.expand && component.expand();
                    },0);
                })
            }}}
        ]}
    ]};
    
    return config;
}

// config = Ext.Array.map(config, function(config){
//     return {bodyPadding:10, layout:'hbox', items:[config, config]};
// });
// 
// Ext.Array.forEach(config.slice(), function(conf){
//     config.push(Ext.applyIf({layout:'vbox'}, conf));
// });
