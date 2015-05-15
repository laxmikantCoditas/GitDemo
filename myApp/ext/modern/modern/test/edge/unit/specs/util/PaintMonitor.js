Ext.require([
    'Ext.util.PaintMonitor'
], function() {
    describe("Ext.util.PaintMonitor", function() {
        beforeEach(function() {
            runs(function() {
                var me = this;
                jasmine.sandbox(function(sandboxDocument, destroyFn) {
                    me.sandboxDocument = sandboxDocument;
                    me.sandboxDestroy = destroyFn;
                    Ext.Element.document = sandboxDocument;

                    me.testElement = Ext.Element.create({});
                    me.callback = jasmine.createSpy();
                    me.paintMonitor = new Ext.util.PaintMonitor({
                        element: me.testElement,
                        callback: me.callback
                    });
                    me.args = [me.testElement, sandboxDocument, me.callback];
                });
            });

            waitsFor(function() {
                return this.hasOwnProperty('sandboxDocument');
            }, "Sandbox failure", 5000);
        });

        it("should work when the element is inserted into the DOM tree", function(element, sandboxDocument, callback) {
            sandboxDocument.appendChild(element.dom);
            waits(500);
            runs(function() {
                expect(callback).toHaveBeenCalled();
            });
        });

        it("should work when the element's display is set to !none", function(element, sandboxDocument, callback) {
            element.hide();
            sandboxDocument.appendChild(element.dom);
            element.show();
            waits(500);
            runs(function() {
                expect(callback).toHaveBeenCalled();
            });
        });

        it("should work when the element is detached from the DOM tree, and attached again", function(element, sandboxDocument, callback) {
            sandboxDocument.appendChild(element.dom);
            waits(500);
            runs(function() {
                expect(callback).toHaveBeenCalled();
                sandboxDocument.removeChild(element.dom);
                expect(element.dom.offsetParent).toBe(null);
                sandboxDocument.appendChild(element.dom);
            });
            waits(500);
            runs(function() {
                expect(callback.callCount).toBe(2);
            });
        });

        afterEach(function() {
            var destroy = this.sandboxDestroy;

            delete this.sandboxDocument;
            delete this.sandboxDestroy;

            this.paintMonitor.destroy();
            this.testElement.destroy();

            destroy();

            Ext.Element.document = document;
        });
    });
});
