const name = "anubhav"
const repoCount = 4

// console.log(name + repoCount + " value") //-> (anubhav4 value) it print 
//but this way of writing is not so good

//we use backticks(` `) or template literals
//${} -> place holder
console.log(`hello my name is ${name} and my repo count is ${repoCount}`); //this way of writting is called string interpulation

//method-2 declare string

const gameName = new String('anubhav-AP')  //here new is a keyword which return object

console.log(gameName[0]); //a

console.log(gameName.length) //9

console.log(gameName.toUpperCase()); //ANUBHAVAP

console.log(gameName.charAt(2)); //u (here we find that 2index pe konsa element hai )

console.log(gameName.indexOf('t'))  // here character 't' is not present in above string so it gives -1

console.log(gameName.indexOf('b')) //3

const newString = gameName.substring(0, 4)
console.log(newString);  //anub

const anotherString = gameName.slice(-8, 4)
console.log(anotherString); //anub


const newStringOne = "    anubhav    " //to remove this extra space between these double quote
console.log(newStringOne);
console.log(newStringOne.trim());  // so to avoid this whitespaces or termination we use trim

const url = "https://anubhav.com/anubhav%20pathak"
console.log(url.replace('%20', '-'))

console.log(url.includes('anubhav')) // give true-false that this string exist in this url or not

console.log(gameName.split('-')); //here it split the gameName value on the basis of '-'
