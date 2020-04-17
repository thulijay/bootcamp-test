describe('Returns the number of registration numbers in a string', function(){

    it('Should return 3 for the total number of registartion numbers', function(){
        assert.deepEqual(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
    });
    it('Should return 4 for the total number of registration numbers', function(){
        assert.deepEqual(countRegNumber('CY 254896,CAA 458976,CK 579458,CJ 876319'), 4);
    });
});