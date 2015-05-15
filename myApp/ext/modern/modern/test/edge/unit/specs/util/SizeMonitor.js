Ext.require([
    'Ext.util.SizeMonitor'
], function() {

describe("Ext.util.SizeMonitor", function() {
    beforeEach(function() {
        runs(function() {
            var me = this;
            jasmine.sandbox(function(sandboxDocument, destroyFn) {
                me.sandboxDocument = sandboxDocument;
                me.sandboxDestroy = destroyFn;
                Ext.Element.document = sandboxDocument;

                me.testElement = Ext.Element.create({});
                me.callback = jasmine.createSpy();
                me.testElement.on('resize', me.callback, me);
                me.args = [me.testElement, sandboxDocument, me.callback];
            });
        });

        waitsFor(function() {
            return this.hasOwnProperty('sandboxDocument');
        }, "Sandbox failure", 5000);
    });

    it("should not fire when the element is first painted with either width or height of 0", function(element, sandboxDocument, callback) {
        sandboxDocument.appendChild(element.dom);
        element.dom.offsetLeft;
        waits(500);
        runs(function() {
            expect(callback).not.toHaveBeenCalledWith();
        });
    });

    it("should fire when the element is first painted with both width and height !== 0", function(element, sandboxDocument, callback) {
        element.setWidth('10px');
        element.setHeight('10px');

        sandboxDocument.appendChild(element.dom);
        element.dom.offsetLeft;
        waits(500);
        runs(function() {
            expect(callback).toHaveBeenCalled();
        });
    });

    describe("Size changing", function() {
        beforeEach(function(element, sandboxDocument, callback) {
            runs(function() {
                element.setWidth('10px');
                element.setHeight('10px');
                sandboxDocument.appendChild(element.dom);
                element.dom.offsetLeft;
            });
            waits(500);
            runs(function() {
                expect(callback).toHaveBeenCalled();
            });
        });

        it("should fire when the element's width increases", function(element, sandboxDocument, callback) {
            runs(function() {
                element.setWidth('11px');
                element.dom.offsetLeft;
            });
            waits(500);
            runs(function() {
                expect(callback.callCount).toBe(2);
                expect(callback).toHaveBeenCalled();
            });
        });

        it("should fire when the element's width decreases", function(element, sandboxDocument, callback) {
            runs(function() {
                element.setWidth('9px');
                element.dom.offsetLeft;
            });
            waits(500);
            runs(function() {
                expect(callback.callCount).toBe(2);
                expect(callback).toHaveBeenCalled();
            });
        });

        it("should fire when the element's height increases", function(element, sandboxDocument, callback) {
            runs(function() {
                element.setHeight('11px');
                element.dom.offsetLeft;
            });
            waits(500);
            runs(function() {
                expect(callback.callCount).toBe(2);
                expect(callback).toHaveBeenCalled();
            });
        });

        it("should fire when the element's height decreases", function(element, sandboxDocument, callback) {
            runs(function() {
                element.setHeight('9px');
                element.dom.offsetLeft;
            });
            waits(500);
            runs(function() {
                expect(callback.callCount).toBe(2);
                expect(callback).toHaveBeenCalled();
            });
        });

        it("should not fire when the element is hidden and then shown", function(element, sandboxDocument, callback) {
            runs(function() {
                element.hide();
                element.show();
            });
            waits(500);
            runs(function() {
                expect(callback.callCount).toBe(1);
                expect(callback).toHaveBeenCalled();
            });
        });

        it("should fire when the element is hidden and then shown and width has increased while being hidden", function(element, sandboxDocument, callback) {
            runs(function() {
                element.hide();
                element.setWidth('11px');
                element.show();
            });
            waits(500);
            runs(function() {
                expect(callback.callCount).toBe(2);
                expect(callback).toHaveBeenCalled();
            });
        });

        it("should fire when the element is hidden and then shown and width has decreased while being hidden", function(element, sandboxDocument, callback) {
            runs(function() {
                element.hide();
                element.setWidth('9px');
                element.show();
            });
            waits(500);
            runs(function() {
                expect(callback.callCount).toBe(2);
                expect(callback).toHaveBeenCalled();
            });
        });

        it("should not fire when the element's size is changed while its display is none, " +
            "but should fire as soon as its display is set to !none", function(element, sandboxDocument, callback) {
            runs(function() {
                element.hide();
                element.setWidth('11px');
                element.setHeight('11px');
                element.dom.offsetLeft;
            });
            waits(500);
            runs(function() {
                expect(callback.callCount).toBe(1);
                element.show();
            });
            waits(500);
            runs(function() {
                expect(callback.callCount).toBe(2);
                expect(callback).toHaveBeenCalled();
            });
        });
    });

    afterEach(function() {
        var destroy = this.sandboxDestroy;

        delete this.sandboxDocument;
        delete this.sandboxDestroy;

        this.testElement.un('resize', this.callback, this);
        this.testElement.destroy();

        destroy();

        Ext.Element.document = document;
    });
});

});
