"use strict"; // treat all js code as a newer version

//alert(3+3) // we are using nodejs, not a browser that's why it show error
//using alert() in nodejs has different style  

console.log(3 + 3)

console.log("Anubhav")

let name = "anubhav"  // string datatypes
let age = 19;         // number
let isLoggedIn = false // boolean

// primitive datatype
// number -> -(2^53-1) to(2^53-1) 
// bigint 
// string -> ("" or '') written in both 
// boolean -> true/false
// null-> standalone value(just a representation of empty value ), its a type & representation of empty value 
// undefined
// symbol -> used for uniqueness


let temp = null // here we intentially say that temp is not undefined but its empty

let state; //it is undefined


//object 

console.log(typeof "Anubhav"); // used to know the type of value here 'string'

console.log(typeof null) // here type  of 'null' is object (******** special thing ***********)
console.log(typeof undefined) // type is undefined