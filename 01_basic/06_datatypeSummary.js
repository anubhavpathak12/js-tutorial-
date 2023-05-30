//PRIMITIVE DATATYPE

//7-type -> string, number, boolean, null, undefined, BigInt, Symbol

const isLoggedIn = false;
const outsideTemp = null;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false
console.log(id == anotherId);  // false

const bigNumber = 345678123467890n;

//NON-PRIMITIVE TYPE (Reference type)

// Arrays, Objects, Function

const myFavCricketer = ['MSD', 'Virat Kholi', 'Sachin Tendulkar', 'ABD'];

let myobjects = {
    name: "Anubhav Pathak",
    age: 19,
}

let myfunction = function() {
    console.log("Hello world!");
}

console.log(typeof isLoggedIn); //boolean
console.log(typeof outsideTemp) //object

console.log(typeof id);     // symbol

console.log(typeof bigNumber); // bigint

console.log(typeof myFavCricketer);  // object

console.log(typeof myobjects);  // object

console.log(typeof myfunction); // function

//================================================================

//Stack Memory(Primitives), Heap(Non-Primitives)

let schoolName = "Harry";

let nickName = schoolName;
nickName = "Jerry"

console.log(nickName);
console.log(schoolName);

//objects

let users = {
    email: "user@gmail.com",
    upiId: "user@ybl"
}

let userTwo = users

userTwo.email = "abc@gmail.com"

console.log(users.email);
console.log(userTwo.email);

//here both email change which shows we directly working on reference variable which is on heap memory