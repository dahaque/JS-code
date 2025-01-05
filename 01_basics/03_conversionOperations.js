let score = "33abc"

console.log(typeof score)

let newScore = Number(score)

console.log(typeof newScore)
console.log(newScore)

// "33" => 33
// "33abc" => NaN(Not a Number) but the type is Number.
//  true => 1; false => 0