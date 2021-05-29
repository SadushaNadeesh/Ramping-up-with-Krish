const express = require('express');
const findnumber = require('./app');

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
});

const array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
const element = 3;
//end-points.

//Write a program to find a 3rd largest number from a array
app.get('/api/findnumber', (req, res) => {
    return findnumber(array, element);
});

app.listen(3000, console.log("Server started on port 3000"));

  //to run the node project just use npm start.