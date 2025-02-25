
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

// console.log(loginUserMessage("sadiq"))
// console.log(loginUserMessage("sadiq"))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//TO PASSS UNKNOWN AMOUT OF ARGUMENTS
function calculateCartPrice( ...num1){
    return num1
}

//IMP FOR INTERVIEW 
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
//PASSING OBJECT DIRECTLY
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
//PASSING ARRAY DIRECTLY
console.log(returnSecondValue([200, 400, 500, 1000]));