new Promise((resolve, reject) => {
    resolve('resolved');
    reject('rejected');
}).then(e => console.log(e));

//after resolve calling, it will initiate the call back,
// execution continues immediately with any code following the resolve() call
//so the output will be resolved.