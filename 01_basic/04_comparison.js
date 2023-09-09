// console.log(2 > 1);
// console.log(2 >= 1);

//equality operator(===)
console.log(1===1);  //-> true

//not equality operator
console.log(2!==1);  //-> true

// comparison operator :-
// 1) loose equality(==)  -> this work only when value is same
//2) strict equality(===)-> this work when data and value is same

let num = 1;
let str = '1';
console.log(num === str);  //-> false, becz here in strict equality value is same 1 but data is diff one is number and other is string 
console.log(num == str);  // -> true


 
console.log("2" > 1); //-> true
console.log("02" > 1); //-> true
//this unpredictable reult is becz of diff datatype

console.log(null > 0); // ->false
console.log(null == 0); //->false
console.log(null >= 0); //-> true

//this result is because equality check == and comparisons > < >= <= work differently
//comparison convert null to a number, treating it as 0. That's why case 3 is true in above case 

console.log(undefined == 0); //false
console.log(undefined > 0);  // false
console.log(undefined >= 0); // false