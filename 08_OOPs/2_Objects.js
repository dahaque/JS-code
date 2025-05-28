
// Javascript has a prototype behaviour.
// If an object doesn’t have a property or method, JavaScript automatically looks up the chain of objects (called the prototype chain) to find it until it hits null.
// SomeObject → prototype → prototype → ... → null

// function is also an object so we can call methods/prototype on it just like the objects.
function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

// We can inject user created methods in prototype of a function 
function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

// The "new" keyword basically tells the 'chai' object to create a new object and link the properties of createUser function, 
// and the injected properties of the prototype together, if we dont use the "new" keyword it will throw undefined properties fot 'printMe'. 
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. 
If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), 
the newly created object is returned.

*/