
// function sayMyName(){
//     console.log("S");
//     console.log("A");
//     console.log("D");
//     console.log("I");
//     console.log("Q");
    
// }

// sayMyName //this is function reference
// sayMyName() //this is function execution

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

function PrintUsername(username){
    console.log(`${username} just logged in!`);
}

PrintUsername("Sadiq")
PrintUsername() //IF WE PASS NO USERNAME IT BY DEFAULTS TAKES "UNDEFINED" (IMPORTANT)
 
function loginUserMessage(username = "sam"){ //We can pass a default value ("sam") in case no argument is passed , if an argument is passed then sam would be overriden
    if(!username){ // (username === undefined)
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))