
//function declaration
function run() {
    console.log('running');
}
//function call or invoke

run();

// ************** HOSTING ***************//
hostexample();

function hostexample() {
    console.log("Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function)");
}

// method of function declaration:-

//1)Named Function assignment
let stand1 = function assignFunction() {
    console.log('Hello world');
} 
stand1();

//2)Anonymous Function assignment
let stand2 = function() {
    console.log('In anonymous function assignment we not given name to the function');
} 
stand2();

/***** */

function sum(a, b) {
    //special object argument
    console.log(arguments); //-> it create object where 0-> 1, 1->2
    return a+b;
}
/*
console.log(sum(1, 2)); //-> 3
console.log(sum(1));   // -> NaN
console.log(sum());    // -> NaN
console.log(sum(1, 2, 3, 4, 5, 6)); // a->1, b->2  => 3 and other no. are waste
*/
// console.log(sum(1, 2, 3, 4, 5, 6));



function addValue() {
    let total = 0;
    for(let value of arguments) {
        total = total + value;   
    }
    return total;
}

let answer = addValue(1,2,3,4,5,6);
console.log(answer);


//Rest operator(...)

function sum(...args) {
    console.log(args);   //-> it create arrays
}
sum(1,2,3,4,5,6);

/** 
function sum(num, value, ...args) {
    console.log(args); // it gives [3,4,5,6] where 1 -> num & 2-> value
    console.log(value); //->2
}

sum(1,2,3,4,5,6);*/


// ************** default parameters ***************//
function interest(p, r=5, y=10) {
    return p*r*y/100;
}
// console.log(interest(1000));  // 500


/****************** GETTER & SETTER ********************/
/*
GETTER- access(or recive) properties 
SETTER- change or mutate or updating the properties
*/


let person = {
    fName: 'Anubhav',
    lName: 'Pathak',

    get fullName() {
        return `${person.fName} ${person.lName}`;
    },

    set fullName(value) {
        /*
        if(typeof value !== String) {
            throw new Error("You have not sent a string");
        }
        */
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }

};

// console.log(fullName());

// console.log(person);

// console.log(person.fullName) //here getter call



//**************** TRY AND CATCH *************** */

/*
try {
    person.fullName = true;
}

catch(e) {
    alert(e);
}

console.log(person.fullName);  // here setter call
*/



/*
function fullName() {  // this function is read-only
    return `${person.fName} ${person.lName}`; // placeholder method to return
}
console.log(fullName()); //-> Anubhav Pathak
*/


//**************** SCOPING *************** */

/*
{
    let a = 5;
    console.log(a);
    let b = 2;
    var c = 9;
}

// console.log(b); // -> it tell b is not defined
console.log(c); // -> it runs and give value 9


So if let keyword is declare anywhere in the scope then it can be access anywhere in the same scope but not outside but in case of var it is available throughout the function in which they're declared  */

function walk() {
    var a = 5;
}

// console.log(a); // -> a is not defined outside the functional scope


// ********** REDUCING AN ARRAY *********** //

let arr = [-1,-2,-3,-4];
let total = 0;

for(let value of arr) {
    total += value;
}

console.log(total); //-> 10

//****** METHOD-2 ******//

let totalSum = arr.reduce((accummlator, currentValue) => accummlator + currentValue, 0);

console.log(totalSum); // -> 10

