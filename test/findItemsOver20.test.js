describe('Returns items that has quantity higher than 20', function(){
    it('Should retun all products with quantity higher than 20', function(){
        assert.deepEqual(findItemsOver20([{name:"pears", qty:37}], [{name:"pears",qty:37}],[{name:"bananas",qty:27}], [{name:"pears",qty:37}],[{name:"bananas",qty:27}]),  [{name:"pears",qty:37}],  [{name:"bananas",qty:27}])
    });
    it("Should return all products with quantity below 20", function(){
        assert.deepEqual(findItemsOver20([{name:'apples', qty:10}], [{name:'apples', qty:3}], [{name:'pears', qty:19}], [{name:'bananas', qty:17}]), [])
    })
});    