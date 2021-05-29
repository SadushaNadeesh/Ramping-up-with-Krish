//To filter String, objects from a array and to get the numbers only we can use filter() function.
var str = [
    "https://xx.jpg",
    "https://xx.jpg",
    "1",
    "https://guide.jpg",
    "2", 
    "/static.jpg",
    {type:"Fiat", model:"500", color:"white"},
    3
  ]

  // let newnumber = str.filter(Number);// numbers in string format
  let newnumber = str.filter(Number.isInteger); // numbers only
  // let newnumber = str.filter(Number.isFinite);// to get numbers and float/decimal numbers
  console.log(newnumber);