class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    // The practice of _email and _password is used to avoid race condition between constructor and getter and setter methods.

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const sadiq = new User("h@sadiq.ai", "abc")
console.log(sadiq.email);