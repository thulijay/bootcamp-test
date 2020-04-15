describe('Returns the town the car is from', function(){

    it('Should return "Bellville" if the registration number starts with CY', function(){
        assert.equal(fromWhere('CY'), 'Bellville')
    });
    it('Should return "Paarl" if the registration number starts with CJ', function(){
        assert.equal(fromWhere('CJ'), 'Paarl')
    });
    it('Should return "Cape Town" if the registration number starts with CA', function(){
        assert.equal(fromWhere('CA'), 'Cape Town')
    });
    it('Should return "Some other place!" if the registration number starts with CC', function(){
        assert.equal(fromWhere('CC'),'Some other place!')
    })
});