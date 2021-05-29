const express = require('express');
const palindromeText = require('./app');

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
});

let text = 'noon';
//end-points.

// program to check if the string is palindrome or not
//(reverse word should be equal to the given word.)
app.get('/api/palindrometext', (req, res) => {
    return palindromeText(text);
});

app.listen(3000, console.log("Server started on port 3000"));

  //to run the node project just use npm start.