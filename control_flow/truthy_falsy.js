const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//String ke andar anything is truthy value
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// To check if object is empty
const emptyObj = {}
// Object.keys() returns an array 
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// keep in mind
// false == 0 [true]
// 0 == ""/'' [true]
// false == ""/'' [true]

// Nullish Coalescing Operator (??): null undefined (works for only null and undefined cases)
let val1;
// val1 = 5 ?? 10  [assinged value : 5]
// val1 = null ?? 10  [assinged value : 10]
// val1 = undefined ?? 15  [assinged value : 15]
// val1 = null ?? 10 ?? 20  [assinged value : 10]
console.log(val1);

// Terniary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")