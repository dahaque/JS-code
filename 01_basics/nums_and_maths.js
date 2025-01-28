const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// returns the string form of the number so we can apply string methods on it


// console.log(balance.toFixed(1));
/*
returns precised significant values after decimal places 
- Use Cases 
a. After calculation of GST
b. In Ecommerce website*/

const otherNumber = 123.8966 //IMPORTANT
 console.log(otherNumber.toPrecision(4));
/*returns precised significant from starting (123.9 in this case) 
otherNumber.toPrecision(3) // Output - 23.9
otherNumber = 123.8966
otherNumber.toPrecision(3) // Output - 124    
otherNumber = 1123.8966
otherNumber.toPrecision(3) // Output - 1.12e+3 (exponential value)*/

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

/* hundreds.toLocalString() // By default it converts into US standards
    hundreds.toLocalString('en-IN') // As per Indian Standards */

// --------------- Math library in js ---------------    
/*    Methods ----
    1. Math.abs() // Converts +ve / -ve integer values to positive
    2. Math.round(4.3) // Output - 4
    3. Math.round(4.6) // Output - 5
    4. Math.ceil(4.2) // Output - 5 (gives top value)
    5. Math.floor(4.9) // Output - 4 (gives bottom value)
    6. Math.min(4,3,6,8) // Output - 3
    7. Math.max(4,3,6,8) // Output - 8
    8. Math.random() // Gives random value between 0 & 1 in decimals
    
    Math.random() tricks -----

    console.log(Math.random()*10)
    console.log(Math.random()*10 + 1) // This assures that values are atleast 1 & more than 1
    console.log((Math.random()*10) + 1 ) // To avoid any BODMAS rule miscalculation {extra bracket}
    
    ---- Trick to randomize value between range ----
    const min = 10
    const max = 20
    const randomValue = Math.floor((Math.random() * (max - min + 1)) + min) 
    */   
    //Math.floor here fives a single digit value
    //(max - min + 1) here max-min gives the range of value and +1 is to avoid the 0 case