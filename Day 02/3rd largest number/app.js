function sort(array, element) {
    let arr = array.slice();
    let output = [];

    //sort by compare values //for string only sort() enough.
    arr.sort(function (a, b) { return a - b });

    //return [... new Set(arr)];
    arr.forEach(function (element, index) {
        //Checks data.indexOf(1) which is 0 === 0, then push it to array
        //Now again when it checks the value of 1 which corresponds to a value of 1 but in forloop has an index of 5, so exits and duplicate values are not pushed
        if (arr.indexOf(element) === index) {
            output.push(element);
        }
    });
    return output[element-1];

}

//Write a program to find a 3rd largest number from a array
var array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
console.log(sort(array, 3));