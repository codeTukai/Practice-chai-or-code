// interview purpose 

// How the data can be put in memory and access 1. preemptive 2.non-preemptive

// preemptive (call by value)

// 7 types of preemptive data types : String, Number, Boolean, Null(empty), Undefined(value not declared), Symbol(its made unique), BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null//completely empty
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // Result is false ...When using Symbol it convert its becomes a unique values and you use another symbol and values is same in this case its be not same ...

const bigNumber = 33333333344444444444n
console.log(typeof bigNumber);




// References type(Non Preemptive)

// Array, Object ***, Functions 

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
     name : "tukai",
     age : 22,
     email : "codetukai33@gmail.com",
     function: function Tukai(params) {
        console.log("tukai");
        
     }
}


const myFunction = function(){
    console.log("Hello World");
}
// console.log(typeof id);


// console.log(typeof myObj);
//type of function is object function
// console.log(heros , myObj);


/////////////////*******************//////////////////////// */

// Stack (primitive), Heap (NON-Primitive) 

let myYoutubeName = "tukai@gm" //myYoutubeName is a variable name
let anotherName = myYoutubeName
anotherName   = "google@abc"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email : "user@gmail.com", //object create
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "tukaighosh@google.com"
console.log(userOne.email);
// console.log(userTwo.email);
// console.log(userOne.upi);


// console.log(userTwo.email);


 

// | Feature          | **Primitive Data Types**                                               | **Non-Primitive Data Types**                     |
// | ---------------- | ---------------------------------------------------------------------- | ------------------------------------------------ |
// | **Definition**   | Basic, built-in data types                                             | Complex or user-defined data types               |
// | **Stored Value** | Stores the actual value                                                | Stores a reference to the value (memory address) |
// | **Examples**     | `Number`, `String`, `Boolean`, `null`, `undefined`, `Symbol`, `BigInt` | `Object`, `Array`, `Function`, `Date`, `RegExp`  |
// | **Mutable?**     | **Immutable** (value can’t be changed directly)                        | **Mutable** (can change object content)          |
// | **Memory**       | Stored in **stack**                                                    | Stored in **heap**, reference in stack           |
