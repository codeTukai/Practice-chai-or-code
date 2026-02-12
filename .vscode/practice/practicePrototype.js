function multiply(num){
    return num *5
}

const result = multiply(5)
console.log(result);

multiply.power = 2

// const mul ={
//     power: 2
// }
// console.log(mul.power);


console.log(multiply.power);

function createUser(username, score){
    this.username =username
    this.score = score
}

createUser.prototype.hii = function(){
    this.score++
}

createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);
    
}

const chai =new createUser("chai", 25)
const tea =new createUser("tea", 250)

chai.printMe()
tea.printMe()
chai.hii()
console.log(chai.score);





// new creates a new object, binds this, links the prototype, and returns the object.


