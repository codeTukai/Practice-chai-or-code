//ES6

class User {
  //class is a keyword
  constructor(
    username,
    email,
    password //when a class innitialize a obj or get the new keyword
  ) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    //its a methods its behave likes a function but its define in a class so it is a method
    return `${this.password}abc`;
  }
  changeUserName() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@gmail.com", "123");

console.log(chai.encryptPassword());
console.log(chai.changeUserName());

//behind the scene

function User1(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User1.prototype.encryptPassword = function(){
  return `${this.password}abc`
}
User1.prototype.changepassword = function(){
   return `${this.username.toUpperCase()}`;
}



const tea = new User1("tea","tea@fb.com", "1234")

console.log(tea.encryptPassword());
console.log(tea.changepassword());


