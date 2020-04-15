describe("Calculates how many years ago it was from a certain year", function(){

    it("Should return '44' for the number of years ago", function(){
        assert.equal(yearsAgo('1976'), 44);
    });
    it("Should return '20' for the number of years ago", function(){
        assert.equal(yearsAgo('2000'), 20);
    });
    
});