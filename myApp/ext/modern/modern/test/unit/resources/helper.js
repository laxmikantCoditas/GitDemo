Ext.testHelper = {
    defaultTarget: document.createElement('div'),

    createTouchList: function(touches) {
        var touchList = [],
            i, ln, touch;

        for (i = 0,ln = touches.length; i < ln; i++) {
            touch = touches[i];

            touchList.push(this.createTouch(touch));
        }

        return touchList;
    },

    createTouch: function(touch) {
        return Ext.merge({
            target: this.defaultTarget,
            timeStamp: Ext.Date.now(),
            time: Ext.Date.now(),
            pageX: 0,
            pageY: 0,
            identifier: 0,
            point: Ext.util.Point.from(touch)
        }, touch || {});
    },

    createTouchEvent: function(event) {
        var touchEvent = Ext.merge({
            type: 'touchstart',
            target: this.defaultTarget,
            timeStamp: Ext.Date.now(),
            time: Ext.Date.now(),
            touches: [],
            changedTouches: [],
            targetTouches: [],
            pageX: 0,
            pageY: 0
        }, event || {});

        touchEvent.touches = this.createTouchList(touchEvent.touches);
        touchEvent.changedTouches = this.createTouchList(touchEvent.changedTouches);
        touchEvent.targetTouches = this.createTouchList(touchEvent.targetTouches);

        return touchEvent;
    },

    createTouchEvents: function(events) {
        var ret = [],
            i, ln, event;

        for (i = 0,ln = events.length; i < ln; i++) {
            event = events[i];

            ret.push(this.createTouchEvent(event));
        }

        return ret;
    },

    recognize: function(recognizer, events) {
        var currentTouchesCount = 0,
            i, ln, e;

        events = this.createTouchEvents(events);

        mainLoop: for (i = 0,ln = events.length; i < ln; i++) {
            e = events[i];

            switch (e.type) {
                case 'touchstart':
                    var changedTouchesCount = e.changedTouches.length,
                        isStarted = currentTouchesCount > 0;

                    currentTouchesCount += changedTouchesCount;

                    if (!isStarted) {
                        if (recognizer.onStart(e) === false) {
                            break mainLoop;
                        }
                    }

                    if (recognizer.onTouchStart(e) === false) {
                        break mainLoop;
                    }

                    break;

                case 'touchmove':
                    if (recognizer.onTouchMove(e) === false) {
                        break mainLoop;
                    }
                    break;

                case 'touchend':
                    changedTouchesCount = e.changedTouches.length;

                    currentTouchesCount -= changedTouchesCount;

                    if (recognizer.onTouchEnd(e) === false) {
                        break mainLoop;
                    }

                    if (this.currentTouchesCount === 0) {
                        if (recognizer.onEnd(e) === false) {
                            break mainLoop;
                        }
                    }
                    break;
            }
        }

        return events;
    }
};

/**
 * toBeInstanceOf: compares the actual to the expected using instanceof
 * @param expected
 */
jasmine.Matchers.prototype.toBeInstanceOf = function(expected) {
    return this.actual instanceof expected;
};


beforeEach(function() {
    addGlobal('ExtBox1');
});

