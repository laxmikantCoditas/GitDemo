describe("Card", function() {
    var items;

    beforeEach(function(viewport) {
        viewport.setLayout('card');

        viewport.add([
            {
                cls: 'orange'
            },
            {
                cls: 'blue'
            },
            {
                cls: 'purple'
            }
        ]);

        items = viewport.items.items;
    });

    it("should have the active item fit to the container", function(viewport, width, height) {
        expect(viewport.getActiveItem()).toHavePageBox({
            left: 0,
            top: 0,
            right: width,
            bottom: height
        });
    });

    it("should make the first added item active by default", function(viewport) {
        expect(items[0]).toBeTopAt(1, 1);
    });

    it("should synchronize with Container#setActiveItem()", function(viewport) {
        viewport.setActiveItem(1);
        expect(items[1]).toBeTopAt(1, 1);
    });
});
