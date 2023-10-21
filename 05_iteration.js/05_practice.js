// for- each


const programming = ["ruby", "js", "java", "cpp"]

// programming.forEach( function (items) {
//     console.log(items);
// } )

// programming.forEach( (items) => {
//     console.log(items);
// } )

const printItems = (items, index, arr) => console.log(items, index, arr);
// programming.forEach(printItems);


const myCoding = [
    {
        languageName: "JAVA",
        languageFileName: "java"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "javascript",
        languageFileName: "js"
    }
]

myCoding.forEach( (items) => {
    console.log(items.languageName);
} )