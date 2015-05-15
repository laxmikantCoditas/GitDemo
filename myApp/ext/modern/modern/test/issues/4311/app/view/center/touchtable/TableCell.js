Ext.define( 'YelpExtplorer.view.center.touchtable.TableCell', {
	extend : 'Ext.Component',

	config : {
		border : '0 1px 1px 0',
		style : 'border-style: solid',
		padding : '3 10'
	},

	setCellContent : function ( value ) {
		// console.log( arguments.callee.displayName, this, arguments );
		this.setHtml( value );
	},

	setProperty : function ( property, value ) {
		// console.log( arguments.callee.displayName, 'this=', this, arguments );
		var setterName = 'set' + Ext.String.capitalize( property );
		if ( setterName in this ) {
			// console.log( arguments.callee.displayName, 'setterName=', setterName );
			this[setterName]( value );
		}
		else {
			this[property] = value;
		}
	},

	copyProperties : Ext.Function.flexSetter(
		function setProperties( property, value ) {
			// console.log( arguments.callee.name, 'this', this );
			this.setProperty( property, value );
		}
	)
} );
