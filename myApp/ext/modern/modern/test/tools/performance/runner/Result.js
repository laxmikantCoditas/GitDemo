/**
 * @class Result
 * @extends Ext.data.Model
 * 
 * Represents the flattened results of a {@link Case}. Contains the url that was loaded to run the Case
 * as well as min/max/avg timing info and the raw timings
 *
 */ 
Ext.define('Result', {
    extend: 'Ext.data.Model',
    fields: ['url', 'count', 'times', 'average', 'min', 'max', 'deviation']
});