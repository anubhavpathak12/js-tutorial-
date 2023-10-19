const user = {
    username: "anubhav",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to channel`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sumit"
// user.welcomeMessage()

console.log(this); // -> because we in the node environment, So here this keyword shows current context is "empty object" but in browser it shows "window object"


function chai() {
    let username = "Anubhav"
    // console.log(this.username); // -> undefined this keyword is used only with objects
}
// chai()


// ******** Normal function Declarations *********

// const chai = function() {
//     let username = "pathak"
// }

// ****** Arrow Function declarations 
const user1 = () => {
    let username = "pathak"
    console.log(this);
}

// user1()

// ****** explicit return arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// ****** implicit return arrow function
// const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(5, 10));

const addThree = (num1, num2) => ({username: "Anubhav"})

console.log(addThree(5, 10));
