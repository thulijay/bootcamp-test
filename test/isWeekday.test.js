describe("Checks if a day is a weekday", function(){
    it('Should retun fasle if a day starts with "S"', function (){
        assert.equal(isWeekday('Saturday'), false);
    });
    it("Should return ture if a day doesnt start with 'S'", function(){
        assert.equal(isWeekday('Monday'), true)
    });
})