

describe("Ext.log.Logger", function() {
    var logger, 
        writer;
        
    describe("defaults", function() {

        beforeEach(function() {
            logger = new Ext.log.Logger();
        });

        it("should have a static defaultPriority", function() {
            expect(Ext.log.Logger.defaultPriority).toBeDefined();
        });

        describe("convenient shorthands", function() {
            it("info() should delegate to log() with 'info' priority", function() {
                spyOn(logger, 'log').andCallThrough();

                logger.info('something');

                expect(logger.log).toHaveBeenCalledWith('something', 'info', 2);
            });
            it("warn() should delegate to log() with 'warn' priority", function() {
                spyOn(logger, 'log').andCallThrough();

                logger.warn('something');

                expect(logger.log).toHaveBeenCalledWith('something', 'warn', 2);
            });
            it("deprecate() should delegate to log() with 'deprecate' priority", function() {
                spyOn(logger, 'log').andCallThrough();

                logger.deprecate('something');

                expect(logger.log).toHaveBeenCalledWith('something', 'deprecate', 2);
            });
            it("verbose() should delegate to log() with 'verbose' priority", function() {
                spyOn(logger, 'log').andCallThrough();

                logger.verbose('something');

                expect(logger.log).toHaveBeenCalledWith('something', 'verbose', 2);
            });

        });
    });

    describe("log()", function() {
        var passedEvent;

        beforeEach(function() {
            writer = new (function(){
                this.write = function() {};
            });

            logger = new Ext.log.Logger();
            logger.setWriters({
                test: writer
            });

            spyOn(writer, 'write').andCallFake(function(event) {
                passedEvent = event;
            });
        });

        it("should call the writer's write() methods and pass an instance of Ext.event.Event", function() {
            logger.log('something');

            expect(writer.write).toHaveBeenCalled();
        });

        it("should NOT call the writer's write() method if disabled", function() {
            logger.setEnabled(false);
            logger.log('something');

            expect(writer.write).not.toHaveBeenCalled();
        });
    });
});