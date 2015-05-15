Ext.define('Qa.Tester.view.TestRunnerPanel', {
    
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.t-test-runner-panel',
    
    cls: 't-test-runner-panel',
    
    autoScroll: true,
    
    requires: ['Ext.form.field.ComboBox'],
    
    dockedItems: [{
            
        xtype: 'toolbar',
        
        position: 'top',
        
        defaults: {
            xtype: 'combobox', 
            labelAlign: 'right',
            labelSeparator: '',
            queryMode: 'local',
            displayField: 'value',
            valueField: 'value',
            hideTrigger: true
        },
        
        items: [{
            id: 'urlCombo',
            flex: 1,
            emptyText: 'Test Page Url',
            store: 'Urls'
        },{
            flex: 1, 
            id: 'scriptCombo',
            emptyText: 'Javascript Test Url (optional if loading the unit tests)',
            store: 'Scripts'
        },{
            xtype: 'button',
            id: 'goButton',
            iconCls: 't-go-button-icon'
        }]
    },{
        xtype: 'toolbar',
        
        position: 'top',
        
        items: [{
             xtype: 'checkbox',
             checked: true,
             id: 'disableCacheCheckbox',
             boxLabel: 'Disable iframe cache (needed on all browsers except FF)'   
        }]
    }],

    html: [
        '<div style="height:480px;width:640px;position:absolute;opacity=0;z-index=1;"></div>',
        '<iframe id="ttestrunner-iframe" class="t-test-iframe" style="width:640px;height:480px;"></iframe>'
    ].join('')
});         