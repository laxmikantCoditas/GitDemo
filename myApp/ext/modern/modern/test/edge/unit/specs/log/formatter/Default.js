describe("Ext.log.formatter.Default", function() {

    var formatter;

    beforeEach(function() {
        formatter = new Ext.log.formatter.Default();
    });


    it("should return the correct formatted message", function() {
        var caller = function(){};

        var mockEvent = {
            priority: 2,
            priorityName: 'warn',
            caller: caller,
            callerDisplayName: 'testing',
            message: 'something'
        };

        expect(formatter.format(mockEvent)).toEqual("[WARN][testing] something");
    });
});

