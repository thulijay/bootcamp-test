describe('Returns the registration number that is from that specific town', function(){

    it('Should return 3 registration numbers from CL', function(){
        assert.deepEqual(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL'), 3);
    });
    it('Should return 1 registration number from CF', function (){
        assert.deepEqual(countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CF'), 1)
    });
});