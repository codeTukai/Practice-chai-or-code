// let myName = "tukai       "
// console.log(myName.trueLength);


let myHeros = ["Marvel","Superman"]


let heroPower = {
    marvel1: "add values",
    superman1: "Fly",

    getSuperPower : function(){
        console.log(`Superman power is ${this.superman1}`);
        
    }

}


// Object.prototype.highest = function(){
//     console.log(`its access by all objects and also present`);
    
// }


// Array.prototype.hii =function(){
//     console.log(`it can possible`);
    
// }

// heroPower.highest()//object
// myHeros.highest()//array

// myHeros.hii() 
// heroPower.hii()


//inheritence

const User = {
   name : "chai",
   email: "chai@goggle.com"
}

const teacher ={
    makeVideos: true
}

const TeachingSupport ={
    isAvaible : false
}

const TASupport ={
    makeAssesment : 'JS assignment',
    fullTime : true,
    __proto__: TeachingSupport //linking and reffer with another obj
}

teacher.__proto__ = User  //teacher can access of user property using this protot method


//modern syntax

Object.setPrototypeOf(TeachingSupport,teacher)  


let anotherUsername = "chaiAurCode                "
String.prototype.truelength = function(){
    console.log(`${this}`);
    
    
    console.log(`True lenght is ${this.trim().length}`);
    
}

anotherUsername.truelength();
"hii".truelength()
"tukaiSayHello".truelength()