var jasmineEnv = jasmine.getEnv();
jasmineEnv.updateInterval = 1000;

var htmlReporter = new jasmine.HtmlReporter();

jasmineEnv.addReporter(htmlReporter);

if (jasmine.EyeReporter) {
    jasmineEnv.addReporter(new jasmine.EyeReporter());
}

jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
};

Ext.setup({
    viewport: null,
    animator: null,
    onReady: function() {
        jasmineEnv.execute();
    }
});
