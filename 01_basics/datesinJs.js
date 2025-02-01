let myDate = new Date();
// console.log(myDate.toDateString());

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// Months in javascript start from 0(if we pass in array format)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

//to get time stamp
let myTimestamp = Date.now();
let mySecondTimeStamp = myCreatedDate.getTime() //to compare dates with time we convert it into milliseconds and then compare (time is calculated from 1st jan 1970)
// console.log(myTimestamp)
// console.log(mySecondTimeStamp);

//if we want value in seconds and remove the cecimal part
let myThirdTS = Math.floor(Date.now/1000)

//to extract months or day from a date
// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1); //since months start from 0
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })

let anotherDate = new Date()
//study more about toLocaleString()
console.log(anotherDate.toLocaleString('en-IN'));
