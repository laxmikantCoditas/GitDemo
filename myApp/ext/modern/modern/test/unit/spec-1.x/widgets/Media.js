Ext.require('Ext.Media', function() {

describe("1.x - Ext.Media", function() {
    var media;
    
    beforeEach(function() {
        media = new Ext.Media();
    });
    
    afterEach(function() {
        media.destroy();
    });
    
    it("should have no default url", function() {
        expect(media.url).toEqual('');
    });
    
    it("should enableControls by default", function() {
        expect(media.enableControls).toBeTruthy();
    });
    
    it("should not autoResume by default", function() {
        expect(media.autoResume).toBeFalsy();
    });
    
    it("should autoPause by default", function() {
        expect(media.autoPause).toBeTruthy();
    });
    
    it("should preload by default", function() {
        expect(media.preload).toBeTruthy();
    });
    
    it("should not be playing", function() {
        expect(media.playing).toBeFalsy();
    });
    
    describe("1.x - when rendered", function() {
        beforeEach(function() {
            //fake function so we can test
            media.getConfiguration = function() {
                return {};
            };
        });
        
        describe("1.x - when loop", function() {
            beforeEach(function() {
                media.loop = true;
            });
            
            it("should add the loop cfg", function() {
                media.render(Ext.getBody());
            });
        });
        
        describe("1.x - when onActivate", function() {
            beforeEach(function() {
                media.render(Ext.getBody());
                media.autoResume = true;
            });
            
            it("should play", function() {
                spyOn(media, "play");
                
                media.onActivate();
                
                expect(media.play).wasCalled();
            });
        });
        
        describe("1.x - when onDeactivate", function() {
            beforeEach(function() {
                media.render(Ext.getBody());
                media.autoPause = media.playing = true;
            });
            
            it("should pause", function() {
                spyOn(media, "pause");
                
                media.onDeactivate();
                
                expect(media.pause).wasCalled();
            });
        });
        
        describe("1.x - when toggle", function() {
            describe("1.x - when playing", function() {
                beforeEach(function() {
                    media.render(Ext.getBody());
                    media.playing = true;
                    media.media.dom.play = function() {};
                    media.media.dom.pause = function() {};
                });
                
                it("should pause", function() {
                    spyOn(media, "pause").andCallThrough();

                    media.toggle();

                    expect(media.pause).wasCalled();
                });
            });
            
            describe("1.x - when not playing", function() {
                beforeEach(function() {
                    media.render(Ext.getBody());
                    media.playing = false;
                    media.media.dom.play = function() {};
                    media.media.dom.pause = function() {};
                });
                
                it("should play", function() {
                    spyOn(media, "play").andCallThrough();

                    media.toggle();

                    expect(media.play).wasCalled();
                });
            });
        });
    });
});

});