//var Promise = require('promise');

const myPromise = new Promise(function (resolve, reject){
    setTimeout(()=> {
        resolve('fine 1')
    }, 2000)
})
.then(function whenOk(response) {
    console.log("log 1", response)
    return new Promise(function (resolve, reject) {
        setTimeout(()=> {
            resolve('fine 2')
        }, 2000)
    }).then(function whenOk(response){
        console.log("log 3", response)
        return response
    })
    ////// Si besoin de passer au then suivant faire un return 
    //ex :
    //return 'toto';
    //return response;
})
.then(function whenOk(response) {
    console.log("log 2", response)
    return response
})
.catch(function notOk(err){
    console.log(err)
})