function SetUsername(username){
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) // .call() how to call a function in nested calls so that the values the nested fuction(SetUsername())
                                     //  returns is held on even when it is removed from the call stack.
                                     //  'this' in the parameter is the context of the createUser method which stores the returned values.  
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);