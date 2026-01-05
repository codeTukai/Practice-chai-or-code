function multiplyByFive(num) {
  return num * 5;
}

multiplyByFive.power = 2;

console.log(multiplyByFive(5)); // function like as a object and if i want to access the function property like object it also possible
console.log(multiplyByFive.power); //prototype is  object thats always null

console.log(multiplyByFive.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.printMe();
tea.printMe();

// notes
/*  

Here's what happens behind the scence when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new javascript object.

A prototype is Linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructors prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor. Javascript assumes this.



*/


