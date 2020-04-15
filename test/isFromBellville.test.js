describe('Tells us whether the registration number plate is from Bellville "CY" or not', function() {

    it ('Registration number starting with "CY" should return true', function() {
        assert.equal(isFromBellville('CY'), true);
    });
    
    it ('Registration number starting with "CJ" should return false', function() {
        assert.equal(isFromBellville('CJ'), false);
    });
    
});