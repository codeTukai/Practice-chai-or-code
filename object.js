 // singleton (using constructions// constructor)
 // object.create (in this process we can create a singleton)

 // object literals  
const mySym = Symbol("key1")  // In JavaScript, a key refers to the name of a property in an object. Objects contain properties, which are key-value pairs. The Object.keys() method is used to retrieve an array of keys from an object.


 const JsUser = {          // objects are always in present key values pair 
    name : "Tukai",
    "full name" : "Tukai Ghosh",//you can't use this key becoz its already declare as a string so string can't be access by dot(.)
    [mySym]: "myKey1",   // when you refer symbol as a symbol then use in this syntax *************************
    age : 23,
    location : "West Bengal",
    email : "tukaighosh6547@gmail.com",
    isLoggedIn: false,
    lastLogInDays:["Monday", "Saturday"] 
 }

console.log(JsUser.email); // when its access by using dot(.) then its not be a string but when you access without dot(.) and its get a string 
// console.log(JsUser.full name); // when its access by using dot(.) then its not be a string but when you access without dot(.) and its get a string 
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
console.log(typeof [mySym]);


JsUser.email = "td@gmail.com"
// Object.freeze(JsUser)//when i used freeze its meant its not mutable 
JsUser.email = "tukaighsoh3@gmail.com"
// console.log(JsUser);




JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`); // `hii` string interpolations 
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());  

JsUser.hii = function () {
 console.log("hii");
    
}

console.log(JsUser.hii());



 