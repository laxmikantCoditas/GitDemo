var userDataSet = [{
        id: 1,
        orders: [{
            id: 1
        }]
    }],
    count = 0,
    storeToTest, counter, maxCounter, numIncrements, task, startBtn, stopBtn;

Ext.syncRequire([
    'Ext.data.Model',
    'Ext.data.Store',
    'Ext.form.field.Number',
    'Ext.button.Button'
]);

Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: ['id'],

    hasMany: {model: 'Order', name: 'orders'}
}, function() {
    Ext.define('Order', {
        extend: 'Ext.data.Model',
        fields: ['id']
    });

    Ext.define('UserStore', {
        extend: 'Ext.data.Store',
        model: 'User'
    });
});

Ext.onReady(function() {
    storeToTest = new UserStore();
    
    counter = Ext.getBody().createChild({
        id: 'counter',
        html: '0',
        style: {
            'margin-left': '10px'
        }
    });
    
    function doStoreLoad() {
        storeToTest.loadRawData(userDataSet);
        counter.dom.innerHTML = ++count;
        
        if (count === maxCounter) {
            clearInterval(task);
            startBtn.setDisabled(false);
            stopBtn.setDisabled(true);
        }
    }
    
    numIncrements = new Ext.form.field.Number({
        margin: 10,
        renderTo: Ext.getBody(),
        fieldLabel: '# of increments'
    });
    
    startBtn = new Ext.button.Button({
        margin: 10,
        renderTo: Ext.getBody(),
        text: 'Start incrementing',
        handler: function() {
            maxCounter = numIncrements.getValue();
            task = setInterval(doStoreLoad, 10);
            stopBtn.setDisabled(false);
            startBtn.setDisabled(true);
        }
    });

    stopBtn = new Ext.button.Button({
        margin: 10,
        renderTo: Ext.getBody(),
        text: 'Stop incrementing',
        disabled: true,
        handler: function() {
            clearInterval(task);
            startBtn.setDisabled(false);
            stopBtn.setDisabled(true);
        }
    });
    
    new Ext.button.Button({
        margin: 10,
        renderTo: Ext.getBody(),
        text: 'Increment once',
        handler: doStoreLoad
    });
    
    new Ext.button.Button({
        margin: 10,
        renderTo: Ext.getBody(),
        text: 'Clear Store',
        handler: function() {
            storeToTest.removeAll();
        }
    });
});
