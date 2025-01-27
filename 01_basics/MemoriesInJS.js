// Stack(primitive) , Heap(Non-primitive)

let myName = "Sadiq";
let myOtherName = myName;

myOtherName = "ahmad";

console.log(myName);
console.log(myOtherName);

// When something is stored in stack only its copy is passed and changes are made in it's copy(call by value).

//User1 is an object here and objects are stored in heap
let User1 = {
    Email : "sadiq@google.com",
    upi : "sadiq@oksbi"
};

let User2 = User1

User2.Email = "ahmad@google.com"

console.log(User1)

// When something is stored in Heap it's actual reference is passed and changes are made in itself(call by reference).

