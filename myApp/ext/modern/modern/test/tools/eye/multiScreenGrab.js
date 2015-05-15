//OUTPUT OF THIS CAN BE REDIRECTED ANYWHERE
//hammerjs:
// system.execute('phantomjs screenGrab.js some/file.html > myFile')


var baseUrl  = 'http://ed.local/extjs/sdk/SDK/extjs/',
    example  = phantom.args[0],
    tmpFile  = phantom.args[1],
    index    = 0,
    total    = 4,
    verbose  = phantom.args[3] || false,
    progress = Math.round(index / total * 100),
    address  = baseUrl + example,
    outFile  = tmpFile;

// console.log('HMM: ' + outFile);

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
        window.Ext.Loader.setConfig({
            enabled: true
        });
        
        window.onerror = function(message) {
            console.log('FOUND AN ERROR ON PAGE ' + address);
            console.log("    " + message);
            takeScreenshot();
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
        
        function takeScreenshot() {
            // alert(tmpFile);
            Ext.defer(function() {
                phantom.render(outFile);
                
                if (verbose) {
                    console.log('Captured ' + example + ' in ' + (new RealDate().getTime() - phantom.state) + "ms (" + progress + "%)");
                }
                
                phantom.exit();
            }, 4000);
        }
        
        Ext.onReady(takeScreenshot);
        
        
        //if Ext.onReady hasn't fired by 10 seconds in it's probably a crash so let's quit
        setTimeout(function() {
            console.log('Ext.onReady not called:' + example);
            takeScreenshot();
        }, 10000);
    } else {
        console.log('EXT JS NOT FOUND ON ' + address);
        phantom.exit();
    }
}