describe('Returns products with quantity higher than the threshold', function(){
    
    it('should  return all the products that have a quantity higher than threshold.  ' , function(){

        assert.deepEqual(findItemsOver([{name:"pears", qty:37}],23), [{name:"pears", qty:37}])

    });

    it('should  return an empty Array if quantity product is  higher lower than  threshold. ' , function(){

        assert.deepEqual(findItemsOver([{name:"bananas", qty:10},{name:"apples", qty:3}], {name:"apples", qty:10}),[])

    }); 
});




