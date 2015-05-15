var baseUrl  = 'http://ed.local/extjs/sdk/SDK/extjs/',
    harness  = baseUrl + 'test/eye/harness.html',
    examples = [],
    verbose  = true,
    address;

(function() {
    var args = phantom.args,
        i;
    
    for (i = 0; i < args.length; i++) {
        examples.push(args[i]);
    }
})();

// console.log(examples);

// var progress = Math.round(index / total * 100),
//     address  = baseUrl + example,
//     outFile  = './test/eye/snapshots/' + example.split(" ").join("-") + '.png';

var date = new Date(12345),
    RealDate = Date;

window.Date = function() {
    return date;
};

if (phantom.state.length === 0) {
    phantom.state = new RealDate().getTime();
    // phantom.viewportSize = { width: 10000, height: 1000 };
    
    phantom.open(harness);
} else {
    if (window.Ext && window.parent.frames.length == 0) {
        console.log('FOUND EXT');
        console.log(window.parent.frames.length);
        window.onerror = function(message) {
            console.log('FOUND AN ERROR ON PAGE ' + example);
            console.log("    " + message);
            phantom.exit(0);
        };
        
        var time = (10000 + (examples.length * 1000));
        console.log('WILL TAKE: ' + time);
        
        Ext.onReady(function() {
            window.testCases = examples;
            window.baseUrl = baseUrl;
            Harness.loadCases();
            
            setTimeout(function() {
                phantom.render('test.png');
                
                examples.forEach(function(example, index) {
                    console.log('rendering ' + example + " " + index);
                    phantom.clipRect = { 
                        left: index * 1000, 
                        top: 0, 
                        width: 1000, 
                        height: 1000
                    };
                    
                    phantom.render("test/eye/snapshots/" + example + ".png");
                });

                phantom.exit();
            }, time);
        });
        
        
        // //ignores any whining from the example if not in verbose mode
        // if (!verbose) {
        //     window.console.log = function() {};
        //     window.console.warn = function() {};
        // }
        // 
        // //ridiculous Math.random replacement - makes sure we get the same "random" data each time
        // (function() {
        //     var key    = "asdfhjaskdfnasdflkjalisfhoiahefiouhauiehfioaeflawleifhiurhviulahflnaewkrhaulunulialuaewhf",
        //         length = key.length,
        //         count  = 0;
        //     
        //     //this is a little silly but gives some nice looking data
        //     window.Math.random = function() {
        //         return (key.charCodeAt(count++ % length) - 25) / 100;
        //     };
        // })();
        // 
        // Ext.require(['Ext.chart.CartesianChart'], function() {
        //     var chartProto  = Ext.chart.CartesianChart.prototype,
        //         initComponent = chartProto.initComponent;
        // 
        //     chartProto.initComponent = function() {
        //         this.animate = false;
        // 
        //         initComponent.apply(this, arguments);
        //     };
        // });
        // 
        // Ext.onReady(function() {
        //     Ext.defer(function() {
        //         phantom.render(outFile);
        //         
        //         if (verbose) {
        //             console.log('Captured ' + example + ' in ' + (new RealDate().getTime() - phantom.state) + "ms (" + progress + "%)");
        //         }
        // 
        //         phantom.exit();
        //     }, 400);
        // });
        
        
        //if Ext.onReady hasn't fired by 10 seconds in it's probably a crash so let's quit
        setTimeout(function() {
            console.log('EXAMPLE CRASHED:');
            // phantom.exit();
        }, 10000);
    }
}