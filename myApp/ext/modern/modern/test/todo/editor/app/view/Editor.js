Ext.define('EditorApp.view.Editor', {
    extend: 'Ext.draw.Component',
    xtype: 'geditor',
    entities: null,
    phantoms: null,
    commandStack: null,
    commandStackTop: 0,
    oldWidth: 0,
    oldHeight: 0,
    gesture: false,
    matrix: null,
    inverseMatrix: null,

    config: {
        action: 'selection',
        radius: 22
    },

    applyAction: function(action, oldAction) {
        var me = this;
        if (Ext.isString(action)) {
            if (oldAction) {
                oldAction.destroy();
            }
            action = Ext.create('action.' + action);
        } else {
            action = Ext.factory(action, 'action.' + action.type, oldAction);
        }
        action.setEditor(me);
        me.updatePhantom();
        me.renderFrame();
        return action;
    },

    updateEntities: function() {
        for (var id in this.entities) {
            var entity = this.entities[id];
            entity.update();
        }
    },

    updatePhantom: function() {
        var me = this,
            action = me.getAction(),
            phantom, i, ln, ids = {};
        if (action) {
            phantom = [].concat(action.getPhantomSprites(me.getRadius()));
            for (i = 0, ln = phantom.length; i < ln; i++) {
                ids[phantom[i].id] = true;
                if (me.phantoms[phantom[i].id]) {
                    me.phantoms[phantom[i].id].setAttributes(phantom[i]);
                } else {
                    me.phantoms[phantom[i].id] = me.getSurface('phantom').add(phantom[i]);
                }
            }
            for (i in me.phantoms) {
                if (!ids[i]) {
                    me.getSurface('phantom').remove(me.phantoms[i]);
                    delete me.phantoms[i];
                }
            }
        }
    },

    constructor: function() {
        var editor, me = this;
        me.entities = {};
        me.selected = {};
        me.phantoms = {};
        me.commandStack = [];
        me.commandStackTop = 0;
        me.matrix = new Ext.draw.Matrix();
        me.inverseMatrix = new Ext.draw.Matrix();
        me.callParent(arguments);
    },

    initialize: function() {
        var me = this, element = me.element;
        me.callParent(arguments);
        element.on({
            scope: me,
            tap: me.onTap,
            dragstart: me.onDragStart,
            drag: me.onDrag,
            dragend: me.onDragEnd,
            pinchstart: me.onPinchStart,
            pinch: me.onPinch,
            pinchend: me.onPinchEnd
        });
        me.on('resize', 'onResize', me);
    },

    onResize: function() {
        var me = this,
            size = me.element.getSize(),
            matrix = me.matrix,
            iMatrix = me.inverseMatrix,
            main = me.getSurface(),
            phantom = me.getSurface('phantom'),
            center = [
                iMatrix.x(me.oldWidth / 2, me.oldHeight / 2),
                iMatrix.y(me.oldWidth / 2, me.oldHeight / 2)
            ];
        me.oldWidth = size.width;
        me.oldHeight = size.height;
        me.matrix.dx += iMatrix.x(me.oldWidth / 2, me.oldHeight / 2) - center[0];
        me.matrix.dy += iMatrix.y(me.oldWidth / 2, me.oldHeight / 2) - center[1];
        me.setRadius(EditorApp.RADIUS / me.matrix.getScale());
        me.inverseMatrix = me.matrix.inverse();
        main.setRegion([0, 0, size.width, size.height]);
        main.matrix = matrix;
        main.inverseMatrix = matrix;
        phantom.element.setStyle({"z-index": 1000000});
        phantom.setRegion([0, 0, size.width, size.height]);
        phantom.matrix = matrix;
        phantom.inverseMatrix = matrix;
        me.updateEntities();
        me.updatePhantom();
        me.draw();
    },
    
    transform: function(mat) {
        var me = this;
        me.matrix.prepend(mat);
        me.inverseMatrix = me.matrix.inverse();
        me.setRadius(EditorApp.RADIUS / me.matrix.getScale());
    },
    
    onPinchStart: function(e) {
        var me = this,
            oldSelected = Ext.apply({}, me.selected);
        this.getAction().pinchStart(e);
        for (var id in oldSelected) {
            if (!(id in me.selected)) {
                oldSelected[id].deactivate();
            }
        }
        for (var id in me.selected) {
            if (!(id in oldSelected)) {
                me.selected[id].activate();
            }
        }
        me.updatePhantom();
        me.renderFrame();
    },

    onPinch: function(e) {
        var me = this,
            oldSelected = Ext.apply({}, me.selected);
        this.getAction().pinch(e);
        for (var id in oldSelected) {
            if (!(id in me.selected)) {
                oldSelected[id].deactivate();
            }
        }
        for (var id in me.selected) {
            if (!(id in oldSelected)) {
                me.selected[id].activate();
            }
        }
        me.updatePhantom();
        me.renderFrame();
    },

    onPinchEnd: function(e) {
        var me = this,
            oldSelected = Ext.apply({}, me.selected);
        this.getAction().pinchEnd(e);
        for (var id in oldSelected) {
            if (!(id in me.selected)) {
                oldSelected[id].deactivate();
            }
        }
        for (var id in me.selected) {
            if (!(id in oldSelected)) {
                me.selected[id].activate();
            }
        }
        me.updatePhantom();
        me.renderFrame();
    },

    onTap: function(e) {
        var me = this,
            xy = me.getEventXY(e),
            oldSelected = Ext.apply({}, me.selected);
        me.getAction().tap(xy[0], xy[1]);
        for (var id in oldSelected) {
            if (!(id in me.selected)) {
                oldSelected[id].deactivate();
            }
        }
        for (var id in me.selected) {
            if (!(id in oldSelected)) {
                me.selected[id].activate();
            }
        }
        me.updatePhantom();
        me.renderFrame();
    },

    onDragStart: function(e) {
        var me = this,
            xy = me.getEventXY(e),
            oldSelected = Ext.apply({}, me.selected);
        me.getAction().dragStart(xy[0], xy[1]);
        for (var id in oldSelected) {
            if (!(id in me.selected)) {
                oldSelected[id].deactivate();
            }
        }
        for (var id in me.selected) {
            if (!(id in oldSelected)) {
                me.selected[id].activate();
            }
        }
        me.updatePhantom();
        me.renderFrame();
    },

    onDrag: function(e) {
        var me = this,
            xy = me.getEventXY(e),
            oldSelected = Ext.apply({}, me.selected);
        me.getAction().drag(xy[0], xy[1]);
        for (var id in oldSelected) {
            if (!(id in me.selected)) {
                oldSelected[id].deactivate();
            }
        }
        for (var id in me.selected) {
            if (!(id in oldSelected)) {
                me.selected[id].activate();
            }
        }
        me.updatePhantom();
        me.renderFrame();
    },

    onDragEnd: function(e) {
        var me = this,
            xy = me.getEventXY(e),
            oldSelected = Ext.apply({}, me.selected);
        me.getAction().dragEnd(xy[0], xy[1]);
        for (var id in oldSelected) {
            if (!(id in me.selected)) {
                oldSelected[id].deactivate();
            }
        }
        for (var id in me.selected) {
            if (!(id in oldSelected)) {
                me.selected[id].activate();
            }
        }
        me.updatePhantom();
        me.renderFrame();
    },

    getEntitiesFromPoint: function(x, y) {
        var me = this, items = me.entities, id, item, result = [],
            radius = me.getRadius();
        for (id in items) {
            item = items[id];
            if (item.hitTest(x, y, radius)) {
                result.push(item);
            }
        }
        return result;
    },

    getEventXY: function(e) {
        e = (e.changedTouches && e.changedTouches[0]) || e.event || e.browserEvent || e;
        var me = this, xy = me.element.getXY(), imat = me.inverseMatrix;
        xy = [e.pageX - xy[0], e.pageY - xy[1]]
        return [imat.x(xy[0], xy[1]), imat.y(xy[0], xy[1])];
    },

    addEntity: function(entity) {
        var me = this;
        entity = Ext.factory(entity, "entity." + entity.type);
        entity.setEditor(me);
        me.renderFrame();
        me.entities[entity.id] = entity;
        return entity;
    },

    removeEntity: function(entity) {
        if (Ext.isString(entity)) {
            entity = this.entities[entity];
        }
        entity.setEditor(false);
        delete this.entities[entity.id];
    },

    draw: function() {
        this.getSurface().setDirty(true);
        this.renderFrame();
    },

    run: function(cmd) {
        var me = this;
        if (cmd.canDo(me)) {
            cmd.exec(me);
            me.commandStack.length = me.commandStackTop++;
            me.commandStack.push(cmd);
            me.draw();
        }
    },

    canUndo: function() {
        return this.commandStackTop > 0;
    },

    undo: function() {
        var me = this, cmd;
        if (me.canUndo()) {
            cmd = me.commandStack[me.commandStackTop - 1];
            cmd.undo(me);
            --me.commandStackTop;
            me.draw();
        }
    },

    canRedo: function() {
        return this.commandStackTop < this.commandStack.length;
    },

    lastCommand: function() {
        return this.commandStack[this.commandStackTop - 1];
    },

    redo: function() {
        var me = this, cmd;
        if (me.canRedo()) {
            cmd = me.commandStack[me.commandStackTop];
            cmd.redo(me);
            me.commandStackTop++;
            me.draw();
        }
    }
});