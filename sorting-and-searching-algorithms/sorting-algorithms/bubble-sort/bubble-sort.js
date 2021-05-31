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

const bubbleSort = () => {
    let arr = [1, 4, 2, 800, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
    return sort(arr);
}

module.exports = bubbleSort;