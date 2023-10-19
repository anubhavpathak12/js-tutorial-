//global scope
var m = 300
let a  = 300

if(true) {
    //local scope
    let a = 10;
    // console.log("INNER a: ", a);
    const b = 20;
    var  m = 30;
}

// console.log("OUTER a: ", a);
// console.log(b);
// console.log("m: ",m); // var break local scope 


// NOTE: REMEMBER BROWSER MEIN OR NODE MEIN GOBAL SCOPE ALAG ALAG HOTE HAIN 

function one() {
    const username = "anubhav"
    
    function two() {
        const channelName = "chai aur code"
        // console.log(username); -> this line execute
    }
    // console.log(channelName);  -> lines gives error because of outside of scope access 

    two()
}

one()


if(true) {
    const firstName = "Anubhav"
    if(firstName === "Anubhav") {
        const lastName = " Pathak "
        // console.log(firstName + lastName);
    }
    // console.log(lastName); -> ******** ERROR *******
}
// console.log(firstName); -> ******** ERROR *******


// ***************** interesting concept ***************

console.log(addone(5));
function addone(num) {
    return num + 1
}


// console.log(addtwo(10));  -> ******** ERROR *******
                                // error because of function declaration method is different in both case
const addtwo = function(num) {
    return num + 2
}

