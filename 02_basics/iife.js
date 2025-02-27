// Immediately Invoked Function Expressions (IIFE)

// use of IIFE - Avoid Polluting the Global Scope
// Variables declared inside an IIFE are not accessible outside of it, preventing global namespace pollution

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
//  IF WE ARE WRITING TWO OR MORE IIFEs THEN WE NEED TO PUT ; AFTER THE EXECUTION() , IT TELLS THE IIFE WHERE TO STOP.

//()()          
//first () is for function defination and second () is for funcion execution.

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');