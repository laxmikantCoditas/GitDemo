Ext.onReady(function() {
    
    var slider;
    
    var form = Ext.create('Ext.form.Panel', {
        margin: 5,
        bodyPadding: 10,
        width: 300,
        height: 200,
        renderTo: document.body,
        defaultType: 'textfield',
        items: [{
            fieldLabel: 'position',
            name: 'position'
        }, {
            fieldLabel: 'align',
            name: 'align'
        }, {
            fieldLabel: 'offsets',
            name: 'offsets'
        }, {
            xtype: 'checkbox',
            fieldLabel: 'vertical',
            name: 'vertical'
        }],
        buttons: [{
            text: 'Create',
            handler: function(){
                Ext.destroy(slider);
                
                var values = form.getValues(),
                    vertical = !!values.vertical,
                    offsetsStr = values.offsets,
                    offsets;
                    
                if (offsetsStr.length) {
                    offsetsStr = offsetsStr.replace(/\s+/g, '').replace(/(\[|\])/g, '').split(',');
                    offsets = [parseInt(offsetsStr[0], 10), parseInt(offsetsStr[1], 10)];
                } 
                
                slider = Ext.create('Ext.slider.Single', {
                    margin: 50,
                    vertical: vertical,
                    renderTo: document.body,
                    width: vertical ? undefined : 200,
                    height: vertical ? 200 : undefined,
                    useTips: {
                        position: values.position,
                        align: values.align,
                        offsets: offsets
                    }
                })
                
            }
        }]
    })
    
});