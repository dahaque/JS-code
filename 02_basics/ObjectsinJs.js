// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Sadiq",
    "full name": "Sadiq Haque",
    [mySym]: "mykey1",   //syntax to store symbols in object
    age: 20,
    location: "Azamgarh",
    email: "sadiq@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//Two ways to access elements of an object
// console.log(JsUser.email) //1st way
// console.log(JsUser["email"]) //2nd way (recommended)

// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof [mySym])

JsUser.email = "sadiq@chatgpt.com"
//Object.freeze(JsUser) //freezes the object to avoid any furthur changes
JsUser.email = "sadiq@microsoft.com"
// console.log(JsUser);

//To add function in object
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
