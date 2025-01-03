const accountID = 92
let accountEmail = "sadiq@google.com"
var accountPassword = "1234"
accountCity = "Azamgarh" //not a good way to declare variable but it is possible.
let accountState;

console.log(accountID);

// accountID = 91 // Const values cannot be changed 

console.table([accountID,accountEmail,accountPassword,accountCity,accountState]) //to display data in tabular format

/*
dont use var to declare a variable because 
it has the issue of block scope
*/