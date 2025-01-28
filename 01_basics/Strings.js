const name = "sadiq";
const RepoCount = "3";

//console.log("hello my name is "+name+" and I have "+RepoCount+" repositories")

//A better way and a mordern way to concatinate is 
//also known as string interpolation
//we can use methods with placeholders as well
//console.log(`Hello my name is ${name} and I have ${RepoCount} repositories`);
//console.log(typeof name);

//Another way to declare string is
// STRINGS ARE NOT CHARACTER ARRAYS THEY ARE KEY-VALUE PAIR
const newName = new String("ahmad");
// console.log(newName);
//console.log(typeof newName);

//console.log(newName.toUpperCase())

//takes only positive value
const newString = newName.substring(0, 2)
//console.log(newString);

//slice can take - values meaning starting from back
const anotherString = newName.slice(-5, 4)
//console.log(anotherString);

const newStringOne = "   sadiq    "
//console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sadiq.com/sadiq%20ahmad"

console.log(url.replace('%20', '-'))

//if the string includes the passed parameter or not
console.log(url.includes('sundar'))

//break strings on the seperator provided and returns an array 
const newVar = new String("Sadiq-Nazirul-Haque")
console.log(newVar.split('-'));