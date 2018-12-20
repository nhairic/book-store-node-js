new Promise(function (resolve, reject){

    setTimeout(()=> resolve(1), 1000);


})
.then(function (result) {
    console.log(result);
    return new Promise(function (resolve, reject) {
        setTimeout( ()=> resolve(result * 2), 1000 )
    })

})
.then(function (result){
    console.log(result);
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(result *2), 1000);
    })
})
.then(function (result){
    console.log(result);
    result * undef
    return new Promise(function (resolve, reject){
        setTimeout(() => resolve( result *2 ), 1000);
    })
}).catch((e)=>{
    console.log("Error caught: ", e)
})