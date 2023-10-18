// function addingNum(number1, number2) {
//     console.log(number1 + number2);
// }

function addingNum(number1, number2) {

    // let result = number1 + number2;
    return number1 + number2;

}

const result = addingNum(3, 4);

// console.log("Result: ", result);

function loginUserMessage(userName = "aaloo") {
    if(!userName) {
        console.log("Please enter a username");
        return;
    }
    return `${userName} just logged in`;
}

// console.log(loginUserMessage("Sumit"))
// console.log(loginUserMessage())


function calculateCartPrice(val1, val2, ...num1) { // this is rest operator
    return num1;
}

// console.log(calculateCartPrice(200, 300, 400));


// PASSING OBJECTS

const user = {
    username: "Sumit",
    price : 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}.`);
}

// handleObject(user)
handleObject({
    username: "paneer",
    price: 399
}) 


// PASSING ARRAYS

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(takeArray) {
    return takeArray[1];
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue(["aaloo tikki", "paneer tikki", "Gulab Jamun"]))