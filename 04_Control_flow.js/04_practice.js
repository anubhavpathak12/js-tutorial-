// for in loop 

const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'Swift by apple',
    py: 'python'
}


for (const key in myObj) {
//    console.log(key, ':-', myObj[key]);
//    console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming  = ["js", "py", "rb", "java", "cpp"]

for (const key in programming) {
    //console.log(key); // -> gives index
    console.log(programming[key]);
}