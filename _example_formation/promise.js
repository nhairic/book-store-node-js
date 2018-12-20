//var Promise = require('promise');

const myPromise = new Promise(function (resolve, reject){
    setTimeout(()=> {
        resolve('fine 1')
    }, 1000)
})
.then(function whenOk(response) {
    console.log("log 1", response)
    new Promise(function (resolve, reject) {
        setTimeout(()=> {
            resolve('fine 2')
        }, 1000)
    }).then(function whenOk(response){
        console.log("log 3", response)
        return response
    })
    // si on enchaine plusieurs then sur une promesse il faut toujours ajouter
    // un return à la fin de leurs callback respectif, sinon ils vont 
    // s'executer en même temps
    ////// Si besoin de passer arg au then suivant faire un return 
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