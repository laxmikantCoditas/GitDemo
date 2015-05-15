describe("jasmine.panel.DomSandbox", function() {
    var panel, spec, sandboxes;

    beforeEach(function() {
        spec = {
            id: '666'
        };
    });

    describe("constructor", function() {
        beforeEach(function() {
            spyOn(jasmine.panel.DomSandbox.prototype, "renderDomSandbox").andCallThrough();
        });
        
        describe("if sandbox", function() {
            beforeEach(function() {
                sandboxes = {};

                sandboxes[spec.id] = document.createElement("div");
                sandboxes[spec.id].appendChild(new jasmine.Dom());
                panel = new jasmine.panel.DomSandbox({
                    spec: spec,
                    sandboxes: sandboxes
                });
            });

            it("should call renderDomSandbox", function() {
                expect(jasmine.panel.DomSandbox.prototype.renderDomSandbox).toHaveBeenCalled();
            });

            it("should create an HTMLElement as el property", function() {
                expect(panel.el.tagName).toBeDefined();
            });
        });

        describe("if no sandbox", function() {
            beforeEach(function() {
                panel = new jasmine.panel.DomSandbox({
                    spec: spec,
                    sandboxes: {}
                });
        
            });

            it("should not call renderDomSandbox", function() {
                expect(jasmine.panel.DomSandbox.prototype.renderDomSandbox).not.toHaveBeenCalled();
            });

            it("should not create el property", function() {
                expect(panel.el).not.toBeDefined();
            });       
        });
    });

    describe("renderDomSandbox", function() {
        beforeEach(function() {
            sandboxes = {};
            sandboxes[spec.id] = document.createElement("div");
            
            panel = new jasmine.panel.DomSandbox({
                spec: spec,
                sandboxes: sandboxes
            });
        });

        describe("if sandbox", function() {
            beforeEach(function() {
                panel.sandBox.appendChild(new jasmine.Dom());
            });
            
            it("should return an HTMLElement", function() {
                expect(panel.renderDomSandbox().tagName).toBeDefined();
            });
        });

    });
}, "/src/reporter/panel/DomSandbox.js");
