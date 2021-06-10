var x= 10;
console.log("1 "+x);

function test(){
    var x = 20;
    console.log("2 "+x);

    if(x>10){
        let x = 30;
        console.log("3 "+x);
    }
    console.log("4 "+x);
}
test();
console.log("5 "+x);