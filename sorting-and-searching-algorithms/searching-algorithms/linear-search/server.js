const express = require('express');

const linearsearch = require('./algorithms/linearSearch');


const app = express();

const array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
 
app.get('/', function (req, res) {
  res.send('Hello World')
});

//end-points.

app.get('/api/linearsearch', (req, res) =>{
  linearsearch(array, 55);
});
 
app.listen(3000, console.log("Server started on port 3000"));

//to run the node project just use npm start.