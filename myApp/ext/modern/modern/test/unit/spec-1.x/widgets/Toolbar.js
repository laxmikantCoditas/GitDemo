Ext.require(['Ext.Toolbar', 'Ext.Spacer'], function() {

describe("1.x - Ext.Toolbar", function() {
    var proto = Ext.Toolbar.prototype,
        tb;
    
    beforeEach(function() {
        tb = new Ext.Toolbar({
            title: 'Toolbar',
            items: [
                {text: 'One'},
                {text: 'Two'},
                {text: 'Three'}
            ],
            renderTo: Ext.getBody()
        });
    });
    
    afterEach(function() {
        tb.destroy();
    });
    
    it("should have a defaultType", function() {
        expect(tb.defaultType).toEqual('button');
    });
    
    it("should have a baseCls", function() {
        expect(tb.baseCls).toEqual('x-toolbar');
    });
    
    it("should have a titleCls", function() {
        expect(tb.titleCls).toEqual('x-toolbar-title');
    });
    
    it("should have no ui", function() {
        expect(tb.ui).toEqual('dark');
    });
    
    describe("1.x - when rendered", function() {
        it("should add a layout", function() {
            expect(tb.layout).not.toBeNull();
        });
        
        it("should add the title", function() {
            expect(tb.titleEl).not.toBeNull();
        });
    });
    
    describe("1.x - when setTitle", function() {
        it("should change the title", function() {
            expect(tb.title).toEqual('Toolbar');
            
            tb.setTitle('New Toolbar');
            
            expect(tb.title).toEqual('New Toolbar');
        });
        
        it("should update titleEl", function() {
            expect(tb.titleEl.dom.innerHTML).toEqual('Toolbar');
            
            tb.setTitle('New Toolbar');
            
            expect(tb.titleEl.dom.innerHTML).toEqual('New Toolbar');
        });
        
        describe("1.x - when no titleEl", function() {
            beforeEach(function() {
                tb.destroy();
                tb = new Ext.Toolbar({
                    items: [
                        {text: 'One'},
                        {text: 'Two'},
                        {text: 'Three'}
                    ],
                    renderTo: Ext.getBody()
                });
            });
            
            it("should show title", function() {
                tb.setTitle('New Toolbar');
                
                expect(tb.titleEl).toBeDefined();
                expect(tb.titleEl.dom.innerHTML).toEqual('New Toolbar');
            });
        });
    });
    
    describe("1.x - when showTitle", function() {
        beforeEach(function() {
            tb.titleEl.hide();
        });
        
        it("should show titleEl", function() {
            expect(tb.titleEl.hasCls('x-hidden-display')).toBeTruthy();
            
            tb.showTitle();
            
            expect(tb.titleEl.hasCls('x-hidden-display')).toBeFalsy();
        });
    });
    
    describe("1.x - when hideTitle", function() {
        it("should hide titleEl", function() {
            expect(tb.titleEl.hasCls('x-hidden-display')).toBeFalsy();
            
            tb.hideTitle();
            
            expect(tb.titleEl.hasCls('x-hidden-display')).toBeTruthy();
        });
    });
});

describe("1.x - Ext.Spacer", function() {
    var spacer;
    
    afterEach(function() {
        spacer.destroy();
    });
    
    describe("1.x - when no width is defined", function() {
        beforeEach(function() {
            spacer = new Ext.Spacer({
                renderTo: Ext.getBody()
            });
        });
        
        it("should set a flex property", function() {
            expect(spacer.flex).toEqual(1);
        });
        
        it("should have no width property", function() {
            expect(spacer.width).not.toBeDefined();
        });
    });
    
    describe("1.x - when a width is defined", function() {
        beforeEach(function() {
            spacer = new Ext.Spacer({
                width   : 10,
                renderTo: Ext.getBody()
            });
        });
        
        it("should not set a flex property", function() {
            expect(spacer.flex).toBeNull();
        });
        
        it("should have a width property", function() {
            expect(spacer.width).toEqual(10);
        });
    });
});

});