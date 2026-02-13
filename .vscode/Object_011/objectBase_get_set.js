const User = {
    _email : "tea@gmail.com",
    _password : '1234',


    get email(){
        return this._email.toUpperCase()

    },

    set email(value){
        this._email = value
    }
    
}

const chai = Object.create(User) //factory function
console.log(chai.email); // its overwrite the method when its call the property
