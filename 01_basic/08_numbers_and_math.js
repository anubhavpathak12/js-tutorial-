const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());

// console.log(typeof balance.toString());

// console.log(balance.toString().length);

// console.log(balance.toFixed(2)); 
// toFixed is used to reducing the precision value upto 2 decimal, important use in ecommerce application

const otherNumber = 123.89666

// console.log(otherNumber.toPrecision(3));

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++

/*

console.log(Math);
console.log(Math.abs(-4)); //4
console.log(Math.round(5.8)) //6
console.log(Math.floor(5.2)) //5
console.log(Math.ceil(5.2)) //6
console.log(Math.pow(10, 2)) //100
console.log(Math.sqrt(25)); //5

console.log(Math.min(4, 3, 5, 6, 8, 22)); //3
console.log(Math.max(4, 3, 5, 6, 8, 22)); //22

*/

console.log(Math.random());  // random function generate a random number between 0 and 1

console.log((Math.random()*10) + 1)
console.log((Math.random()*10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)