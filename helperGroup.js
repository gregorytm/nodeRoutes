
//get mean from an array
const mathMean = function(nums){
    let sum = nums.reduce((a, b) => a + b, 0)
    let mean = sum/2
    console.log(mean)
    return (mean)
}


//organize list and find median
const mathMedian = function(nums){
    let sortedQuery= nums.sort((a, b) => a - b);
    // console.log(`${sortedQuery} length:${sortedQuery.length}`); 
    if (sortedQuery.length % 2 === 0){

        let medianData = sortedQuery.slice((sortedQuery.length/2)-1, (sortedQuery.length/2)+1)
        return (medianData)
    }
    let medianData = sortedQuery[(sortedQuery.length-1) /2]
    return (medianData)
}

//find the mode
const mathMode = function(num){
    let query = num
    let counter = {};
    query.forEach(function(x) {
        if(counter[x] === undefined) {
            counter[x] =0
        }
        counter[x] += 1
    })
    let data = Object.keys(counter).reduce((a, b) => counter[a] > counter[b] ? a : b);
    let mode = Number.parseInt(data)
    return (mode)
}



//converts string and validates numbers in array
const parseNums = function(queryParams){
    let stringNums = queryParams.split(',');
    let nums = stringNums.map(x => Number.parseInt(x));
    for(let x = 0; x< nums.length; x++) {
        console.log(nums[x])
        if (Number.isNaN(nums[x])) {
            throw new Error(
            `[${stringNums[x]}] is not a valid number`
            )
        }
    } return nums;
}



module.exports = {mathMean, mathMedian,mathMode, parseNums };