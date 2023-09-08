const accountId = 144553
let accountEmail = "anubhav@google.com"
var accountPassward = "12345"
accountCity = "Delhi"   // this is not good practice but remember this is also one way to declare variable in js

let accountState;
//if we declare the variable without giving value, then js takes its value to be 'undefined' 


// accountId = 2 // not allowed becz this is declare with const keyword already before that's why we can't change it after declaration 

accountEmail = "pathakanubhav@google.com"
accountPassward = "213567"
accountCity = "Silicon valley"

console.log(accountId);

/*
prefer not to use 'var'
because of issue in block scope and fuctional scope
*/


console.table([accountEmail, accountId, accountPassward, accountCity, accountState])

// with this we print whole data in tabular form