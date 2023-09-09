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


// ************** Operations ************

let value = 3
let negValue = -value
console.log(negValue);


/*
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)
console.log(2/2)
console.log(2%2)
*/

let str1 ="hello"
let str2 = " anubhav"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2) //-> 12
console.log(1 + "2") //-> 12
console.log("1" + "2") //-> 12
console.log("1" + 2 + 2) //-> 122
console.log(1 + 2 + "2") // it gives 32

console.log("2" * 8) // -> 16
console.log(8 * "2") // ->16

console.log( ( (3 + 4) * 5) % 5) // 0

let gameCounter = 103
/* gameCounter++ */
console.log(gameCounter++); 
//-> first print 103 then increase by 1 so 103 -> 104

// ++gameCounter
console.log(++gameCounter); // it print 105 because ++gamecounter increase above 104 by 1 then print it 


/*

so if x = 4
then prefix is '++x' it means that first increase x then print
and
the postfix is 'x++' it means that first print x then increase

*/