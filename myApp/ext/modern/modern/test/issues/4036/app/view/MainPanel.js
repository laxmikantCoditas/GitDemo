Ext.define('App.view.MainPanel', {
	extend: 'Ext.Panel',
	requires: ['App.view.ChartPanel',
			   'Ext.util.MixedCollection'],

    loopCount: 0,
    maxLoopCount: 500,
    running: false,

	config: {
		fullscreen: true,
		layout: {
			type: 'vbox',
			align: 'stretch',
			pack: 'start'
		},
		scrollable: {
			direction: 'vertical'
		}
	},


    initialize: function () {      
        var me = this;
		me.add({   
				xtype: 'toolbar',
				docked: 'bottom',
				defaults: {
	                iconMask: true,
	                ui: 'plain'
	            },
				items: [
					{ xtype: 'spacer', flex: 1 }, 
					me.testButton('Empty Store'),
					me.testButton('Loaded Store'),
					me.testButton('Empty Chart'),
					me.testButton('Loaded Chart'),
					me.testButton('Empty Chart with Legend'),
				]
		});
		me.setHtml("<br>To check for memory leaks with Google Chrome...<br><br>\
		    - Close the Developer Tools window.<br>\
		    - Open or reload this app.<br>\
		    - Click one of the 4 buttons below to start a test, and click it again after a few seconds to stop.<br>\
		    - Open the Developer Tools, select 'Timeline' and 'Memory'.<br>\
		    - Click 'Record', then 'Collect Garbage', then 'Record' again to stop recording.<br>\
		    - Remember the lower value of the memory mark.<br>\
		    - Click the same button to resume the test. It stops after " + me.maxLoopCount + " iterations.<br>\
		    - At any time, repeat the 'Record' + 'Collect Garbage' + 'Record' sequence and compare with the previous value.<br><br>\
		    A slow creep can be noticed over the first 300 or 400 iterations (0.2 MB when testing Stores and 0.8 MB for Charts), and then it stabilizes.\
		    ");
		me.callParent();
    },


    testButton: function(buttonName) {
        var me = this;
        return {
            scope: me,
            ui: 'round',
            iconCls: 'refresh',
            enableToggle: true,
            text: buttonName,
            handler: function() {me.handleClick(buttonName)}
        };
    },


    handleClick: function(buttonName) {
        var me = this,
            handler;
        me.running = !me.running;
        if (me.running) {
            me.loopCount = 0;
            handler =  (buttonName.indexOf("Store") >= 0 ? me.buildStore : me.showChart);
            handler.call(me, buttonName);
        }
    },	  


    buildStore: function(buttonName) {
        var me = this,
            loadStore = (buttonName.indexOf("Loaded") >= 0),
            store;

        if (me.loopCount % 100 == 0) {
            me.setHtml("Testing " + buttonName + "...<br>");
        }
        me.setHtml(me.getHtml() + " " + (++me.loopCount));

        // Create a store...
        store = new Ext.data.Store({
            fields: ['name', 'value']
        });
        
        // Fill it up...
        if (loadStore) {
            for (var i = 0; i < 200; i++) {
                // Each record is approximately 120 bytes long.
                var record = {
                        name:  "abcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvwxy"+i,
                        value: "12345678901234567890123456789012345678901234567890"+i
                    };
                store.add(record);
            }
        }

        // And immediately delete it.
        store.destroy();

        // Then repeat.
        if (me.running && (me.loopCount < me.maxLoopCount)) {
            setTimeout(function() {me.buildStore(buttonName)}, 50);
        }			
    },


    showChart: function(buttonName) {
        var me = this,
            loadStore = (buttonName.indexOf("Loaded") >= 0),
            addLegend = (buttonName.indexOf("Legend") >= 0);

        if (me.loopCount % 100 == 0) {
            me.setHtml("Testing " + buttonName + "...<br>");
        }
        me.setHtml(me.getHtml() + " " + (++me.loopCount));

        // Remove the children.
        me.removeAll(true, false);

        // Recreate a widget hierarchy with a Chart panel.
        window.CHART_RECORD_COUNT = (loadStore ? 202 : 2);  // The "empty" chart still needs 2 data points
        window.CHART_LEGEND = addLegend;
		me.setItems(me.createWidgets());

        // Then repeat.
        if (me.running && (me.loopCount < me.maxLoopCount)) {
            setTimeout(function() {me.showChart(buttonName)}, 200);
        }			
    },	  


	createWidgets : function() {
        var items = [], widget;
        widget = Ext.create('App.view.ChartPanel');
        items.push(widget);
        return items;
    }
    
});