// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);  // false 
// console.log(null == 0); // false
// console.log(null >= 0); // true

/* Reason => An equality check(==) and comparisons(>,<,>=,<=) work differently 
             Comparisions convert null to a number treating it as 0 , thats why 3rd statement is true and rest 2 are false.*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
             
// IMPORTANT => === (checks the object and datatype as well)
             
console.log("2" === 2);             