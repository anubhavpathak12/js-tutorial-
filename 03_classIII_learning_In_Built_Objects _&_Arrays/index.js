//Math -> in-built object
// console.log(Math.random());  //-> give random no. b/w 0 to 1

// console.log(Math.max(2, 4, 5, 6));  //-> 6

//String it is primitive but in js it is used as a object also
let lastName = 'Pathak';
// console.log(typeof lastName); //-> string

// if we use primitive string with dot then js treat it as a string object like lastName.

// console.log(lastName.length);            //-> 6
// console.log(lastName[0]);                //-> P
// console.log(lastName.includes('Pa'));    //->true
// console.log(lastName.startsWith('Path')) //-> true
// console.log(lastName.toUpperCase());     //->PATHAK
// console.log(lastName.toLowerCase());     //->pathak


let firstName = new String('Anubhav');
// console.log(typeof firstName) //-> object


let message = 'My first semester is completed';
let words = message.split(' ');
// console.table(words);

let message2 = 
`hey Myself 
 ${firstName} 
    Here `;
// console.log(message2);

/******** DATE & TIME ******** */
let date = new Date();


let date2 = new Date('October 29 2003 03:00')


let date3 = new Date(2003, 9, 29, 3); // Month indexing start from 0

date3.setFullYear(2004) 
// console.log(date3);

/***************************** ARRAYS ************************ */

let number = [1, 2, 3, 4];
// console.log(number.push(9)); // adding element to the end of the list
// console.log(number);


//INSERTION
//-> end -> number.push(6)
//-> begin -> number.unshift(6)
//-> middle -> number.splice(index, no element delete, adding element)


//Searching
// console.log(number.indexOf(9));

//we want to check if a number exist in an array
if(number.indexOf(4) != -1) {
    //console.log("present");
}else {
    // console.log("absent");
}

// console.log(number.includes(2)); // true

// console.log(number.indexOf(4, 2)); // this also search that 4 is lie in the array or not but search start from 2nd index if not match then it print -1

let courses = [
    {no: 1, naam: 'Anubhav' },
    {no: 2, naam: 'Sumit' }
]
// console.log(courses);

// console.log(courses.indexOf({no: 1, naam: 'Anubhav' })); // -1



// to small this code we use Arrow function

//let course = courses.find(function(course){
//      return course.naam == 'Anubhav';
//});
let course = courses.find(course => course.naam == 'Sumit');

// console.log(course);



//  REMOVING ELEMENT
let numbers = [1, 2, 3, 4, 5, 6, 7];

numbers.pop(); // remove end element [1, 2, 3, 4, 5, 6]
numbers.shift(); // remove starting element [2, 3, 4, 5, 6]
numbers.splice(2, 1); // it remove 2nd index element 4 from [2, 3, 4, 5, 6]

// console.log(numbers);




// EMPTYING AN ARRAY
let No1 = [1,2,3,4,5];
let No2 = No1;

// No1 = []; // not good pratice to empty array

// No1.length = 0;  // by using this array is empty
// No1.splice(0, No1.length);

for(let i = No1.length; i>0; i--){
    No1.pop();
}



// console.log(No1);
// console.log(No2);


// COMBINING & SLICING ARRAY
let first = [1,2,3,4];
let second = [5,6,7,8];

let combined = first.concat(second);  //concat()->combined
// console.log(combined);  //[1,2,3,4,5,6,7,8]

let sliced = first.slice(1, 2); //it gives [2]
// console.log(sliced);



// SPREAD OPERATOR
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr1, 'a', ...arr2, 'b'];
// console.log(arr3);

//how copy create
let another = [...arr3];


// ITERATING AN ARRAY
let arr = [10,20,30,40,50];
// for(let value of arr) {
//     console.log(value);
// }

// arr.forEach(function(number) {
//     console.log(number);
// });

// arr.forEach(number => console.log(number)); // using arrow function


//JOINING Arrays

let num = [10, 20, 30, 40, 50];
const joined = num.join(',');
// console.log(joined);

let text = 'my first text';
let parts = text.split(' '); // it helps to create array like ['my', 'first', 'text']
// console.log(parts);



//SORTING

// let list = [90,20,80,40,50,30,10,100,0,60,70]
// list.sort(); 
// list.reverse();
// console.log(list);

// FILTERING

// let list1 = [1,2,-1,-4];
// let filtered = list1.filter(function(value){
//     return value >= 0;
// });

// console.log(filtered); // [1, 2]

//Mapping Array

// let number1 = [7,8,9,10];
// console.log(number1);

// let items =number1.map(function(value) {
//     return 'student_no' + value;
// })
// console.log(items);




//MPPING WITH OBJECTS

let number2 = [1,2,-6,-9]; 
let filtered = number2.filter(value => value >= 0);

let item = filtered.map(num=> {value: num});
console.log(item);