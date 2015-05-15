/**
 * @class twitter.SearchToolbar
 * @extends Ext.toolbar.Toolbar
 * 
 * Simple panel which displays a textfield and a submit button. View should handle submitting the field by
 * either pressing enter within the field or pressing the button.
 */
Ext.define('twitter.SearchToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias : 'widget.searchtoolbar',
    
    ui: 'searchtoolbar',
    
    /**
     * @private
     */
    initComponent: function() {
        var me = this;
        
        /**
         * @cfg searchField
         * The search field used to enter a new search term
         */
        me.searchField = Ext.createWidget('textfield', {
            id       : 'searchfield',
            ui       : 'search',
            flex     : 1,
            hideLabel: true,
            
            enableKeyEvents: true,
            
            listeners: {
                scope  : me,
                keydown: function(comp, e) {
                    if (e.getKey() == 13) {
                        me.onSubmit();
                    }
                }
            }
        });
        
        Ext.apply(me, {
            items: [
                me.searchField
            ]
        });

        me.callParent(arguments);
    },
    
    /**
     * @private
     * Handler for the form submit event. Here we check to see if the query the user entered is already present
     * in the Store - if it isn't, we add it. We then select that record in the SearchList.
     */
    onSubmit: function() {
        var field = Ext.getCmp('searchfield'),
            query = field.getValue();
        
        if (!query) {
            return;
        }
        
        var store = Ext.getStore('Searches'),
            index = store.find('query', query, 0, false, false, true),
            instance;
        
        //check if the search term exists
        if (index == -1) {
            //create the new search term
            instance = store.create({query: query});
            store.add(instance);
        } else {
            //fetch the existing search term
            instance = store.getAt(index);
        }
        
        //empty the field
        field.setValue('');
        
        //dispatch to the controller
        var controller = Ext.ControllerManager.get('searches'),
            query      = controller.sanitizeQuery(instance.get('query'));
        
        //dispatch to the controller
        Ext.dispatch({
            controller: 'searches',
            action    : 'show',
            instance  : instance,
            historyUrl: 'searches/' + query
        });
    }
});

