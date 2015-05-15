
jasmine.PhantomJsReporter = function () {
    this.specResults = [];
    this.startTime = null;
    this.endTime = null;
    this.complete = false;
};

jasmine.util.inherit(jasmine.PhantomJsReporter, jasmine.Reporter);

jasmine.PhantomJsReporter.prototype.log = function(str){
    //console.log(str);
};


jasmine.PhantomJsReporter.prototype.reportSpecStarting = function(spec){
};


jasmine.PhantomJsReporter.prototype.reportSpecResults = function(spec){
    this.specResults.push(spec);
};


jasmine.PhantomJsReporter.prototype.reportRunnerStarting = function(runner){
    this.complete = false;
    this.specResults = [];
    this.startTime = new Date().getTime();
};

jasmine.PhantomJsReporter.prototype.reportRunnerResults = function(runner){
    this.endTime = new Date().getTime();
    this.complete = true;
};

jasmine.PhantomJsReporter.prototype.reportSuiteStarting = function(suite){

};

jasmine.PhantomJsReporter.prototype.reportSuiteResults = function(suite){

};
