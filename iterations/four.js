//For each

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function(val) {
//     console.log(val)
// })

// coding.forEach( (val) => {
//     console.log(val)
// } )

//IMPORTANT
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe) //we only pass reference of the fuction in this case rather than executing it

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )