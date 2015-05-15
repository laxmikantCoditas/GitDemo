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
};