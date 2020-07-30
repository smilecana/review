//Basic functions
console.log('Arf');
console.log('Woof');
console.log('Meow');
console.log('Mooooooooooooooooo');

function speak() {
    console.log('Arf');
    console.log('Woof');
    console.log('Meow');
    console.log('Mooooooooooooooooo');
}
speak();

//Arguments in functions
function fuddify(speech) {
    if (typeof speech !== "string") {
        console.error("Nice twy, wabbit!");
        return;
    }

    // otherwise, make it sound like Elmer Fudd
    speech = speech.replace(/r/g, "w");
    speech = speech.replace(/r/g, "W");

    return speech;
}

function isEven(num) {
    return num % 2 === 0;
}

//More on arguments
function speakSomething(what, howMany) {
    var what = (typeof what !== 'undefined') ? what : "Default speech";
    var howMany = (typeof howMany !== 'undefined') ? howMany : 10;

    for (var i  = 0; i < howMany; i++) {
        console.log(`${what} + (${i})`);
    }
}

//Objects references, and functions
var calvin = {
    name: "Calvin",
    bestFriend: "Hobbes",
    form: "human boy"
  };
  
//Functions are objects
var obj = {
    sayHello: function() {
        console.log("Hello");
    }
};
obj.sayHello();

//Callback functions
function doubleIt(number) {
    return (number *=2);
}

var myNumbers = [1,2,3,4,5];
var myDoubles = myNumbers.map(doubleIt);






































