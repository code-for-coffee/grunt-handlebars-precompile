describe("objects properly instantiated", function() {
  var app = new Object() || {};
  app.templates = new Object() || {};


    it("app namespace should exist", function() {

        expect(typeof(app)).toBe("object");

    });

    it("app.templates namespace should exist", function() {

        expect(typeof(app.templates)).toBe("object");

    });

});
