function multiplyByFive(num){

    return num * 5
}

multiplyByFive.power = 2

console.log(multiplyByFive(5));
console.log(multiplyByFive.power);
console.log(multiplyByFive.prototype); // set bydefault context {} - a empty obj


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increament = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price  is ${this.score}`);
    
}

const chai = new createUser("chai", 250)
const coffee = new createUser("coffee", 350)

chai.printMe()
coffee.printMe()

