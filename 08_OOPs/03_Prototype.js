// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let anotherUsername = "ChaiAurCode     "

// injecting method named trueLength in 'String.
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Sadiq".trueLength()
"iceTea".trueLength()


let myHeros = ["thor", "spiderman"];

let heroPower ={
    Thor :"hammer",
    Spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spider Power is ${this.Spiderman}`);   
    }
}

// adding a new property(sadiq()) in 'Object' so every object that will be created(fuction, arrays, strings etc) will automatically contain the sadiq() method.
Object.prototype.Sadiq = function(){
    console.log(`Sadiq is present in all objects!`)
}

// myHeros.Sadiq();
// heroPower.Sadiq();

// IMPPPP
// But if we add a property to only array or any one type of object(functions, strings etc) it doesn't get inherited by the others.
Array.prototype.heySadiq = function(){
    console.log(`sadiq says hello`);
}

// heroPower.Sadiq()
// myHeros.Sadiq()
// myHeros.heySadiq()
// heroPower.heySadiq()

// inheritance

// old syntax
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //  TAsupport inherited the properties of TeachingSupport
}

Teacher.__proto__ = User // Teacher inherited the property of the User 

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher) // TeachingSupport inherits the property of Teacher.