describe("Fit", function() {
    it("should make the item fit to the container", function(viewport, width, height) {
        var container = viewport.add({
            layout: 'fit',
            cls: 'blue',
            width: width / 2,
            height: height / 2
        });

        expect(container.add({
            cls: 'orange'
        })).toHavePageBox({
            width: width / 2,
            height: height / 2
        })
    });
});
