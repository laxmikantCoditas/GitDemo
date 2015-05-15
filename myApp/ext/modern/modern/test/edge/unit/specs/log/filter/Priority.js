xdescribe("Ext.log.filter.Priority", function() {
//    var Logger = Ext.log.Logger,
//        mockEvent = {},
//        priority = new Ext.log.filter.Priority();

    it("should have a default minPriority that equals to Ext.log.Logger.defaultPriority", function() {
        expect(priority.getMinPriority()).toEqual(Logger.priorities[Logger.defaultPriority]);
    });

    it("should accept if passed event's priority is higher or equal to minPriority", function() {
        mockEvent.priority = 2;
        expect(priority.accept(mockEvent)).toBe(true);
    });

    it("should NOT accept if passed event's priority is less than minPriority", function() {
        mockEvent.priority = 0;
        expect(priority.accept(mockEvent)).toBe(false);
    });
});
