const express = require('express');
const countLetters = require('./app');

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
});

let text = 'these days i am studying';
//end-points.

// write a program to count and tell the number of repetition of each letter within the sentence given.
app.get('/api/countletters', (req, res) => {
    return countLetters(text);
});

app.listen(3000, console.log("Server started on port 3000"));

  //to run the node project just use npm start.