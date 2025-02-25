//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

// GLOBAL SCOPE IN BROWSER ENVIRONMENT IS DIFFERENT AND GLOBAL SCOPE IN NODE ENVIRONMENT IS DIFFERENT(IMPORTANT)

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++
// known as hoisting

console.log(addone(5)) //no error because its a simple function
function addone(num){
    return num + 1
}

addTwo(5) //gives error because addtwo variable is not declared yet
//addTwo is a variable that holds a function
const addTwo = function(num){
    return num + 2
}
