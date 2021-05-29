const express = require('express');

const binarysearch = require('./algorithms/binarySearch');
const bubblesort = require('./algorithms/bubbleSort');
const linearsearch = require('./algorithms/linearSearch');
const mergesort = require('./algorithms/mergeSort');
const quicksort = require('./algorithms/quickSort');
const selectionsort = require('./algorithms/selectionSort');

const app = express();

const array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
 
app.get('/', function (req, res) {
  res.send('Hello World')
});

//end-points.
app.get('/api/binarysearch', (req, res) =>{
  let binarySearch = binarysearch(array,8);
  console.log(binarySearch);
});

app.get('/api/bubblesort', (req, res) =>{
  let bubbleSort = bubblesort(array);
  console.log(bubbleSort);
});

app.get('/api/linearsearch', (req, res) =>{
  linearsearch(array, 55);
});

app.get('/api/mergesort', (req, res) =>{
  let mergeSort = mergesort(array);
  console.log(mergeSort);
});

app.get('/api/quicksort', (req, res) =>{
  let quickSort = quicksort(array);
  console.log(quickSort);
});

app.get('/api/selectionsort', (req, res) =>{
  let selectionSort = selectionsort(array);
  console.log(selectionSort);
});
 
app.listen(3000, console.log("Server started on port 3000"));

//to run the node project just use npm start.