//var Promise = require('promise');

const myPromise = new Promise(function (resolve, reject){
    setTimeout(()=> {
        resolve('fine 1')
    }, 1000)
    reject("bug")
})
.then(function whenOk(response) {
    console.log("log 1", response)
})
.then(function whenOk(response) {
    console.log("log 2", response)
})
.then(function whenOk(response) {
    console.log("log 3", response)
})
.catch(function notOk(err){
    console.log(err)
})