function sort(array) {
    const arr = array.slice();
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

const selectionSort = () => {
    let arr = [1, 4, 2, 8, 345, 1230, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
    return sort(arr);
}

module.exports = selectionSort;