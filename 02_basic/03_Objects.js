// objects literal

const mySym = Symbol("Key");

const JSuser = {
    name: "Anubhav",
    Class: 9,
    rollno: 45,
    [mySym]: "myKey1",
}

console.log(JSuser.rollno);
console.log(JSuser["name"]);

console.log(JSuser);

console.log(typeof JSuser[mySym]);


JSuser.greeting = function() {
    console.log(`Helloooooooooooo Master, ${this.name}`);
}

console.log(JSuser.greeting());
console.log(JSuser);