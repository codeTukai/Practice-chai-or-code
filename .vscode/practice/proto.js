// let myName = "   tukai   "
// console.log(myName.trueLength);

const myArr = ["superman","spiderman","ironman"]

const heroPower ={
    marvel : "strong",
    breakeMan: "weak",
    getSuperPower : function(){
        console.log(`streang is ${this.marvel}`);
        
    }
}
console.log(heroPower.getSuperPower())

Object.prototype.sayHii = function () {
    console.log("hello tukai, i am here");
    
}

Array.prototype.sayhello = function(){
    console.log("I am not there");
    
}

// heroPower.sayhello()
myArr.sayhello()

// heroPower.sayHii()
// myArr.sayHii()

