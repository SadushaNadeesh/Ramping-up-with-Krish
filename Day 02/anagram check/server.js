const express = require('express');
const anagram = require('./app');

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
});

let text1 = 'silent';
let text2 = 'listen';
//end-points.

//Write a program to find a given words are a anagram or not.
//(checking if the two words consist of same letters with same length)/ (differnt words with same letters is a anagram.)
app.get('/api/anagram', (req, res) => {
    return anagram(text1, text2);
});

app.listen(3000, console.log("Server started on port 3000"));

  //to run the node project just use npm start.