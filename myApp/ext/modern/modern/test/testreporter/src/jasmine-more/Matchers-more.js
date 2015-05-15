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
 };