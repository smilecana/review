function findBiggestFraction(a,b){
    var result;
   a>b ? result = ["firstFraction", a] : result = ["secondFraction", b]
   return result;
}
var firstFraction = 3/4;
var secondFraction = 5/7;

var findResult = findBiggestFraction(firstFraction, secondFraction);
console.log(findResult)


console.log("----------------Anonymous functions--------------");

var theBiggest = function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b",b];
    return result;
}

console.log(theBiggest(7/9, 13/25));
console.log(theBiggest);  //--> return function



console.log("----------------Anonymous invoked functional expressions--------------");
var firstFraction2 = 7/9;
var secondFraction3 = 13/25;
var theBiggest2 = (function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b",b];
    return result;
})(firstFraction2, secondFraction3)

console.log(theBiggest2);  //--> return function



console.log("----------------Make sense of objects--------------");
// var course = new Object();

// var course = {
//     title: "Javascript Essential Training",
//     instructor: "Morten Rand-Hendriksen",
//     level: 1,
//     published: true,
//     views: 0,
//     updateViews: function() {
//         return ++course.views;
//     }
// }
// console.log(course);


function Course(title,instructor,level,published,views) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function(){
        return ++this.views;
    };
}

var course01 = new Course("Javascript Essential Training","Morten Rand-Hendriksen",1,true,0);
console.log(course01);

console.log("----------------Closures--------------");

// function doSomeMath() {
//     var a = 5;
//     var b = 4;

//     function multiply() {
//         var result = a*b;
//         return result;
//     }
//     return multiply;
// }

// var theResult = doSomeMath();

// console.log("The Result:" , theResult());


function giveMeEms(pixels) {
    var baseValue = 16;
    function doTheMath() {
        return pixels/baseValue;
    }
    return doTheMath;
}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xlargeSize = giveMeEms(32);

console.log("Small size :", smallSize());
console.log("Medium size:", mediumSize());
console.log("Large Size :", largeSize());
console.log("Extra Large Size:", xlargeSize());