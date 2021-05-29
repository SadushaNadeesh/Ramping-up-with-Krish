function sort(array) {
    const arr = array.slice(); //shallow copy of original array
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
// //pure function
// const arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
// console.log(bubbleSort(arr));
// console.log(arr);

const bubbleSort=(arr)=>{
    return sort(arr);
}

module.exports = bubbleSort;