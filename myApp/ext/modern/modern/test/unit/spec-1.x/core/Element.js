Ext.require(['Ext.dom.Element', 'Ext.util.Format'], function() {

describe("1.x - Ext.Element", function() {
    var proto = Ext.Element.prototype,
        el, testEl,
        input, testInputEl;

    beforeEach(function() {
        testEl = Ext.getBody().createChild({
            id: 'ExtElementHelper'
        });

        testInputEl = Ext.getBody().createChild({
            id  : 'ExtElementInputHelper',
            tag : 'input',
            type: 'text'
        });

        el    = new Ext.Element(Ext.getDom(testEl));
        input = new Ext.Element(Ext.getDom(testInputEl));
    });

    it("should have a defaultUnit", function() {
        expect(proto.defaultUnit).toEqual('px');
    });

    describe("1.x - constructor", function() {
        describe("1.x - when passed a string", function() {
            it("should get the element", function() {
                el = new Ext.Element('ExtElementHelper');

                expect(el).toBeDefined();
                expect(Ext.getDom(el)).toEqual(Ext.getDom(testEl));
                expect(el.id).toEqual(Ext.getDom(el).id);
            });
        });

        describe("1.x - when passed a dom", function() {
            it("should get the element", function() {
                el = new Ext.Element(Ext.getDom(testEl));

                expect(el).toBeDefined();
                expect(Ext.getDom(el)).toEqual(Ext.getDom(testEl));
                expect(el.id).toEqual(Ext.getDom(el).id);
            });
        });
    });

    describe("1.x - methods", function() {
        describe("1.x - set", function() {
            it("should set styles", function() {
                var spy = spyOn(el, "applyStyles").andCallThrough();

                el.set({
                    style: 'padding:10px'
                });

                expect(spy).wasCalled();
            });

            it("should set class", function() {
                expect(Ext.getDom(el).className).toEqual('');

                el.set({
                    cls: 'class'
                });

                expect(Ext.getDom(el).className).toEqual('class');
            });

            it("should call setAttribute", function() {
                var spy = spyOn(Ext.getDom(el), "setAttribute").andCallThrough();

                expect(Ext.getDom(el).getAttribute('rel')).toBeNull();

                el.set({
                    rel: 'rel'
                });

                expect(spy).wasCalled();
                expect(Ext.getDom(el).getAttribute('rel')).toEqual('rel');
            });

            it("should set the attribute", function() {
                Ext.getDom(el).expando = true;

                expect(Ext.getDom(el)['counter']).not.toBeDefined();

                el.set({
                    counter: '2'
                }, false);

                expect(Ext.getDom(el)['counter']).toEqual('2');
            });
        });

        describe("1.x - is", function() {
            it("should return true", function() {
                expect(el.is('#ExtElementHelper')).toBeTruthy();
            });

            it("should return false", function() {
                expect(el.is('.suite:first-child')).toBeFalsy();
            });
        });

        describe("1.x - getValue", function() {
            it("should return the value", function() {
                input.set({
                    value: 'test'
                });

                expect(input.getValue()).toEqual('test');
            });
        });

        // describe("1.x - addListener", function() {
        //     it("should call Ext.EventManager.on", function() {
        //         var spy = spyOn(Ext.EventManager, "on").andCallThrough();

        //         el.addListener('test', function() {});

        //         expect(spy).wasCalled();
        //     });
        // });

        // describe("1.x - removeListener", function() {
        //     it("should call Ext.EventManager.un", function() {
        //         var spy = spyOn(Ext.EventManager, "un").andCallThrough();

        //         el.removeListener('test', function() {});

        //         expect(spy).wasCalled();
        //     });
        // });

        // describe("1.x - removeAllListeners", function() {
        //     it("should call Ext.EventManager.removeAll", function() {
        //         var spy = spyOn(Ext.EventManager, "removeAll").andCallThrough();

        //         el.removeAllListeners();

        //         expect(spy).wasCalled();
        //     });
        // });

        // describe("1.x - purgeAllListeners", function() {
        //     it("should call Ext.EventManager.purgeElement", function() {
        //         var spy = spyOn(Ext.EventManager, "purgeElement");

        //         el.purgeAllListeners();

        //         expect(spy).wasCalled();
        //     });
        // });

        describe("1.x - remove", function() {
            it("should remove the element", function() {
                var spy = spyOn(Ext, "removeNode").andCallThrough();

                el.remove();

                expect(spy).wasCalled();
            });
        });

        describe("1.x - isAncestor", function() {
            it("should return true", function() {
                var test = Ext.DomHelper.append(el, {tag: 'input'});

                expect(el.isAncestor(Ext.get(test))).not.toBeUndefined();
            });

            it("should return false", function() {
                expect(el.isAncestor(Ext.getBody())).toBeFalsy();
            });

            it("should return false", function() {
                expect(el.isAncestor()).toBeFalsy();
            });
        });

        describe("1.x - isDescendent", function() {
            it("should return true", function() {
                expect(el.isDescendent(Ext.getBody())).toBeTruthy();
            });

            it("should return false", function() {
                var test = Ext.DomHelper.append(el, {tag: 'input'});

                expect(el.isDescendent(Ext.get(test))).toBeFalsy();
            });
        });

        describe("1.x - contains", function() {
            it("should return true", function() {
                var test = Ext.DomHelper.append(el, {tag: 'input'});

                expect(el.contains(Ext.get(test))).toBeTruthy();
            });

            it("should return false", function() {
                expect(el.contains(Ext.getBody())).toBeFalsy();
            });
        });

        describe("1.x - getAttribute", function() {
            it("should return the attribute", function() {
                el.dom.setAttribute('rel', 'test');

                expect(el.getAttribute('rel')).toEqual('test');
            });
        });

        describe("1.x - setHTML", function() {
            it("should set the innerHTML", function() {
                expect(el.getHTML()).toEqual('');

                el.setHTML('test');

                expect(el.getHTML()).toEqual('test');
            });
        });

        describe("1.x - getHTML", function() {
            it("should set the innerHTML", function() {
                expect(el.getHTML()).toEqual('');

                el.setHTML('test');

                expect(el.getHTML()).toEqual('test');
            });
        });

        describe("1.x - hide", function() {
            it("should call setVisible", function() {
                var spy = spyOn(el, "setVisible");

                el.hide();

                expect(spy).wasCalledWith(false);
            });
        });

        describe("1.x - show", function() {
            it("should call setVisible", function() {
                var spy = spyOn(el, "setVisible");

                el.show();

                expect(spy).wasCalledWith(true);
            });
        });

        describe("1.x - setVisible", function() {
            describe("1.x - true", function() {
                describe("1.x - Ext.Element.VISIBILITY", function() {
                    beforeEach(function() {
                        el.setDisplayMode(Ext.Element.VISIBILITY);
                    });

                    it("should call removeCls", function() {
                        var spy = spyOn(el, "removeCls").andCallThrough();

                        el.setVisible(true);

                        expect(spy).wasCalledWith(['x-hidden-display', 'x-hidden-offsets']);
                    });

                    it("should call removeCls", function() {
                        var spy = spyOn(el, "removeCls").andCallThrough();

                        el.setVisible(true);

                        expect(spy).wasCalledWith('x-hidden-visibility');
                    });
                });

                describe("1.x - Ext.Element.DISPLAY", function() {
                    beforeEach(function() {
                        el.setDisplayMode(Ext.Element.DISPLAY);
                    });

                    it("should call removeCls", function() {
                        var spy = spyOn(el, "removeCls").andCallThrough();

                        el.setVisible(true);

                        expect(spy).wasCalledWith(['x-hidden-visibility', 'x-hidden-offsets']);
                    });

                    it("should call removeCls", function() {
                        var spy = spyOn(el, "removeCls").andCallThrough();

                        el.setVisible(true);

                        expect(spy).wasCalledWith('x-hidden-display');
                    });
                });

                describe("1.x - Ext.Element.OFFSETS", function() {
                    beforeEach(function() {
                        el.setDisplayMode(Ext.Element.OFFSETS);
                    });

                    it("should call removeCls", function() {
                        var spy = spyOn(el, "removeCls").andCallThrough();

                        el.setVisible(true);

                        expect(spy).wasCalledWith(['x-hidden-visibility', 'x-hidden-display']);
                    });

                    it("should call removeCls", function() {
                        var spy = spyOn(el, "removeCls").andCallThrough();

                        el.setVisible(true);

                        expect(spy).wasCalledWith('x-hidden-offsets');
                    });
                });
            });

            describe("1.x - false", function() {
                describe("1.x - Ext.Element.VISIBILITY", function() {
                    beforeEach(function() {
                        el.setDisplayMode(Ext.Element.VISIBILITY);
                    });

                    it("should call removeCls", function() {
                        var spy = spyOn(el, "removeCls").andCallThrough();

                        el.setVisible(false);

                        expect(spy).wasCalledWith(['x-hidden-display', 'x-hidden-offsets']);
                    });

                    it("should call addCls", function() {
                        var spy = spyOn(el, "addCls").andCallThrough();

                        el.setVisible(false);

                        expect(spy).wasCalledWith('x-hidden-visibility');
                    });
                });

                describe("1.x - Ext.Element.DISPLAY", function() {
                    beforeEach(function() {
                        el.setDisplayMode(Ext.Element.DISPLAY);
                    });

                    it("should call removeCls", function() {
                        var spy = spyOn(el, "removeCls").andCallThrough();

                        el.setVisible(false);

                        expect(spy).wasCalledWith(['x-hidden-visibility', 'x-hidden-offsets']);
                    });

                    it("should call addCls", function() {
                        var spy = spyOn(el, "addCls").andCallThrough();

                        el.setVisible(false);

                        expect(spy).wasCalledWith('x-hidden-display');
                    });
                });

                describe("1.x - Ext.Element.OFFSETS", function() {
                    beforeEach(function() {
                        el.setDisplayMode(Ext.Element.OFFSETS);
                    });

                    it("should call removeCls", function() {
                        var spy = spyOn(el, "removeCls").andCallThrough();

                        el.setVisible(false);

                        expect(spy).wasCalledWith(['x-hidden-visibility', 'x-hidden-display']);
                    });

                    it("should call addCls", function() {
                        var spy = spyOn(el, "addCls").andCallThrough();

                        el.setVisible(false);

                        expect(spy).wasCalledWith('x-hidden-offsets');
                    });
                });
            });
        });

        describe("1.x - getVisibilityMode", function() {
            describe("1.x - Ext.Element.VISIBILITY", function() {
                beforeEach(function() {
                    el.setDisplayMode(Ext.Element.VISIBILITY);
                });

                it("should return the visibility mode", function() {
                    expect(el.getVisibilityMode()).toEqual(Ext.Element.VISIBILITY);
                });
            });

            describe("1.x - Ext.Element.DISPLAY", function() {
                beforeEach(function() {
                    el.setDisplayMode(Ext.Element.DISPLAY);
                });

                it("should return the visibility mode", function() {
                    expect(el.getVisibilityMode()).toEqual(Ext.Element.DISPLAY);
                });
            });

            describe("1.x - Ext.Element.OFFSETS", function() {
                beforeEach(function() {
                    el.setDisplayMode(Ext.Element.OFFSETS);
                });

                it("should return the visibility mode", function() {
                    expect(el.getVisibilityMode()).toEqual(Ext.Element.OFFSETS);
                });
            });
        });

        describe("1.x - setDisplayMode", function() {
            beforeEach(function() {
                el.setDisplayMode(Ext.Element.VISIBILITY);
            });

            it("should set the display mode", function() {
                expect(el.getVisibilityMode()).toEqual(Ext.Element.VISIBILITY);

                el.setDisplayMode(Ext.Element.DISPLAY);

                expect(el.getVisibilityMode()).toEqual(Ext.Element.DISPLAY);
            });
        });
    });
});

});