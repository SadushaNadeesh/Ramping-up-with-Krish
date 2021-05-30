const express = require('express');
const findnumber = require('./find-third-largest-number');

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
});

//end-points.

//Write a program to find a 3rd largest number from a array
app.get('/api/findnumber', (req, res) => {
    return findnumber();
});

app.listen(3000, console.log("Server started on port 3000"));

  //to run the node project just use npm start.