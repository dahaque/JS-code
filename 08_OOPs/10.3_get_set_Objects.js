
// Defining getters and setters using objects.

const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);

// Here we directly get email and dont call the setter method email(), JS automatically returns the email value through its getter
// In, console.log(tea.email); there's no variable as an 'email' but it is '_email', here the '_' is basically a sign for JS that the email property is private and 
// js internally understand '_email' as 'email'.