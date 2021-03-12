const {
    mathMean,
    mathMedian,
    mathMode
  } = require("./helperGroup");

  describe('find mean of numbers', function() {
     it("will find the mean in an arry", function(){
         expect(mathMean([1,2,3,4])).toEqual(5)
     })
     it('will find the mean of negative numbers', function(){
         expect(mathMean([-2,-3,-4,-5])).toEqual(-7)
     })
  })


  describe('find median of numbers', function() {
     it("will find the even median in an arry", function(){
         expect(mathMedian([1,2,3,4])).toEqual([2,3])
     })
     it('will find the median of odd number array', function(){
         expect(mathMedian([-2,-3,-4])).toEqual(-3)
     })
  })


  describe('find mode of numbers', function() {
    it ('find the most common accuring number', function(){
        expect(mathMode([1,2,5,6,6,7,8])).toEqual(6)
    })
    it('another mode test', function(){
        expect(mathMode([1,2,5,-6,-6,7,8])).toEqual(-6)

    })
  })