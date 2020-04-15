describe("Counts all the registration numbers from Paarl", function() {

    it("Should count all the registration numbers from Paarl starting with 'CJ'", function() {
        var number = 'CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123';
        assert.equal(countAllPaarl(number), 3);
    });

    it ("Should count all the registration numbers from Paarl starting with 'CJ'", function() {
        var number = 'CJ 345 123, CK 345, CJ 123';
        assert.equal(countAllPaarl(number), 2);
    });

});
