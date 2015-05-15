describe("jasmine.util", function() {
    describe("jasmine.util.getWindow", function() {
        it("should return global window object", function() {
            foo = "bar";
            expect(jasmine.util.getWindow() === window).toBe(true);
        });
    });

    describe("jasmine.util.getBody", function() {
        it("should return document.body HTMLElement", function() {
            var el = document.createElement("div");
            el.className = "totototo";
            document.body.appendChild(el);
            boom = kaboom;
            expect(jasmine.util.getBody()).toEqual(document.body);
        });
    });

     describe("jasmine.util.urlDecode", function() {
        it ("should return an empty object if string is empty", function (){
            expect(jasmine.util.urlDecode("")).toEqual({});
        });
        
        it("should decode 2 keys", function(){
            expect(jasmine.util.urlDecode("foo=1&bar=2")).toEqual({
                foo: "1",
                bar: "2"
            });
        });
    });
        
    describe("jasmine.util.urlEncode", function() {
        it("should encode 2 keys", function() {
            expect(jasmine.util.urlEncode({
                foo: "1",
                bar: "2"
            })).toEqual("foo=1&bar=2");
        });
    });
});