console.log('started');

async function function1() {
    let i = 0;
    while (i < 10) {
        console.log('function 1')
        i++;
    }
}
async function function2() {
    let i = 0;
    while (i < 10) {
        console.log('function 2')
        i++;
    }
}

function1();
function2();

console.log('end');

// in here the after printing started,
// launch test without await the function seems to work as if it was synchronous. But with await , the messages are inverted as the function is executed asynchronously.
//the function 1 will be initiated, after function 2 will be initiated,
//then the last console will be initiated.