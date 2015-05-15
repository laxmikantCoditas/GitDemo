describe("boooo", function() {
    beforeEach(function() {
       console.log("boo", "you should not see mee"); 
    });
    
    xdescribe("yaka!", function() {
        it("should booo", function() {
            console.log("yaka");
            expect("boo").toBe("boo");
        });
    });
    
    xit("should blah", function() {
        console.log("burps");
        expect(1).toBe(1);
    });
    
    xdescribe("aaaa", function() {
        
    });
});

xdescribe("foo", function() {
    beforeEach(function() {
       console.log("foo", "you should not see mee"); 
    });
    
    it("oops", function() {
       console.log("uh");
       expect(true).toBe(true);
    });
});

describe("Global Var", function() {
    it("should create a global var", function() {
       IAMGLOBAL = true;
       expect(IAMGLOBAL).toBe(true);
    });
    
    describe("ij", function() {
        it("should do", function() {
            expect("1").toBe("1");
        });
    });
});

describe("aaa", function() {
    
});

xdescribe("aaa", function() {
    
});

describe("Failing spec test", function() {
    it("should simply fail", function() {
        expect(false).toBe(true);
    });
    
    it("should print a stack trace", function() {
        var fn = function() {
            var o = test;
        };
        
        fn();
    });
});