Ext.require('Ext.dom.Query', function() {

describe("1.x - Ext.DomQuery", function() {
    var dq = Ext.DomQuery,
        el, els;
    
    beforeEach(function() {
        el = Ext.getBody().createChild({
            id      : 'DomQueryHelper',
            children: [
                {cls: 'child', id: 'firstChild'},
                {cls: 'child'},
                {cls: 'child'},
                {cls: 'child'},
                {cls: 'child'},
                {cls: 'child2'},
                {cls: 'child2'},
                {cls: 'child'},
                {cls: 'child'},
                {cls: 'child'}
            ]
        });
        
        els = Ext.select('#DomQueryHelper > div');
    });
    
    describe("1.x - select", function() {
        describe("1.x - with no root", function() {
            it("should return elements", function() {
                var result = dq.select('#DomQueryHelper > div');
                
                expect(result).toBeDefined();
                expect(result.length).toEqual(10);
            });
        });
        
        describe("1.x - with root", function() {
            it("should return elements", function() {
                var result = dq.select('div', 'DomQueryHelper');
                
                expect(result).toBeDefined();
                expect(result.length).toEqual(10);
            });
        });
    });
    
    describe("1.x - selectNode", function() {
        describe("1.x - with no root", function() {
            it("should return a single element", function() {
                var result = dq.selectNode('#DomQueryHelper > div');
                
                expect(result).toEqual(els.first().dom);
            });
        });
        
        describe("1.x - with root", function() {
            it("should return a single element", function() {
                var result = dq.selectNode('#firstChild', 'DomQueryHelper');
                
                expect(result).toEqual(els.first().dom);
            });
        });
    });
    
    describe("1.x - is", function() {
        describe("1.x - when element", function() {
            it("should return true", function() {
                expect(dq.is(els.first().dom, '#firstChild')).toBeTruthy();
            });

            it("should return false", function() {
                expect(dq.is(els.last().dom, '#firstChild')).toBeFalsy();
            });
        });
        
        describe("1.x - when string", function() {
            it("should return true", function() {
                expect(dq.is('firstChild', '#firstChild')).toBeTruthy();
            });

            it("should return false", function() {
                expect(dq.is('DomQueryHelper', '#firstChild')).toBeFalsy();
            });
        });
    });
});

});
