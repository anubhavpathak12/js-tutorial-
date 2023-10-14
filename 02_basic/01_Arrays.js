// array

const myArr = [0, 1, 2, 3, 4, 5];

const myArr2 = new Array(1, 2, 3, 4, 5, 6);
// console.log(myArr[3]);
// console.log(myArr2);


// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(100)

// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join() // bind or converted array into string
// console.log(myArr);
// console.log(typeof newArr);

const myArr3 = ['a', 'n', 'u', 'b', 'h', 'a', 'v'];

const newArr3 = myArr3.join('');
console.log(newArr3.length);


// slice, splice

console.log('A) ', myArr);
const myn1 = myArr.slice(1, 3);
console.log(" * if slice => ", myn1);
console.log(" * After slice original array   =>  ", myArr);

console.log();

console.log('B) ', myArr);
const myn2 = myArr.splice(1, 3);
console.log(" * if splice => ", myn2);
console.log(" * After splice original array  =>  ", myArr);

