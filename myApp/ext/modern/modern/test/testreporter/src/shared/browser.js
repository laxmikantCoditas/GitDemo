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
