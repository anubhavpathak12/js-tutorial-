const heros = ["Rohit Sharma", "Virat Kholi", "Shubman Gill", "KL Rahul"];
const other_fav_heros = ["Sachin Tendulkar", "MSD"];

// heros.push(other_fav_heros);

// console.log(heros);
// console.log(heros[4][1]); // access element

// const allHeros = heros.concat(other_fav_heros);
// console.log(allHeros);


/***** spread operator ******/ 

const all_new_Heros = [...other_fav_heros, ...heros];
console.log(all_new_Heros);


const another_Array = [1, 2, 3, 4, [5, 6, 7], [8, 9, [10, 11, 12]]];

const real_another_Array = another_Array.flat(Infinity);

console.log(real_another_Array);



// when  data scraping 

console.log(Array.isArray("Anubhav")); // check 
console.log(Array.from("Anubhav")); // converting them into Array

//interesting 
console.log(Array.from({name : "Anubhav"})); // here not clear 
// ki kisko Array bnana hai keys ko ya value ko

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));











