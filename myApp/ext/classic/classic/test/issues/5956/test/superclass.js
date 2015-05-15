Ext.namespace('WS.test');

WS.test.TestGrandParent = function() {
	alert('in grand parent constructor');
}

WS.test.TestParent = function() {
	alert('in parent constructor');
	WS.test.TestParent.superclass.constructor.call(this);
}

Ext.extend(WS.test.TestParent, WS.test.TestGrandParent, {});

WS.test.TestChild = function() {
	alert('in child constructor');
	WS.test.TestChild.superclass.constructor.call(this);
}

Ext.extend(WS.test.TestChild, WS.test.TestParent, {});

var test = new WS.test.TestChild();
