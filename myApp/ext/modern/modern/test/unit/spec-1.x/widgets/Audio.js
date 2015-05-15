Ext.require('Ext.Audio', function() {

describe("1.x - Ext.Audio", function() {
    var audio;
    
    beforeEach(function() {
        audio = new Ext.Audio({
            url     : 'test.mp3'
        });
    });
    
    afterEach(function() {
        audio.destroy();
    });
    
    it("should have a componentCls", function() {
        expect(audio.componentCls).toEqual('x-audio');
    });
    
    describe("1.x - after rendering", function() {
        beforeEach(function() {
            audio.media = {
                show: Ext.emptyFn,
                hide: Ext.emptyFn
            };
        });
        
        
        describe("1.x - onActivate", function() {
            it("should call the superclass onActivate", function() {
                spyOn(Ext.Audio.superclass, "onActivate");

                audio.onActivate();

                expect(Ext.Audio.superclass.onActivate).wasCalled();
            });

            it("should show the media item if it is the iPhone", function() {
                spyOn(audio.media, "show");

                Ext.is.Phone = true;
                audio.onActivate();

                expect(audio.media.show).wasCalled();
            });

            it("should not show the media item if it is the iPhone", function() {
                spyOn(audio.media, "show");

                Ext.is.Phone = false;
                audio.onActivate();

                expect(audio.media.show).wasNotCalled();
            });
        });

        describe("1.x - onDeactivate", function() {
            it("should call the superclass onDeactivate", function() {
                spyOn(Ext.Audio.superclass, "onDeactivate");

                audio.onDeactivate();

                expect(Ext.Audio.superclass.onDeactivate).wasCalled();
            });

            it("should hide the media item if it is the iPhone", function() {
                spyOn(audio.media, "hide");

                Ext.is.Phone = true;
                audio.onDeactivate();

                expect(audio.media.hide).wasCalled();
            });

            it("should not hide the media item if it is the iPhone", function() {
                spyOn(audio.media, "hide");

                Ext.is.Phone = false;
                audio.onDeactivate();

                expect(audio.media.hide).wasNotCalled();
            });
        });
        
        describe("1.x - when Ext.feature.has.Audio", function() {
            it("should return a different configuration", function() {
                audio.destroy();

                Ext.feature.has.Audio = true;

                audio = new Ext.Audio({
                    url     : 'test.mp3'
                });
                
                var config = {
                    tag   : 'audio',
                    hidden: !audio.enableControls
                };
                
                expect(audio.getConfiguration()).toEqual(config);
            });
        });
        
        describe("1.x - when !Ext.feature.has.Audio", function() {
            it("should return a different configuration", function() {
                audio.destroy();

                Ext.feature.has.AudioTag
                Ext.browser.is
                Ext.os.is

                Ext.feature.has.Audio = false;

                audio = new Ext.Audio({
                    url     : 'test.mp3'
                });
                
                var config = {
                    tag     : 'embed',
                    type    : 'audio/mpeg',
                    target  : 'myself',
                    controls: 'true',
                    hidden  : !audio.enableControls
                };
                
                expect(audio.getConfiguration()).toEqual(config);
            });
        });
    });
});

});
