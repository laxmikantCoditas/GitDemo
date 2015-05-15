//OUTPUT OF THIS CAN BE REDIRECTED ANYWHERE
//hammerjs:
// system.execute('phantomjs screenGrab.js some/file.html > myFile')


var baseUrl  = 'http://ed.local/extjs/sdk/SDK/extjs/',
    example  = phantom.args[0],
    index    = phantom.args[1],
    total    = phantom.args[2],
    verbose  = phantom.args[3] || false,
    progress = Math.round(index / total * 100),
    address  = baseUrl + example,
    outFile  = './test/eye/snapshots/' + example.split(" ").join("-") + '.png';

var date = new Date(12345),
    RealDate = Date;

window.Date = function() {
    return date;
};

if (phantom.state.length === 0) {
    phantom.state = new RealDate().getTime();
    phantom.viewportSize = { width: 1000, height: 1000 };
    
    phantom.open(address);
} else {
    if (window.Ext) {
        window.onerror = function(message) {
            console.log('FOUND AN ERROR ON PAGE ' + example);
            console.log("    " + message);
            phantom.exit(0);
        };
        
        //ignores any whining from the example if not in verbose mode
        if (!verbose) {
            window.console.log = function() {};
            window.console.warn = function() {};
        }
        
        //ridiculous Math.random replacement - makes sure we get the same "random" data each time
        (function() {
            var key    = "asdfhjaskdfnasdflkjalisfhoiahefiouhauiehfioaeflawleifhiurhviulahflnaewkrhaulunulialuaewhf",
                length = key.length,
                count  = 0;
            
            //this is a little silly but gives some nice looking data
            window.Math.random = function() {
                return (key.charCodeAt(count++ % length) - 25) / 100;
            };
        })();
        
        Ext.require(['Ext.chart.CartesianChart'], function() {
            var chartProto  = Ext.chart.CartesianChart.prototype,
                initComponent = chartProto.initComponent;

            chartProto.initComponent = function() {
                this.animate = false;

                initComponent.apply(this, arguments);
            };
        });
        
        Ext.onReady(function() {
            Ext.defer(function() {
                phantom.render(outFile);
                
                if (verbose) {
                    console.log('Captured ' + example + ' in ' + (new RealDate().getTime() - phantom.state) + "ms (" + progress + "%)");
                }

                phantom.exit();
            }, 400);
        });
        
        
        //if Ext.onReady hasn't fired by 10 seconds in it's probably a crash so let's quit
        setTimeout(function() {
            console.log('EXAMPLE CRASHED:' + example);
            phantom.exit();
        }, 10000);
    } else {
        console.log('EXT JS NOT FOUND ON ' + address);
        phantom.exit();
    }
}