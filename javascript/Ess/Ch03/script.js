var colors = ['red','blue','green','orange'];


console.log(colors);

colors.unshift('pink','skyblue');
console.log(colors);

colors.push('pink2','skyblue2');
console.log(colors);




var newColors = colors.slice();
console.log("newColors", newColors);

var result = colors.indexOf("blue",1);
console.log(result);

var arrayString = colors.join(" & ");
console.log('String from array:' , arrayString);