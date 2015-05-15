Ext.require('Ext.Picker', function() {

// I can't figure out a way to render a picker without it erroring
// I think it needs css..
describe("1.x - Ext.Picker", function() {
    var proto = Ext.Picker.prototype,
        p, panel, fired = false, store;

    beforeEach(function() {
        store = new Ext.data.Store({
            fields: ['text', 'value'],
            data : [
                {text: 'First Option',  value: 'first'},
                {text: 'Second Option', value: 'second'},
                {text: 'Third Option',  value: 'third'}
            ]
        });

        p = new Ext.Picker({
            slots: [
                {
                    align       : 'center',
                    name        : 'test',
                    valueField  : 'value',
                    displayField: 'text',
                    value       : 'first',
                    store       : store
                }
            ]
        });
    });

    afterEach(function() {
        fired = false;
        p.destroy();
    });

    it("should have a componentCls", function() {
        expect(p.componentCls).toEqual('x-picker');
    });

    it("should stretchX", function() {
        expect(p.stretchX).toBeTruthy();
    });

    it("should stretchY", function() {
        expect(p.stretchY).toBeTruthy();
    });

    it("should not hideOnMaskTap", function() {
        expect(p.hideOnMaskTap).toBeFalsy();
    });

    it("should have doneButton", function() {
        expect(p.doneButton).toBeDefined();
    });

    it("should have a height", function() {
        expect(p.height).toEqual(220);
    });

    it("should not use titles", function() {
        expect(p.useTitles).toBeFalsy();
    });

    it("should have a defaultType", function() {
        expect(p.defaultType).toEqual('pickerslot');
    });

    describe("1.x - on onDoneButtonTap", function() {
        it("should call hide", function() {
            var spy = spyOn(p, "hide");

            p.onDoneButtonTap();

            expect(spy).wasCalled();
        });
    });

    describe("1.x - on onSlotPick", function() {
        it("should fire a pick event", function() {
            expect(fired).toBeFalsy();

            p.on({
                pick: function() {
                    fired = true;
                }
            });

            p.onSlotPick();

            expect(fired).toBeTruthy();
        });
    });

    describe("1.x - on setValue", function() {
        it("should call setValue 0 on all items", function() {
            p.setValue(0);
        });

        it("should call setValue", function() {
            p.setValue({
                test: '1'
            });
        });
    });

    describe("1.x - on getValue", function() {
        it("should return the values", function() {
            expect(p.getValue()).toEqual({
                test: 'first'
            });
        });
    });
});

describe("1.x - Ext.Picker.Slot", function() {
    var ps, store;

    beforeEach(function() {
        store = new Ext.data.Store({
            fields: ['text', 'value'],
            data : [
                {text: 'First Option',  value: 'first'},
                {text: 'Second Option', value: 'second'},
                {text: 'Third Option',  value: 'third'}
            ]
        });

        ps = new Ext.Picker.Slot({
            align       : 'center',
            name        : 'test',
            valueField  : 'value',
            displayField: 'text',
            value       : 'first',
            store       : store
        });
    });

    afterEach(function() {
        ps.destroy();
    });

    it("should be isSlot", function() {
        expect(ps.isSlot).toBeTruthy();
    });

    it("should flex", function() {
        expect(ps.flex).toEqual(1);
    });

    it("should have a name", function() {
        expect(ps.name).toEqual('test');
    });

    it("should have a displayField", function() {
        expect(ps.displayField).toEqual('text');
    });

    it("should have a valueField", function() {
        expect(ps.valueField).toEqual('value');
    });

    it("should have an itemSelector", function() {
        expect(ps.itemSelector).toEqual('div.x-picker-item');
    });

    it("should have a componentCls", function() {
        expect(ps.componentCls).toEqual('x-picker-slot');
    });

    it("should have a renderTpl", function() {
        expect(ps.renderTpl).toBeDefined();
    });

    it("should have a selectedIndex", function() {
        expect(ps.selectedIndex).toEqual(0);
    });

    describe("1.x - on getElConfig", function() {
        it("should be defined", function() {
            expect(ps.getElConfig()).toBeDefined();
        });
    });

    // This is not completed and freezes Safari while running!
    xdescribe("1.x - after render", function() {
        describe("1.x - when using data", function() {
            it("should create a store using the data", function() {
                ps.destroy();
                ps = new Ext.Picker.Slot({
                    align       : 'center',
                    name        : 'test',
                    valueField  : 'value',
                    displayField: 'text',
                    value       : 'first',
                    data        : [
                        // different formats
                        {text: 'First Option',  value: 'first'},
                        ['Second Option', 'second'],
                        'third'
                    ]
                });
            });
        });
    });
});


});
