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

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//To declare singleton objects via constructor
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        username:{
            firstname:"sadiq",
            lastname:"haque"
        }
    }
}

// console.log(regularUser.fullname.username.lastname);

//To add two objects in another object(IMPORTANT)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

//METHODS keys(),values() and entries() RETURNS VALUE IN ARRAY TYPE(IMPORTANT)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); (TO CHECK IF THE OBJECT ALREADY CONTAINS THIS KEY OR NOT)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const course = {
    coursename: "jsi",
    price: "999",
    courseInstructor: "sadiq"
}

// course.courseInstructor
// TO DESTRUCT AN OBJECT AND EXTRACT VALUES THAT WE MIGHT NEED 
const {courseInstructor: CI} = course //IMPORTANT

// console.log(courseInstructor);
console.log(CI);

//-------------------------
//json format of an API
//either in object format or in arrays of object
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
