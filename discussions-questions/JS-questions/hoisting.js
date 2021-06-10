// //Question 01
console.log(x); //undefined
for (let x=0; x<5;x++){
    //
}
console.log(x); //5

//In here in the creation phase all the variables will be declared and hoisting will be implemented.
//In creation phase only the declaration happened without value assigning.
//After that in the execution phase all the code will be executed line by line.
//so the first console will return a undefined value cause the x is only declared without assigning values.
//after that the for loop will be executed and x will be assigning with 5(after the increment).

//////////////////////////////////

//Question 02
var x = 10;
function test(){
    
    if(x>20){
        var x = 50;
    }
    console.log(x);
}
test();
//In here the variables and function scope will be declared in creation phase
//x will be assigning with 10
//when executing the function scope, it will create a function context and declare variables.
//So to check x>20 is not possible because the x is only declared.
//so it gives false and no go inside the if statement.
//the console will return undefined due to that.

//For more info check: https://www.geeksforgeeks.org/scoping-hoisting-javascript/
