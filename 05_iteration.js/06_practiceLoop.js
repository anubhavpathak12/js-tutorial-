const programming = ["ruby", "js", "java", "cpp"]

// const values = programming.forEach( (item) => {
//     console.log(item);
//     return item;
// } )

// console.log(values); /* So forEach never return any value*/


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num) => {
    return num > 4;
} )

console.log(newNums);


const myArray = []
myNums.forEach( (num) => {
    if (num > 4) {
        myArray.push(num)
    }
} )

console.log(myArray);
