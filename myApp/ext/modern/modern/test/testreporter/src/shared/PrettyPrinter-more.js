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
