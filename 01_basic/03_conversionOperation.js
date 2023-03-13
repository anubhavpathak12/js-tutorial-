let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" -> 33 (typeof valueInNumber) -number
// "33abc" -> (typeof valueInNumber) -number and valueInNumber is NaN
// true -> 1; false -> 0


let isLoggedIn = ""

let booleanIsLoggedIn =Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 -> true; 0 -> false
// "" -> false; "sumit" -> true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
