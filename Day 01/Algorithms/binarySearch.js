function binarySearch(array, element) {
    let start = 0;
    let end = array.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (array[middle] !== element && start <= end) {
        if (array[middle] < element) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    return array[middle] === element ? middle : -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(arr, 9));