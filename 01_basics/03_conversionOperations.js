let score = "33abc"

console.log(typeof score)

let newScore = Number(score)

console.log(typeof newScore)
console.log(newScore)

// "33" => 33
// "33abc" => NaN(Not a Number) but the type is Number.
//  true => 1; false => 0

let isLoggedIn = "sadiq"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false (empty string)
// "sadiq" => true (not an empty string)

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // 2^3 (2 raised to the power 3)
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " sadiq"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");

// Confusing stuff:
// console.log("1" + 2 + 2); (If the first operand is String then whole output will be treated as a String)
// console.log(1 + 2 + "2"); (If the first operand is Number then operations will be performed and the String will be concatenated eventually)

// console.log(+true); => 1
// console.log(+"");  => 0

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion