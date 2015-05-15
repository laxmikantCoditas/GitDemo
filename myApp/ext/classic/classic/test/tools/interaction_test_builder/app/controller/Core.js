Ext.define('Qa.Tester.controller.Core', {
    
    extend: 'Ext.app.Controller',
    
    requires: ['Ext.data.proxy.LocalStorage', 'Ext.resizer.Splitter'],
    
    models: ['Event', 'Keyframe', 'Script', 'Test', 'Url'],
    
    stores: ['Events', 'Keyframes', 'Scripts', 'Tests', 'Urls'],
    
    views: ['EventGrid', 'KeyframeGrid', 'KeyframeDetailPanel', 'TestRunnerPanel',  'TestTree'],

    refs: [{
        ref: 'testTree',
        selector: 't-test-tree'
    },{
        ref: 'testRunnerPanel',
        selector: 't-test-runner-panel'
    },{   
        ref: 'keyframeGrid',
        selector: 't-keyframe-grid'
    },{
        ref: 'keyframeDetailPanel',
        selector: 't-keyframe-detail-panel'
    },{        
        ref: 'urlCombo',
        selector: 'combobox[id=urlCombo]' 
    },{
        ref: 'scriptCombo',
        selector: 'combobox[id=scriptCombo]' 
    },{
        ref: 'goButton',
        selector: 'button[id=goButton]'
    },{
        ref: 'disableCacheCheckbox',
        selector: 'checkbox[id=disableCacheCheckbox]'
    }],

    init: function() {
       var me = this;
       
       me.control({
            
            'combobox[id=urlCombo]': {
                blur: me.onUrlComboBlur
            },
            
            'combobox[id=scriptCombo]': {
                blur: me.onScriptComboBlur
            },
            
            't-viewport': {
                afterrender: me.onViewportAfterRender
            },
            
            'button[id=goButton]': {
                click: me.onGoButtonClik
            },
            'viewport': {
                afterrender: me.onViewportRender
            },

            'checkbox[id=disableCacheCheckbox]': {
                change: me.onDisableCacheCheckboxChenge
            }
       });
       
       me.getKeyframesStore().on('add', me.onKeyframeStoreAdd, me);
    },
    
    onKeyframeStoreAdd: function(store, records) {
        var me = this,
            record = records[0],
            runnerBody = me.getTestRunnerPanel().body,
            iframeStrict;
            
        record.data['html'] = me.iframeDoc.body.innerHTML;
        
        iframeStrict = me.iframeDoc.compatMode == "CSS1Compat";
        
        record.data['scrollTop'] = iframeStrict || Ext.isWebKit ? me.iframeDoc.body.scrollTop : me.iframeDoc.documentElement.scrollTop;
        record.data['scrollLeft'] = iframeStrict || Ext.isWebKit ?  me.iframeDoc.body.scrollLeft : me.iframeDoc.documentElement.scrollLeft;
      
        try {
            record.data['screenshot'] = me.getQaApplet().takeScreenshot(
                Math.min(runnerBody.getWidth(), 640), 
                Math.min(runnerBody.getHeight(), 480)
            );
        } catch(e) {}
    },
    
    getQaApplet: function() {
        return Ext.fly('qaApplet').dom;
    },
    
    onViewportRender: function() {
        var me = this;
        me.getKeyframeGrid().getSelectionModel().on('selectionchange', me.onKeyframeGridSelectionChange, me);
        me.disableCache = me.getDisableCacheCheckbox().getValue();
    },
    
    onDisableCacheCheckboxChenge: function(checkbox, checked) {
        this.disableCache = checked;
    },
    
    onKeyframeGridSelectionChange: function(sm, records) {
        var me = this,
            record = records[0],
            iframeStrict;
        if (record) {
            me.getKeyframeDetailPanel().update(record.data);
            if (record.data.screenshot) {
            } else {
                iframeStrict = me.iframeDoc.compatMode == "CSS1Compat";
                me.iframeDoc.body.innerHTML = record.data.html;
                if (iframeStrict || Ext.isWebKit) {
                    me.iframeDoc.body.scrollTop = record.data.scrollTop;
                    me.iframeDoc.body.scrollLeft = record.data.scrollLeft;
                } else {
                    me.iframeDoc.documentElement.scrollTop = record.data.scrollTop;
                    me.iframeDoc.documentElement.scrollLeft = record.data.scrollLeft;
                }
            }
            
        }
    },
    
    onViewportAfterRender: function() {
       var me = this,
           scriptsStore = me.getScriptsStore(),
           urlsStore = me.getUrlsStore();
           
       scriptsStore.on('load', me.onScriptsStoreLoad, me);
       scriptsStore.load();
       urlsStore.on('load', me.onUrlsStoreLoad, me);
       urlsStore.load();
    },
    
    onUrlsStoreLoad: function(store, records) {
        if (records.length === 0) {
            return;
        }        
        var me = this,
            urlCombo = me.getUrlCombo();
            
        me.url = urlCombo.getValue();
        
        if (me.url != '' || !me.url) {
            me.url = (records[records.length - 1].data.value).replace(/\s/g, '');
        }
        urlCombo.setValue(me.url);
    },
   
    onScriptsStoreLoad: function(store, records) {
        if (records.length === 0) {
            return;
        }
        var me = this,
            scriptCombo = me.getScriptCombo();
            
        me.script = me.getScriptCombo().getValue();
       
        if (me.script == '' || !me.script) {
            me.script = (records[records.length - 1].data.value).replace(/\s/g, '');
        }

        scriptCombo.setValue(me.script);
    },
    
    onComboBlur: function(value, store) {
        var idx;
        
        if (value && value != '') {
            
            idx = store.find('value', value);
            
            if (idx != -1) {
                store.removeAt(idx);
            }
            
            store.add({
                value: value
            });
        }
    },
       
    onUrlComboBlur: function(field) {   
        var me = this;
        me.url = field.getValue();
        if (me.url) {
            me.url = me.url.replace(/\s/g, '');
        }
        me.onComboBlur(me.url, me.getUrlsStore());
    },
    
    onScriptComboBlur: function(field) {
        var me = this;
        me.script = field.getValue();
        if (me.script) {
            me.script = me.script.replace(/\s/g, '');
           
        } else {
            me.script = '';
        }
        me.onComboBlur(me.script, me.getScriptsStore());
    },
    
    onIframeLoaded: function() {
        var me = this,
            root = window.location.href.replace('index.html', '');

        me.scripts = [
            root + '../../testreporter/build/jasmine.js',
            me.script || '',
            root + 'app/lib/boot.js'
        ];
        
        me.scriptIndex = 0;
        
        me.injectScripts();
   
    },
    
    injectScripts: function(previousScript) {
        var iframe = Ext.fly('ttestrunner-iframe').dom,
            iframeWin = iframe.contentWindow || window.frames[iframe.name],
            iframeDoc = iframe.contentDocument || iframeWin.document,
            script = iframeDoc.createElement('script'),
            me = this,
            src = me.scripts[me.scriptIndex];
        me.iframeDoc = iframeDoc;
        if (previousScript) {
            previousScript.onload = null;
            previousScript.onreadystatechange = null;
        }
       
        if (!src && src != '') {
            return;
        }
        
        me.scriptIndex++;
        
        if (src == '') {
            me.injectScripts(script);
            return;
        }
        
        script.type = 'text/javascript';
        
        if (me.disableCache) {
            src = src + '?' +(new Date).getTime();
        }
        script.src = src;
        
        if (!Ext.isIE) {
            script.onload = function() {
                me.injectScripts(script);
            };
        } else {   
            script.onreadystatechange = function() {
                if (this.readyState === 'loaded' || this.readyState === 'complete') {
                    me.injectScripts(script);
                }
            };
        }
        iframeDoc.getElementsByTagName("head")[0].appendChild(script);
    },
    
    onGoButtonClik: function() {
        var me = this,
            iframe;
            
        me.getTestsStore().getRootNode().removeAll();
        me.testsSnapshot = null;
        me.getKeyframesStore().removeAll();
        me.getEventsStore().removeAll();
        
        if (me.url) {
          iframe = Ext.fly('ttestrunner-iframe');
          iframe.on('load', me.onIframeLoaded, me, { single: true });
          iframe.dom.src = me.url;
        }
    }
});