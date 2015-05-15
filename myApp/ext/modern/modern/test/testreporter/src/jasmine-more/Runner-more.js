jasmine.Runner.prototype.filter = function (suiteIds, specIds) {
    // convert [1, 2] into { 1: true, 2: true }
    //
    if (typeof suiteIds.length == 'number') {
        suiteIds = jasmine.toMap(suiteIds);
    }
    if (typeof specIds.length == 'number') {
        specIds = jasmine.toMap(specIds);
    }

    var specs = jasmine.getByIds(this.specs(), specIds),
        suites = jasmine.getByIds(this.suites(), suiteIds),
        blocks = [], 
        i, length, suite;
    
    length = specs.length;
    for (i = 0; i < length; i++) {
        suite = specs[i].getRootSuite();
        if (jasmine.array.indexOf(blocks, suite) === -1) {
            suite.filter(suiteIds, specIds);
            blocks.push(suite);
        }
    }
    
    length = suites.length;
    for (i = 0; i < length; i++) {
        suite = suites[i].getRootSuite();
        if (jasmine.array.indexOf(blocks, suite) === -1) {
            suite.filter(suiteIds, specIds);
            blocks.push(suite);
        }
    }

    if (blocks.length) {
        this.queue.blocks = blocks;
    }

    return this;
};
