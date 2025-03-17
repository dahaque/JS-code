const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map() - It returns a new array with the same length as the original array, where each element is modified according to the function provided
// const newNums = myNumers.map( (num) => { return num + 10})
// study diff between map and filter method

// METHOD CHAINING(IMPORTANT)
// value passed in the second method will be the result returned value of the first method 
const newNums = myNumers
                .map((num) => num * 10 ) //[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                .map( (num) => num + 1)  //[11, 21, 31, 41, 51, 61, 71, 81, 91, 101]
                .filter( (num) => num >= 40) //[41, 51, 61, 71, 81, 91, 101]

console.log(newNums); // ans - [41, 51, 61, 71, 81, 91, 101]