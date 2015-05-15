describe("Floating", function() {
    it("should accept floating items", function(viewport, width, height) {
        expect(viewport.add({
            cls: 'pink',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        })).toHavePageBox({
            left: 0,
            top: 0,
            right: width,
            bottom: height
        });

        expect(viewport.add({
            cls: 'orange',
            right: 20,
            bottom: 30,
            height: '20%',
            width: '20%'
        })).toHavePageBox({
            right: width - 20,
            bottom: height - 30
        });

        expect(viewport.add({
            cls: 'blue',
            left: 20,
            right: 30,
            height: '20%'
        })).toHavePageBox({
            left: 20,
            right: width - 30
        });
    });

    it("should keep floating items above all naturally-sized items", function(viewport, width, height) {
        viewport.add({
            cls: 'orange',
            height: '20%',
            width: '100%'
        });

        expect(viewport.add({
            xtype: 'component',
            cls: 'blue',
            top: 0,
            left: 0,
            width: '20%',
            height: '20%'
        })).toBeTopAt(0, 0);
    });

    it("should maintain default z-indexes based on the order of the items being added", function(viewport, width, height) {
        viewport.add({
            cls: 'orange',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        });

        expect(viewport.add({
            xtype: 'component',
            cls: 'blue',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        })).toBeTopAt(0, 0);
    });

    it("should respect custom z-indexes", function(viewport, width, height) {
        var foo = viewport.add({
            xtype: 'component',
            cls: 'orange',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 5
        });
        viewport.add({
            xtype: 'component',
            cls: 'blue',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        });
        expect(foo).toBeTopAt(0, 0);
    });

    it("should maintain z-indexes with centered items", function(viewport, width, height) {
        viewport.add({
            cls: 'blue',
            centered: true,
            width: width / 2,
            height: height / 2
        });

        expect(viewport.add({
            cls: 'orange',
            width: width / 2,
            height: height / 2,
            left: width / 4,
            top: height / 4
        })).toBeTopAt(width / 2, height / 2);
    });

    it("should make inner items floating if either left, top, right or bottom is set", function(viewport, width, height) {
        var items = {},
            colors = ['orange', 'blue', 'purple', 'cyan'];

        ['left', 'top', 'right', 'bottom'].forEach(function(name, index) {
            items[name] = viewport.add({
                width: width / 2,
                height: height / 2,
                cls: colors[index]
            });
        });

        items.left.setLeft(0);
        items.left.setTop(0);

        expect(items.left).toHavePageBox({
            left: 0,
            top: 0
        });

        items.top.setRight(0);
        items.top.setTop(0);

        expect(items.top).toHavePageBox({
            right: width,
            top: 0
        });

        items.bottom.setLeft(0);
        items.bottom.setBottom(0);

        expect(items.bottom).toHavePageBox({
            left: 0,
            bottom: height
        });

        items.right.setRight(0);
        items.right.setBottom(0);

        expect(items.right).toHavePageBox({
            right: width,
            bottom: height
        });
    });

    describe("State Switching from Floating", function() {
        var foo;

        beforeEach(function(viewport, width, height) {
            foo = viewport.add({
                width: width / 2,
                height: height / 2,
                bottom: 0,
                right: 0,
                cls: 'blue'
            });
        });

        it("should make a floating item become inner item if left, top, bottom and right are all unset", function(viewport, width, height) {
            foo.setBottom(null);
            foo.setRight(null);

            expect(foo).toHavePageBox({
                left: 0,
                right: width / 2,
                top: 0,
                bottom: height / 2
            });
        });

        it("should make a floating item centered upon setCentered(true)", function(viewport, width, height) {
            foo.setCentered(true);

            expect(foo).toHavePageBox({
                top: height / 4,
                left: width / 4,
                right: width * 3 / 4,
                bottom: height * 3 / 4
            });
        });

        it("should make a floating item docked upon setDocked()", function(viewport, width, height) {
            foo.setDocked('right');

            expect(foo).toHavePageBox({
                top: 0,
                left: width / 2,
                right: width,
                bottom: height / 2
            });
        });
    });
});
