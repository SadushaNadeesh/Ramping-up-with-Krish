function serach(arr) {

    let missingNumbers = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== 1) {

            for (let j = 1; j < (arr[i + 1] - arr[i]); j++) {
                missingNumbers.push(arr[i] + j);
            }
        } else {
            console.log(i);
        }
    }
    console.log("MIssing numbers: " + missingNumbers);

    let completedSequence = [...arr, ...missingNumbers].sort(function (a, b) { return a - b });
    console.log(completedSequence);
}


const arr = [2, 3, 4, 7, 11];
serach(arr);
