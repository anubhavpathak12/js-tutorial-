//Dates

let myDate = new Date()
/*
console.log(myDate.toString());  //Thu Jun 01 2023 00:11:37 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Thu Jun 01 2023
console.log(myDate.toJSON()); //2023-06-01T00:11:37.973Z
console.log(myDate.toUTCString()); //Thu, 01 Jun 2023 00:11:37 GMT
console.log(myDate.toLocaleString()); //6/1/2023, 12:11:37 AM
*/

// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0, 23) // (year, monthIndex(start from 0), day)

let myCreatedDate = new Date("2023-06-01")
// console.log(myCreatedDate.toLocaleString()); 

//Time Stamps

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000)); // for converting into second from millisecond 

//extracting month, year, day from date
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // month is started from 0 index



newDate.toLocaleString('default', {
    weekday: "long"
})