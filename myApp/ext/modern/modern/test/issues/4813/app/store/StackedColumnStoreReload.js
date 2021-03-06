/*
 * File: app/store/StackedColumnStoreReload.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.store.StackedColumnStoreReload', {
    extend: 'Ext.data.Store',

    config: {
        data: {
            x: 'foo',
            y1: 50,
            y4: 30,
            y5: -30
        },
        storeId: 'StackedColumnStoreReload',
        fields: ['x', 'y1', 'y4', 'y5']
    }
});