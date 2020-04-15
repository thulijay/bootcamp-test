describe('Calculates the total phone bill', function(){

    it('Should return the bill for all calls made', function(){
        assert.equal(totalPhoneBill('call'), 'R2.75')
    });
    it('Should retrn the bill for all smses sent out', function(){
        assert.equal(totalPhoneBill('sms'), 'R0.65')
    });
});