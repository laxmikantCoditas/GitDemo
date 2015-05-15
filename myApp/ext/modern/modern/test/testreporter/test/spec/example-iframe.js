describe("Show iframe content", function() {
    var el;
    
    it("should show something in iframe", function() {
        runs(function() {
            el = document.createElement("div");
            el.style.width = "400px";
            el.style.background = "#fff";
            el.innerHTML = "Hello Davis! I will disappear in 3 sec <br/>"+ 
                           "I won't generate any warning message in the console, because I'am cleaning the document.body";
            document.body.appendChild(el);
        });
        waits(3000);
        runs(function() {
           document.body.removeChild(el); 
        });
    });
    
    it("should show something in iframe and generate warning", function() {
        runs(function() {
            el = document.createElement("div");
            el.style.width = "400px";
            el.style.background = "#fff";
            el.innerHTML = "Hello Davis! I will disappear in 3 sec <br/>"+ 
                           "I will generate a warning message in the console.";
            document.body.appendChild(el);
        });
        
        waits(3000);
    });
    

});