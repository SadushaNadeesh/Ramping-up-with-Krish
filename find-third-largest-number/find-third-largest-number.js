function largestnumber(array, element) {
    let arr = array.slice();
    let output = [];

    //sort by ascending order //for string only sort() enough.
    // arr.sort(function (a, b) { return a - b });

    //check duplicates.
    //return [... new Set(arr)];
    arr.forEach(function (element, index) {

        if (arr.indexOf(element) === index) {
            output.push(element);
        }
    });
    return console.log(output[element - 1]);

}

function sort(array) {
    const arr = array.slice();
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

//Write a program to find a 3rd largest number from a array
const findnumber = () => {

    const array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
    const element = 3;

    let sortedArray = sort(array);
    largestnumber(sortedArray, element);
}

module.exports = findnumber;