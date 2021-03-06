/**
 * Top level namespace for Jasmine, a lightweight JavaScript BDD/spec/testing framework.
 *
 * @namespace
 */
var jasmine = {};

/**
 * @private
 */
jasmine.unimplementedMethod_ = function() {
  throw new Error("unimplemented method");
};

/**
 * Use <code>jasmine.undefined</code> instead of <code>undefined</code>, since <code>undefined</code> is just
 * a plain old variable and may be redefined by somebody else.
 *
 * @private
 */
jasmine.undefined = jasmine.___undefined___;

/**
 * Default interval in milliseconds for event loop yields (e.g. to allow network activity or to refresh the screen with the HTML-based runner). Small values here may result in slow test running. Zero means no updates until all tests have completed.
 *
 */
jasmine.DEFAULT_UPDATE_INTERVAL = 250;

/**
 * Default timeout interval in milliseconds for waitsFor() blocks.
 */
jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;

jasmine.getGlobal = function() {
  function getGlobal() {
    return this;
  }

  return getGlobal();
};

/**
 * Allows for bound functions to be compared.  Internal use only.
 *
 * @ignore
 * @private
 * @param base {Object} bound 'this' for the function
 * @param name {Function} function to find
 */
jasmine.bindOriginal_ = function(base, name) {
  var original = base[name];
  if (original.apply) {
    return function() {
      return original.apply(base, arguments);
    };
  } else {
    // IE support
    return jasmine.getGlobal()[name];
  }
};

jasmine.setTimeout = jasmine.bindOriginal_(jasmine.getGlobal(), 'setTimeout');
jasmine.clearTimeout = jasmine.bindOriginal_(jasmine.getGlobal(), 'clearTimeout');
jasmine.setInterval = jasmine.bindOriginal_(jasmine.getGlobal(), 'setInterval');
jasmine.clearInterval = jasmine.bindOriginal_(jasmine.getGlobal(), 'clearInterval');

jasmine.MessageResult = function(values) {
  this.type = 'log';
  this.values = values;
  this.trace = new Error(); // todo: test better
};

jasmine.MessageResult.prototype.toString = function() {
  var text = "";
  for(var i = 0; i < this.values.length; i++) {
    if (i > 0) text += " ";
    if (jasmine.isString_(this.values[i])) {
      text += this.values[i];
    } else {
      text += jasmine.pp(this.values[i]);
    }
  }
  return text;
};

jasmine.ExpectationResult = function(params) {
  this.type = 'expect';
  this.matcherName = params.matcherName;
  this.passed_ = params.passed;
  this.expected = params.expected;
  this.actual = params.actual;

  this.message = this.passed_ ? 'Passed.' : params.message;
  this.trace = this.passed_ ? '' : new Error(this.message);
};

jasmine.ExpectationResult.prototype.toString = function () {
  return this.message;
};

jasmine.ExpectationResult.prototype.passed = function () {
  return this.passed_;
};

/**
 * Getter for the Jasmine environment. Ensures one gets created
 */
jasmine.getEnv = function() {
  return jasmine.currentEnv_ = jasmine.currentEnv_ || new jasmine.Env();
};

/**
 * @ignore
 * @private
 * @param value
 * @returns {Boolean}
 */
jasmine.isArray_ = function(value) {
  return jasmine.isA_("Array", value);  
};

/**
 * @ignore
 * @private
 * @param value
 * @returns {Boolean}
 */
jasmine.isString_ = function(value) {
  return jasmine.isA_("String", value);
};

/**
 * @ignore
 * @private
 * @param value
 * @returns {Boolean}
 */
jasmine.isNumber_ = function(value) {
  return jasmine.isA_("Number", value);
};

/**
 * @ignore
 * @private
 * @param {String} typeName
 * @param value
 * @returns {Boolean}
 */
jasmine.isA_ = function(typeName, value) {
  return Object.prototype.toString.apply(value) === '[object ' + typeName + ']';
};

/**
 * Pretty printer for expecations.  Takes any object and turns it into a human-readable string.
 *
 * @param value {Object} an object to be outputted
 * @returns {String}
 */
jasmine.pp = function(value) {
  var stringPrettyPrinter = new jasmine.StringPrettyPrinter();
  stringPrettyPrinter.format(value);
  return stringPrettyPrinter.string;
};

/**
 * Returns true if the object is a DOM Node.
 *
 * @param {Object} obj object to check
 * @returns {Boolean}
 */
jasmine.isDomNode = function(obj) {
  return obj['nodeType'] > 0;
};

/**
 * Returns a matchable 'generic' object of the class type.  For use in expecations of type when values don't matter.
 *
 * @example
 * // don't care about which function is passed in, as long as it's a function
 * expect(mySpy).toHaveBeenCalledWith(jasmine.any(Function));
 *
 * @param {Class} clazz
 * @returns matchable object of the type clazz
 */
jasmine.any = function(clazz) {
  return new jasmine.Matchers.Any(clazz);
};

/**
 * Jasmine Spies are test doubles that can act as stubs, spies, fakes or when used in an expecation, mocks.
 *
 * Spies should be created in test setup, before expectations.  They can then be checked, using the standard Jasmine
 * expectation syntax. Spies can be checked if they were called or not and what the calling params were.
 *
 * A Spy has the following fields: wasCalled, callCount, mostRecentCall, and argsForCall (see docs).
 *
 * Spies are torn down at the end of every spec.
 *
 * Note: Do <b>not</b> call new jasmine.Spy() directly - a spy must be created using spyOn, jasmine.createSpy or jasmine.createSpyObj.
 *
 * @example
 * // a stub
 * var myStub = jasmine.createSpy('myStub');  // can be used anywhere
 *
 * // spy example
 * var foo = {
 *   not: function(bool) { return !bool; }
 * }
 *
 * // actual foo.not will not be called, execution stops
 * spyOn(foo, 'not');

 // foo.not spied upon, execution will continue to implementation
 * spyOn(foo, 'not').andCallThrough();
 *
 * // fake example
 * var foo = {
 *   not: function(bool) { return !bool; }
 * }
 *
 * // foo.not(val) will return val
 * spyOn(foo, 'not').andCallFake(function(value) {return value;});
 *
 * // mock example
 * foo.not(7 == 7);
 * expect(foo.not).toHaveBeenCalled();
 * expect(foo.not).toHaveBeenCalledWith(true);
 *
 * @constructor
 * @see spyOn, jasmine.createSpy, jasmine.createSpyObj
 * @param {String} name
 */
jasmine.Spy = function(name) {
  /**
   * The name of the spy, if provided.
   */
  this.identity = name || 'unknown';
  /**
   *  Is this Object a spy?
   */
  this.isSpy = true;
  /**
   * The actual function this spy stubs.
   */
  this.plan = function() {
  };
  /**
   * Tracking of the most recent call to the spy.
   * @example
   * var mySpy = jasmine.createSpy('foo');
   * mySpy(1, 2);
   * mySpy.mostRecentCall.args = [1, 2];
   */
  this.mostRecentCall = {};

  /**
   * Holds arguments for each call to the spy, indexed by call count
   * @example
   * var mySpy = jasmine.createSpy('foo');
   * mySpy(1, 2);
   * mySpy(7, 8);
   * mySpy.mostRecentCall.args = [7, 8];
   * mySpy.argsForCall[0] = [1, 2];
   * mySpy.argsForCall[1] = [7, 8];
   */
  this.argsForCall = [];
  this.calls = [];
};

/**
 * Tells a spy to call through to the actual implemenatation.
 *
 * @example
 * var foo = {
 *   bar: function() { // do some stuff }
 * }
 *
 * // defining a spy on an existing property: foo.bar
 * spyOn(foo, 'bar').andCallThrough();
 */
jasmine.Spy.prototype.andCallThrough = function() {
  this.plan = this.originalValue;
  return this;
};

/**
 * For setting the return value of a spy.
 *
 * @example
 * // defining a spy from scratch: foo() returns 'baz'
 * var foo = jasmine.createSpy('spy on foo').andReturn('baz');
 *
 * // defining a spy on an existing property: foo.bar() returns 'baz'
 * spyOn(foo, 'bar').andReturn('baz');
 *
 * @param {Object} value
 */
jasmine.Spy.prototype.andReturn = function(value) {
  this.plan = function() {
    return value;
  };
  return this;
};

/**
 * For throwing an exception when a spy is called.
 *
 * @example
 * // defining a spy from scratch: foo() throws an exception w/ message 'ouch'
 * var foo = jasmine.createSpy('spy on foo').andThrow('baz');
 *
 * // defining a spy on an existing property: foo.bar() throws an exception w/ message 'ouch'
 * spyOn(foo, 'bar').andThrow('baz');
 *
 * @param {String} exceptionMsg
 */
jasmine.Spy.prototype.andThrow = function(exceptionMsg) {
  this.plan = function() {
    throw exceptionMsg;
  };
  return this;
};

/**
 * Calls an alternate implementation when a spy is called.
 *
 * @example
 * var baz = function() {
 *   // do some stuff, return something
 * }
 * // defining a spy from scratch: foo() calls the function baz
 * var foo = jasmine.createSpy('spy on foo').andCall(baz);
 *
 * // defining a spy on an existing property: foo.bar() calls an anonymnous function
 * spyOn(foo, 'bar').andCall(function() { return 'baz';} );
 *
 * @param {Function} fakeFunc
 */
jasmine.Spy.prototype.andCallFake = function(fakeFunc) {
  this.plan = fakeFunc;
  return this;
};

/**
 * Resets all of a spy's the tracking variables so that it can be used again.
 *
 * @example
 * spyOn(foo, 'bar');
 *
 * foo.bar();
 *
 * expect(foo.bar.callCount).toEqual(1);
 *
 * foo.bar.reset();
 *
 * expect(foo.bar.callCount).toEqual(0);
 */
jasmine.Spy.prototype.reset = function() {
  this.wasCalled = false;
  this.callCount = 0;
  this.argsForCall = [];
  this.calls = [];
  this.mostRecentCall = {};
};

jasmine.createSpy = function(name) {

  var spyObj = function() {
    spyObj.wasCalled = true;
    spyObj.callCount++;
    var args = jasmine.util.argsToArray(arguments);
    spyObj.mostRecentCall.object = this;
    spyObj.mostRecentCall.args = args;
    spyObj.argsForCall.push(args);
    spyObj.calls.push({object: this, args: args});
    return spyObj.plan.apply(this, arguments);
  };

  var spy = new jasmine.Spy(name);

  for (var prop in spy) {
    spyObj[prop] = spy[prop];
  }

  spyObj.reset();

  return spyObj;
};

/**
 * Determines whether an object is a spy.
 *
 * @param {jasmine.Spy|Object} putativeSpy
 * @returns {Boolean}
 */
jasmine.isSpy = function(putativeSpy) {
  return putativeSpy && putativeSpy.isSpy;
};

/**
 * Creates a more complicated spy: an Object that has every property a function that is a spy.  Used for stubbing something
 * large in one call.
 *
 * @param {String} baseName name of spy class
 * @param {Array} methodNames array of names of methods to make spies
 */
jasmine.createSpyObj = function(baseName, methodNames) {
  if (!jasmine.isArray_(methodNames) || methodNames.length == 0) {
    throw new Error('createSpyObj requires a non-empty array of method names to create spies for');
  }
  var obj = {};
  for (var i = 0; i < methodNames.length; i++) {
    obj[methodNames[i]] = jasmine.createSpy(baseName + '.' + methodNames[i]);
  }
  return obj;
};

/**
 * All parameters are pretty-printed and concatenated together, then written to the current spec's output.
 *
 * Be careful not to leave calls to <code>jasmine.log</code> in production code.
 */
jasmine.log = function() {
  var spec = jasmine.getEnv().currentSpec;
  spec.log.apply(spec, arguments);
};

/**
 * Function that installs a spy on an existing object's method name.  Used within a Spec to create a spy.
 *
 * @example
 * // spy example
 * var foo = {
 *   not: function(bool) { return !bool; }
 * }
 * spyOn(foo, 'not'); // actual foo.not will not be called, execution stops
 *
 * @see jasmine.createSpy
 * @param obj
 * @param methodName
 * @returns a Jasmine spy that can be chained with all spy methods
 */
var spyOn = function(obj, methodName) {
  return jasmine.getEnv().currentSpec.spyOn(obj, methodName);
};

/**
 * Creates a Jasmine spec that will be added to the current suite.
 *
 * // TODO: pending tests
 *
 * @example
 * it('should be true', function() {
 *   expect(true).toEqual(true);
 * });
 *
 * @param {String} desc description of this specification
 * @param {Function} func defines the preconditions and expectations of the spec
 */
var it = function(desc, func) {
  return jasmine.getEnv().it(desc, func);
};

/**
 * Creates a <em>disabled</em> Jasmine spec.
 *
 * A convenience method that allows existing specs to be disabled temporarily during development.
 *
 * @param {String} desc description of this specification
 * @param {Function} func defines the preconditions and expectations of the spec
 */
var xit = function(desc, func) {
  return jasmine.getEnv().xit(desc, func);
};

/**
 * Starts a chain for a Jasmine expectation.
 *
 * It is passed an Object that is the actual value and should chain to one of the many
 * jasmine.Matchers functions.
 *
 * @param {Object} actual Actual value to test against and expected value
 */
var expect = function(actual) {
  return jasmine.getEnv().currentSpec.expect(actual);
};

/**
 * Defines part of a jasmine spec.  Used in cominbination with waits or waitsFor in asynchrnous specs.
 *
 * @param {Function} func Function that defines part of a jasmine spec.
 */
var runs = function(func) {
  jasmine.getEnv().currentSpec.runs(func);
};

/**
 * Waits a fixed time period before moving to the next block.
 *
 * @deprecated Use waitsFor() instead
 * @param {Number} timeout milliseconds to wait
 */
var waits = function(timeout) {
  jasmine.getEnv().currentSpec.waits(timeout);
};

/**
 * Waits for the latchFunction to return true before proceeding to the next block.
 *
 * @param {Function} latchFunction
 * @param {String} optional_timeoutMessage
 * @param {Number} optional_timeout
 */
var waitsFor = function(latchFunction, optional_timeoutMessage, optional_timeout) {
  jasmine.getEnv().currentSpec.waitsFor.apply(jasmine.getEnv().currentSpec, arguments);
};

/**
 * A function that is called before each spec in a suite.
 *
 * Used for spec setup, including validating assumptions.
 *
 * @param {Function} beforeEachFunction
 */
var beforeEach = function(beforeEachFunction) {
  jasmine.getEnv().beforeEach(beforeEachFunction);
};

/**
 * A function that is called after each spec in a suite.
 *
 * Used for restoring any state that is hijacked during spec execution.
 *
 * @param {Function} afterEachFunction
 */
var afterEach = function(afterEachFunction) {
  jasmine.getEnv().afterEach(afterEachFunction);
};

/**
 * Defines a suite of specifications.
 *
 * Stores the description and all defined specs in the Jasmine environment as one suite of specs. Variables declared
 * are accessible by calls to beforeEach, it, and afterEach. Describe blocks can be nested, allowing for specialization
 * of setup in some tests.
 *
 * @example
 * // TODO: a simple suite
 *
 * // TODO: a simple suite with a nested describe block
 *
 * @param {String} description A string, usually the class under test.
 * @param {Function} specDefinitions function that defines several specs.
 */
var describe = function(description, specDefinitions) {
  return jasmine.getEnv().describe(description, specDefinitions);
};

/**
 * Disables a suite of specifications.  Used to disable some suites in a file, or files, temporarily during development.
 *
 * @param {String} description A string, usually the class under test.
 * @param {Function} specDefinitions function that defines several specs.
 */
var xdescribe = function(description, specDefinitions) {
  return jasmine.getEnv().xdescribe(description, specDefinitions);
};


// Provide the XMLHttpRequest class for IE 5.x-6.x:
jasmine.XmlHttpRequest = (typeof XMLHttpRequest == "undefined") ? function() {
  try {
    return new ActiveXObject("Msxml2.XMLHTTP.6.0");
  } catch(e) {
  }
  try {
    return new ActiveXObject("Msxml2.XMLHTTP.3.0");
  } catch(e) {
  }
  try {
    return new ActiveXObject("Msxml2.XMLHTTP");
  } catch(e) {
  }
  try {
    return new ActiveXObject("Microsoft.XMLHTTP");
  } catch(e) {
  }
  throw new Error("This browser does not support XMLHttpRequest.");
} : XMLHttpRequest;
var specFor = function(object, specForFn) {
    jasmine.getEnv().specFor(object, specForFn);
};

var xspecFor = function(object, specsForFn) {
    jasmine.getEnv().xspecFor(object, specForFn);
};

var describe = function(description, specDefinitions, coverageFile) {
  return jasmine.getEnv().describe(description, specDefinitions, coverageFile);
};

var xdescribe = function(description, specDefinitions, coverageFile) {
  return jasmine.getEnv().describe(description, specDefinitions, coverageFile).disable();
};



var xit = function(desc, func) {
  return jasmine.getEnv().it(desc, func).disable();
};

// ensure that addGlobal is never undefined
var addGlobal = function() {};

jasmine.getByIds = function (items, ids) {
    var result = [],
        length = items.length,
        i, id, item;

    for (i = 0; i < length; ++i) {
        item = items[i];
        id = item.id;
        if (ids[id]) {
            result.push(item);
        }
    }

    return result;
};

jasmine.hashes = {};

jasmine.hashString = function (s, hash) {
    hash = hash || 0;
   
    // see http://www.cse.yorku.ca/~oz/hash.html
    for (var c, i = 0, n = s.length; i < n; ++i) {
        c = s.charCodeAt(i);
        hash = c + (hash << 6) + (hash << 16) - hash;
    }
    
    if (jasmine.hashes[hash]) {
        console.log("Identical hash detected: " + s);
    }
    
    jasmine.hashes[hash] = true;
    return hash;
};

jasmine.toMap = function (items) {
    var map = {},
        k;

    for (k = items.length; k--; ) {
        map[items[k]] = true;
    }

    return map;
};

var spyEvents = function(obj) {
    return spyOn(obj, 'fireEvent').andCallThrough();
};

jasmine.interactInc = 0;

var interact = function(config) {
    var arraySlice = Array.prototype.slice,
        i = 0, 
        length, setup,args, player, playerHasStopped, timeout;
     
    timeout = arraySlice.call(arguments, -1);
    if (isNaN(timeout)) {
         timeout = 60000;
    }
    if (config.setup) {
        setup = config.setup;
        args = arraySlice.call(arguments, 1);
    } else {
        setup = {};
        args = arraySlice.call(arguments, 0);
    }
    
    length = args.length;
    for (; i < length; i++) {
        args[i].description = jasmine.getEnv().currentSpec.getFullName() + ' (' +  jasmine.interactInc  + ') ';
        jasmine.interactInc++;
    }
    
    Qa.setup(setup);
    
    Qa.generateEventsQueue.apply(Qa, args);
    
    player = new Qa.interaction.Player({
        eventQueue: Qa.eventQueue,
        keyFrameEvents: Qa.keyFrameEvents,
        speed: Qa.speed
    });

    player.on('keyframe', function(p, keyFrame, eventDescriptor) {
         Qa.snap({
             keyFrame: keyFrame,
             eventDescriptor: eventDescriptor
         });
    });


    player.on('error', function(p, error) {
        jasmine.getEnv().currentSuite = jasmine.getEnv().currentSpec.suite;
        jasmine.getEnv().it("encountered an error during interaction.", function() {
            throw error;
        });
        jasmine.getEnv().currentSuite = null;
    });
     
    player.on('stop', function(){
          Qa.eventQueue = [];
          playerHasStopped = true;
    });
        
    player.start();
 
     
    waitsFor(function() {
         return playerHasStopped === true;
    }, '(Interaction Timeout)', timeout);
    
};

var takeScreenshot = function() {
    interact({keyframe: true});
};
    
jasmine.extractStackTrace = function(error) {
    var stack = error.stack || error.stackTrace,
        file, lineNumber;
    
    if (stack) {
        return stack.toString();
    } else {
        file = error.sourceURL || error.fileName;  
        lineNumber = error.line || error.lineNumber;

        if (file && lineNumber) {
            return error + ' ' + file + ':' + lineNumber;
        }
        
        return error.toString();
    }
};/**
 * @namespace
 */
jasmine.util = {};

/**
 * Declare that a child class inherit it's prototype from the parent class.
 *
 * @private
 * @param {Function} childClass
 * @param {Function} parentClass
 */
jasmine.util.inherit = function(childClass, parentClass) {
  /**
   * @private
   */
  var subclass = function() {
  };
  subclass.prototype = parentClass.prototype;
  childClass.prototype = new subclass;
};

jasmine.util.formatException = function(e) {
  var lineNumber;
  if (e.line) {
    lineNumber = e.line;
  }
  else if (e.lineNumber) {
    lineNumber = e.lineNumber;
  }

  var file;

  if (e.sourceURL) {
    file = e.sourceURL;
  }
  else if (e.fileName) {
    file = e.fileName;
  }

  var message = (e.name && e.message) ? (e.name + ': ' + e.message) : e.toString();

  if (file && lineNumber) {
    message += ' in ' + file + ' (line ' + lineNumber + ')';
  }

  return message;
};

jasmine.util.htmlEscape = function(str) {
  if (!str) return str;
  return str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};

jasmine.util.argsToArray = function(args) {
  var arrayOfArgs = [];
  for (var i = 0; i < args.length; i++) arrayOfArgs.push(args[i]);
  return arrayOfArgs;
};

jasmine.util.extend = function(destination, source) {
  for (var property in source) destination[property] = source[property];
  return destination;
};

/**
 * Environment for Jasmine
 *
 * @constructor
 */
jasmine.Env = function() {
  this.currentSpec = null;
  this.currentSuite = null;
  this.currentRunner_ = new jasmine.Runner(this);

  this.reporter = new jasmine.MultiReporter();

  this.updateInterval = jasmine.DEFAULT_UPDATE_INTERVAL;
  this.defaultTimeoutInterval = jasmine.DEFAULT_TIMEOUT_INTERVAL;
  this.lastUpdate = 0;
  this.specFilter = function() {
    return true;
  };

  this.nextSpecId_ = 0;
  this.nextSuiteId_ = 0;
  this.equalityTesters_ = [];

  // wrap matchers
  this.matchersClass = function() {
    jasmine.Matchers.apply(this, arguments);
  };
  jasmine.util.inherit(this.matchersClass, jasmine.Matchers);

  jasmine.Matchers.wrapInto_(jasmine.Matchers.prototype, this.matchersClass);
};


jasmine.Env.prototype.setTimeout = jasmine.setTimeout;
jasmine.Env.prototype.clearTimeout = jasmine.clearTimeout;
jasmine.Env.prototype.setInterval = jasmine.setInterval;
jasmine.Env.prototype.clearInterval = jasmine.clearInterval;

/**
 * @returns an object containing jasmine version build info, if set.
 */
jasmine.Env.prototype.version = function () {
  if (jasmine.version_) {
    return jasmine.version_;
  } else {
    throw new Error('Version not set');
  }
};

/**
 * @returns string containing jasmine version build info, if set.
 */
jasmine.Env.prototype.versionString = function() {
  if (jasmine.version_) {
    var version = this.version();
    return version.major + "." + version.minor + "." + version.build + " revision " + version.revision;
  } else {
    return "version unknown";
  }
};

/**
 * @returns a sequential integer starting at 0
 */
jasmine.Env.prototype.nextSpecId = function () {
  return this.nextSpecId_++;
};

/**
 * @returns a sequential integer starting at 0
 */
jasmine.Env.prototype.nextSuiteId = function () {
  return this.nextSuiteId_++;
};

/**
 * Register a reporter to receive status updates from Jasmine.
 * @param {jasmine.Reporter} reporter An object which will receive status updates.
 */
jasmine.Env.prototype.addReporter = function(reporter) {
  this.reporter.addReporter(reporter);
};

jasmine.Env.prototype.execute = function() {
  this.currentRunner_.execute();
};

jasmine.Env.prototype.describe = function(description, specDefinitions) {
  var suite = new jasmine.Suite(this, description, specDefinitions, this.currentSuite);

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

  this.currentSuite = parentSuite;

  if (declarationError) {
    this.it("encountered a declaration exception", function() {
      throw declarationError;
    });
  }

  return suite;
};

jasmine.Env.prototype.beforeEach = function(beforeEachFunction) {
  if (this.currentSuite) {
    this.currentSuite.beforeEach(beforeEachFunction);
  } else {
    this.currentRunner_.beforeEach(beforeEachFunction);
  }
};

jasmine.Env.prototype.currentRunner = function () {
  return this.currentRunner_;
};

jasmine.Env.prototype.afterEach = function(afterEachFunction) {
  if (this.currentSuite) {
    this.currentSuite.afterEach(afterEachFunction);
  } else {
    this.currentRunner_.afterEach(afterEachFunction);
  }

};

jasmine.Env.prototype.xdescribe = function(desc, specDefinitions) {
  return {
    execute: function() {
    }
  };
};

jasmine.Env.prototype.it = function(description, func) {
  var spec = new jasmine.Spec(this, this.currentSuite, description);
  this.currentSuite.add(spec);
  this.currentSpec = spec;

  if (func) {
    spec.runs(func);
  }

  return spec;
};

jasmine.Env.prototype.xit = function(desc, func) {
  return {
    id: this.nextSpecId(),
    runs: function() {
    }
  };
};

jasmine.Env.prototype.compareObjects_ = function(a, b, mismatchKeys, mismatchValues) {
  if (a.__Jasmine_been_here_before__ === b && b.__Jasmine_been_here_before__ === a) {
    return true;
  }

  a.__Jasmine_been_here_before__ = b;
  b.__Jasmine_been_here_before__ = a;

  var hasKey = function(obj, keyName) {
    return obj != null && obj[keyName] !== jasmine.undefined;
  };

  for (var property in b) {
    if (!hasKey(a, property) && hasKey(b, property)) {
      mismatchKeys.push("expected has key '" + property + "', but missing from actual.");
    }
  }
  for (property in a) {
    if (!hasKey(b, property) && hasKey(a, property)) {
      mismatchKeys.push("expected missing key '" + property + "', but present in actual.");
    }
  }
  for (property in b) {
    if (property == '__Jasmine_been_here_before__') continue;
    if (!this.equals_(a[property], b[property], mismatchKeys, mismatchValues)) {
      mismatchValues.push("'" + property + "' was '" + (b[property] ? jasmine.util.htmlEscape(b[property].toString()) : b[property]) + "' in expected, but was '" + (a[property] ? jasmine.util.htmlEscape(a[property].toString()) : a[property]) + "' in actual.");
    }
  }

  if (jasmine.isArray_(a) && jasmine.isArray_(b) && a.length != b.length) {
    mismatchValues.push("arrays were not the same length");
  }

  delete a.__Jasmine_been_here_before__;
  delete b.__Jasmine_been_here_before__;
  return (mismatchKeys.length == 0 && mismatchValues.length == 0);
};

jasmine.Env.prototype.equals_ = function(a, b, mismatchKeys, mismatchValues) {
  mismatchKeys = mismatchKeys || [];
  mismatchValues = mismatchValues || [];

  for (var i = 0; i < this.equalityTesters_.length; i++) {
    var equalityTester = this.equalityTesters_[i];
    var result = equalityTester(a, b, this, mismatchKeys, mismatchValues);
    if (result !== jasmine.undefined) return result;
  }

  if (a === b) return true;

  if (a === jasmine.undefined || a === null || b === jasmine.undefined || b === null) {
    return (a == jasmine.undefined && b == jasmine.undefined);
  }

  if (jasmine.isDomNode(a) && jasmine.isDomNode(b)) {
    return a === b;
  }

  if (a instanceof Date && b instanceof Date) {
    return a.getTime() == b.getTime();
  }

  if (a instanceof jasmine.Matchers.Any) {
    return a.matches(b);
  }

  if (b instanceof jasmine.Matchers.Any) {
    return b.matches(a);
  }

  if (jasmine.isString_(a) && jasmine.isString_(b)) {
    return (a == b);
  }

  if (jasmine.isNumber_(a) && jasmine.isNumber_(b)) {
    return (a == b);
  }

  if (typeof a === "object" && typeof b === "object") {
    return this.compareObjects_(a, b, mismatchKeys, mismatchValues);
  }

  //Straight check
  return (a === b);
};

jasmine.Env.prototype.contains_ = function(haystack, needle) {
  if (jasmine.isArray_(haystack)) {
    for (var i = 0; i < haystack.length; i++) {
      if (this.equals_(haystack[i], needle)) return true;
    }
    return false;
  }
  return haystack.indexOf(needle) >= 0;
};

jasmine.Env.prototype.addEqualityTester = function(equalityTester) {
  this.equalityTesters_.push(equalityTester);
};
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
};/** No-op base class for Jasmine reporters.
 *
 * @constructor
 */
jasmine.Reporter = function() {
};

//noinspection JSUnusedLocalSymbols
jasmine.Reporter.prototype.reportRunnerStarting = function(runner) {
};

//noinspection JSUnusedLocalSymbols
jasmine.Reporter.prototype.reportRunnerResults = function(runner) {
};

//noinspection JSUnusedLocalSymbols
jasmine.Reporter.prototype.reportSuiteResults = function(suite) {
};

//noinspection JSUnusedLocalSymbols
jasmine.Reporter.prototype.reportSpecStarting = function(spec) {
};

//noinspection JSUnusedLocalSymbols
jasmine.Reporter.prototype.reportSpecResults = function(spec) {
};

//noinspection JSUnusedLocalSymbols
jasmine.Reporter.prototype.log = function(str) {
};

/**
 * Blocks are functions with executable code that make up a spec.
 *
 * @constructor
 * @param {jasmine.Env} env
 * @param {Function} func
 * @param {jasmine.Spec} spec
 */
jasmine.Block = function(env, func, spec) {
  this.env = env;
  this.func = func;
  this.spec = spec;
};

jasmine.Block.prototype.execute = function(onComplete) {  
  try {
    this.func.apply(this.spec);
  } catch (e) {
    this.spec.fail(e);
  }
  onComplete();
};/** JavaScript API reporter.
 *
 * @constructor
 */
jasmine.JsApiReporter = function() {
  this.started = false;
  this.finished = false;
  this.suites_ = [];
  this.results_ = {};
};

jasmine.JsApiReporter.prototype.reportRunnerStarting = function(runner) {
  this.started = true;
  var suites = runner.topLevelSuites();
  for (var i = 0; i < suites.length; i++) {
    var suite = suites[i];
    this.suites_.push(this.summarize_(suite));
  }
};

jasmine.JsApiReporter.prototype.suites = function() {
  return this.suites_;
};

jasmine.JsApiReporter.prototype.summarize_ = function(suiteOrSpec) {
  var isSuite = suiteOrSpec instanceof jasmine.Suite;
  var summary = {
    id: suiteOrSpec.id,
    name: suiteOrSpec.description,
    type: isSuite ? 'suite' : 'spec',
    children: []
  };
  
  if (isSuite) {
    var children = suiteOrSpec.children();
    for (var i = 0; i < children.length; i++) {
      summary.children.push(this.summarize_(children[i]));
    }
  }
  return summary;
};

jasmine.JsApiReporter.prototype.results = function() {
  return this.results_;
};

jasmine.JsApiReporter.prototype.resultsForSpec = function(specId) {
  return this.results_[specId];
};

//noinspection JSUnusedLocalSymbols
jasmine.JsApiReporter.prototype.reportRunnerResults = function(runner) {
  this.finished = true;
};

//noinspection JSUnusedLocalSymbols
jasmine.JsApiReporter.prototype.reportSuiteResults = function(suite) {
};

//noinspection JSUnusedLocalSymbols
jasmine.JsApiReporter.prototype.reportSpecResults = function(spec) {
  this.results_[spec.id] = {
    messages: spec.results().getItems(),
    result: spec.results().failedCount > 0 ? "failed" : "passed"
  };
};

//noinspection JSUnusedLocalSymbols
jasmine.JsApiReporter.prototype.log = function(str) {
};

jasmine.JsApiReporter.prototype.resultsForSpecs = function(specIds){
  var results = {};
  for (var i = 0; i < specIds.length; i++) {
    var specId = specIds[i];
    results[specId] = this.summarizeResult_(this.results_[specId]);
  }
  return results;
};

jasmine.JsApiReporter.prototype.summarizeResult_ = function(result){
  var summaryMessages = [];
  var messagesLength = result.messages.length;
  for (var messageIndex = 0; messageIndex < messagesLength; messageIndex++) {
    var resultMessage = result.messages[messageIndex];
    summaryMessages.push({
      text: resultMessage.type == 'log' ? resultMessage.toString() : jasmine.undefined,
      passed: resultMessage.passed ? resultMessage.passed() : true,
      type: resultMessage.type,
      message: resultMessage.message,
      trace: {
        stack: resultMessage.passed && !resultMessage.passed() ? resultMessage.trace.stack : jasmine.undefined
      }
    });
  }

  return {
    result : result.result,
    messages : summaryMessages
  };
};

/**
 * @constructor
 * @param {jasmine.Env} env
 * @param actual
 * @param {jasmine.Spec} spec
 */
jasmine.Matchers = function(env, actual, spec, opt_isNot) {
  this.env = env;
  this.actual = actual;
  this.spec = spec;
  this.isNot = opt_isNot || false;
  this.reportWasCalled_ = false;
};

// todo: @deprecated as of Jasmine 0.11, remove soon [xw]
jasmine.Matchers.pp = function(str) {
  throw new Error("jasmine.Matchers.pp() is no longer supported, please use jasmine.pp() instead!");
};

// todo: @deprecated Deprecated as of Jasmine 0.10. Rewrite your custom matchers to return true or false. [xw]
jasmine.Matchers.prototype.report = function(result, failing_message, details) {
  throw new Error("As of jasmine 0.11, custom matchers must be implemented differently -- please see jasmine docs");
};

jasmine.Matchers.wrapInto_ = function(prototype, matchersClass) {
  for (var methodName in prototype) {
    if (methodName == 'report') continue;
    var orig = prototype[methodName];
    matchersClass.prototype[methodName] = jasmine.Matchers.matcherFn_(methodName, orig);
  }
};

jasmine.Matchers.matcherFn_ = function(matcherName, matcherFunction) {
  return function() {
    var matcherArgs = jasmine.util.argsToArray(arguments);
    var result = matcherFunction.apply(this, arguments);

    if (this.isNot) {
      result = !result;
    }

    if (this.reportWasCalled_) return result;

    var message;
    if (!result) {
      if (this.message) {
        message = this.message.apply(this, arguments);
        if (jasmine.isArray_(message)) {
          message = message[this.isNot ? 1 : 0];
        }
      } else {
        var englishyPredicate = matcherName.replace(/[A-Z]/g, function(s) { return ' ' + s.toLowerCase(); });
        message = "Expected " + jasmine.pp(this.actual) + (this.isNot ? " not " : " ") + englishyPredicate;
        if (matcherArgs.length > 0) {
          for (var i = 0; i < matcherArgs.length; i++) {
            if (i > 0) message += ",";
            message += " " + jasmine.pp(matcherArgs[i]);
          }
        }
        message += ".";
      }
    }
    var expectationResult = new jasmine.ExpectationResult({
      matcherName: matcherName,
      passed: result,
      expected: matcherArgs.length > 1 ? matcherArgs : matcherArgs[0],
      actual: this.actual,
      message: message
    });
    this.spec.addMatcherResult(expectationResult);
    return jasmine.undefined;
  };
};




/**
 * toBe: compares the actual to the expected using ===
 * @param expected
 */
jasmine.Matchers.prototype.toBe = function(expected) {
  return this.actual === expected;
};

/**
 * toNotBe: compares the actual to the expected using !==
 * @param expected
 * @deprecated as of 1.0. Use not.toBe() instead.
 */
jasmine.Matchers.prototype.toNotBe = function(expected) {
  return this.actual !== expected;
};

/**
 * toEqual: compares the actual to the expected using common sense equality. Handles Objects, Arrays, etc.
 *
 * @param expected
 */
jasmine.Matchers.prototype.toEqual = function(expected) {
  return this.env.equals_(this.actual, expected);
};

/**
 * toNotEqual: compares the actual to the expected using the ! of jasmine.Matchers.toEqual
 * @param expected
 * @deprecated as of 1.0. Use not.toNotEqual() instead.
 */
jasmine.Matchers.prototype.toNotEqual = function(expected) {
  return !this.env.equals_(this.actual, expected);
};

/**
 * Matcher that compares the actual to the expected using a regular expression.  Constructs a RegExp, so takes
 * a pattern or a String.
 *
 * @param expected
 */
jasmine.Matchers.prototype.toMatch = function(expected) {
  return new RegExp(expected).test(this.actual);
};

/**
 * Matcher that compares the actual to the expected using the boolean inverse of jasmine.Matchers.toMatch
 * @param expected
 * @deprecated as of 1.0. Use not.toMatch() instead.
 */
jasmine.Matchers.prototype.toNotMatch = function(expected) {
  return !(new RegExp(expected).test(this.actual));
};

/**
 * Matcher that compares the actual to jasmine.undefined.
 */
jasmine.Matchers.prototype.toBeDefined = function() {
  return (this.actual !== jasmine.undefined);
};

/**
 * Matcher that compares the actual to jasmine.undefined.
 */
jasmine.Matchers.prototype.toBeUndefined = function() {
  return (this.actual === jasmine.undefined);
};

/**
 * Matcher that compares the actual to null.
 */
jasmine.Matchers.prototype.toBeNull = function() {
  return (this.actual === null);
};

/**
 * Matcher that boolean not-nots the actual.
 */
jasmine.Matchers.prototype.toBeTruthy = function() {
  return !!this.actual;
};


/**
 * Matcher that boolean nots the actual.
 */
jasmine.Matchers.prototype.toBeFalsy = function() {
  return !this.actual;
};


/**
 * Matcher that checks to see if the actual, a Jasmine spy, was called.
 */
jasmine.Matchers.prototype.toHaveBeenCalled = function() {
  if (arguments.length > 0) {
    throw new Error('toHaveBeenCalled does not take arguments, use toHaveBeenCalledWith');
  }

  if (!jasmine.isSpy(this.actual)) {
    throw new Error('Expected a spy, but got ' + jasmine.pp(this.actual) + '.');
  }

  this.message = function() {
    return [
      "Expected spy " + this.actual.identity + " to have been called.",
      "Expected spy " + this.actual.identity + " not to have been called."
    ];
  };

  return this.actual.wasCalled;
};

/** @deprecated Use expect(xxx).toHaveBeenCalled() instead */
jasmine.Matchers.prototype.wasCalled = jasmine.Matchers.prototype.toHaveBeenCalled;

/**
 * Matcher that checks to see if the actual, a Jasmine spy, was not called.
 *
 * @deprecated Use expect(xxx).not.toHaveBeenCalled() instead
 */
jasmine.Matchers.prototype.wasNotCalled = function() {
  if (arguments.length > 0) {
    throw new Error('wasNotCalled does not take arguments');
  }

  if (!jasmine.isSpy(this.actual)) {
    throw new Error('Expected a spy, but got ' + jasmine.pp(this.actual) + '.');
  }

  this.message = function() {
    return [
      "Expected spy " + this.actual.identity + " to not have been called.",
      "Expected spy " + this.actual.identity + " to have been called."
    ];
  };

  return !this.actual.wasCalled;
};

/**
 * Matcher that checks to see if the actual, a Jasmine spy, was called with a set of parameters.
 *
 * @example
 *
 */
jasmine.Matchers.prototype.toHaveBeenCalledWith = function() {
  var expectedArgs = jasmine.util.argsToArray(arguments);
  if (!jasmine.isSpy(this.actual)) {
    throw new Error('Expected a spy, but got ' + jasmine.pp(this.actual) + '.');
  }
  this.message = function() {
    if (this.actual.callCount == 0) {
      // todo: what should the failure message for .not.toHaveBeenCalledWith() be? is this right? test better. [xw]
      return [
        "Expected spy to have been called with " + jasmine.pp(expectedArgs) + " but it was never called.",
        "Expected spy not to have been called with " + jasmine.pp(expectedArgs) + " but it was."
      ];
    } else {
      return [
        "Expected spy to have been called with " + jasmine.pp(expectedArgs) + " but was called with " + jasmine.pp(this.actual.argsForCall),
        "Expected spy not to have been called with " + jasmine.pp(expectedArgs) + " but was called with " + jasmine.pp(this.actual.argsForCall)
      ];
    }
  };

  return this.env.contains_(this.actual.argsForCall, expectedArgs);
};

/** @deprecated Use expect(xxx).toHaveBeenCalledWith() instead */
jasmine.Matchers.prototype.wasCalledWith = jasmine.Matchers.prototype.toHaveBeenCalledWith;

/** @deprecated Use expect(xxx).not.toHaveBeenCalledWith() instead */
jasmine.Matchers.prototype.wasNotCalledWith = function() {
  var expectedArgs = jasmine.util.argsToArray(arguments);
  if (!jasmine.isSpy(this.actual)) {
    throw new Error('Expected a spy, but got ' + jasmine.pp(this.actual) + '.');
  }

  this.message = function() {
    return [
      "Expected spy not to have been called with " + jasmine.pp(expectedArgs) + " but it was",
      "Expected spy to have been called with " + jasmine.pp(expectedArgs) + " but it was"
    ]
  };

  return !this.env.contains_(this.actual.argsForCall, expectedArgs);
};

/**
 * Matcher that checks that the expected item is an element in the actual Array.
 *
 * @param {Object} expected
 */
jasmine.Matchers.prototype.toContain = function(expected) {
  return this.env.contains_(this.actual, expected);
};

/**
 * Matcher that checks that the expected item is NOT an element in the actual Array.
 *
 * @param {Object} expected
 * @deprecated as of 1.0. Use not.toNotContain() instead.
 */
jasmine.Matchers.prototype.toNotContain = function(expected) {
  return !this.env.contains_(this.actual, expected);
};

jasmine.Matchers.prototype.toBeLessThan = function(expected) {
  return this.actual < expected;
};

jasmine.Matchers.prototype.toBeGreaterThan = function(expected) {
  return this.actual > expected;
};

/**
 * Matcher that checks that the expected exception was thrown by the actual.
 *
 * @param {String} expected
 */
jasmine.Matchers.prototype.toThrow = function(expected) {
  var result = false;
  var exception;
  if (typeof this.actual != 'function') {
    throw new Error('Actual is not a function');
  }
  try {
    this.actual();
  } catch (e) {
    exception = e;
  }
  if (exception) {
    result = (expected === jasmine.undefined || this.env.equals_(exception.message || exception, expected.message || expected));
  }

  var not = this.isNot ? "not " : "";

  this.message = function() {
    if (exception && (expected === jasmine.undefined || !this.env.equals_(exception.message || exception, expected.message || expected))) {
      return ["Expected function " + not + "to throw", expected ? expected.message || expected : " an exception", ", but it threw", exception.message || exception].join(' ');
    } else {
      return "Expected function to throw an exception.";
    }
  };

  return result;
};

jasmine.Matchers.Any = function(expectedClass) {
  this.expectedClass = expectedClass;
};

jasmine.Matchers.Any.prototype.matches = function(other) {
  if (this.expectedClass == String) {
    return typeof other == 'string' || other instanceof String;
  }

  if (this.expectedClass == Number) {
    return typeof other == 'number' || other instanceof Number;
  }

  if (this.expectedClass == Function) {
    return typeof other == 'function' || other instanceof Function;
  }

  if (this.expectedClass == Object) {
    return typeof other == 'object';
  }

  return other instanceof this.expectedClass;
};

jasmine.Matchers.Any.prototype.toString = function() {
  return '<jasmine.any(' + this.expectedClass + ')>';
};

/**
 * Override of toThrow special opera 10 !!! 
 */
jasmine.Matchers.prototype.toThrow = function(expected) {
  var result = false;
  var exception;
  if (typeof this.actual != 'function') {
    throw new Error('Actual is not a function');
  }
  try {
    this.actual();
  } catch (e) {
    exception = e;
  }
  if (exception) {
    result = (expected === jasmine.undefined || this.env.contains_(exception.message || exception, expected.message || expected));
  }

  var not = this.isNot ? "not " : "";

  this.message = function() {
    if (exception && (expected === jasmine.undefined || !this.env.contains_(exception.message || exception, expected.message || expected))) {
      return ["Expected function " + not + "to throw", expected ? expected.message || expected : " an exception", ", but it threw", exception.message || exception].join(' ');
    } else {
      return "Expected function to throw an exception.";
    }
  };

  return result;
};

jasmine.Matchers.prototype.toRaiseExtError = function(expected) {
  var result = false,
      global = Ext.global,
      extError;
  if (typeof this.actual != 'function') {
    throw new Error('Actual is not a function');
  }
          
   // mock the console to avoid logging to the real console during the tests
   Ext.global = {
       console: {
            dir: function(s) {
                return s;
            },
            log: function(s) {
                return s;
            },
            error: function(s) {
                return s;
            },
            warn: function(s) {
                return s;
            }
        }
   };
        
  try {
    this.actual();
  } catch (e) {
    extError = e;
  }

  
  Ext.global = global;

  if (extError && extError instanceof Ext.Error) {
    result = (expected === jasmine.undefined || this.env.contains_(extError.toString(), expected.message || expected));
  }

          
  var not = this.isNot ? "not " : "";

  this.message = function() {
    if (!extError instanceof Ext.Error) {
        return "Exception thrown is not an instance of Ext.Error";
    } else if (extError && (expected === jasmine.undefined || !this.env.contains_(extError.toString(), expected.message || expected))) {
      return ["Expected function " + not + "to throw", expected ? expected.message || expected : " an exception", ", but it threw", extError.toString()].join(' ');
    } else {
        return "Expected function to throw an exception.";
    }
  };

  return result;
};

jasmine.Matchers.prototype.hasHTML = function(expected) {
    var me = this;
    
    if (!me.actual || !me.actual.tagName) {
        throw new Error('Actual is not a dom element');
    }
    if (jasmine.browser.isSafari3) {
        expected = expected.replace(/&gt;/g, '>');
    }
    // this normalize innerHTML which could vary a lot
    var normalizedHTML = me.actual.innerHTML.replace(/<[^>]*>/g, function(match1) {
        return match1.toLowerCase().replace(/=\w+/g, function(match2) { 
            return '="' + match2.split('=')[1] + '"'; 
        });
    });

    me.message = function() {
        return [
          "Expected dom element innerHTML to be " + expected + " but was " + normalizedHTML,
          "Expected dom element innerHTML to not be " + expected + "."
        ];
    };
    
    return normalizedHTML === expected;
};

jasmine.Matchers.prototype.toHaveCls = function(cls) {
     return Ext.fly(this.actual).hasCls(cls);
};

jasmine.Matchers.prototype.toEqualTime = function(hour, minute, second, ms) {
    var actual = this.actual;
    return actual instanceof Date &&
           actual.getHours() === hour &&
           actual.getMinutes() === (minute || 0) &&
           actual.getSeconds() === (second || 0) &&
           actual.getMilliseconds() === (ms || 0);

};

jasmine.Matchers.prototype.toBePositionedAt = function(x, y) {
    var xy = this.actual.getXY();
    this.message = function() {
        return "Expected Ext.Element to be positioned at (" + x + "," + y + ") but was positioned at (" + xy[0] + "," + xy[1] + ")";
    };
    return xy[0] === x && xy[1] === y;
};

(function () {
    var elementPropGetters = {
        x: function (el, root) {
            var x = el.getX(),
                x0 = root ? root.el.getX() : el.getX();
            return x - x0;
        },
        y: function (el, root) {
            var y = el.getY(),
                y0 = root ? root.el.getY() : el.getY();
            return y - y0;
        },
        w: function (el) {
            return el.getWidth();
        },
        h: function (el) {
            return el.getHeight();
        },
        xywh: function(el, root) {
            var x= el.getX(),
                x0 = root ? root.el.getX() : el.getX(),
                y = el.getY(),
                y0 = root ? root.el.getY() : el.getY(),
                w = el.getWidth(),
                h = el.getHeight(),
                dims = [];
            dims.push(x - x0, y - y0, w, h);
            return dims.join(' ');
        },
        cls: function (el) {
            return el.dom.className;
        }
    },
    browsers = [
        "IE6", "IE7", "IE8", "IE9", "IE",
        "Gecko3", "Gecko4", "Gecko5", "Gecko10", "Gecko",
        "FF3_6", "FF4", "FF5",
        "Chrome",
        "Safari2", "Safari3", "Safari4", "Safari5", "Safari"
    ],
    blen = browsers.length,
    b, browser,
    browserCheck = function(expected){
        if(Ext.isNumeric(expected) || Ext.isArray(expected)) {
            return expected;
        }
        for (b = 0; b < blen; b++) {
            browser = browsers[b];
            if (expected.hasOwnProperty(browser) && Ext["is" + browser]){
                return expected[browser];
            }
        }
        return expected['*'] || expected;
    };


    function checkLayout (comp, layout, root, path) {
        Ext.Object.each(layout, function (name, value) {
            if (name == 'items' || name == 'dockedItems') {
                Ext.Object.each(value, function (id, sub) {
                    var isNum = String(parseInt(id,10)) == id,
                        child = isNum ? comp[name].items[parseInt(id,10)]
                                      : (comp.getComponent(id) || comp.child(id));

                    if (isNum) {
                        id = '.' + name + '[' + id + ']';
                    } else if (id.charAt(0) != ':') {
                        id = '_' + id;
                    }

                    if (child) {
                        checkLayout(child, sub, comp, path + id);
                    } else {
                        expect(id).toBe('found!');
                    }
                });
            } else {
                // the name is an element name like 'body'
                var el = comp[name];
                if (el.isComponent) {
                    checkLayout(el, value, el.ownerCt, path + '_' + name);
                } else if (el.dom) {
                    value = browserCheck(value);
                    if (value.xywh) {
                        var dims = value.xywh.split(' ');
                        value.x = eval('(' + dims[0] + ')');
                        value.y = eval('(' + dims[1] + ')');
                        value.w = eval('(' + dims[2] + ')');
                        value.h = eval('(' + dims[3] + ')');
                        delete value.xywh;
                    }
                    Ext.Object.each(value, function (prop, expected) {
                        var actual = elementPropGetters[prop](el, root),
                            pfx = path + '.' + name + '.' + prop + '=';

                        if(Ext.isArray(expected)){
                            expect(actual).toBeGreaterThanOrEqual(expected[0]);
                            expect(actual).toBeLessThanOrEqual(expected[1]);
                        } else {
                            expect(pfx + actual).toEqual(pfx + expected);
                        }
                    });
                }
            }
        });
    }

    jasmine.Matchers.prototype.toHaveLayout = function(expected) {
        var comp = this.actual;
        checkLayout(comp, expected, comp.ownerCt, comp.getXType());
        return true;
    };

    jasmine.Matchers.prototype.toBeLessThanOrEqual = function(expected) {
        return this.actual <= expected;
    };

    jasmine.Matchers.prototype.toBeGreaterThanOrEqual = function(expected) {
        return this.actual >= expected;
    };

})();


 jasmine.Matchers.prototype.toHaveFiredEvents = function() {
    var calls = this.actual.fireEvent.calls,
        i = 0,
        ret = true,
        expectedEvents = Array.prototype.slice.call(arguments, 0),
        length = expectedEvents.length,
        actualEvents = [], 
        actualEvent,
        expectedEvent;


    
    for (;i < length; i++) {
        expectedEvent = expectedEvents[i];
        try {
            actualEvent = calls[i].args[0];
        } catch (e) {
            actualEvent = null;
        }
        if (actualEvent) {
            actualEvents.push(actualEvent);
        }

        if (actualEvent != expectedEvent) {
            ret = false;
        }
    }
    
    this.message = function() {
        return "Expected events flow to be (" + expectedEvents.length + " events): \n" + expectedEvents.join('\n') + "\nBut it was (" + actualEvents.length + " events): \n"+ actualEvents.join('\n');
    };
    return ret;
 };/**
 * @constructor
 */
jasmine.MultiReporter = function() {
  this.subReporters_ = [];
};
jasmine.util.inherit(jasmine.MultiReporter, jasmine.Reporter);

jasmine.MultiReporter.prototype.addReporter = function(reporter) {
  this.subReporters_.push(reporter);
};

(function() {
  var functionNames = [
    "reportRunnerStarting",
    "reportRunnerResults",
    "reportSuiteStarting",
    "reportSuiteResults",
    "reportSpecStarting",
    "reportSpecResults",
    "log"
  ];
  for (var i = 0; i < functionNames.length; i++) {
    var functionName = functionNames[i];
    jasmine.MultiReporter.prototype[functionName] = (function(functionName) {
      return function() {
        for (var j = 0; j < this.subReporters_.length; j++) {
          var subReporter = this.subReporters_[j];
          if (subReporter[functionName]) {
            subReporter[functionName].apply(subReporter, arguments);
          }
        }
      };
    })(functionName);
  }
})();
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
// Collect the jasmine results in a javascript object
jasmine.EyeReporter = function () {
    var me = this;
    me.suites = {};
    me.results = {
        startTime: null,
        endTime: null,
        failures: 0,
        suitesCount: 0,
        specsCount: 0,
        suites: []
    };
};


jasmine.EyeReporter.prototype.filterChars = function(string) {
    return jasmine.util.htmlEscape(string).replace(/\n|\t|\r|\v|'|"|="|=/g, ' ');
};

jasmine.EyeReporter.prototype.reportSpecStarting = function(spec){
    if (spec.isEnabled()) {
        var me = this;
            me.fireEvent('specstart', spec);
            spec.startTime = (new Date).getTime();
            me.currentSpec =  {
                startTime: spec.startTime,
                description: me.filterChars(spec.description),
                type: 'spec',
                hash: spec.id
            };
    }
};
 
jasmine.EyeReporter.prototype.reportSpecResults = function(spec){
    if (spec.isEnabled()) {
        var me = this, 
            results, result, length, i, expectation;


            me.currentSpec.endTime = (new Date).getTime();
            me.currentSpec.passed = spec.results().passed();

            if (!me.currentSpec.passed) {
                me.currentSuite.failures++;
                me.currentSuite.passed = false;
            }

            me.results.specsCount++;
            me.currentSuite.specsCount++;
            
            results = spec.results().getItems();

            if (!me.currentSpec.passed) {
                me.results.failures++;
                me.currentSpec.children = [];
                length = results.length;
                for (i = 0; i < length; i++) {
                    result = results[i];
             
                    if (result.type === "expect" && result.passed) {
                       
                        expectation = {
                             message: jasmine.util.htmlEscape(result.matcherName + ': ' + result.message),
                             type: 'expect'
                        };
                        if (!result.passed() && result.error) {
                            expectation.message = jasmine.util.htmlEscape(jasmine.extractStackTrace(result.error));
                        } 
                        
                        if (result.passed()) {
                            expectation.passed = true;
                        } else {
                            expectation.passed = false;
                        }
               
                        me.currentSpec.children.push(expectation);
                        if (!result.passed()) {
                            break;
                        }
                    }
                }
            }
           
            me.currentSuite.children.push(me.currentSpec);
    }
};

jasmine.EyeReporter.prototype.reportRunnerStarting = function(runner){
    var me = this;
    me.fireEvent('start');
    me.results.startTime = new Date().getTime();
};

jasmine.EyeReporter.prototype.reportRunnerResults = function(runner){
    var me = this;
        
    me.results.endTime = new Date().getTime();
    
    me.parentSuite = null;
    me.currentSuite = null;
    me.currentSpec = null;
    delete me.results.suites;
    me.fireEvent('finish', me.results);

    if (parent && parent.Qa) {
        parent.Qa.stop();
    } else if (typeof Qa != 'undefined') {
       Qa.stop();
    }
};

jasmine.EyeReporter.prototype.reportSuiteStarting = function(suite){
    
    if (suite.isEnabled()) {
        var me = this,
            suiteJson = {
                startTime: (new Date).getTime(),
                passed: true,
                description: me.filterChars(suite.description),
                type: 'suite',
                failures: 0,
                hash: suite.id,
                suitesCount: 0,
                specsCount: 0,
                children: [] 
            };

            if (!suite.parentSuite) {
                me.fireEvent('rootsuitestart', suite);
                me.results.suites.push(suiteJson);
                me.parentSuite = null;
            } else {
                me.suites[suite.parentSuite.id] = me.suites[suite.parentSuite.id] || me.currentSuite;
                me.parentSuite = me.suites[suite.parentSuite.id];
                me.parentSuite.children.push(suiteJson);
                me.parentSuite.suitesCount++;
            }

            me.results.suitesCount++;

            me.currentSuite = suiteJson;
    }
    
};

jasmine.EyeReporter.prototype.reportSuiteResults = function(suite){
    if (suite.isEnabled()) {
        var me = this,
            nextCurrent = suite.parentSuite,
            nextParent = nextCurrent ? nextCurrent.parentSuite : null;
            
        me.currentSuite.endTime = (new Date).getTime();

        if (me.parentSuite) {
            me.parentSuite.specsCount += me.currentSuite.specsCount;
            me.parentSuite.suitesCount += me.currentSuite.suitesCount;
            me.parentSuite.failures += me.currentSuite.failures;
            if (!me.currentSuite.passed) {
                me.parentSuite.passed = false;
            }
        }
        me.currentSuite = nextCurrent ? me.suites[nextCurrent.id] : null;
        me.parentSuite = nextParent ? me.suites[nextParent.id] : null;

        if (me.currentSuite == null && me.parentSuite == null) {
            me.suites = {};
        }
        
        if (!suite.parentSuite) {
            if (typeof parent != 'undefined' && parent.Qa) {
                parent.Qa.sendTestSuite(me.results.suites.pop(), suite);
            } else if (typeof Qa != 'undefined') {
               Qa.sendTestSuite(me.results.suites.pop(), suite);
            }
        
        }
    }
};


jasmine.EyeReporter.prototype.on = function(eventName, fn, scope) {
    var me = this;
    
    me.listeners = me.listeners || {};
    if (typeof eventName != 'string') {
        fn = eventName.fn;
        scope = eventName.scope;
        eventName = eventName.name;
    }    
    me.listeners[eventName] =  me.listeners[eventName] || [];
    
    me.listeners[eventName].push({
        fn: fn,
        scope: scope || me
    });
    
};


jasmine.EyeReporter.prototype.fireEvent = function(name) {
   this.listeners = this.listeners || {};
   var me = this,
       args = Array.prototype.slice.call(arguments, 1),
       listeners, i, length, ret, listener;
       
   me.listeners = me.listeners || {};
   listeners = me.listeners[name];
   
   if (listeners) {
       length = listeners.length;
       i = 0;

       for (; i < length; i++) {
           listener = listeners[i];
           ret = listener.fn.apply(listener.scope, args);

           if (ret == false) {
               return false;
           }
       }
   }     
   return true;
};/**
 * Holds results for a set of Jasmine spec. Allows for the results array to hold another jasmine.NestedResults
 *
 * @constructor
 */
jasmine.NestedResults = function() {
  /**
   * The total count of results
   */
  this.totalCount = 0;
  /**
   * Number of passed results
   */
  this.passedCount = 0;
  /**
   * Number of failed results
   */
  this.failedCount = 0;
  /**
   * Was this suite/spec skipped?
   */
  this.skipped = false;
  /**
   * @ignore
   */
  this.items_ = [];
};

/**
 * Roll up the result counts.
 *
 * @param result
 */
jasmine.NestedResults.prototype.rollupCounts = function(result) {
  this.totalCount += result.totalCount;
  this.passedCount += result.passedCount;
  this.failedCount += result.failedCount;
};

/**
 * Adds a log message.
 * @param values Array of message parts which will be concatenated later.
 */
jasmine.NestedResults.prototype.log = function(values) {
  this.items_.push(new jasmine.MessageResult(values));
};

/**
 * Getter for the results: message & results.
 */
jasmine.NestedResults.prototype.getItems = function() {
  return this.items_;
};

/**
 * Adds a result, tracking counts (total, passed, & failed)
 * @param {jasmine.ExpectationResult|jasmine.NestedResults} result
 */
jasmine.NestedResults.prototype.addResult = function(result) {
  if (result.type != 'log') {
    if (result.items_) {
      this.rollupCounts(result);
    } else {
      this.totalCount++;
      if (result.passed()) {
        this.passedCount++;
      } else {
        this.failedCount++;
      }
    }
  }
  this.items_.push(result);
};

/**
 * @returns {Boolean} True if <b>everything</b> below passed
 */
jasmine.NestedResults.prototype.passed = function() {
  return this.passedCount === this.totalCount;
};
/**
 * Base class for pretty printing for expectation results.
 */
jasmine.PrettyPrinter = function() {
  this.ppNestLevel_ = 0;
};

/**
 * Formats a value in a nice, human-readable string.
 *
 * @param value
 */
jasmine.PrettyPrinter.prototype.format = function(value) {
  if (this.ppNestLevel_ > 40) {
    throw new Error('jasmine.PrettyPrinter: format() nested too deeply!');
  }

  this.ppNestLevel_++;
  try {
    if (value === jasmine.undefined) {
      this.emitScalar('undefined');
    } else if (value === null) {
      this.emitScalar('null');
    } else if (value === jasmine.getGlobal()) {
      this.emitScalar('<global>');
    } else if (value instanceof jasmine.Matchers.Any) {
      this.emitScalar(value.toString());
    } else if (typeof value === 'string') {
      this.emitString(value);
    } else if (jasmine.isSpy(value)) {
      this.emitScalar("spy on " + value.identity);
    } else if (value instanceof RegExp) {
      this.emitScalar(value.toString());
    } else if (typeof value === 'function') {
      this.emitScalar('Function');
    } else if (typeof value.nodeType === 'number') {
      this.emitScalar('HTMLNode');
    } else if (value instanceof Date) {
      this.emitScalar('Date(' + value + ')');
    } else if (value.__Jasmine_been_here_before__) {
      this.emitScalar('<circular reference: ' + (jasmine.isArray_(value) ? 'Array' : 'Object') + '>');
    } else if (jasmine.isArray_(value) || typeof value == 'object') {
      value.__Jasmine_been_here_before__ = true;
      if (jasmine.isArray_(value)) {
        this.emitArray(value);
      } else {
        this.emitObject(value);
      }
      delete value.__Jasmine_been_here_before__;
    } else {
      this.emitScalar(value.toString());
    }
  } finally {
    this.ppNestLevel_--;
  }
};

jasmine.PrettyPrinter.prototype.iterateObject = function(obj, fn) {
  for (var property in obj) {
    if (property == '__Jasmine_been_here_before__') continue;
    fn(property, obj.__lookupGetter__ ? (obj.__lookupGetter__(property) != null) : false);
  }
};

jasmine.PrettyPrinter.prototype.emitArray = jasmine.unimplementedMethod_;
jasmine.PrettyPrinter.prototype.emitObject = jasmine.unimplementedMethod_;
jasmine.PrettyPrinter.prototype.emitScalar = jasmine.unimplementedMethod_;
jasmine.PrettyPrinter.prototype.emitString = jasmine.unimplementedMethod_;

jasmine.StringPrettyPrinter = function() {
  jasmine.PrettyPrinter.call(this);

  this.string = '';
};
jasmine.util.inherit(jasmine.StringPrettyPrinter, jasmine.PrettyPrinter);

jasmine.StringPrettyPrinter.prototype.emitScalar = function(value) {
  this.append(value);
};

jasmine.StringPrettyPrinter.prototype.emitString = function(value) {
  this.append("'" + value + "'");
};

jasmine.StringPrettyPrinter.prototype.emitArray = function(array) {
  this.append('[ ');
  for (var i = 0; i < array.length; i++) {
    if (i > 0) {
      this.append(', ');
    }
    this.format(array[i]);
  }
  this.append(' ]');
};

jasmine.StringPrettyPrinter.prototype.emitObject = function(obj) {
  var self = this;
  this.append('{ ');
  var first = true;

  this.iterateObject(obj, function(property, isGetter) {
    if (first) {
      first = false;
    } else {
      self.append(', ');
    }

    self.append(property);
    self.append(' : ');
    if (isGetter) {
      self.append('<getter>');
    } else {
      self.format(obj[property]);
    }
  });

  this.append(' }');
};

jasmine.StringPrettyPrinter.prototype.append = function(value) {
  this.string += value;
};
/**
 * Formats a value in a nice, human-readable string.
 *
 * @param value
 */
jasmine.PrettyPrinter.prototype.format = function(value) {
  if (this.ppNestLevel_ > 40) {
    throw new Error('jasmine.PrettyPrinter: format() nested too deeply!');
  }

  this.ppNestLevel_++;
  try {
    if (value === jasmine.undefined) {
      this.emitScalar('undefined');
    } else if (value === null) {
      this.emitScalar('null');
    } else if (value === jasmine.getGlobal()) {
      this.emitScalar('<global>');
    } else if (value.expectedClass) {   //override of value instanceof jasmine.Matchers.Any
      this.emitScalar(value.toString());
    } else if (typeof value === 'string') {
      this.emitString(value);
    } else if (jasmine.isSpy(value)) {
      this.emitScalar("spy on " + value.identity);
    } else if (value instanceof RegExp) {
      this.emitScalar(value.toString());
    } else if (typeof value === 'function') {
      this.emitScalar('Function');
    } else if (typeof value.nodeType === 'number') {
      this.emitScalar('HTMLNode');
    } else if (value instanceof Date) {
      this.emitScalar('Date(' + value + ')');
    } else if (value.__Jasmine_been_here_before__) {
      this.emitScalar('<circular reference: ' + (jasmine.isArray_(value) ? 'Array' : 'Object') + '>');
    } else if (jasmine.isArray_(value) || typeof value == 'object') {
      value.__Jasmine_been_here_before__ = true;
      if (jasmine.isArray_(value)) {
        this.emitArray(value);
      } else {
        this.emitObject(value);
      }
      delete value.__Jasmine_been_here_before__;
    } else {
      this.emitScalar(value.toString());
    }
  } catch (e) {
  } finally {
    this.ppNestLevel_--;
  }
};


// Extend: creates whitespaces indent
jasmine.StringPrettyPrinter.prototype.getIndent = function () {
    var whiteSpaces = "",
        i;
        
    for (i = 0; i < this.ws; i++) {
        whiteSpaces += " ";
    }

    return whiteSpaces;
};

// Override: pre-format object
jasmine.StringPrettyPrinter.prototype.emitObject = function(obj) {
  var self = this,
      first = true,
      indent;
      
  this.append('{\n');
  if(!this.ws) {
      this.ws = 0;
  }
  this.ws += 4;
  indent = this.getIndent();
  var i = 0;
  this.iterateObject(obj, function(property, isGetter) {
      
    if (first) {
      first = false;
    } else {
      self.append(',\n');
    }

    self.append(indent + property);
    self.append(' : ');
    if (isGetter) {
      self.append('<getter>');
    } else {
      if (typeof obj[property] !== "object") {
         self.format(obj[property]);   
      } else {
         self.append("<Object>");
      }
    }
  });
  
  this.ws -= 4;
  indent = this.getIndent();
  
  this.append(indent + '\n'+ indent +'}');

};
jasmine.Queue = function(env) {
  this.env = env;
  this.blocks = [];
  this.running = false;
  this.index = 0;
  this.offset = 0;
  this.abort = false;
};

jasmine.Queue.prototype.addBefore = function(block) {
  this.blocks.unshift(block);
};

jasmine.Queue.prototype.add = function(block) {
  this.blocks.push(block);
};

jasmine.Queue.prototype.insertNext = function(block) {
  this.blocks.splice((this.index + this.offset + 1), 0, block);
  this.offset++;
};

jasmine.Queue.prototype.start = function(onComplete) {
  this.running = true;
  this.onComplete = onComplete;
  this.next_();
};

jasmine.Queue.prototype.isRunning = function() {
  return this.running;
};

jasmine.Queue.LOOP_DONT_RECURSE = true;

jasmine.Queue.prototype.next_ = function() {
  var self = this;
  var goAgain = true;

  while (goAgain) {
    goAgain = false;
    
    if (self.index < self.blocks.length && !this.abort) {
      var calledSynchronously = true;
      var completedSynchronously = false;

      var onComplete = function () {
        if (jasmine.Queue.LOOP_DONT_RECURSE && calledSynchronously) {
          completedSynchronously = true;
          return;
        }

        if (self.blocks[self.index].abort) {
          self.abort = true;
        }

        self.offset = 0;
        self.index++;

        var now = new Date().getTime();
        if (self.env.updateInterval && now - self.env.lastUpdate > self.env.updateInterval) {
          self.env.lastUpdate = now;
          self.env.setTimeout(function() {
            self.next_();
          }, 0);
        } else {
          if (jasmine.Queue.LOOP_DONT_RECURSE && completedSynchronously) {
            goAgain = true;
          } else {
            self.next_();
          }
        }
      };
      self.blocks[self.index].execute(onComplete);

      calledSynchronously = false;
      if (completedSynchronously) {
        onComplete();
      }
      
    } else {
      self.running = false;
      if (self.onComplete) {
        self.onComplete();
      }
    }
  }
};

jasmine.Queue.prototype.results = function() {
  var results = new jasmine.NestedResults();
  for (var i = 0; i < this.blocks.length; i++) {
    if (this.blocks[i].results) {
      results.addResult(this.blocks[i].results());
    }
  }
  return results;
};


/**
 * Runner
 *
 * @constructor
 * @param {jasmine.Env} env
 */
jasmine.Runner = function(env) {
  var self = this;
  self.env = env;
  self.queue = new jasmine.Queue(env);
  self.before_ = [];
  self.after_ = [];
  self.suites_ = [];
};

jasmine.Runner.prototype.execute = function() {
  var self = this;
  if (self.env.reporter.reportRunnerStarting) {
    self.env.reporter.reportRunnerStarting(this);
  }
  self.queue.start(function () {
    self.finishCallback();
  });
};

jasmine.Runner.prototype.beforeEach = function(beforeEachFunction) {
  beforeEachFunction.typeName = 'beforeEach';
  this.before_.splice(0,0,beforeEachFunction);
};

jasmine.Runner.prototype.afterEach = function(afterEachFunction) {
  afterEachFunction.typeName = 'afterEach';
  this.after_.splice(0,0,afterEachFunction);
};


jasmine.Runner.prototype.finishCallback = function() {
  this.env.reporter.reportRunnerResults(this);
};

jasmine.Runner.prototype.addSuite = function(suite) {
  this.suites_.push(suite);
};

jasmine.Runner.prototype.add = function(block) {
  if (block instanceof jasmine.Suite) {
    this.addSuite(block);
  }
  this.queue.add(block);
};

jasmine.Runner.prototype.specs = function () {
  var suites = this.suites();
  var specs = [];
  for (var i = 0; i < suites.length; i++) {
    specs = specs.concat(suites[i].specs());
  }
  return specs;
};

jasmine.Runner.prototype.suites = function() {
  return this.suites_;
};

jasmine.Runner.prototype.topLevelSuites = function() {
  var topLevelSuites = [];
  for (var i = 0; i < this.suites_.length; i++) {
    if (!this.suites_[i].parentSuite) {
      topLevelSuites.push(this.suites_[i]);
    }
  }
  return topLevelSuites;
};

jasmine.Runner.prototype.results = function() {
  return this.queue.results();
};jasmine.Runner.prototype.filter = function (suiteIds, specIds) {
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
/**
 * Internal representation of a Jasmine specification, or test.
 *
 * @constructor
 * @param {jasmine.Env} env
 * @param {jasmine.Suite} suite
 * @param {String} description
 */
jasmine.Spec = function(env, suite, description) {
  if (!env) {
    throw new Error('jasmine.Env() required');
  }
  if (!suite) {
    throw new Error('jasmine.Suite() required');
  }
  var spec = this;
  spec.id = env.nextSpecId ? env.nextSpecId() : null;
  spec.env = env;
  spec.suite = suite;
  spec.description = description;
  spec.queue = new jasmine.Queue(env);

  spec.afterCallbacks = [];
  spec.spies_ = [];

  spec.results_ = new jasmine.NestedResults();
  spec.results_.description = description;
  spec.matchersClass = null;
};

jasmine.Spec.prototype.getFullName = function() {
  return this.suite.getFullName() + ' ' + this.description + '.';
};


jasmine.Spec.prototype.results = function() {
  return this.results_;
};

/**
 * All parameters are pretty-printed and concatenated together, then written to the spec's output.
 *
 * Be careful not to leave calls to <code>jasmine.log</code> in production code.
 */
jasmine.Spec.prototype.log = function() {
  return this.results_.log(arguments);
};

jasmine.Spec.prototype.runs = function (func) {
  var block = new jasmine.Block(this.env, func, this);
  this.addToQueue(block);
  return this;
};

jasmine.Spec.prototype.addToQueue = function (block) {
  if (this.queue.isRunning()) {
    this.queue.insertNext(block);
  } else {
    this.queue.add(block);
  }
};

/**
 * @param {jasmine.ExpectationResult} result
 */
jasmine.Spec.prototype.addMatcherResult = function(result) {
  this.results_.addResult(result);
};

jasmine.Spec.prototype.expect = function(actual) {
  var positive = new (this.getMatchersClass_())(this.env, actual, this);
  positive.not = new (this.getMatchersClass_())(this.env, actual, this, true);
  return positive;
};

/**
 * Waits a fixed time period before moving to the next block.
 *
 * @deprecated Use waitsFor() instead
 * @param {Number} timeout milliseconds to wait
 */
jasmine.Spec.prototype.waits = function(timeout) {
  var waitsFunc = new jasmine.WaitsBlock(this.env, timeout, this);
  this.addToQueue(waitsFunc);
  return this;
};

/**
 * Waits for the latchFunction to return true before proceeding to the next block.
 *
 * @param {Function} latchFunction
 * @param {String} optional_timeoutMessage
 * @param {Number} optional_timeout
 */
jasmine.Spec.prototype.waitsFor = function(latchFunction, optional_timeoutMessage, optional_timeout) {
  var latchFunction_ = null;
  var optional_timeoutMessage_ = null;
  var optional_timeout_ = null;

  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    switch (typeof arg) {
      case 'function':
        latchFunction_ = arg;
        break;
      case 'string':
        optional_timeoutMessage_ = arg;
        break;
      case 'number':
        optional_timeout_ = arg;
        break;
    }
  }

  var waitsForFunc = new jasmine.WaitsForBlock(this.env, optional_timeout_, latchFunction_, optional_timeoutMessage_, this);
  this.addToQueue(waitsForFunc);
  return this;
};

jasmine.Spec.prototype.fail = function (e) {
  var expectationResult = new jasmine.ExpectationResult({
    passed: false,
    message: e ? jasmine.util.formatException(e) : 'Exception'
  });
  this.results_.addResult(expectationResult);
};

jasmine.Spec.prototype.getMatchersClass_ = function() {
  return this.matchersClass || this.env.matchersClass;
};

jasmine.Spec.prototype.addMatchers = function(matchersPrototype) {
  var parent = this.getMatchersClass_();
  var newMatchersClass = function() {
    parent.apply(this, arguments);
  };
  jasmine.util.inherit(newMatchersClass, parent);
  jasmine.Matchers.wrapInto_(matchersPrototype, newMatchersClass);
  this.matchersClass = newMatchersClass;
};

jasmine.Spec.prototype.finishCallback = function() {
  this.env.reporter.reportSpecResults(this);
};

jasmine.Spec.prototype.finish = function(onComplete) {
  this.removeAllSpies();
  this.finishCallback();
  if (onComplete) {
    onComplete();
  }
};

jasmine.Spec.prototype.after = function(doAfter) {
  if (this.queue.isRunning()) {
    this.queue.add(new jasmine.Block(this.env, doAfter, this));
  } else {
    this.afterCallbacks.unshift(doAfter);
  }
};

jasmine.Spec.prototype.execute = function(onComplete) {
  var spec = this;
  if (!spec.env.specFilter(spec)) {
    spec.results_.skipped = true;
    spec.finish(onComplete);
    return;
  }

  this.env.reporter.reportSpecStarting(this);

  spec.env.currentSpec = spec;

  spec.addBeforesAndAftersToQueue();

  spec.queue.start(function () {
    spec.finish(onComplete);
  });
};

jasmine.Spec.prototype.addBeforesAndAftersToQueue = function() {
  var runner = this.env.currentRunner();
  var i;

  for (var suite = this.suite; suite; suite = suite.parentSuite) {
    for (i = 0; i < suite.before_.length; i++) {
      this.queue.addBefore(new jasmine.Block(this.env, suite.before_[i], this));
    }
  }
  for (i = 0; i < runner.before_.length; i++) {
    this.queue.addBefore(new jasmine.Block(this.env, runner.before_[i], this));
  }
  for (i = 0; i < this.afterCallbacks.length; i++) {
    this.queue.add(new jasmine.Block(this.env, this.afterCallbacks[i], this));
  }
  for (suite = this.suite; suite; suite = suite.parentSuite) {
    for (i = 0; i < suite.after_.length; i++) {
      this.queue.add(new jasmine.Block(this.env, suite.after_[i], this));
    }
  }
  for (i = 0; i < runner.after_.length; i++) {
    this.queue.add(new jasmine.Block(this.env, runner.after_[i], this));
  }
};

jasmine.Spec.prototype.explodes = function() {
  throw 'explodes function should not have been called';
};

jasmine.Spec.prototype.spyOn = function(obj, methodName, ignoreMethodDoesntExist) {
  if (obj == jasmine.undefined) {
    throw "spyOn could not find an object to spy upon for " + methodName + "()";
  }

  if (!ignoreMethodDoesntExist && obj[methodName] === jasmine.undefined) {
    throw methodName + '() method does not exist';
  }

  if (!ignoreMethodDoesntExist && obj[methodName] && obj[methodName].isSpy) {
    throw new Error(methodName + ' has already been spied upon');
  }

  var spyObj = jasmine.createSpy(methodName);

  this.spies_.push(spyObj);
  spyObj.baseObj = obj;
  spyObj.methodName = methodName;
  spyObj.originalValue = obj[methodName];

  obj[methodName] = spyObj;

  return spyObj;
};

jasmine.Spec.prototype.removeAllSpies = function() {
  for (var i = 0; i < this.spies_.length; i++) {
    var spy = this.spies_[i];
    spy.baseObj[spy.methodName] = spy.originalValue;
  }
  this.spies_ = [];
};

(function () {
    var _Spec = jasmine.Spec,
        proto = _Spec.prototype;

    jasmine.Spec = function () {
        _Spec.apply(this, arguments);

        this.id = jasmine.hashString(this.getFullName(), this.suite.id);
    };

    jasmine.Spec.prototype = proto;

    proto.execute = function(onComplete) {
        var spec = this;
        this.env.reporter.reportSpecStarting(this);
        if (spec.isDisabled()) {
            spec.results_.skipped = true;
            spec.finish(onComplete);
            return;
        }

        spec.env.currentSpec = spec;

        spec.addBeforesAndAftersToQueue();

        spec.queue.start(function () {
            spec.finish(onComplete);
        });
    };

    // Override: adds the error to the result
    proto.fail = function (e) {
    var expectationResult = new jasmine.ExpectationResult({
        passed: false,
        message: e ? jasmine.util.formatException(e) : 'Exception'
    });
    // Modification start
    if (e instanceof Error) {
        this.hasError = true;
        expectationResult.error = e;
    }
    // Modification end
    this.results_.addResult(expectationResult);
    };

    proto.enabled = true;

    proto.isEnabled = function() {
        return this.enabled;
    };

    proto.isDisabled = function() {
        return !this.enabled;
    };

    proto.disable = function() {
        this.enabled = false;

        return this;
    };

    proto.enable = function() {
        this.enabled = true;

        return this;
    };

    proto.getRootSuite = function() {
        var suite = this.suite;

        while (suite.parentSuite) {
            suite = suite.parentSuite;
        }

        return suite;
    };
})();
/**
 * Internal representation of a Jasmine suite.
 *
 * @constructor
 * @param {jasmine.Env} env
 * @param {String} description
 * @param {Function} specDefinitions
 * @param {jasmine.Suite} parentSuite
 */
jasmine.Suite = function(env, description, specDefinitions, parentSuite) {
  var self = this;
  self.id = env.nextSuiteId ? env.nextSuiteId() : null;
  self.description = description;
  self.queue = new jasmine.Queue(env);
  self.parentSuite = parentSuite;
  self.env = env;
  self.before_ = [];
  self.after_ = [];
  self.children_ = [];
  self.suites_ = [];
  self.specs_ = [];
};

jasmine.Suite.prototype.getFullName = function() {
  var fullName = this.description;
  for (var parentSuite = this.parentSuite; parentSuite; parentSuite = parentSuite.parentSuite) {
    fullName = parentSuite.description + ' ' + fullName;
  }
  return fullName;
};

jasmine.Suite.prototype.finish = function(onComplete) {
  this.env.reporter.reportSuiteResults(this);
  this.finished = true;
  if (typeof(onComplete) == 'function') {
    onComplete();
  }
};

jasmine.Suite.prototype.beforeEach = function(beforeEachFunction) {
  beforeEachFunction.typeName = 'beforeEach';
  this.before_.unshift(beforeEachFunction);
};

jasmine.Suite.prototype.afterEach = function(afterEachFunction) {
  afterEachFunction.typeName = 'afterEach';
  this.after_.unshift(afterEachFunction);
};

jasmine.Suite.prototype.results = function() {
  return this.queue.results();
};

jasmine.Suite.prototype.add = function(suiteOrSpec) {
  this.children_.push(suiteOrSpec);
  if (suiteOrSpec instanceof jasmine.Suite) {
    this.suites_.push(suiteOrSpec);
    this.env.currentRunner().addSuite(suiteOrSpec);
  } else {
    this.specs_.push(suiteOrSpec);
  }
  this.queue.add(suiteOrSpec);
};

jasmine.Suite.prototype.specs = function() {
  return this.specs_;
};

jasmine.Suite.prototype.suites = function() {
  return this.suites_;
};

jasmine.Suite.prototype.children = function() {
  return this.children_;
};

jasmine.Suite.prototype.execute = function(onComplete) {
  var self = this;
  this.queue.start(function () {
    self.finish(onComplete);
  });
};(function () {
    var _Suite = jasmine.Suite,
        proto = _Suite.prototype;

    jasmine.Suite = function () {
        _Suite.apply(this, arguments);

        var parentSuite = this.parentSuite;

        this.id = jasmine.hashString(this.getFullName(), parentSuite ? parentSuite.id : 0);
    };

    jasmine.Suite.prototype = proto;

    proto.execute = function(onComplete) {
        var self = this;
        self.env.reporter.reportSuiteStarting(self);

        if (self.isDisabled()) {
            self.results = self.forceSkippedResults;
            self.disableChildren();
        }

        self.queue.start(function () {
            self.finish(onComplete);
        });
    };

    proto.finish = function(onComplete) {
        var self = this;
        
        if (typeof self.onCompleteFn == 'function') {
            onComplete = self.onCompleteFn;
            self.deferComplete_ = false;
            self.onCompleteFn = null;
        } else {
            self.env.reporter.reportSuiteResults(self);
            self.finished = true;
        }
        
        if (typeof(onComplete) == 'function') {
            if (self.deferComplete_) {
                self.onCompleteFn = onComplete;
                return;
            }
            onComplete();
        }
    };
    
    proto.deferComplete = function() {
        this.deferComplete_ = true;
    };
    
    proto.enabled = true;

    proto.isEnabled = function() {
        return this.enabled;
    };

    proto.isDisabled = function() {
        return !this.enabled;
    };

    proto.disable = function() {
        this.enabled = false;
        return this;
    };

    proto.enable = function() {
        this.enabled = true;
        return this;
    };

    proto.forceSkippedResults = function() {
        var results = this.queue.results();
        results.skipped = true;
        return results;
    };

    proto.disableChildren = function() {
        var children = this.children(),
            length = children.length,
            i = 0;

        for (; i < length; i++) {
            children[i].disable();
        }

        return this;
    };

    proto.filter = function (suiteIds, specIds) {

        if (!suiteIds[this.id]) {
            var specs = this.specs(),
                suites = this.suites(),
                spec, i, suite, length;

            length = specs.length;

            for (i = 0; i < length; i++) {
                spec = specs[i];
                if (!specIds[spec.id]) {
                    jasmine.array.remove(this.queue.blocks, spec);
                }
            }

            length = suites.length;

            for (i = 0; i < length; i++) {
                suite = suites[i];
                suite.filter(suiteIds, specIds);
                if (suite.empty) {
                    jasmine.array.remove(this.queue.blocks, suite);
                }
            }

            if (this.queue.blocks.length === 0) {
                this.empty = true;
            }
        }

        return this;
    };

    proto.getRootSuite = function() {
        var suite = this;

        while (suite.parentSuite) {
            suite = suite.parentSuite;
        }

        return suite;
    };

})();
jasmine.WaitsBlock = function(env, timeout, spec) {
  this.timeout = timeout;
  jasmine.Block.call(this, env, null, spec);
};

jasmine.util.inherit(jasmine.WaitsBlock, jasmine.Block);

jasmine.WaitsBlock.prototype.execute = function (onComplete) {
  this.env.reporter.log('>> Jasmine waiting for ' + this.timeout + ' ms...');
  this.env.setTimeout(function () {
    onComplete();
  }, this.timeout);
};
/**
 * A block which waits for some condition to become true, with timeout.
 *
 * @constructor
 * @extends jasmine.Block
 * @param {jasmine.Env} env The Jasmine environment.
 * @param {Number} timeout The maximum time in milliseconds to wait for the condition to become true.
 * @param {Function} latchFunction A function which returns true when the desired condition has been met.
 * @param {String} message The message to display if the desired condition hasn't been met within the given time period.
 * @param {jasmine.Spec} spec The Jasmine spec.
 */
jasmine.WaitsForBlock = function(env, timeout, latchFunction, message, spec) {
  this.timeout = timeout || env.defaultTimeoutInterval;
  this.latchFunction = latchFunction;
  this.message = message;
  this.totalTimeSpentWaitingForLatch = 0;
  jasmine.Block.call(this, env, null, spec);
};
jasmine.util.inherit(jasmine.WaitsForBlock, jasmine.Block);

jasmine.WaitsForBlock.TIMEOUT_INCREMENT = 10;

jasmine.WaitsForBlock.prototype.execute = function(onComplete) {
  this.env.reporter.log('>> Jasmine waiting for ' + (this.message || 'something to happen'));
  var latchFunctionResult;
  try {
    latchFunctionResult = this.latchFunction.apply(this.spec);
  } catch (e) {
    this.spec.fail(e);
    onComplete();
    return;
  }

  if (latchFunctionResult) {
    onComplete();
  } else if (this.totalTimeSpentWaitingForLatch >= this.timeout) {
    var message = 'timed out after ' + this.timeout + ' msec waiting for ' + (this.message || 'something to happen');
    this.spec.fail({
      name: 'timeout',
      message: message
    });

    this.abort = true;
    onComplete();
  } else {
    this.totalTimeSpentWaitingForLatch += jasmine.WaitsForBlock.TIMEOUT_INCREMENT;
    var self = this;
    this.env.setTimeout(function() {
      self.execute(onComplete);
    }, jasmine.WaitsForBlock.TIMEOUT_INCREMENT);
  }
};// Mock setTimeout, clearTimeout
// Contributed by Pivotal Computer Systems, www.pivotalsf.com

jasmine.FakeTimer = function() {
  this.reset();

  var self = this;
  self.setTimeout = function(funcToCall, millis) {
    self.timeoutsMade++;
    self.scheduleFunction(self.timeoutsMade, funcToCall, millis, false);
    return self.timeoutsMade;
  };

  self.setInterval = function(funcToCall, millis) {
    self.timeoutsMade++;
    self.scheduleFunction(self.timeoutsMade, funcToCall, millis, true);
    return self.timeoutsMade;
  };

  self.clearTimeout = function(timeoutKey) {
    self.scheduledFunctions[timeoutKey] = jasmine.undefined;
  };

  self.clearInterval = function(timeoutKey) {
    self.scheduledFunctions[timeoutKey] = jasmine.undefined;
  };

};

jasmine.FakeTimer.prototype.reset = function() {
  this.timeoutsMade = 0;
  this.scheduledFunctions = {};
  this.nowMillis = 0;
};

jasmine.FakeTimer.prototype.tick = function(millis) {
  var oldMillis = this.nowMillis;
  var newMillis = oldMillis + millis;
  this.runFunctionsWithinRange(oldMillis, newMillis);
  this.nowMillis = newMillis;
};

jasmine.FakeTimer.prototype.runFunctionsWithinRange = function(oldMillis, nowMillis) {
  var scheduledFunc;
  var funcsToRun = [];
  for (var timeoutKey in this.scheduledFunctions) {
    scheduledFunc = this.scheduledFunctions[timeoutKey];
    if (scheduledFunc != jasmine.undefined &&
        scheduledFunc.runAtMillis >= oldMillis &&
        scheduledFunc.runAtMillis <= nowMillis) {
      funcsToRun.push(scheduledFunc);
      this.scheduledFunctions[timeoutKey] = jasmine.undefined;
    }
  }

  if (funcsToRun.length > 0) {
    funcsToRun.sort(function(a, b) {
      return a.runAtMillis - b.runAtMillis;
    });
    for (var i = 0; i < funcsToRun.length; ++i) {
      try {
        var funcToRun = funcsToRun[i];
        this.nowMillis = funcToRun.runAtMillis;
        funcToRun.funcToCall();
        if (funcToRun.recurring) {
          this.scheduleFunction(funcToRun.timeoutKey,
              funcToRun.funcToCall,
              funcToRun.millis,
              true);
        }
      } catch(e) {
      }
    }
    this.runFunctionsWithinRange(oldMillis, nowMillis);
  }
};

jasmine.FakeTimer.prototype.scheduleFunction = function(timeoutKey, funcToCall, millis, recurring) {
  this.scheduledFunctions[timeoutKey] = {
    runAtMillis: this.nowMillis + millis,
    funcToCall: funcToCall,
    recurring: recurring,
    timeoutKey: timeoutKey,
    millis: millis
  };
};

/**
 * @namespace
 */
jasmine.Clock = {
  defaultFakeTimer: new jasmine.FakeTimer(),

  reset: function() {
    jasmine.Clock.assertInstalled();
    jasmine.Clock.defaultFakeTimer.reset();
  },

  tick: function(millis) {
    jasmine.Clock.assertInstalled();
    jasmine.Clock.defaultFakeTimer.tick(millis);
  },

  runFunctionsWithinRange: function(oldMillis, nowMillis) {
    jasmine.Clock.defaultFakeTimer.runFunctionsWithinRange(oldMillis, nowMillis);
  },

  scheduleFunction: function(timeoutKey, funcToCall, millis, recurring) {
    jasmine.Clock.defaultFakeTimer.scheduleFunction(timeoutKey, funcToCall, millis, recurring);
  },

  useMock: function() {
    if (!jasmine.Clock.isInstalled()) {
      var spec = jasmine.getEnv().currentSpec;
      spec.after(jasmine.Clock.uninstallMock);

      jasmine.Clock.installMock();
    }
  },

  installMock: function() {
    jasmine.Clock.installed = jasmine.Clock.defaultFakeTimer;
  },

  uninstallMock: function() {
    jasmine.Clock.assertInstalled();
    jasmine.Clock.installed = jasmine.Clock.real;
  },

  real: {
    setTimeout: jasmine.getGlobal().setTimeout,
    clearTimeout: jasmine.getGlobal().clearTimeout,
    setInterval: jasmine.getGlobal().setInterval,
    clearInterval: jasmine.getGlobal().clearInterval
  },

  assertInstalled: function() {
    if (!jasmine.Clock.isInstalled()) {
      throw new Error("Mock clock is not installed, use jasmine.Clock.useMock()");
    }
  },

  isInstalled: function() {
    return jasmine.Clock.installed == jasmine.Clock.defaultFakeTimer;
  },

  installed: null
};
jasmine.Clock.installed = jasmine.Clock.real;

//else for IE support
jasmine.getGlobal().setTimeout = function(funcToCall, millis) {
  if (jasmine.Clock.installed.setTimeout.apply) {
    return jasmine.Clock.installed.setTimeout.apply(this, arguments);
  } else {
    return jasmine.Clock.installed.setTimeout(funcToCall, millis);
  }
};

jasmine.getGlobal().setInterval = function(funcToCall, millis) {
  if (jasmine.Clock.installed.setInterval.apply) {
    return jasmine.Clock.installed.setInterval.apply(this, arguments);
  } else {
    return jasmine.Clock.installed.setInterval(funcToCall, millis);
  }
};

jasmine.getGlobal().clearTimeout = function(timeoutKey) {
  if (jasmine.Clock.installed.clearTimeout.apply) {
    return jasmine.Clock.installed.clearTimeout.apply(this, arguments);
  } else {
    return jasmine.Clock.installed.clearTimeout(timeoutKey);
  }
};

jasmine.getGlobal().clearInterval = function(timeoutKey) {
  if (jasmine.Clock.installed.clearTimeout.apply) {
    return jasmine.Clock.installed.clearInterval.apply(this, arguments);
  } else {
    return jasmine.Clock.installed.clearInterval(timeoutKey);
  }
};

/**
 * Basic browsers detection.
 */
jasmine.browser = {};
jasmine.browser.isIE = !!window.ActiveXObject;
jasmine.browser.isIE6 = jasmine.browser.isIE && !window.XMLHttpRequest;
jasmine.browser.isIE7 = jasmine.browser.isIE && !!window.XMLHttpRequest && !document.documentMode;
jasmine.browser.isIE8 = jasmine.browser.isIE && !!window.XMLHttpRequest && !!document.documentMode && !window.performance;
jasmine.browser.isIE9 = jasmine.browser.isIE && !!window.performance;
jasmine.browser.isSafari3 = /safari/.test(navigator.userAgent.toLowerCase()) && /version\/3/.test(navigator.userAgent.toLowerCase());
jasmine.browser.isOpera = !!window.opera;
jasmine.browser.isOpera11 = jasmine.browser.isOpera && parseInt(window.opera.version(), 10) > 10;
jasmine.array = {};

  /**
     * Checks whether or not the specified item exists in the array.
     * Array.prototype.indexOf is missing in Internet Explorer, unfortunately.
     * We always have to use this static method instead for consistency
     * @param {Array} array The array to check
     * @param {Mixed} item The item to look for
     * @param {Number} from (Optional) The index at which to begin the search
     * @return {Number} The index of item in the array (or -1 if it is not found)
     */
jasmine.array.indexOf = function(array, item, from){
    if (array.indexOf) {
        return array.indexOf(item, from);
    }
        
    var i, length = array.length;

    for (i = (from < 0) ? Math.max(0, length + from) : from || 0; i < length; i++){
    if (array[i] === item) {
                return i;
            }
    }

    return -1;
};

 /**
  * Removes the specified item from the array. If the item is not found nothing happens.
  * @param {Array} array The array
  * @param {Mixed} item The item to remove
  * @return {Array} The passed array itself
  */
jasmine.array.remove = function(array, item) {
    var index = this.indexOf(array, item);

    if (index !== -1) {
        array.splice(index, 1);
    }
    
    return array;
};/**
 * Creates an HTMLElement.
 * @param {Object/HTMLElement} config Ext DomHelper style element config object.
 * If no tag is specified (e.g., {tag:'input'}) then a div will be automatically generated with the specified attributes.
 * @return {HTMLElement} The created HTMLElement
 */
jasmine.Dom = function(config) {
    var element, children, length, child, i, property;
    
    config = config || {};
    
    if (config.tagName) {
        return config;
    }
    
    element = document.createElement(config.tag || "div");
        children = config.children || [];
        length = children.length;

    delete config.tag;
    
    for (i = 0; i < length; i++) {
        child = children[i];
        element.appendChild(new jasmine.Dom(child));
    }
    delete config.children;
    
    if (config.cls) {
        jasmine.Dom.setCls(element, config.cls);
        delete config.cls;
    }

    if (config.html) {
        jasmine.Dom.setHTML(element, config.html);
        delete config.html;
    }

    if (config.style) {
        jasmine.Dom.setStyle(element, config.style);
        delete config.style;
    }
    
    for (property in config) {
        if (!config.hasOwnProperty(property)) {
            continue;
        }
        element[property] = config[property];
    }

    return element;
};

/**
 * Adds className to an HTMLElement.
 * @param {HTMLElement} element The HTMLElement
 * @param {String} cls The className string
 */
jasmine.Dom.addCls = function (element, cls) {
    var split, length, i;
    
    if (!element.className) {
        jasmine.Dom.setCls(element, cls);
        return;
    }
    
    split = element.className.split(" ");
    length = split.length;
    
    for (i = 0; i < length; i++) {
        if (split[i] == cls) {
            return;
        }
    }
    
    element.className = element.className + " " + cls;
};

/**
 * Removes className to HTMLElement.
 * @param {HTMLElement} element The HTMLElement
 * @param {String} cls The className string
 */
jasmine.Dom.removeCls = function(element, cls) {
    var split, length, classArray, i;
    
    if (!element.className) {
        return;
    }
    
    classArray = [];
    split = element.className.split(" ");
    length = split.length;
    
    for (i = 0; i < length; i++) {
        if (split[i] !== cls) {
            classArray.push(split[i]);
        }
    }
    
    element.className = classArray.join(" ");    
};

/**
 * Checks if a dom element has a className.
 * @param {HTMLElement} element The HTMLElement
 * @param {String} cls The className string
 * @return {Boolean}
 */
jasmine.Dom.hasCls = function(element, cls) {
    var split, length, classArray, i;
    
    if (!element.className) {
        return;
    }
    
    split = element.className.split(" ");
    length = split.length;
    
    for (i = 0; i < length; i++) {
        if (split[i] === cls) {
            return true;
        }
    }
    
    return false;   
};

/**
 * Sets HTMLElement className.
 * @param {HTMLElement} element The HTMLElement
 * @param {String} cls The className string
 */
jasmine.Dom.setCls = function(element, cls) {
    element.className = cls;
};

/**
 * Sets HTMLElement innerHTML
 * @param {HTMLElement} element The HTMLElement
 * @param {String} html The innerHTML text
 */
jasmine.Dom.setHTML = function(element, html) {
    element.innerHTML = html;
};

/**
 * Sets HTMLElement style
 * @param {HTMLElement} element The HTMLElement
 * @param {String} style The style property to set
 */
jasmine.Dom.setStyle = function(element, style) {
    var property;
    for (property in style) {
        if (style.hasOwnProperty(property)) {
            element.style[property] = style[property];
        }
    }
};
/**
 * Utility function to fire a fake mouse event to a given target element
 */
jasmine.fireMouseEvent = function (target, type, x, y, button) {
    var e, doc, body, ret;
    target = Ext.getDom(target);
    x = x || 0;
    y = y || 0;
    
    if (button === undefined) {
        button = 0;
    }
    
    if (!Ext.isIE9m && document.createEvent) { // DOM compliant
        e = document.createEvent("MouseEvents");
        e.initMouseEvent(type, true, true, window, 1, x, y, x, y, false, false, false, false, button, null);
        ret = target.dispatchEvent(e);
    } else {
        // Normalize buttons for IE
        if (button === 1) {
            button = 4;
        } else if (button !== 2) {
            button = 0;
        }
        e = document.createEventObject();
        doc = document.documentElement;
        body = document.body;
        x = x + (doc && doc.clientLeft || 0) + (body && body.clientLeft || 0);
        y = y + (doc && doc.clientTop || 0) + (body && body.clientLeft || 0);
        Ext.apply(e, {
            bubbles: true,
            cancelable: true,
            screenX: x,
            screenY: y,
            clientX: x,
            clientY: y,
            button: button
        });
        ret = target.fireEvent('on' + type, e);
    }
    
    return (ret === false ? ret : e);
};


/**
 * Utility function to fire a fake key event to a given target element
 */
jasmine.fireKeyEvent = function(target, type, key) {
    var e, ret;
    target = Ext.getDom(target);
    if (document.createEventObject) { //IE event model
        e = document.createEventObject();
        Ext.apply(e, {
            bubbles: true,
            cancelable: true,
            keyCode: key
        });
        return target.fireEvent('on' + type, e);
    }
    else {
        e = document.createEvent("Events");
        e.initEvent(type, true, true);
        e.keyCode = key;
        return target.dispatchEvent(e);
    }
};

/*
This version is commented out because there is a bug in WebKit that prevents
key events to be fired with both options and a valid keycode. When the bug gets fixed
this method can be reintroduced. See https://bugs.webkit.org/show_bug.cgi?id=16735
jasmine.fireKeyEvent = function(target, type, key, options) {
    var e, ret, prop;
    
    options = options || {};
    target = Ext.getDom(target);
    if (document.createEventObject) { //IE event model
        e = document.createEventObject();
        Ext.apply(e, {
            bubbles: true,
            cancelable: true,
            keyCode: key
        });
        if (options) {
            for (prop in options) {
                if (options.hasOwnProperty(prop)) {
                    e[prop] = options[prop];
                }
            }
        }
        return target.fireEvent('on' + type, e);
    }
    else {
        e = document.createEvent('KeyboardEvent');
        if (typeof e.initKeyboardEvent != 'undefined') {
            e.initKeyboardEvent(type, true, true, window, 
                false, 
                false, 
                false, 
                false, 97, 97);
        } else {
            e.initKeyEvent(type, true, true, window, 
                options.ctrlKey || false, 
                options.altKey || false, 
                options.shiftKey || false, 
                options.metaKey || false, key, key);
        }
        return target.dispatchEvent(e);
    }
};
*/
var fakeScope = {
    id: "fakeScope",
    fakeScope: true
};
/**
 * Class to act as a bridge between the MockAjax class and Ext.data.Connection
 */
var MockAjaxManager = {
    
    getXhrInstance: null,
    
    /**
     * Pushes methods onto the Connection prototype to make it easier to deal with
     */
    addMethods: function(){
        var Connection = Ext.data.Connection,
            proto = Connection.prototype;
            
        Connection.requestId = 0;
        MockAjaxManager.getXhrInstance = proto.getXhrInstance;
        
        /**
         * Template method to create the AJAX request
         */
        proto.getXhrInstance = function(){
            return new MockAjax();    
        };
        
        /**
         * Method to simulate a request completing
         * @param {Object} response The response
         * @param {String} id (optional) The id of the completed request
         */
        proto.mockComplete = function(response, id){
            this.mockGetRequestXHR(id).xhr.complete(response);
        };
        
        /**
         * Get a particular request
         * @param {String} id (optional) The id of the request
         */
        proto.mockGetRequestXHR = function(id){
            var request;
                
            if (id) {
                request = this.requests[id];
            } else {
                // get the first one
                request = this.mockGetAllRequests()[0];
            }
            return request ? request : null;
        };
        
        /**
         * Gets all the requests from the Connection
         */
        proto.mockGetAllRequests = function(){
            var requests = this.requests,
                id,
                request,
                out = [];
                
            for (id in requests) {
                if (requests.hasOwnProperty(id)) {
                    out.push(requests[id]);
                }
            }
            return out;
        };

        this.originalExtAjax = Ext.Ajax;
        Ext.Ajax = new Connection({autoAbort : false});
    },
    
    /**
     * Restore any changes made by addMethods
     */
    removeMethods: function(){
        var proto = Ext.data.Connection.prototype;
        delete proto.mockComplete;
        delete proto.mockGetRequestXHR;
        proto.getXhrInstance = MockAjaxManager.getXhrInstance;
        Ext.Ajax = this.originalExtAjax;
    }
};

/**
 * Simple Mock class to represent an XMLHttpRequest
 */
var MockAjax = function(){
    /**
     * Contains all request headers
     */
    this.headers = {};
    
    /**
     * Contains any options specified during sending
     */
    this.ajaxOptions = {};
    
    this.readyState = 0;
    
    this.status = null;
    
    this.responseText = this.responseXML = null;
};

/**
 * Contains a default response for any synchronous request.
 */
MockAjax.prototype.syncDefaults = {
    responseText: 'data',
    status: 200,
    statusText: '',
    responseXML: null,
    responseHeaders: {"Content-type": "application/json" }
};

MockAjax.prototype.readyChange = function() {
    if (this.onreadystatechange) {
        this.onreadystatechange();
    }
};

/**
 * Simulate the XHR open method
 * @param {Object} method
 * @param {Object} url
 * @param {Object} async
 * @param {Object} username
 * @param {Object} password
 */
MockAjax.prototype.open = function(method, url, async, username, password){
    var options = this.ajaxOptions;
    options.method = method;
    options.url = url;
    options.async = async;
    options.username = username;
    options.password = password;
    this.readyState = 1;
    this.readyChange();
};

/**
 * Simulate the XHR send method
 * @param {Object} data
 */
MockAjax.prototype.send = function(data){
    this.ajaxOptions.data = data;
    this.readyState = 2;
    // if it's a synchronous request, let's just assume it's already finished
    if (!this.ajaxOptions.async) {
        this.complete(this.syncDefaults);
    } else {
        this.readyChange();
    }
};

/**
 * Simulate the XHR abort method
 */
MockAjax.prototype.abort = function(){
    this.readyState = 0;
    this.readyChange();
};

/**
 * Simulate the XHR setRequestHeader method
 * @param {Object} header
 * @param {Object} value
 */
MockAjax.prototype.setRequestHeader = function(header, value){
    this.headers[header] = value;
};

/**
 * Simulate the XHR getAllResponseHeaders method
 */
MockAjax.prototype.getAllResponseHeaders = function(){
    return '';
};

/**
 * Simulate the XHR getResponseHeader method
 * @param {Object} name
 */
MockAjax.prototype.getResponseHeader = function(name){
    return this.headers[header];
};

/**
 * Simulate the XHR onreadystatechange method
 */
MockAjax.prototype.onreadystatechange = function(){
};

/**
 * Method for triggering a response completion
 */
MockAjax.prototype.complete = function(response){
    this.responseText = response.responseText || '';
    this.status = response.status;
    this.statusText = response.statusText;
    this.responseXML = response.responseXML || this.xmlDOM(response.responseText);
    this.responseHeaders = response.responseHeaders || {"Content-type": response.contentType || "application/json" };
    this.readyState = 4;
    this.readyChange();
};

/**
 * Converts string to XML DOM
 */
MockAjax.prototype.xmlDOM = function(xml) {
    // IE DOMParser support
    if (!window.DOMParser && window.ActiveXObject) {
        doc = new ActiveXObject('Microsoft.XMLDOM');
        doc.async = 'false';
        DOMParser = function() {};
        DOMParser.prototype.parseFromString = function(xmlString) {
            var doc = new ActiveXObject('Microsoft.XMLDOM');
            doc.async = 'false';
            doc.loadXML(xmlString);
            return doc;
        };
    } 

    try {
        return (new DOMParser()).parseFromString(xml, "text/xml");
    } catch (e) {
        return null;
    }
};
