Ext.require('Ext.form.DatePicker', function() {

describe("1.x - Ext.form.DatePicker", function() {
    var field, makeField;

    makeField = function(cfg) {
        if (field) {
            field.destroy();
        }
        
        field = new Ext.form.DatePicker(Ext.apply(cfg || {}), {
            label   : 'Label',
            renderTo: Ext.getBody()
        });
    };
    
    beforeEach(function() {
        makeField();
    });

    afterEach(function() {
        if (field)
            field.destroy();
    });
    
    it("should have a ui", function() {
        expect(field.ui).toEqual('select');
    });

    it("should useMask", function() {
        expect(field.useMask).toBeTruthy();
    });

    it("should have no picker", function() {
        expect(field.picker).toBeNull();
    });

    describe("1.x - initComponent", function() {
        it("should still set tabIndex", function() {
            makeField({tabIndex: 123});

            expect(field.tabIndex).toEqual(-1);
        });

        it("should still set useMask", function() {
            makeField({useMask: false});

            expect(field.useMask).toBeTruthy();
        });
    });

    describe("1.x - onMaskTap", function() {
        describe("1.x - when disabled", function() {
            it("should do nothing", function() {
                makeField({
                    disabled: true
                });

                expect(field.datePicker).not.toBeDefined();
                field.onMaskTap();
                expect(field.datePicker).not.toBeDefined();
            });
        });

        describe("1.x - when enabled", function() {
            describe("1.x - when no datePicker", function() {
                it("should create a new datePicker", function() {
                    makeField();

                    expect(field.datePicker).not.toBeDefined();

                    field.onMaskTap();

                    expect(field.datePicker).toBeDefined();
                });

                describe("1.x - when picker is set", function() {
                    it("should use the config", function() {
                        makeField({
                            picker: {
                                yearFrom: 1900
                            }
                        });

                        field.onMaskTap();

                        expect(field.datePicker.yearFrom).toEqual(1900);
                    });
                });
            });
        });
    });

    describe("1.x - setValue", function() {
        beforeEach(function() {
            makeField();
        });

        describe("1.x - when date", function() {
            it("should set the value to the object", function() {
                var values = {
                    day  : 1,
                    month: 5,
                    year : 1989
                };

                var date = new Date(values.year, values.month - 1, values.day);

                field.setValue(date);

                expect(field.getValue()).toEqual(date);
                expect(field.getValue(true)).toEqual(Ext.Date.format(date, Ext.util.Format.defaultDateFormat));
            });
        });
    });

    describe("1.x - getValue", function() {
        describe("1.x - nothing", function() {
            beforeEach(function() {
                makeField();
            });

            it("should return null", function() {
                expect(field.getValue()).toBeNull();
            });
        });

        describe("1.x - value", function() {
            beforeEach(function() {
                makeField({
                    value: {
                        day  : 1,
                        month: 5,
                        year : 1989
                    }
                });
            });

            it("should return a date", function() {
                expect(Ext.isDate(field.getValue())).toBeTruthy();
            });

            it("should return a formatted date", function() {
                var result = field.getValue(true);
                console.log(result);
                expect(Ext.isDate(result)).toBeFalsy();
                expect(result).toEqual('05/01/1989');
            });
        });
    });
});

});
