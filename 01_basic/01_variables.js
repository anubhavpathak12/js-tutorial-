const accountId = 144553
let accountEmail = "anubhav@google.com"
var accountPassward = "12345"
accountCity = "Delhi"   // this is not good practice

let accountState;
//if we declare the variable without giving value, then js takes its value to be 'undefined' 


// accountId = 2 // not allowed

accountEmail = "pathak@anubhav.com"
accountPassward = "213567"
accountCity = "Bihar"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and fuctional scope
*/


console.table([accountEmail, accountId, accountPassward, accountCity, accountState])