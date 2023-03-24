  console.log('lets start');

  //object create 
  let rectangle = {
    //properties
    length: 1,
    breadth: 2,

    //now for adding behaviour this can be done with the help of function or Method
    draw: function () {
        console.log('drawing rectangle');
    }
    //so function is a programm or subprogramm which do a well defined task

  };


/************************ factory function ******************** */
function createRectangle(l, b) {

    let rectangle = {

        length: l,
        breadth: b,

        draw: function () {
            console.log('drawing rectangle');
        }
    };
    return rectangle;
}

let rectangleObj1 = createRectangle(5, 4);
let rectangleObj2 = createRectangle(9, 7);
let rectangleObj3 = createRectangle(10, 11);

/*********************** Constructor Function ******************* */


//constructor function -> we follow pascal Notation -> first letter of everyword is capital e.g. -> NumberOfStudent
        //camelCase e.g. -> like  numOfStudent

// constructor function -> prop/method -> intialise/define karta hai also here no need to return anything

function Rectangle (len, bre) {
    //this keyword tell that we are working on current obj
    this.length = len,
    this.breadth = bre,
    this.draw = function() {
        console.log('drawing')
    }
}


//object creation using construtor
let rectangleObject = new Rectangle(5, 6);
//so new keyword in javascript create empty object and return it



let Rectangle1 = new Function(
    'length', 'breadth',
    `this.length = length,
    this.breadth = breadth,

    this.draw = function() {
        console.log('drawing')
    }`);

    //object creation using Rectangle1
let rect = new Rectangle(2, 3);
console.log(rect);





/*************  Dynamic Nature of object ************* */

//adding
// rectangleObject.color = 'yellow';
// console.log(rectangleObject);

// //remove
// delete rectangleObject.color;
// console.log(rectangleObject);


/*****/




//rectangleObj1.length
//rectangleObj1.breadth
//rectangleObj1.draw()



//   let rectangle1 = {

//     length: 1,
//     breadth: 2,

//     draw: function () {
//         console.log('drawing rectangle');
//     }


//   }; 

//   let rectangle2 = {

//     length: 1,
//     breadth: 2,

//     draw: function () {
//         console.log('drawing rectangle');
//     }


//   };  




// here code readability decrease so we want function which create object which helps to reduce the use of repetative task
// 1)factory function
//2) constructor function


/******** Diff b/w Primitive type and Refrence type ************ */

// let a = 10;
// let b = a;

// a++;
// console.log(a);   //->11
// console.log(b);   // -> 10 



// let a = {value: 10};
// let b = a

// a.value++;

// console.log(a.value); //->11
// console.log(b.value); // -> 11


// NOTE:- PRIMITIVES ARE COPIED BY THEIR VALUES WHEREAS REFERENCES ARE COPIED BY THEIR ADDRESS/REFRENCE



/* ********* PASS BY VALUE *********** */

// let num = 10;

// function inc(a) {
//     a++;
// }

// inc(num);

// console.log(num);


/* ***************** PASS BY REFERENCE ***************** */

// let m = {value: 10};

// function inc(m) {
//     m.value++;
// }

// inc(m);

// console.log(m); // -> 11


let square ={
    length: 10,
    breadth: 10,
};

//FOR-IN LOOP

for(let key in square) {
    // keys are reflected through key variable
    // values are reflected through square[key]
    console.log(key, square[key]);
}

// FOR-OF LOOP

// for(let key of square) {
//     console.log(key);
// }

// error occur becz above we apply FOR-OF LOOP in not iterable object

for(let key of Object.entries(square)) {
    console.log(key);
}

if ('length' in square) {
    console.log('Present');
}

else {
    console.log('Absent');
}

//OBJECT CLONING 
//object-cloning #1 by insertion
let src = {
    a: 10,
    b: 20,
    c: 30,
};


let dest = {};

for(let key in src) {
    dest[key] = src[key]
}

console.log(dest);

src.a++;
console.log(dest);

//object-cloning #2 by assigning
let value = {
    m: 40,
    n: 30,
    p: 50,
};

let cookie = Object.assign({}, value);
console.log(cookie);

value.m++;
console.log(cookie);

//object-cloning #3 by spread
let picture = {
    k: 3,
    i: 4,
};
let picture1 = {n: 9};
let drawing = {...picture, ...picture1};

picture.k++;
console.log(drawing);


