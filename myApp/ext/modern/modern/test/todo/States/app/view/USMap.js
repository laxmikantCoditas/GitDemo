Ext.define('StatesMVC.view.USMap', {
    extend: 'Ext.draw.Component',
    xtype: 'usmap',
    config: {
        items: [],
        store: null,
        selection: null,
        scale: 0.65
    },

    constructor: function () {
        this.callParent(arguments);
        this.on('resize', 'onResize');
        this.getSurface().initializeEvents();
        this.getSurface().on('touchstart', this.selectElement, this);
        this.getSurface().on('touchmove', this.selectElement, this);
    },

    onResize: function () {
        var size = this.element.getSize();
        this.getSurface().setRegion([0, 0, size.width, size.height]);
        this.renderFrame();
    },

    applyStore: function (store, currentStore) {
        var me = this;
        store = store && Ext.StoreMgr.lookup(store);
        return store;
    },

    updateStore: function (store, currentStore) {
        var me = this;
        if (currentStore) {
            if (currentStore.autoDestroy) {
                currentStore.destroy();
            } else {
                currentStore.un({
                    scope: me,
                    updaterecord: me.onUpdateRecord,
                    refresh: me.refresh
                });
            }
        }
        if (store) {
            store.on({
                scope: me,
                updaterecord: me.onUpdateRecord,
                refresh: me.refresh
            });
        }
    },

    onUpdateRecord: function (store, record) {
        var me = this,
            id = record.get('id'),
            surface = me.getSurface(),
            sprite = surface.getItems().get(id);
        if (me.getSelection() === sprite) {
            sprite.setAttributes(Ext.copyTo({fill: '#dd8'}, record.data, 'path'));
        } else {
            sprite.setAttributes(Ext.copyTo({}, record.data, 'path,fill'));
        }

        surface.renderSprite(sprite);
        sprite.setDirty(false);
        surface.setDirty(false);
    },

    updateSelection: function (selection, lastSelection) {
        var surface = this.getSurface(),
            statesData = StatesMVC.statesData,
            countyData;
        if (lastSelection) {
            lastSelection.setAttributes({
                fill: StatesMVC.colorMap[lastSelection.id]
            });
            surface.renderSprite(lastSelection);
            lastSelection.setDirty(false);
            surface.setDirty(false);
        }
        if (selection) {
            selection.setAttributes({
                fill: '#dd8'
            });
            surface.renderSprite(selection);
            selection.setDirty(false);
            surface.setDirty(false);
            countyData = statesData[selection.id];
            Ext.getStore("PieStore").setData(countyData.race);
            Ext.getStore("PyramidStore").setData(countyData.sex_by_age);
            Ext.ComponentQuery.query("#titlebar")[0].setTitle('2010 Census Data - ' + statesData[selection.id].NAME);
        }
    },

    refresh: function () {
        var me = this,
            surface = me.getSurface(),
            items = surface.getItems(),
            store = me.getStore(),
            originalSet = {},
            scale = me.getScale(),
            newSet = {};

        items.each(function (item) {
            originalSet[item.id] = item;
        });
        store.each(function (item) {
            newSet[item.get('id')] = item;
        });

        for (var id in originalSet) {
            if (!(id in newSet)) {
                surface.remove(originalSet[id]);
            }
        }

        for (var id in newSet) {
            if (!(id in originalSet)) {
                originalSet[id] = surface.add(Ext.apply({
                    stroke: 'black',
                    lineWidth: 1,
                    fill: 'white',
                    scaling: {
                        centerX: 0,
                        centerY: 0,
                        x: scale,
                        y: scale
                    }
                }, newSet[id].data));
            }
            this.onUpdateRecord(store, newSet[id]);
        }
        this.renderFrame();
    },

    pointInPath: function (x, y, path) {
        var concatPath,
            poly, l, i = 0, polies = [];
        if (path.polies) {
            polies = path.polies;
        } else {
            concatPath = [].concat.apply([], path);
            for (l = concatPath.length; i < l; i++) {
                switch (concatPath[i]) {
                    case 'M':
                        if (poly) {
                            poly.push(poly[0]);
                        }
                        polies.push(poly = []);
                        poly.push([concatPath[++i], concatPath[++i]]);
                        break;
                    case 'L':
                        poly.push([concatPath[++i], concatPath[++i]]);
                        break;
                    case 'C':
                        poly.push([concatPath[++i], concatPath[++i]]);
                        poly.push([concatPath[++i], concatPath[++i]]);
                        poly.push([concatPath[++i], concatPath[++i]]);
                        break;
                    case "Z":
                        poly.push(poly[0]);
                }
            }
            if (poly) {
                poly.push(poly[0]);
            }
            path.polies = polies;
        }

        for (i = 0, l = polies.length; i < l; i++) {
            if (this.pointInPolygon(x, y, polies[i])) {
                return true;
            }
        }
        return false;
    },

    pointInPolygon: function (x, y, poly) {
        var conj = 0,
            i = 0,
            l = poly.length, startX, startY, stopX, stopY, k, cx;

        for (i = 0; i < l; i++) {
            startX = poly[i][0];
            startY = poly[i][1];

            stopX = (poly[i + 1] || poly[0])[0];
            stopY = (poly[i + 1] || poly[0])[1];

            if (startY >= y && stopY < y ||
                startY <= y && stopY > y) {
                if (x <= startX && x <= stopX) {
                    conj++;
                } else if (x <= startX || x <= startX) {
                    // find inverse k
                    k = (stopX - startX) / (stopY - startY);
                    cx = (y - startY) * k + startX;
                    if (cx > x) {
                        conj++;
                    }
                }
            }
        }
        return (conj % 2) !== 0;
    },

    selectElement: function (e) {
        var p = e && e.event && Ext.util.Point.fromEvent(e.event) || { x: 72, y: 416 },
            me = this,
            scale = this.getScale(),
            selection = false,
            i = 0,
            surface = me.getSurface(),
            items = surface.getItems().items,
            l = items.length,
            position = me.element.getBox(),
            item, bbox;

        p.x -= position.x;
        p.y -= position.y - 19;
        for (; i < l; i++) {
            item = items[i];
            bbox = item.getBBox();
            if (bbox.x <= p.x && p.x <= bbox.x + bbox.width &&
                bbox.y <= p.y && p.y <= bbox.y + bbox.height) {
                if (this.pointInPath(item.inverseMatrix.x(p.x, p.y), item.inverseMatrix.y(p.x, p.y), item.attr.path)) {
                    selection = item;
                    break;
                }
            }
        }
        me.setSelection(selection);
    }
});