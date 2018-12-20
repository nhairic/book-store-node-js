function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve('resolved');
        }, 2000);
    });
}

async function asynCall(){
    //SYNTAXE SYNCHRONNE 
    console.log('calling');
    var result = await resolveAfter2Seconds();
    console.log(result);
}
asynCall();