function search(array, target) {
    for (let i = 0; i < array.length; i++) {

        if (target === array[i]) {
            console.log("Found the number in index: " + i);
            return i;
        }
    }
    //not found
    return -1;
}

const linearSearch = () => {
    let arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
    let number = 63;

    search(arr, number);
}

module.exports = linearSearch;