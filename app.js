const express = require('express');
const { parse } = require('qs');
const ExpressError = require('./expressError.js');
const { mathMean, mathMedian, parseNums, mathMode } = require('./helperGroup');
// const {checkNums} = require('./helperGroup');

const app = express();

app.get("/mean", function (req, res, next) {
    if (!req.query.nums){
        throw new ExpressError("a string of numbers seperated by comans is required", 404)
    } 
    let queryParams = parseNums(req.query.nums);
    if (queryParams instanceof Error) {
        throw new ExpressError(nums.message);
      }
    let mean = mathMean(queryParams)
    let result = {
        operator: "mean",
        result: mean
    }
    return res.send(result)
})

app.get("/median", function (req, res, next) {
    if (!req.query.nums){
        throw new ExpressError("a string of numbers seperated by comans is required", 404)
    } 
    let queryParams = parseNums(req.query.nums);
    if (queryParams instanceof Error) {
        throw new ExpressError(nums.message);
      }
    let median = mathMedian(queryParams)
    let result = {
        operator: "median",
        result: median
    }
    return res.send(result)
})

app.get("/mode", function (req, res, next) {
    if (!req.query.nums){
        throw new ExpressError("a string of numbers seperated by comans is required", 404)
    } 
    let queryParams = parseNums(req.query.nums);
    if (queryParams instanceof Error) {
        throw new ExpressError(nums.message);
      }
    let mode = mathMode(queryParams)
    let result = {
        operator: "mode",
        result: mode
    }
    return res.send(result)
})

app.get("/all", function (req, res, next) {
    if (!req.query.nums){
        throw new ExpressError("a string of numbers seperated by comans is required", 404)
    } 
    let queryParams = parseNums(req.query.nums);
    if (queryParams instanceof Error) {
        throw new ExpressError(nums.message);
      }
    let mean = mathMode(queryParams)
    let median = mathMedian(queryParams)
    let mode = mathMean(queryParams)
    let result = {
        operator: "all",
        mean: mean,
        median: median,
        mode: mode
    }
    return res.send(result)
})


//if other routes dont work, respond with 404
app.use((req, res, next) => {
    const e = new ExpressError("Page Not Found", 404)
    next(e)
  })

//error handler
app.use(function(err, req, res, next) {
///500 for internal server error
    let status = err.status || 500;
    let message = err.message;

    //set status and alert user
    return res.status(status).json({
        error : {message, status}
    });
});

app.listen(3000, () => {
    console.log('server running on port 3000')
});