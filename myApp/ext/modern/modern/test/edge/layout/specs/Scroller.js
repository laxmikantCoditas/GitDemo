describe("Scroller", function() {
    var items;

    describe("Horizontal Scroller (CSS Transform)", function() {
        beforeEach(function(viewport) {
            viewport.setLayout('hbox');
            viewport.setScrollable({
                direction: 'horizontal',
                translatable: {
                    translationMethod: 'csstransform'
                },
                indicators: false
            });

            viewport.add([
                {
                    cls: 'orange',
                    height: 200,
                    width: 200
                },
                {
                    cls: 'blue',
                    height: 200,
                    width: 200
                },
                {
                    cls: 'purple',
                    height: 200,
                    width: 200
                }
            ]);

            items = viewport.items.items;
        });

        it("horizontal scroller inner element should stretch to fit all it's contents", function(viewport, width, height) {
            expect(viewport.innerElement).toHavePageBox({
                left: 0,
                top: 0,
                right: 600,
                bottom: height
            });
        });
    });

    describe("Vertical Scroller (CSS Transform)", function() {
        beforeEach(function(viewport) {
            viewport.setLayout('vbox');
            viewport.setScrollable({
                direction: 'vertical',
                translatable: {
                    translationMethod: 'csstransform'
                },
                indicators: false
            });

            viewport.add([
                {
                    cls: 'orange',
                    height: 200,
                    width: 200
                },
                {
                    cls: 'blue',
                    height: 200,
                    width: 200
                },
                {
                    cls: 'purple',
                    height: 200,
                    width: 200
                }
            ]);

            items = viewport.items.items;
        });

        it("vertical scroller inner element should stretch to fit all it's contents", function(viewport, width, height) {
            expect(viewport.innerElement).toHavePageBox({
                left: 0,
                top: 0,
                right: width,
                bottom: 600
            });
        });
    });

    describe("Horizontal Scroller (Scroll Position)", function() {
        beforeEach(function(viewport) {
            viewport.setLayout('hbox');
            viewport.setScrollable({
                direction: 'horizontal',
                translatable: {
                    translationMethod: 'scrollposition'
                },
                indicators: false
            });

            viewport.add([
                {
                    cls: 'orange',
                    height: 200,
                    width: 200
                },
                {
                    cls: 'blue',
                    height: 200,
                    width: 200
                },
                {
                    cls: 'purple',
                    height: 200,
                    width: 200
                }
            ]);

            items = viewport.items.items;
        });

        it("horizontal scroller inner element should stretch to fit all it's contents", function(viewport, width, height) {
            expect(viewport.innerElement).toHavePageBox({
                left: 0,
                top: 0,
                right: 600,
                bottom: height
            });
        });
    });

    describe("Vertical Scroller (Scroll Position)", function() {
        beforeEach(function(viewport) {
            viewport.setLayout('vbox');
            viewport.setScrollable({
                direction: 'vertical',
                translatable: {
                    translationMethod: 'scrollposition'
                },
                indicators: false
            });

            viewport.add([
                {
                    cls: 'orange',
                    height: 200,
                    width: 200
                },
                {
                    cls: 'blue',
                    height: 200,
                    width: 200
                },
                {
                    cls: 'purple',
                    height: 200,
                    width: 200
                }
            ]);

            items = viewport.items.items;
        });

        it("vertical scroller inner element should stretch to fit all it's contents", function(viewport, width, height) {
            expect(viewport.innerElement).toHavePageBox({
                left: 0,
                top: 0,
                right: width,
                bottom: 600
            });
        });
    });
});
