//https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Arrays
//Arrays in Js can store multiple datatypes at once and are resizeable.

// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4,"shaktiman")
// console.log(myArr[1]);

// Array methods
// myArr.push(6) adds element
// myArr.push(7)
// myArr.pop() removes the last added element

// myArr.unshift(9) adds 9 to the start of array
// myArr.shift() removes element from the start

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() //binds array elements and converts it into a string 

// console.log(myArr);
// console.log( newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //last range is not included

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //last range is included and it changes the original array IMPORTANT
console.log("C ", myArr);
console.log(myn2);
