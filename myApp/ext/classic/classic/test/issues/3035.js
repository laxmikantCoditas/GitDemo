var config = {
    xtype: 'container',

    renderSelectors:{ frameBody: 'form' },
    renderTpl: [
        '<h3>HTML form</h3>'
        ,
        '<form action=echo.html target=testframe>'
        ,
        '<input type=submit>'
        ,
        // '<select multiple name=FOO><option>A</option><option>B</option><option>C</option></select>'
        // ,
        '</form>'
        ,
        '<iframe name=testframe src=about:blank></iframe>'
    ],

    margin: 10,
    pdding: 10,
    
    items: []
};

config.items.push({ xtype: 'combo', name: 'combo', store: [ [1, 'item1'], [2, 'item2'] ], value: 1 });

cloneConfig({name:'combo-multi', multiSelect:true, value: [1,2] });
cloneConfig({name:'pickerfield', xtype:'pickerfield'});
cloneConfig({name:'trigger', xtype:'trigger'});
cloneConfig({name:'textfield', xtype:'textfield'});
cloneConfig({name:'field', xtype:'field'});

config = [config];

config.push({
    xtype: 'form',
    title: 'xtype: form',

    url: 'echo.html',
    method: 'GET',
    standardSubmit: true,
    
    buttons:[{text:'Submit', handler: function(){this.up('form').submit({target:'testframe1'})}}],

    items: config[0].items
});

config.push({xtype:'component', renderTpl:'<iframe name=testframe1 src=about:blank></iframe>'});


function cloneConfig(cfg){
    config.items.push(Ext.Object.merge({}, config.items[0] || {}, cfg));
}

function afterrender(){
    document.getElementsByTagName('form')[0].submit();
    
    instances[1].form.submit({target: 'testframe1'});
}

