// Primitive {uses call by value i.e copy}

/* 7 types : String , Number , Boolean , Null , Undefined 
            symbol(We use this to make a value)
            BigInt(to store big integer values)
*/

const id = Symbol('123')
const anotherId = Symbol('123')
//return type of Symbol is Symbol and returns a unique symbol value.
//although both may look the same they are different
console.log(id === anotherId);

// const bigNumber = 3456543576654356754n
// bigNumber is of BigInt type and is defined by adding 'n' to its value.

// Reference (Non-primite) {uses call by reference}

// Array , Objects , Functions

//to declare arrays.
const heros = ["shaktiman", "IronMan", "Bruce Wayne"];

//to declare objects
let myObj = {
    name: "sadiq",
    age: 22,
}

// we can store a function inside a variable and the typeof myFunction will also be function.
const myFunction = function(){
    console.log("Hello world");
}

console.log
console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/*JavaScript is a dynamically typed language. 
This means that variable types are determined at runtime, and you do not need to explicitly declare
the type of a variable before using it. You can assign different types of values to a variable during its lifetime.*/

