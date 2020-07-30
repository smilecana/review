//For loops: Sequential
for (var i = 0 ; i< 10; i++) {
    console.log(i);
}

var pageNames = [
    "Home",
    "About Us",
    "Contact Us",
    "JavaScript PlayGround",
    "News",
    "Blog"
];

for ( i = 0 ; i < pageNames.length; i +=1 ) {
    if (document.title === pageNames[i]){
        console.log("We ARE here: " + pageNames[i]);
        break;
    } else {
        console.log("We are not here: " + pageNames[i]);
    }
}

//For loops: Enumerative
for ( var p in pageNames ) {
    console.log(p, pageNames[p]);
}

// iterate over an object
var pages = {
    first: "Home",
    second: "About Us",
    third: "Contact Us",
    fourth: "Javascript: Playground",
    fifth: "Blog"
}

for (var p in pages) {
    if (pages.hasOwnProperty(p)){
        console.log(p, pages[p]);
    }
}

//while loops
var myArray = [true, true, true, false, true, true];

var myItem = false;

while (myItem !== false) {
    console.log(
      "myArray has " +
        myArray.length +
        " items now. This loop will go until we pop a false."
    );
    myItem = myArray.pop();
  }

  //Infinity Loop
  