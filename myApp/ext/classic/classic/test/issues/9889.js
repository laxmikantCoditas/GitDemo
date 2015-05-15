Ext.form.TextField.prototype.filterKeys = function(e) {
	if ((Ext.isChrome && e.ctrlKey && !e.altKey) // CHANGE : Chrome sets ctrlKey + altKey to true when altGR is pressed
			|| (!Ext.isChrome && e.ctrlKey)) { // CHANGE
		return;
	}
	if (e.shiftKey && e.keyCode === 45) { // CHANGE
		// Shift + insert ==> allowed //CHANGE
		return; // CHANGE
	} // CHANGE
 
	var k = e.getKey();
	if (Ext.isGecko && (e.isNavKeyPress() || k == e.BACKSPACE || (k == e.DELETE && e.button == -1))) {
		return;
	}
	var cc = String.fromCharCode(e.getCharCode());
	if (!Ext.isGecko && e.isSpecialKey() && !cc) {
		return;
	}
	if (!this.maskRe.test(cc)) {
		e.stopEvent();
	}
}; 
