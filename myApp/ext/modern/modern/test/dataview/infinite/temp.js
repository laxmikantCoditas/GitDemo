Ext.define('Ext.util.PositionMap', {
    config: {
        minimumHeight: 50
    },

    constructor: function(config) {
        this.map = [];
        this.adjustments = {};
        this.offset = 0;

        this.initConfig(config);
    },

    populate: function(count) {
        var map = this.map = [],
            minimumHeight = this.getMinimumHeight(),
            i, previousIndex, ln;

        map[0] = 0;
        for (i = 1, ln = count - 1; i <= ln; i++) {
            previousIndex = i - 1;
            map[i] = map[previousIndex] + minimumHeight;
        }

        this.adjustments = {
            indices: [],
            heights: {}
        };
        this.offset = 0;
    },

    adjustItemHeight: function(index, height) {
        var adjustments = this.adjustments;
        adjustments.indices.push(index);
        adjustments.heights[index] = height;
    },

    update: function() {
        var adjustments = this.adjustments,
            indices = adjustments.indices,
            heights = adjustments.heights,
            map = this.map,
            ln = indices.length,
            minimumHeight = this.getMinimumHeight(),
            difference = 0,
            i, j, height, index, nextIndex;

        Ext.Array.sort(indices);

        for (i = 0; i < ln; i++) {
            index = indices[i];
            nextIndex = indices[i + 1] || map.length - 1;

            height = heights[index];
            difference += height - minimumHeight;

            for (j = index + 1; j <= nextIndex; j++) {
                map[j] += difference;
            }
        }

        this.offset += difference;
    },

    getTotalHeight: function() {
        return (this.map.length * this.getMinimumHeight()) + this.offset;
    },

    findIndex: function(pos) {
        return this.map.length ? this.binarySearch(this.map, pos) : 0;
    },

    binarySearch: function(sorted, value) {
        var start = 0,
            end = sorted.length;

        if (value < sorted[0]) {
            return 0;
        }
        if (value > sorted[end - 1]) {
            return end - 1;
        }
        while (start + 1 < end) {
            var mid = (start + end) >> 1,
                val = sorted[mid];
            if (val == value) {
                return mid;
            } else if (val < value) {
                start = mid;
            } else {
                end = mid;
            }
        }
        return start;
    }
});

/**
 * Infinite dataview.
 */
Ext.define('Ext.dataview.component.Infinite', {
    extend: 'Ext.Container',

    mixins: ['Ext.mixin.Hookable'],

    requires: [
        'Ext.util.TranslatableGroup'
    ],

    config: {
        /**
         * @cfg layout
         * @accessor
         * @private
         */

        baseCls: 'x-infinite-list',

        /**
         * @cfg {String} direction
         * The direction of the List, either 'horizontal' or 'vertical'.
         * @accessor
         */
        direction: 'vertical',

        itemConfig: {},

        itemMap: {
            minimumHeight: 50
        },

        headerMap: {
            minimumHeight: 20
        },

        miscMap: {
            minimumHeight: 50
        },

        scrollable: {
            scroller: {
                autoRefresh: false,
                translatable: {
                    xclass: 'Ext.util.TranslatableGroup'
                }
            }
        }
    },

    topItemIndex: 0,

    applyItemMap: function(itemMap) {
        return Ext.factory(itemMap, Ext.util.PositionMap, this.getItemMap());
    },

    applyHeaderMap: function(itemMap) {
        return Ext.factory(itemMap, Ext.util.PositionMap, this.getItemMap());
    },

    applyMiscMap: function(itemMap) {
        return Ext.factory(itemMap, Ext.util.PositionMap, this.getItemMap());
    },

    beforeInitialize: function(config) {
        var scrollable = config.scrollable;

        this.listItems = [];

        this.element.on({
            resize: 'onResize',
            scope: this
        });

        this.innerElement.on({
            touchstart: 'onItemTouchStart',
            touchend: 'onItemTouchEnd',
            tap: 'onItemTap',
            taphold: 'onItemTapHold',
            touchmove: 'onItemTouchMove',
            singletap: 'onItemSingleTap',
            doubletap: 'onItemDoubleTap',
            swipe: 'onItemSwipe',
            delegate: '> .' + Ext.baseCSSPrefix + 'data-item',
            scope: this
        });

        if (scrollable) {
            if (!Ext.isObject(scrollable)) {
                scrollable = {};
            }

            Ext.merge(scrollable, {
                scroller: {
                    translatable: this.getTranslatable()
                }
            });

            this.setScrollable(scrollable);
        }
    },

    updateDirection: function(direction) {
        this.currentAxis = (direction === 'horizontal') ? 'x' : 'y';
        this.getScrollable().getScroller().setDirection(direction);
    },

    updateScrollerSize: function() {
        var dataview = this.dataview,
            scroller, totalHeight;

        // @TODO: why is this dataview check here? how could dataview not be there?
        if (dataview) {
            // First we calculate the total height of the items in this list
            totalHeight = this.getItemMap().getTotalHeight() + this.getMiscMap().getTotalHeight();
            if (dataview.getGrouped()) {
                totalHeight += this.getHeaderMap().getTotalHeight();
            }

            scroller = this.getScrollable().getScroller();
            scroller.givenSize = totalHeight;
            scroller.refresh();
        }
    },

    getTranslatable: function() {
        var translatable = this.translatable;
        if (!translatable) {
            this.translatable = translatable = this.getScrollable().getScroller().getTranslatable();
            translatable.setConfig({
                // Array of translatable items (calls translate on this)
                items: this.listItems,
                activeIndex: 0
            });
            this.bind(translatable, 'doTranslate', 'onTranslate');
        }

        return translatable;
    },

    onTranslate: function(x, y, args) {
        var listItems = this.listItems,
            itemsCount = listItems.length,
            initItems = this.initItems,
            currentTopIndex = this.topItemIndex,
            dataview = this.dataview,
            itemMap = this.getItemMap(),
            //headerMap = this.getHeaderMap(),
            store = dataview.getStore(),
            //storeGroups = this.groups,
            storeCount = store.getCount(),
            grouped = dataview.getGrouped(),
            //headerIndices = this.headerIndices,
            //footerIndices = this.footerIndices,
            //headerTranslate = dataview.headerTranslate,
            baseCls = dataview.getBaseCls(),
            selectedCls = dataview.getSelectedCls(),
            headerCls = baseCls + '-header-wrap',
            footerCls =  baseCls + '-footer-wrap',
            maxIndex = storeCount - itemsCount + 1,
            topIndex, changedCount, transY, i, idx, item, closestHeader, headerItem,
            element, record, pushedHeader;

        // @TODO: update the positions in the positionmap because heights might have changed
        // @TODO: set the outer heights of the items that have changed

        dataview.indexOffset = this.topItemIndex = topIndex = Math.max(0, Math.min(itemMap.findIndex(-y) || 0, maxIndex));

//        if (grouped && headerTranslate && storeGroups.length) {
//            closestHeader = headerMap.findIndex(-y);
//            record = storeGroups[closestHeader].children[0];
//            if (record) {
//                pushedHeader = y + headerArray[closestHeader + 1] - dataview.getHeaderLength();
//                // Top of the list or above (hide the floating header offscreen)
//                if (y >= 0) {
//                    transY = -1000;
//                }
//                // Scroll the floating header a bit
//                else if (pushedHeader < 0) {
//                    transY = pushedHeader;
//                }
//                // Stick to the top of the screen
//                else {
//                    transY = Math.max(0, y);
//                }
//                dataview.header.setHtml(store.getGroupString(record));
//                headerTranslate.translate(0, transY);
//            }
//        }

        debugger;

        y = args[1] = (itemMap.map[topIndex] || 0) + y;
        if (initItems === true || currentTopIndex !== topIndex && topIndex <= maxIndex) {
            // Scroll up
            if (currentTopIndex > topIndex) {
                changedCount = Math.min(itemsCount, currentTopIndex - topIndex);
                console.log('scroll up', changedCount);
//                for (i = changedCount - 1; i >= 0; i--) {
//                    item = listItems.pop();
//                    listItems.unshift(item);
//                    idx = i + topIndex;
//                    record = store.getAt(idx);
//                    this.updateListItem(record, item);
//                    headerItem = item.headerItem;
//                    if (dataview.isSelected(record)) {
//                        item.addCls(selectedCls);
//                    }
//                    else {
//                        item.removeCls(selectedCls);
//                    }
//                    item.removeCls([headerCls, footerCls]);
//                    if (grouped) {
//                        if (headerIndices[idx]) {
//                            item.addCls(headerCls);
//                            headerItem.setHtml(store.getGroupString(record));
//                            headerItem.show();
//                            headerItem.element.setVisibility(true);
//                        }
//                        else {
//                            headerItem.hide();
//                        }
//                        if (footerIndices[idx]) {
//                            item.addCls(footerCls);
//                        }
//                    }
//                    else {
//                        if (!idx) {
//                            item.addCls(headerCls);
//                        }
//                        else if (idx === storeCount - 1) {
//                            item.addCls(footerCls);
//                        }
//                    }
//                    item.setHeight(positionIndices[idx + 1] - positionIndices[idx]);
//                }
            }
            else {
                // Scroll down
                changedCount = Math.min(itemsCount, topIndex - currentTopIndex);
                console.log('scroll down', changedCount);
//                if (initItems === true) {
//                    delete this.initItems;
//                    changedCount = itemsCount;
//                }
//                for (i = 0; i < changedCount; i++) {
//                    item = listItems.shift();
//                    listItems.push(item);
//                    idx = i + topIndex + itemsCount - changedCount;
//                    // Ensure we aren't past the end of the store's records
//                    if (idx < storeCount) {
//                        record = store.getAt(idx);
//                        this.updateListItem(record, item);
//                        headerItem = item.headerItem;
//                        if (dataview.isSelected(record)) {
//                            item.addCls(selectedCls);
//                        }
//                        else {
//                            item.removeCls(selectedCls);
//                        }
//                        item.removeCls([headerCls, footerCls]);
//                        if (grouped) {
//                            if (headerIndices[idx]) {
//                                item.addCls(headerCls);
//                                headerItem.setHtml(store.getGroupString(record));
//                                headerItem.show();
//                                headerItem.element.setVisibility(true);
//                            }
//                            else {
//                                headerItem.hide();
//                            }
//                            if (footerIndices[idx]) {
//                                item.addCls(footerCls);
//                            }
//                        }
//                        else {
//                            if (!idx) {
//                                item.addCls(headerCls);
//                            }
//                            else if (idx === storeCount - 1) {
//                                item.addCls(footerCls);
//                            }
//                        }
//                        item.setHeight(positionIndices[idx + 1] - positionIndices[idx]);
//                    }
//                    else {
//                        item.hide();
//                    }
//                }
            }
        }

//        if (headerIndices) {
//            if (headerIndices[topIndex]) {
//                element = listItems[0].headerItem.element;
//                if (y < topIndex ? 1 : 0) {
//                    element.setVisibility(false);
//                }
//                else {
//                    element.setVisibility(true);
//                }
//            }
//            for (i = 1; i <= changedCount; i++) {
//                listItems[i].headerItem.element.setVisibility(true);
//            }
//        }
    },

    getViewItems: function() {
        return this.listItems;
    },

    setItemsCount: function(newItemCount) {
        var innerItems = this.getInnerItems(),
            currentItemCount = innerItems.length,
            listItems = this.listItems,
            listItemsLn = listItems.length,
            dataview = this.dataview,
            minimumHeight = this.getItemMap().getMinimumHeight(),
            itemConfig = dataview.getItemConfig(),
            xtype = dataview.getDefaultType(),
            config = {
                xtype: xtype,
                height: minimumHeight,
                defaults: itemConfig,
                dataview: dataview
            },
            i, item;

        if (newItemCount > currentItemCount) {
            for (i = currentItemCount; i < newItemCount; i++) {
                item = Ext.factory(config);
                this.doAdd(item);
                item.headerItem = item.add({
                    cls: 'x-item-header',
                    html: ' ',
                    hidden: true,
                    docked: 'top'
                });

                // @TODO: add a resizemonitor on the inner element
            }
        }

        listItems.length = 0;
        listItems.push.apply(listItems, innerItems);
        if (!listItemsLn) {
            this.initItems = true;
        }
    },

    // @TODO: this is the handler for the sizemonitors on the inner elements
    onItemSizeChange: function() {
        // @TODO: read new inner size and add it in the positionmap
    },

    onResize: function() {
        debugger;

        var element = this.element,
            minimumHeight = this.getItemMap().getMinimumHeight(),
            containerSize;

        this.containerSize = containerSize = element[this.getDirection() === 'horizontal' ? 'getWidth' : 'getHeight']();

        debugger;

        this.setItemsCount(Math.ceil(containerSize / minimumHeight) + 1);
        this.updateScrollerSize();
        this.doRefreshHeaders();

        if (this.dataview.header) {
            this.add(this.dataview.header);
        }
    },

    doRefreshHeaders: function() {
        if (!this.dataview.getGrouped()) {
            this.getItemMap().populate(this.dataview.getStore().getCount());
            return false;
        }

        //this.findGroupHeaderIndices();
    },

//    findGroupHeaderIndices: function() {
//        if (!this.dataview.getGrouped()) {
//            this.groups = [];
//            return [];
//        }
//        var me = this,
//            dataview = me.dataview,
//            store = dataview.getStore();
//        if (!store) {
//            this.groups = [];
//            return [];
//        }
//
//        var storeLn = store.getCount(),
//            groups = store.getGroups(),
//            groupLn = groups.length,
//            baseCls = dataview.getBaseCls(),
//            headerCls = baseCls + '-header-wrap',
//            footerCls = baseCls + '-footer-wrap',
//            viewItems = dataview.getViewItems(),
//            headerArray = me.headerArray = [],
//            headerIndices = me.headerIndices = {},
//            footerIndices = me.footerIndices = {},
//            itemLength = me.getItemLength(),
//            headerLength = dataview.getHeaderLength(),
//            i, positionIndices, previousIndex, firstGroupedRecord, storeIndex, item;
//
//        this.groups = groups;
//
//        if (viewItems.length) {
//            for (i = 0; i < groupLn; i++) {
//                firstGroupedRecord = groups[i].children[0];
//                storeIndex = store.indexOf(firstGroupedRecord);
//                item = viewItems[storeIndex];
//                if (item) {
//                    item.setHeight(itemLength + headerLength);
//                    item.addCls(headerCls);
//                    item.headerItem.setHtml(store.getGroupString(firstGroupedRecord));
//                    item.headerItem.show();
//                }
//                headerIndices[storeIndex] = true;
//            }
//            if (i) {
//                me.groupLn = groupLn;
//                me.updateScrollerSize();
//            }
//            if (groupLn) {
//                positionIndices = me.positionIndices = [];
//                positionIndices[0] = 0;
//                for (i = 1; i <= storeLn; i++) {
//                    previousIndex = i - 1;
//                    positionIndices[i] = positionIndices[previousIndex] + itemLength;
//                    if (headerIndices.hasOwnProperty(previousIndex)) {
//                        headerArray.push(positionIndices[i] - itemLength);
//                        positionIndices[i] += headerLength;
//                        if (previousIndex) {
//                            footerIndices[previousIndex - 1] = true;
//                            item = viewItems[previousIndex - 1];
//                            if (item) {
//                                item.addCls(footerCls);
//                            }
//                        }
//                    }
//                }
//                footerIndices[storeLn - 1] = true;
//                item = viewItems[storeLn - 1];
//                if (item) {
//                    item.addCls(footerCls);
//                }
//            }
//        }
//
//        return headerIndices;
//    },

    // Hide unused items
    moveItemsToCache: function(from, to) {
        var me = this,
            dataview = me.dataview,
            items = me.getViewItems(),
            pressedCls = dataview.getPressedCls(),
            selectedCls = dataview.getSelectedCls(),
            i = to - from,
            item;

        for (; i >= 0; i--) {
            item = items[from + i];
            item.removeCls([pressedCls, selectedCls]);
            item.hide();
        }

        // TODO
//        if (me.getViewItems().length == 0) {
//            this.dataview.showEmptyText();
//        }
    },

    updateAtNewIndex: function(oldIndex, newIndex) {
        var minItemIndex = this.topItemIndex,
            listItems = this.listItems,
            listLength = listItems.length,
            maxItemIndex = minItemIndex + listLength,
            store = this.dataview.getStore(),
            listItemIndex = 0,
            i;

        // Updates are off the visible page, so we can ignore them
        if ((oldIndex < minItemIndex || oldIndex > maxItemIndex) && (newIndex < minItemIndex || newIndex > maxItemIndex)) {
            return;
        }

        for (i = minItemIndex; i < listLength; i++) {
            this.updateListItem(store.getAt(i), listItems[listItemIndex]);
            listItemIndex++;
        }
    },

    updateListItem: function(record, item) {
        if (item.updateRecord) {
            item.updateRecord(record);
            item.show();
        }
    },

    onItemTouchStart: function(e) {
        var me = this,
            target = e.getTarget(),
            item = Ext.getCmp(target.id);

        item.on({
            touchmove: 'onItemTouchMove',
            scope   : me,
            single: true
        });

        me.fireEvent('itemtouchstart', me, item, me.dataview.getStore().indexOf(item.getRecord()), e);
    },

    onItemTouchMove: function(e) {
        var me = this,
            target = e.getTarget(),
            item = Ext.getCmp(target.id);
        me.fireEvent('itemtouchmove', me, item, me.dataview.getStore().indexOf(item.getRecord()), e);
    },

    onItemTouchEnd: function(e) {
        var me = this,
            target = e.getTarget(),
            item = Ext.getCmp(target.id);

        item.un({
            touchmove: 'onItemTouchMove',
            scope   : me
        });

        me.fireEvent('itemtouchend', me, item, me.dataview.getStore().indexOf(item.getRecord()), e);
    },

    onItemTap: function(e) {
        var me = this,
            target = e.getTarget(),
            item = Ext.getCmp(target.id);
        me.fireEvent('itemtap', me, item, me.dataview.getStore().indexOf(item.getRecord()), e);
    },

    onItemTapHold: function(e) {
        var me = this,
            target = e.getTarget(),
            item = Ext.getCmp(target.id);
        me.fireEvent('itemtaphold', me, item, me.dataview.getStore().indexOf(item.getRecord()), e);
    },

    onItemSingleTap: function(e) {
        var me = this,
            target = e.getTarget(),
            item = Ext.getCmp(target.id);
        me.fireEvent('itemsingletap', me, item, me.dataview.getStore().indexOf(item.getRecord()), e);
    },

    onItemDoubleTap: function(e) {
        var me = this,
            target = e.getTarget(),
            item = Ext.getCmp(target.id);
        me.fireEvent('itemdoubletap', me, item, me.dataview.getStore().indexOf(item.getRecord()), e);
    },

    onItemSwipe: function(e) {
        var me = this,
            target = e.getTarget(),
            item = Ext.getCmp(target.id);
        me.fireEvent('itemswipe', me, item, me.dataview.getStore().indexOf(item.getRecord()), e);
    }
});
