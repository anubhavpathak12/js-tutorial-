// **************** Ternery operator ******************
let age = 15;
let check = (age>=18)? 'I can Vote' : 'Can not vote'
console.log(check);


/*******************Conditional statement************** */
// if statement 

let marks = 98;
if(marks >= 90) {
    console.log('A');
}
else if(marks >= 80) {
    console.log('B');
}
else if(marks >= 70) {
    console.log('C');
}
else if(marks >= 60) {
    console.log('D');
}
else {
    console.log('E');
}

// switch case
let num = 2;
switch (num) {
    case 1 : console.log('A');
    break;
    case 2 : console.log('B');
    break;
    case 3 : console.log('C');
    break;
    case 4 : console.log('D');
    break;

}


//while case
let value = 1;  
while(value <= 5) {
    console.log(value);
    value = value + 1;
}


//do-while loop

let number = 1;
do {   
    number *= 2; 
    // console.log(number) //it print in different line

    process.stdout.write(number + ", "); // by doing this value print in single line it works only with nodejs like 2, 4, 8, 16,

}while(number<=10)


//for loop
console.log();
for(let i = 1; i <= 5; i++) {
    console.log(i);
}


// for-in loop
const obj = { a: 1, b: 2, c: 3 };

for (const keys in obj) {
  console.log(`obj.${keys} = ${obj[keys]}`);
}

// Logs:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"



// for...of loop
let arr = [3, 5, 7];
arr.foo = "hello";

console.log(arr); //[ 3, 5, 7, foo: 'hello' ]

for(let keys in arr) {    
  // for...in loop is iterates over object properties
  console.log(keys);  // 0 1 2 foo
}

for(let value of arr) {   // for...of loop is iterates over iterable values
  console.log(value);  // 3 5 7
}


//boolean 
console.log(false||5>4||1>0); // true
console.log(false||5||1);  // 5

