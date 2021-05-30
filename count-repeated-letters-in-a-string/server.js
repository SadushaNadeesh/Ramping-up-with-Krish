const express = require('express');
const countLetters = require('./count-characters');

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
});


//end-points.

app.get('/api/countletters', (req, res) => {
    return countLetters();
});

app.listen(3000, console.log("Server started on port 3000"));

  //to run the node project just use npm start.