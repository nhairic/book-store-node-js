function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve('resolved');
        }, 2000);
    });
}

async function asynCall(){
    try{
    const i = await resolveAfter2Seconds();
    return i;
    }catch(e) {
        //
    }
}
asynCall();