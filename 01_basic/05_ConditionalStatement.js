// **************** Ternery operator ******************
let age = 15;
let check = (age>=18)? 'I can Vote' : 'Can not vote'
console.log(check);


/*******************Conditional statement************** */
// if statement 

let marks = 98;
if(marks >= 90) {
    console.log('A');
}
else if(marks >= 80) {
    console.log('B');
}
else if(marks >= 70) {
    console.log('C');
}
else if(marks >= 60) {
    console.log('D');
}
else {
    console.log('E');
}

// switch case
let num = 2;
switch (num) {
    case 1 : console.log('A');
    break;
    case 2 : console.log('B');
    break;
    case 3 : console.log('C');
    break;
    case 4 : console.log('D');
    break;

}


//while case
let value = 1;  
while(value <= 5) {
    console.log(value);
    value = value + 1;
}


//do-while loop

let number = 1;
do {   
    number *= 2; 
    // console.log(number) //it print in different line

    process.stdout.write(number + ", "); // by doing this value print in single line it works only with nodejs like 2, 4, 8, 16,

}while(number<=10)


