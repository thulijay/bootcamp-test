describe("Checks if a registration number is from GP,L,EC or MP", function() {
    
    it("Should check if 'GP' matches the location and return true if it does", function() {
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });
    it("Shoud check if 'GP' matches the location and return false if it doesnt", function() {
        assert.equal(regCheck('DV 23 LP GP', 'EC'), false);
    });
    it("Should check if 'L' matches the location and return true if it does", function() {
        assert.equal(regCheck('5566 L', 'L'), true);
        });

    });