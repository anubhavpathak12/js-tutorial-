// immediately invoked function expression (IIFE)

// use of IIFE :- 
// 1) helping out to immediately invoked function.
// 2) also helps to remove the pollution of global scope in local scope

(function code1() {
    console.log('DB Connected');
})();

// ( contain function definition )( function execution call ) ";"-> ";"this help to end the execution

( (name) => {
    console.log(`DB Connected two ${name}`);
} )("Pathak");