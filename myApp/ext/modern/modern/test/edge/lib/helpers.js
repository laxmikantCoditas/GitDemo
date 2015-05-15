(function() {
    Ext.Loader.setPath('Ext', '../../../src');

    var matchers = jasmine.Matchers.prototype;

    matchers.toBeInstanceOf = function(expected) {
        var actual = this.actual;

        this.message = function() {
            return "Expected " + actual + " to be an instance of " + Ext.getClassName(expected);
        };

        return this.actual instanceof expected;
    };

    matchers.toHaveStyles = function(styles) {
        var actual = this.actual;

        this.message = function() {
            return "Expected " + actual.dom.outerHTML + " to have style of " + jasmine.pp(styles);
        };

        var actualStyle = actual.dom.style,
            key, value;

        for (key in styles) {
            if (styles.hasOwnProperty(key)) {
                value = styles[key];

                if (actualStyle.getPropertyValue(key) != value) {
                    return false;
                }
            }
        }

        return true;
    };

    matchers.toHaveStyle = function(name, value) {
        var actual = this.actual,
            style;

        this.message = function() {
            return "Expected " + actual.dom.outerHTML + " to have style of " + name + ":" + value;
        };

        name = name.replace(/[A-Z]/g, function(a) {
            return '-' + a.toLowerCase()
        });

        style = actual.dom.style.getPropertyValue(name) || null;

        return style === value;
    };

    matchers.toThrowSomethingLike = function(expected) {
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
            result = (expected === jasmine.undefined || ((exception.message || exception).indexOf(expected.message || expected) != -1));
        }

        var not = this.isNot ? "not " : "";

        this.message = function() {
            if (exception && (expected === jasmine.undefined || !this.env.equals_(exception.message || exception, expected.message || expected))) {
                return ["Expected function " + not + "to throw", expected ? expected.message || expected : "an exception", ", but it threw", exception.message || exception].join(' ');
            } else {
                return "Expected function to throw an exception.";
            }
        };

        return result;
    };

    matchers.toHaveBeenDestroyed = function() {
        var actual = this.actual;

        this.message = function() {
            return "Expected " + jasmine.pp(actual) + " to have been destroyed";
        };

        return !!actual.isDestroyed;
    };

    matchers.toHavePageBox = function(box) {
        var actual = this.actual;

        if (actual.isComponent) {
            return (this.actual = actual.element) && matchers.toHavePageBox.apply(this, arguments) &&
                    (this.actual = actual.innerElement) && matchers.toHavePageBox.apply(this, arguments);
        }

        var actualClassName = actual.dom.className,
            actualBox = actual.getPageBox(),
            key, value, actualValue;

        for (key in box) {
            if (box.hasOwnProperty(key)) {
                value = box[key];
                actualValue = actualBox[key];

//                if (/Chrome\/([\.0-9]+) Mobile/.test(navigator.userAgent)) {
//                    actualValue *= window.devicePixelRatio;
//                }

                if (Math.abs(value - actualValue) > 2) {
                    this.message = function() {
                        return "Expected " + actual.getId() + " ("+actualClassName+") to have " +
                            key + " of: " + value + " but got " + actualValue;
                    };
                    return false;
                }
            }
        }

        return true;
    };

    matchers.toBeTopAt = function(x, y) {
        var actual = this.actual,
            dom = actual.element.dom;

        var element = dom.ownerDocument.elementFromPoint(x, y);

        if (element !== dom && element !== actual.innerElement.dom) {
            this.message = function() {
                return "Expected " + actual.getId() + " ("+actual.getCls().join(' ')+") to be the top layer at ["+x+", "+y+"] but got " + (element ? (element.id + " (" + element.className + ")") : element);
            };

            return false;
        }

        return true;
    };

    jasmine.Block.prototype.execute = function(onComplete) {
        try {
            this.func.apply(this.spec, this.spec.args || []);
        } catch (e) {
            this.spec.fail(e);
        }
        onComplete();
    };

    var specIframeHtml;

    jasmine.specSandbox = function(callback) {
        var spec = Ext.Element.create({ className: 'spec' }),
            iframe = document.createElement("iframe"),
            iframeDocument;

        iframe.setAttribute('scrolling', 'no');
        iframe.style.width = "226px";
        iframe.style.height = "226px";

        if (!specIframeHtml) {
            specIframeHtml = '<!DOCTYPE HTML>' +
                '<html lang="en-US">' +
                '<head>' +
                    '<meta charset="UTF-8">' +
                    '<meta name="viewport" ' +
                        'content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">' +
                    '<meta name="apple-mobile-web-app-capable" content="yes">' +
                    '<meta name="apple-touch-fullscreen" content="yes">' +
                    '<style type="text/css">' +
                       (function(){ var xhr = new XMLHttpRequest; xhr.open('GET', '../../../resources/css/base.css', false); xhr.send(null); return xhr.responseText; })() +
                       (function(){ var xhr = new XMLHttpRequest; xhr.open('GET', '../../../resources/css/sencha-touch.css', false); xhr.send(null); return xhr.responseText; })() +
                    '</style>' +
                    '<style type="text/css">' +
                       (function(){ var xhr = new XMLHttpRequest; xhr.open('GET', 'iframe.css', false); xhr.send(null); return xhr.responseText; })() +
                    '</style>' +
                    '</head>' +
                    '<body>' +
                    '</body>' +
                '</html>';
        }

        spec.append(iframe);
        Ext.get('specs').insertFirst(spec);

        iframeDocument = iframe.contentDocument;
        iframeDocument.open();
        iframeDocument.writeln(specIframeHtml);
        iframeDocument.close();

        var classList = [],
            os = Ext.os,
            device = Ext.os.deviceType,
            osName = os.name.toLowerCase(),
            osMajorVersion = os.version.getMajor();

        classList.push('x-' + device.toLowerCase());
        classList.push('x-' + osName);
        classList.push('x-' + Ext.browser.name.toLowerCase());
        classList.push('x-' + Ext.browser.engineName.toLowerCase());

        if (osMajorVersion) {
            classList.push('x-' + osName + '-' + osMajorVersion);
        }

        iframeDocument.body.className = classList.join(' ');

        Ext.Element.document = iframeDocument;

        var viewport = Ext.create('Ext.Container', {
            width: '100%',
            height: '100%'
        });
        viewport.renderTo(iframe.contentDocument.body);
        callback(spec, viewport, viewport.element.getWidth(), viewport.element.getHeight(), {
            width: viewport.element.getWidth(),
            height: viewport.element.getHeight()
        });
    };

    var sandboxHtml;

    jasmine.sandbox = function(callback) {
        var iframe = document.createElement("div"),
            iframeDocument;

//        if (!sandboxHtml) {
//            sandboxHtml = '<!DOCTYPE HTML>' +
//                '<html lang="en-US">' +
//                '<head>' +
//                    '<meta charset="UTF-8">' +
//                    '<meta name="viewport" ' +
//                        'content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">' +
//                    '<meta name="apple-mobile-web-app-capable" content="yes">' +
//                    '<meta name="apple-touch-fullscreen" content="yes">' +
//                    '<style type="text/css">' +
//                        (function(){ var xhr = new XMLHttpRequest; xhr.open('GET', '../../../resources/css/base.css', false); xhr.send(null); return xhr.responseText; })() +
//                        (function(){ var xhr = new XMLHttpRequest; xhr.open('GET', '../../../resources/css/default.css', false); xhr.send(null); return xhr.responseText; })() +
//                    '</style>' +
//                    '<style type="text/css">' +
//                       (function(){ var xhr = new XMLHttpRequest; xhr.open('GET', '../lib/sandbox.css', false); xhr.send(null); return xhr.responseText; })() +
//                    '</style>' +
//                    '</head>' +
//                    '<body>' +
//                    '</body>' +
//                '</html>';
//        }

        iframe.style.height = '200px';
        iframe.style.width = '200px';

        //iframe.style.position = 'absolute';
        //iframe.style.visibility = 'hidden';
        document.body.appendChild(iframe);
//        iframeDocument = iframe.contentDocument;
//        iframeDocument.open();
//        iframeDocument.writeln(sandboxHtml);
//        iframeDocument.close();

        callback(iframe, function() {
            document.body.removeChild(iframe);
        });
    };
})();
