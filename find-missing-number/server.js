const express = require('express');
const findMissingNumber = require('./find-missing-number');

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
});

//end-points.

app.get('/api/missingnumber', (req, res) => {
    return findMissingNumber();
});

app.listen(3000, console.log("Server started on port 3000"));

  //to run the node project just use npm start.