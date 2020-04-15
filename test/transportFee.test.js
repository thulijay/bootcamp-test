describe("Returns your transport fee based on the shift you're working", function() {

    it("Should return 'R20' if you're working the morining shift", function(){
        var transport = "morning";
        assert.equal(transportFee(transport), 'R20');
    });
    it("Should return 'R10' if you're working the afternoon shift", function(){
        var transport = "afternoon";
        assert.equal(transportFee(transport), 'R10');
    });
    it("Should return 'free' if you're working nightshift", function(){
        var transport = "nightshift";
        assert.equal(transportFee(transport), 'free');
    });

});