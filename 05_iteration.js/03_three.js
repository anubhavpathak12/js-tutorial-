// higher order Array loop

//for of

/**
 * ["", "", ""]
 * [{}, {}, {}]
 */

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"

for (const greet of greetings) {
    if(greet === " ") {
        continue;
    }
    // console.log(`Each char is ${greet}`);
}

// Maps ( hold unique key-values pair only always remembers the original insertion of order of the keys)

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// console.log(map);

for (const key of map) {
    // console.log(key);
}

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// for (const key in map) {
//     console.log(key);
// } //******* so map is not iterable in this way *******

const myObj = {
    Ball1: 'Yorker',
    Ball2: 'Wide',
    BAll3: 'off-cutter',
    Ball4: 'Bouncer'
}
// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// } // ********* obj are not iterable in this way *******