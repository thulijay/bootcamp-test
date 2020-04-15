describe("Greets people", function() {
    
    it('Should greet Shady with "Hello, Shady"', function() {
        assert.equal("Hello, Shady", greet("Shady"));
    });
    it('Should greet Kim with "Hello, Kim"', function() {
        assert.equal("Hello, Kim", greet("Kim"));
    });

});