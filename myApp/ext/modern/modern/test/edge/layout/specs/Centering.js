describe("Centering", function() {
    it("should center the item", function(viewport, width, height) {
        var item = viewport.add({
            cls: 'orange',
            width: width / 2,
            height: height / 2,
            centered: true
        });

        var expectation = {
            top: height / 4,
            left: width / 4,
            right: width * 3 / 4,
            bottom: height * 3 / 4
        };

        expect(item).toHavePageBox(expectation);
    });

    it("should center inside a normal item", function(viewport, width, height) {
        var container = viewport.add({
            cls: 'orange',
            width: width / 2,
            height: height / 2
        });

        var item = container.add({
            cls: 'blue',
            width: '50%',
            height: '50%',
            centered: true
        });

        var expectation = {
            top: height / 8,
            left: width / 8
        };

        expect(item).toHavePageBox(expectation);
    });

    it("should center inside a floating item", function(viewport, width, height) {
        var container = viewport.add({
            cls: 'orange',
            width: width / 2,
            height: height / 2,
            top: 20,
            left: 20
        });

        var item = container.add({
            cls: 'blue',
            width: '50%',
            height: '50%',
            centered: true
        });

        var expectation = {
            top: height / 8 + 20,
            left: width / 8 + 20
        };
        expect(item).toHavePageBox(expectation);
    });

    it("should center inside another centered item", function(viewport, width, height) {
        var container = viewport.add({
            cls: 'orange',
            width: width / 2,
            height: height / 2,
            centered: true
        });

        var item = container.add({
            cls: 'blue',
            width: '50%',
            height: '50%',
            centered: true
        });

        var expectation = {
            top: height * (1/4 + 1/8),
            left: width * (1/4 + 1/8)
        };

        expect(item).toHavePageBox(expectation);
    });

    it("should maintain z-indexes with floating items", function(viewport, width, height) {
        viewport.add({
            cls: 'orange',
            width: width / 2,
            height: height / 2,
            left: width / 4,
            top: height / 4
        });

        expect(viewport.add({
            cls: 'blue',
            centered: true,
            width: width / 2,
            height: height / 2
        })).toBeTopAt(width / 2, height / 2);
    });

    describe("State Switching from Centering", function() {
        var foo;

        beforeEach(function(viewport, width, height) {
            foo = viewport.add({
                width: width / 2,
                height: height / 2,
                centered: true,
                cls: 'blue'
            });
        });

        it("should make a centered item become inner item upon setCentered(false)", function(viewport, width, height) {
            foo.setCentered(false);

            expect(foo).toHavePageBox({
                left: 0,
                right: width / 2,
                top: 0,
                bottom: height / 2
            });
        });

        it("should make a centered item floating", function(viewport, width, height) {
            foo.setRight(0);
            foo.setBottom(0);

            expect(foo).toHavePageBox({
                top: height / 2,
                left: width / 2,
                right: width,
                bottom: height
            });
        });

        it("should make a centered item docked upon setDocked()", function(viewport, width, height) {
            foo.setDocked('bottom');

            expect(foo).toHavePageBox({
                top: height / 2,
                left: 0,
                right: width / 2,
                bottom: height
            });
        });
    });
});
