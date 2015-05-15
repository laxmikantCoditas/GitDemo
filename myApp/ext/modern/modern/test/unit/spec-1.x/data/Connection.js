Ext.require('Ext.data.Connection', function() {

describe("1.x - Ext.data.Connection", function() {
    var proto = Ext.data.Connection.prototype,
        conn, makeConn, makeRequest;
    
    beforeEach(function() {
        makeConn = function(config) {
            return conn = new Ext.data.Connection(config || {});
        };
        
        makeRequest = function(config) {
            return conn.request(Ext.apply({
                url: 'test'
            }, config || {}));
        };
        
        makeConn();
    });
    
    afterEach(function() {
        conn = null;
    });
    
    describe("1.x - request", function() {
        it("should send a beforerequest event", function() {
            var fired  = false,
                called = false;
            
            conn.on({
                beforerequest: function() {
                    fired = true;
                    return false;
                }
            });
            
            makeRequest({
                callback: function() { called = true; }
            });
            
            expect(fired).toBeTruthy();
            expect(called).toBeTruthy();
        });
        
        describe("1.x - params", function() {
            describe("1.x - when params is a function", function() {
                it("should execute the function", function() {
                    var called = false;

                    makeRequest({
                        params: function() { called = true; }
                    });

                    expect(called).toBeTruthy();
                });
            });
        });
        
        describe("1.x - when url is a function", function() {
            it("should execute the function", function() {
                var called = false;

                makeRequest({
                    url: function() { called = true; return 'test' }
                });
                
                expect(called).toBeTruthy();
            });
        });
        
        describe("1.x - when jsonData", function() {
            it("should call Ext.isPrimitive", function() {
                var spy = spyOn(Ext, "isPrimitive").andCallThrough();
                
                makeRequest({
                    jsonData: {
                        key: 'value'
                    }
                });
                
                expect(spy).wasCalled();
            });
        });
        
        describe("1.x - urlParams", function() {
            
            it("should call Ext.urlAppend", function() {
                var spy = spyOn(Ext, "urlAppend").andCallThrough();

                makeRequest({
                    urlParams: {
                        key: 'value'
                    }
                });

                expect(spy).wasCalled();
            });
        });
        
        describe("1.x - when disableCaching = false", function() {
            it("should call urlAppend", function() {
                conn.disableCaching = false;
                
                var spy = spyOn(Ext, "urlAppend").andCallThrough();
        
                makeRequest({
                    method: 'GET'
                });
                
                //expect(spy).wasCalledWith('test', conn.disableCachingParam + '=' + (new Date().getTime()));
                // this doesnt work since there might be a ms difference
            });
        });
        
        describe("1.x - when data + params", function() {
            it("should call urlAppend", function() {
                var params = {
                    key: 'value'
                };
                
                var spy = spyOn(Ext, "urlAppend").andCallThrough();
                
                makeRequest({
                    disableCaching: false,
                    method: 'GET',
                    params: params
                });
                
                expect(spy).wasCalledWith('test', 'key=value');
            });
        });
        
        describe("1.x - autoAbort", function() {
            it("should call abort", function() {
                var spy = spyOn(conn, "abort");
                
                makeRequest({
                    autoAbort: true
                });
                
                expect(spy).wasCalled();
            });
        });
        
        it("should call getXhrInstance", function() {
            var spy = spyOn(conn, "getXhrInstance").andCallThrough();
            
            makeRequest();
            
            expect(spy).wasCalled();
        });
    });
    
    describe("1.x - isLoading", function() {
        it("should return false", function() {
            expect(conn.isLoading()).toBeFalsy();
        });
    });
    
    
});


});