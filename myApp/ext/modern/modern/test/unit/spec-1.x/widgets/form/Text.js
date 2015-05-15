Ext.require('Ext.form.Text', function() {

describe("1.x - Ext.form.Text", function() {
    var proto = Ext.form.Text,
        field, e;
    
    beforeEach(function() {
        field = new Ext.form.Text({
            label: 'test',
            useMask: true
        });
    });
    
    afterEach(function() {
        e = null;
        field.destroy();
    });

    it("should have a ui", function() {
        expect(field.ui).toEqual('text');
    });

    it("should have a focusCls", function() {
        expect(field.focusCls).toEqual('x-field-focus');
    });

    it("should have a maxLength", function() {
        expect(field.maxLength).toEqual(0);
    });

    it("should have no placeHolder", function() {
        expect(field.placeHolder).toBeNull();
    });

    it("should not isFocused", function() {
        expect(field.isFocused).toBeFalsy();
    });

    describe("1.x - after render", function() {
        beforeEach(function() {
            field.useMask = true;
            field.render(Ext.getBody());
        });

        describe("1.x - on onEnable", function() {
            beforeEach(function() {
                field.onDisable();
            });

            xit("should updateClearIconVisibility", function() {
                var spy = spyOn(field, "updateClearIconVisibility");

                field.onEnable();

                expect(spy).wasCalled();
            });
        });

        describe("1.x - on onDisable", function() {
            it("should hideClearIcon", function() {
                var spy = spyOn(field, "hideClearIcon").andCallThrough();

                field.onDisable();

                expect(spy).wasCalled();
            });
        });

        describe("1.x - on isDirty", function() {
            it("should return", function() {
                field.isDirty();
            });

            describe("1.x - when disabled", function() {
                beforeEach(function() {
                    field.disabled = true;
                });

                it("should return", function() {
                    field.isDirty();
                });
            });
        });

        describe("1.x - on onClearIconTap", function() {
            it("should should call setValue", function() {
                var spy = spyOn(field, "setValue").andCallThrough();

                field.onClearIconTap();

                expect(spy).wasCalledWith('');
            });
        });

        describe("1.x - on onMaskTap", function() {
            it("should hide the mask", function() {
                var spy = spyOn(field, "hideMask").andCallThrough();

                field.onMaskTap();

                expect(spy).wasCalled();
            });
        });

        describe("1.x - on onKeyUp", function() {
            xit("should call updateClearIconVisibility", function() {
                var spy = spyOn(field, "updateClearIconVisibility").andCallThrough();

                field.onKeyUp({browserEvent: {}});

                expect(spy).wasCalled();
            });

            it("should fire a keyup event", function() {
                var fired = false;

                field.on({
                    keyup: function() {
                        fired = true;
                    }
                });

                field.onKeyUp({browserEvent: {}});

                expect(fired).toBeTruthy();
            });
        });

        describe("1.x - on onFocus", function() {
            it("should call beforeFocus", function() {
                var spy = spyOn(field, "beforeFocus").andCallThrough();

                field.onFocus();

                expect(spy).wasCalled();
            });

            it("should update isFocused", function() {
                field.onFocus();

                expect(field.isFocused).toBeTruthy();
            });

            it("should fire a focus event", function() {
                var fired = false;

                field.on({
                    focus: function() {
                        fired = true;
                    }
                });

                field.onFocus();

                expect(fired).toBeTruthy();
            });
        });

        describe("1.x - on onBlur", function() {
            it("should call beforeBlur", function() {
                var spy = spyOn(field, "beforeBlur").andCallThrough();

                field.onBlur();

                expect(spy).wasCalled();
            });

            it("should update isFocused", function() {
                field.onBlur();

                expect(field.isFocused).toBeFalsy();
            });

            it("should fire a blur event", function() {
                var fired = false;

                field.on({
                    blur: function() {
                        fired = true;
                    }
                });

                field.onBlur();

                expect(fired).toBeTruthy();
            });

            describe("1.x - when the value has changed", function() {
                it("should fire a change event", function() {
                    var fired = false;

                    field.on({
                        change: function() {
                            fired = true;
                        }
                    });

                    field.setValue(10);

                    field.onBlur();

                    expect(fired).toBeTruthy();
                });
            });
        });

        describe("1.x - on focus", function() {
            it("it should focus the dom", function() {
                var spy = spyOn(field.fieldEl.dom, "focus").andCallThrough();

                field.focus();

                expect(spy).wasCalled();
            });
        });

        describe("1.x - on blur", function() {
            it("it should blur the dom", function() {
                var spy = spyOn(field.fieldEl.dom, "blur").andCallThrough();

                field.blur();

                expect(spy).wasCalled();
            });
        });
    });

    
    describe("1.x - onKeyUp", function() {
        describe("1.x - when browserevent is 13", function() {
            beforeEach(function() {
                e = {
                    browserEvent: {
                        keyCode: 13
                    }
                };
            });
            
            it("should call the blur method", function() {
                var spy = spyOn(field, "blur");
                
                field.onKeyUp(e);
                
                expect(spy).wasCalled();
            });
        });
    });
});

});