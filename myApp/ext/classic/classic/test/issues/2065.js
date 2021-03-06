Ext.require('Ext.fx.*');

Ext.onReady(function(){

    var html = [], i = 0;
    
    for (; i < 100; ++i) {
        html.push('<div style="width: 400px;">' + i + 'Long line of text that will cause horizontal scrolling on the div' + i + '</div>');
    }
    
    var el = Ext.getBody().createChild({
        tag: 'div',
        html: html.join('<br />'),
        style: {
            width: '100px',
            height: '100px',
            border: '1px solid red',
            overflow: 'auto'
        }
    });
    
    Ext.getBody().createChild({
        cn: [{
            tag: 'label',
            html: 'Offset'
        }, {
            tag: 'input',
            type: 'text',
            name: 'offset',
            value: 100,
            id: 'offset'
        }]
    });
    
    Ext.getBody().createChild({
        cn: [{
            tag: 'label',
            html: 'Animate'
        },{
            tag: 'input',
            type: 'checkbox',
            id: 'anim',
            checked: true
        }]
    });
    
    Ext.getBody().createChild({
        cn: [{
            tag: 'label',
            html: 'Vertical'
        },{
            tag: 'input',
            type: 'radio',
            id: 'vertical',
            checked: true,
            name: 'direction'
        },{
            tag: 'label',
            html: 'Horizontal'
        },{
            tag: 'input',
            type: 'radio',
            id: 'horizontal',
            name: 'direction'
        }]
    });
    
    Ext.getBody().createChild({
        tag: 'button',
        html: 'Scroll'
    }).on('click', function(){
        var direction = Ext.getDom('vertical').checked ? 'top' : 'left';
        el.scrollTo(direction, parseInt(Ext.getDom('offset').value, 10), Ext.getDom('anim').checked);
    });
    
});
