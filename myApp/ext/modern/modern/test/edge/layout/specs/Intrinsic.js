describe("Intrinsic", function() {
    it("should layout naturally", function(viewport, width, height) {
        expect(viewport.add({
            cls: 'orange',
            height: 20
        })).toHavePageBox({
            width: width,
            height: 20
        });

        expect(viewport.add({
            cls: 'blue',
            height: 50,
            width: 50
        })).toHavePageBox({
            width: 50,
            height: 50,
            left: 0,
            top: 20
        });

        expect(viewport.add({
            cls: 'purple',
            height: '50%',
            width: '50%'
        })).toHavePageBox({
            width: width / 2,
            height: height / 2
        });
    });

    it("should stretch inner to fit with minHeight", function(viewport, width, height) {
        expect(viewport.add({
            cls: 'orange',
            width: width,
            minHeight: height / 2
        })).toHavePageBox({
            width: width,
            height: height / 2
        });
    });
});
