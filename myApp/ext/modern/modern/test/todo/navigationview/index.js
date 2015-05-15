/**
 * There are two main parts of this example:
 *
 * **Ext.navigation.View**
 * This component is simply a container with a layout, which handles pushing and popping items/views
 * at any time. It will automatically animate between those views, including the back button (if it is
 * visibly) and a user defined title (if defined in your item).
 *
 * **Ext.ActionSheet**
 * This is simply used to show off some additional functionality of the navigation view component.
 */
Ext.setup({
    requires: [
        'Ext.navigation.View',
        'Ext.ActionSheet',
        'Ext.Button',
        'Ext.Toolbar',
        'Ext.List'
    ],
    viewport: {
        preventZooming: false
    },
    onReady: function() {
        var buttonStyle = 'margin:0 1.4em 1.4em 1.4em;';

        //Second item. Shown when the button in the first view is pressed.
        var secondItem = Ext.create('Ext.Container', {
            title: 'Custom Duration',
            layout: 'vbox',
            items: [
                {
                    html: 'You can control the animation duration when pushing new views. Pressing the button below will do just that!',
                    styleHtmlContent: true
                },
                {
                    xtype: 'button',
                    text: 'Press me!',
                    handler: function() {
                        view.push(thirdItem);
                    }
                }
            ]
        });

        //Third item. Show when the button above is pressed.
        var thirdItem = Ext.create('Ext.Container', {
            title: 'Popping',
            layout: 'vbox',
            items: [
                {
                    html: 'You can also pop the current view by using the back button above, or by using the <strong>pop</strong> method.',
                    styleHtmlContent: true
                },
                {
                    xtype: 'button',
                    text: 'Pop this view!',
                    handler: function() {
                        view.pop();
                    }
                },
                {
                    html: 'Or maybe push another?',
                    styleHtmlContent: true
                },
                {
                    xtype: 'button',
                    text: 'Push!',
                    handler: function() {
                        view.push(fourthItem);
                    }
                }
            ]
        });

        //Fourth item. Show when the button above is pressed.
        var fourthItem = Ext.create('Ext.List', {
            title: 'Ext.List',
            store: {
                fields: ["text"],
                data: [
                    {text: 'Push another view!'},
                    {text: 'Push another view!'},
                    {text: 'Push another view!'},
                    {text: 'Push another view!'},
                    {text: 'Push another view!'},
                    {text: 'Push another view!'},
                    {text: 'Push another view!'},
                    {text: 'Push another view!'},
                    {text: 'Push another view!'},
                    {text: 'Push another view!'},
                    {text: 'Push another view!'},
                    {text: 'Push another view!'},
                    {text: 'Push another view!'},
                    {text: 'Push another view!'},
                    {text: 'Push another view!'},
                    {text: 'Push another view!'},
                    {text: 'Push another view!'},
                    {text: 'Push another view!'},
                    {text: 'Push another view!'},
                    {text: 'Push another view!'},
                    {text: 'Push another view!'},
                    {text: 'Push another view!'},
                    {text: 'Push another view!'}
                ]
            },
            listeners: {
                scope: this,
                itemtap: function() {
                    view.push(fifthItem);
                }
            }
        });

        //Fitfth item. Show when the button above is pressed.
        var fifthItem = Ext.create('Ext.Container', {
            title: 'More popping',
            items: [
                {
                    html: 'You can pop views with a custom animation configuration too.',
                    styleHtmlContent: true
                },
                {
                    xtype: 'button',
                    text: 'Pop this view, slowly!',
                    handler: function() {
                        view.pop();
                    }
                },
                {
                    html: 'Or pop more than one view at a time.',
                    styleHtmlContent: true
                },
                {
                    xtype: 'button',
                    text: 'Pop the last 3 views',
                    handler: function() {
                        view.pop(3);
                    }
                }
            ]
        });

        /**
         * Create an instance of Ext.navigation.View, which is fullscreen so it is inserted into Ext.Viewport
         */
        view = Ext.create('Ext.navigation.View', {
            fullscreen: true,

            autoDestroy: false,

            items: [
                //bottom toolbar containing the settings button
                {
                    docked: 'bottom',
                    xtype: 'toolbar',
                    ui :'light',
                    items: [
                        { xtype: 'spacer' },
                        {
                            iconMask: true,
                            iconCls: 'settings',
                            handler: function() {
                                var canPop = view.getInnerItems().length > 1;

                                //check if we can pop a view in the navigation view, if not, disable the pop button
                                //on the action sheet
                                var popButton = optionsSheet.down('#pop');
                                popButton.setDisabled(!canPop);


                                var toggleButton = optionsSheet.down('#togglebackbuttontext');
                                toggleButton.setDisabled(!canPop);

                                //show the option sheet
                                optionsSheet.show();
                            }
                        }
                    ]
                },

                //first item, which is visibile initially
                {
                    title: 'Navigation View',
                    layout: 'vbox',
                    items: [
                        {
                            html: 'This example demonstrates the new NavigationView component in Sencha Touch 2.<br /><br />Go ahead and try pushing a new view using the button below.',
                            styleHtmlContent: true
                        },
                        {
                            xtype: 'button',
                            text: 'Push another view!',
                            handler: function() {
                                //we already have other items in this navigation view, so we can simply use an index if we want
                                view.push(secondItem);
                            }
                        }
                    ]
                }
            ]
        });

        /**
         * A ActionSheet which is used to display various options for the Navigation View
         */
        var optionsSheet = Ext.Viewport.add({
            xtype: 'actionsheet',
            items: [
                {
                    xtype: 'button',
                    text: 'Add a random view',
                    handler: function() {
                        //use the push method of the navigation view to create a new view
                        view.push({
                            title: Date.now().toString(),
                            html: 'This is a random view.',
                            styleHtmlContent: true
                        });

                        //hide the sheet
                        optionsSheet.hide();
                    }
                },
                {
                    xtype: 'button',
                    text: 'Toggle bar visibility',
                    handler: function() {
                        //get the navigation bar, and call show/hide depending if the bar is hidden or not
                        var bar = view.getNavigationBar();
                        bar[bar.isHidden() ? 'show' : 'hide']();

                        //hide the sheet
                        optionsSheet.hide();
                    }
                },
                {
                    xtype: 'button',
                    text: 'Toggle back button text',
                    itemId: 'togglebackbuttontext',
                    handler: function() {
                        //simply call the setter for the useTitleForBackButtonText configuration
                        view.setUseTitleForBackButtonText(!view.getUseTitleForBackButtonText());

                        //hide the sheet
                        optionsSheet.hide();
                    }
                },
                {
                    xtype: 'button',
                    text: 'Pop the current view',
                    itemId: 'pop',
                    handler: function() {
                        //call the pop method in the navigation view
                        view.pop();

                        //hide the sheet
                        optionsSheet.hide();
                    }
                },
                {
                    text: 'Cancel',
                    ui: 'decline',
                    handler: function() {
                        //hide the sheet
                        optionsSheet.hide();
                    }
                }
            ]
        });
    }
});
