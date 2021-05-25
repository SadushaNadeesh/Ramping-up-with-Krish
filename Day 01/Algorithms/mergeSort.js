//helper merge sort
const merge = (leftArr, rightArr) => {
    const output = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length){
        const leftElement = leftArr[leftIndex];
        const rightElement = rightArr[rightIndex];

        if(leftElement < rightElement){
            output.push(leftElement);
            leftIndex++;
        }else {
            output.push(rightElement);
            rightIndex++;
        }
    }

    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
;
}

//main recursive
const mergeSort = array => {
    if (array.length <= 1){
        return array;
    }
    const middleIndex = Math.floor(array.length /2);
    const leftArr = array.slice(0, middleIndex);
    const rightArr = array.slice(middleIndex);

    return merge(
        mergeSort(leftArr),
        mergeSort(rightArr)
    );
};

const arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
console.log(mergeSort(arr));
console.log(arr);