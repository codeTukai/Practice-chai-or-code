//ES6

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password



    }

    encryptPassword(){
        return `${this.password}abc`
        
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gmail.com", "123")
console.log(chai.encryptPassword());
console.log(chai.changeUserName());

//using function

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function() {//inject prototype
    return `${this.password}abc`
}
User.prototype.changeUserName = function() {
     return `${this.username.toUpperCase()}`
}

const coffee = new User("coffee", "coffee@gmail.com", "123")
console.log(coffee.encryptPassword());
console.log(coffee.changeUserName());