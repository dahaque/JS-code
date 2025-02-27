
const user = {
    username : "sadiq",
    age : 21 ,
    welcomeMessage : function(){
        console.log(`hey ${this.username} , welcome to the website `)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Rohan"
// user.welcomeMessage()

//IMPORTANT *******
console.log(this) // gives empty object{} [as Global object] because we are running this in node environment
// but if we run this in browser then it will give a window object as a Global object

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai() // we cannot use 'this' in functions it gives 'undefined' 

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

//NORMAL ARROW FUNCTION
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


chai()

//explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// if we use {} in arrow f then we have to write return keyword but if we use () we dont need to write return keyword

//SAME ARROW FUNCTION BUT IN ONE LINE (implicit return)
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )
    
//implicit returning an object
const addTwo = (num1, num2) => ({username: "hitesh"}) 


console.log(addTwo(3, 4))

