describe('Returns the number of registration numbers in a string', function(){

    it('Should return 3 for the total number of registartion numbers there is', function(){
        assert.deepEqual(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
    })
})