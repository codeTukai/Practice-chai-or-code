function multiplyByFive(num) {
  return num * 5;
}

multiplyByFive.power = 2;

console.log(multiplyByFive(5)); //function is a function and it also be a object and its behabiour like a object if you want 
console.log(multiplyByFive.power); // object's of prototype always a null

console.log(multiplyByFive.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
    this.score++;//current context
};


createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

const chai =new createUser("chai", 25);
const tea =new createUser("tea", 250);



chai.printMe();
tea.printMe();

// notes
/*  

Here's what happens behind the scence when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new javascript object.

A prototype is Linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructors prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor. Javascript assumes this.

The new object is returned: After the constructor function has been called, if it doesnot return a non-primtive value (object,array, function,etc) the newly created object is returned.

*/


