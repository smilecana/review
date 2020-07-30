var tinyAlmanac = {
    year: 2012,
    month: "October",
    day: 31,
    holiday: "Halloween"
  };


  //Add Object Key
  tinyAlmanac.description = "empty";
  tinyAlmanac[description2] = "wow......";

  //Delete Object
  delete tinyAlmanac.description;
  delete tinyAlmanac[description2];

  //Copy Object
  var tinyAlmanac2 = tinyAlmanac  // 같은 메모리 사용. 
  
  var tinyAlmanac3 = JSON.parse(JSON.stringify(tinyAlmanac));

