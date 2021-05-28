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

  let newnumber = str.filter(Number.isInteger);
  console.log(newnumber);