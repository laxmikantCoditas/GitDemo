var testCase = {
    run: function () {
        Ext.define('foo.bar', {
            baseProp: 1,
            onClassExtended: function(cls, data, hooks) {
                console.log("foo.bar onClassExtended");

                var onBeforeClassCreated = hooks.onBeforeCreated;

                hooks.onBeforeCreated = function(cls, data) {
                    console.log("foo.bar onBeforeCreated");

                    onBeforeClassCreated.apply(this, arguments);
                };
            }
        });

        Ext.define('foo.bar.mixin', {
            onClassMixedIn: function(cls, data, hooks) {
                console.log("foo.bar.mixin onClassMixedIn");
            }
        });

        Ext.classSystemMonitor = function (cls, str, args) {
            var className;

            if (typeof cls == 'string') {
                className = cls;
            } else {
                className = cls.displayName;
            }

            console.log(className + ' ' + str);
        }

        Ext.define('foo.bar2', {
            singleton: true,
            extend: 'foo.bar',
            mixins: { foobar: 'foo.bar.mixin' },
            statics: { x: 0 },
            inheritableStatics: { y: 0 },
            alias: 'foobar',
            alternateClassName: 'Foobar',
            someProp: 2,
            config: {
                bar: 0
            }
        }, function () {
            console.log('foo.bar2 onCreated');
        });

        Ext.classSystemMonitor = null;
    }
}
