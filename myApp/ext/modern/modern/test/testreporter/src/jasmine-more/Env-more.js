jasmine.Env.prototype.specFor = function(object, specForFn) {
    var index = 0,
        property;

    for (property in object) {
        if (!object.hasOwnProperty(property)) {
            continue;
        }
        specForFn.call(this, property, object[property], index, object);
        index = index + 1;
    }
};

jasmine.Env.prototype.xspecFor = function(object, specForFn) {};

jasmine.Env.prototype.describe = function(description, specDefinitions, coverageFile) {
  var suite = new jasmine.Suite(this, description, specDefinitions, this.currentSuite);
  
  suite.coverageFile = coverageFile;
  
  if (!coverageFile && window.Ext && !this.currentSuite) {
    suite.coverageFile = description.replace("Ext", "").replace(/\./g, "/")+ ".js";
  }
      
  var parentSuite = this.currentSuite;
  if (parentSuite) {
    parentSuite.add(suite);
  } else {
    this.currentRunner_.add(suite);
  }

  this.currentSuite = suite;

  var declarationError = null;
  try {
    specDefinitions.call(suite);
  } catch(e) {
    declarationError = e;
  }
  if (declarationError) {
    this.it("encountered a declaration exception", function() {
      throw declarationError;
    });
  }
  
  this.currentSuite = parentSuite;

  return suite;
};