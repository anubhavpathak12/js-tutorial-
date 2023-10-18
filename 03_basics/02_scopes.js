//global scope
var m = 300
let a  = 300

if(true) {
    //local scope
    let a = 10;
    console.log("INNER a: ", a);
    const b = 20;
    var  m = 30;
}

console.log("OUTER a: ", a);
// console.log(b);
console.log("m: ",m); // var break local scope 


// NOTE: REMEMBER BROWSER MEIN OR NODE MEIN GOBAL SCOPE ALAG ALAG HOTE HAIN 