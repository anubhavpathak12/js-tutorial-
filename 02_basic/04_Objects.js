// Singleton Object

const myUser = new Object();

myUser.id = "123abc";
myUser.name = "Sumit";
myUser.isLoggedIn = false;

// console.log(myUser);

const dailyUser = {
    email: "hello@gmail.com",
    fullname: {
        userNickName: {
            firstName: "Sumit",
            lastName: "Pathak",
        }
    },
}

// console.log(dailyUser);

// console.log(dailyUser["email"])

// console.log(dailyUser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "e", 4: "f"}

const obj3 = {...obj1, ...obj2}; // spread operator

console.log(obj3);

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);
// console.log(obj1);
// console.log(obj1 === obj3); // false


// jab database se object aayega tho arrays ke form mein aayega
const users = [
    {
        id: 1,
        email: "hello@gamil.com"
    },
    {
        rollno: 1,
        name: "anubhav pathak"
    }
]

// console.log(users[1]);

// console.log();

// console.log(myUser);
// console.log(Object.keys(myUser));
// console.log(Object.values(myUser));
// console.log(Object.entries(myUser));

// console.log(myUser.hasOwnProperty('isLoggedIn'));


// DeStructuring 

const Movie = {
    MovieName: "MS DHONI",
    ticketPrice: "999",
    noOfticket: 1,
}

const {MovieName: MAHI} = Movie

console.log(MAHI);

// About JASON 
// which is only javascript object notation

// {
//     "name": "Anubhav", 
//      "class": 45,
// }