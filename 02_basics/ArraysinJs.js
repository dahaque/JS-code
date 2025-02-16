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

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //last range is not included

// console.log(myn1);
// console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //last range is included and it changes the original array IMPORTANT
// console.log("C ", myArr);
// console.log(myn2);

//-------------------- Part 2 ------------------------

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

 const allHeros = marvel_heros.concat(dc_heros) // concat adds two arrays and returns a new array.
//  console.log(allHeros);

//PUSH() METHODS PUSHES ELEMENTS IN THE EXISTING ARRAY BUT THE CONCAT() METHOD RETURNS A NEW ARRAY.

//We can also add multiple arrays using spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //parameter is depth and can be given infinity
// console.log(real_another_array);

console.log(Array.isArray("Hitesh")) //to check if given value is array or not
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting  //returns an empty array if it fails to convert it into an array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));