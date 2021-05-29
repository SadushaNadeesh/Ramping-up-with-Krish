const express = require('express');
const findMissingNumber = require('./app');

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
});

var array = [2, 4, 6, 3, 1, 9, 7, 8];
//end-points.

//Write a program to find a missing number from the number sequence given.
app.get('/api/missingnumber', (req, res) => {
    return findMissingNumber(array);
});

app.listen(3000, console.log("Server started on port 3000"));

  //to run the node project just use npm start.