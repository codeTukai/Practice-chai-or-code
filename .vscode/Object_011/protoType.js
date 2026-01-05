// const myName = "Tukai     "
// const  myChannel = "chai  "

// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    spiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.tukai = function(){
    // console.log(`tukai is present in all objects`);
    
}

Array.prototype.heyTukai = function(){
    // console.log(`say hello`);
    
}

// heroPower.tukai()
// myHeros.tukai()
// heroPower.heyTukai()
// myHeros.heyTukai()



//inheritence  ------prototype inheritence holo kivabe akta theke r akta property gulo access kore 

const user = {
    username: "chai",
    email: "tukaigh@gmail.com"
}


const teacher = {
    makeVideos : true
}

const TeachingSupport = {
    isAvaible : false
}

const TASupport = {
    makeAssignment : 'js',
    fullTime: true,
    __proto__: TeachingSupport
}

teacher.__proto__ = user  


//modern syntax

Object.setPrototypeOf(TeachingSupport, teacher)

let anotherUsername = "chaiOrCode      "
String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
    
}

anotherUsername.truelength()
"hiiiiiii".truelength()
"dnddkjkj    ".truelength()