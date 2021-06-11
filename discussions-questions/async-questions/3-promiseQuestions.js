//Give the output and explain?

//Question 01
new Promise((resolve) => {
    var x = 100;
    setTimeout(() => console.log(++x), 0);
    setTimeout(() => console.log(x++), 0);
    resolve(++x);
}).then(console.log);
//output
//101
//102
//102
//Reason: the resolve will initiated after that timeout method called. between the two timeout it is initiated parallelly. first it will print 101 from the resolve and 102 for timeout()

//Question 02
new Promise((resolve) => {
    var x = 100;
    setTimeout(() => console.log(++x), 0);
    resolve(++x);
    setTimeout(() => console.log(++x), 0);
}).then(console.log);
//output
//101
//102
//103
//first the resolve will be initiated, then the pre increment timeout will be initiated respectively.

//Question 03
new Promise((resolve, reject) => {
    resolve(reject("rejected"));
}).then(console.log);
//output
//UnhandledPromiseRejectionWarning: rejected
//Reason: when to call reject() the promise must be handled to catch it, otherwise it will give a error.

//Question 04
new Promise((resolve, reject) => {
    resolve(reject("rejected"));
}).then(console.log)
    .catch(e => {
        console.log(e);
    });
//output
//rejected
//In this code the promise is handled by calling catch(). So this time we can get the output.

//Question 05
new Promise((resolve, reject) => {
    reject(resolve("resolved"));
}).then(console.log)
    .catch(e => {
        console.log(e);
    });
//output
//resolved
//same as mentioned above.

//Question 06
new Promise((resolve, reject) => {
    resolve('resolved');
    reject('rejected');
}).then(console.log)
    .catch(e => {
        console.log(e);
    });
//output
//resolved
//Since promises can only resolve once (to either fulfilled or rejected), the first resolution wins and any further calls will be ignored. so the resolved output will be retuned

//Question 07
new Promise((resolve, reject) => {
    reject('rejected');
    resolve('resolved');
}).then(console.log)
    .catch(console.log);
//output
//rejected
//same scenario as mentioned above, but in here, reject() is initiated first, so the reject() will be initiated.

//Question 08
new Promise((resolve, reject) => {
    resolve('resolved');
}).then(console.log)
    .catch(console.log)
    .finally(console.log('fianl call'));
//output
//final call
//resolved
//reason: The finally() method returns a Promise. When the promise is settled, i.e either fulfilled or rejected, the specified callback function is executed

//Question 09
new Promise((resolve, reject) => {
    resolve('resolved');
})
    .finally(console.log('fianl call'))
    .then(console.log)
    .catch(console.log);
//output
//final call
//resolved

//Question 10
let promise = new Promise(function (resolve, reject) {
    var x = 1;
    setTimeout(() => resolve(++x), 1000);
});
promise.then(function (result) {
    alert(result);
    return result * 2;
});
promise.then(function (result) {
    alert(result);
    return result * 2;
});
promise.then(function (result) {
    alert(result);
    return result * 2;
});
//output
//4
//4
//4
//reason: when the promise is fulfilled, the result value will be 2. after that the then() will be called returning 4.

//Question 11
var x = 1;
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(++x), 1000);
});
promise.then(function (result) {
    alert(result);
    return result * 2;
});
promise.then(function (result) {
    alert(result);
    return result * 2;
});
promise.then(function (result) {
    alert(result);
    return result * 2;
});
//output
//4
//4
//4
//reason: same as above mentioned, in here the difference is the declaration of var x, in global scope.

//Question 12
promise.then(f1).catch(f2); //versus
promise.then(f1,f2);
//output
//they are not equal.
//In the first code have cahin (catch) after f1, to handle any errors.
//but in 2nd code error is not handled.

//Question 13
new Promise((resolve,reject)=>{
    throw new Error("Whoops"); })
.catch(alert);
new Promise((resolve,reject)=>{
    reject(new Error("Whoops!"));
}).catch(alert);
//output
//Whoops
//Whoops
//reason: to initiate a promise it is not required to have a resolve() or reject() [state change will affect], IN here the both promises handled by calling catch().

//Question 14
new Promise(function(resolve,reject){
    setTimeout(()=>{
        throw new Error("Whoops!");},1000);
}).catch(alert);
// output
// In this code sample it is failing to resolve or reject a promise just fails to ever change the state from "pending" to anything else. 
// SO the we cannot expect a output.

//Question 15
new Promise ((resolve,reject)=>{
    reject();
    console.log("after");
}).then(()=>console.log("RESOLVED"))
  .catch(()=>console.log(" REJECTED"));
//output
//after
//REJECTED
// Reason:It is not required to always have a resolve() or reject() in promise but it affect state change,log() will initiate without waiting until the promise is resolved or rejected without then()

//Question 16
new Promise(function(resolve,reject){
    reject('error rejected');
    console.log('resolved')
}).catch(console.log);
//output
//resolved
//error rejected
//Reason:log() will initiate without waiting until the promise is resolved or rejected without then()

// //Question 17
//create a class that its object can be used with "then" 
class PromiseClass{
    constructor(){}
    then(resolve){resolve(23432);}
}
new PromiseClass().then(console.log);
//output
//23432
//reason: we can create an object of any function using new keyword

//Question 18
async function wait(){
    await new Promise(resolve=>setTimeout(resolve,1000));
    return 10;
}
function f(){
    //cant use await or make this function async
}
//output
//An async function can contain an await expression, that pauses the execution of the async function and waits for the passed Promise's resolution, and then resumes the async function's execution and returns the resolved value.
//if no await is present the execution is not paused and your code will then be executed in a non-blocking manner.

//Question 19
//make simple callback and do a Promisification

//callback
const status = false;
function function1(callback,errorCallback){
    if(status){
      errorCallback({
        name: 'error',
        message: 'error message'
      })
    }else{
      callback('success')
    }
  }

  function1((message)=>{
      console.log('success');
  },(error)=>{
      console.log('error');
  });

  //after converting to promise
  function function1(){
      return new Promise((resolve,reject)=>{
        if(status){
            reject({
              name: 'error',
              message: 'error message'
            })
          }else{
            resolve('success')
          }
      })
  }
function1().then((message)=>{
    console.log('success');
}).catch((error)=>{
    console.log('error');
});

//promisification is the conversion of a function that accepts a callback into a function that returns a promise.