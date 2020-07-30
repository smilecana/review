//Simple comparisons
var one = 1,
  two = 2;
one === one; // true
one !== one; // false
one !== two; // true
one === two; // false

one == one; // true
one == "1"; // true (?!)
one != "1"; // false (?!)
one === "1"; // false

//Type checking
var thing = 12;
typeof thing;  // return number;
thing = true;
typeof thing  // return false;
thing = {};
typeof thing; // return object;
thing = [];
typeof thing === "object" && thing.hasOwnProperty('length');
//return true;
thing = null  // 
typeof thing;
// return null;
thing = NaN
typeof thing
return NaN;
NaN == null  
//return false

