describe("Button Visual Tests", function() {

    beforeEach(function() {
        containers = [];
    });

    afterEach(function() {
        var i = containers.length;

        for(; i--;) {
            containers[i].destroy();
        }

        Ext.getBody().dom.innerHTML = '';
    });
    
    createSuite('small', 'shrink');
    createSuite('small', 'fixed');

  
});