const symbol  = Symbol("key1")

const jsUser = {
    name : "tukai",
    role : "Job",
    age: 23,
    [symbol] : "myKey1",
    email: "tukaighosh@google.com",
    isLoggedIn : true,
    lastLoggedInDays: ["Monday", "saturday"]
}

const anotherUser = jsUser

// console.log(jsUser.role);
// console.log(anotherUser.role);
// console.log(anotherUser["age"]);
// console.log(jsUser.symbol);
// console.log(typeof jsUser[symbol]);


jsUser.email = "tukaigh@map.com"
// Object.freeze(jsUser)

// jsUser.email = "tukai@microsoft.com"
// console.log(jsUser);

// jsUser.greeting = function(){
//     console.log("Hii Tukai");
    
// }
// jsUser.greetingTwo = function(){
//     console.log(`hello js user, ${this.name}`);
    
// }

// console.log(jsUser.greeting());

// console.log(jsUser.greetingTwo());



//object part 2

// const tender =  new Object() //singleton obj

const tender = {}   //non singleton obj

tender.id = "123abc"
tender.email = "abc@gmail.com"
tender.password = "1234xyz"

// console.log(tender);

const regularUser = {
    email : "user@123",
    fullName : {
        userFullName : {
            name : "Tukai Ghosh"
        }

    }
}

// console.log(regularUser.fullName.userFullName.name);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj5 = {5: "e", 6: "f"}

// const obj3 ={obj1, obj2}

const obj3 =Object.assign(obj1, obj2)
const obj4 =Object.assign({}, obj1, obj2, obj5) // its better syntax because of its need to be a target where all the source been copy here and store so its a better syntax

// console.log(obj3 !== obj4);

// console.log(obj3);
// console.log(obj4);


// const obj7 = {...obj1, ...obj2,...obj5}
// console.log(obj7);


const user = [
  { 
     name: "tukai",
    id : "1",
    email : "tukaighosh45@gmaiL.com",
},
  { 
     name: "tukai",
    id : "2",
    email : "tukaighosh46@gmaiL.com",
},
  { 
     name: "tukai",
    id : "3",
    email : "tukaighosh47@gmaiL.com",
},
  { 
     name: "tukai",
    id : "4",
    email : "tukaighosh48@gmaiL.com",
},
  { 
     name: "tukai",
    id : "5",
    email : "tukaighosh49@gmaiL.com",
},
]

// console.log(user[1].email);

// console.log(Object.keys(tender));
// console.log(Object.values(tender));
// console.log(Object.entries(tender));


// destructuring of javascript

const course = {
    courseName : "js with Hindi",
    coursePrice : "99999",
    courseInstructor : "Tukai"
}

const {courseInstructor} = course
// console.log(courseInstructor);


//object destructure 
// const navbar = ({company})=>{

// }

// navbar(company = "Tukai")


function scope (){
    // let a = 10
    const b = 20
}
var c = 30

// console.log(a);
// console.log(b);
// console.log(c);


// if (true) {
//     var ab = 400
// }
// console.log(ab);

//nested scope

function one(){
    const username = "user"
    function two(){
        const youtube  = "chai aur code"
        console.log("Inner",username);
        
    }

    // console.log("outer",youtube);

    // two()
}

one()

if (true) {

    const username = "tukai"
    if (true) {
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
    
}

// console.log(username);

//control loop 


// const isLoggedIn = true

// if (!isLoggedIn) {
//     console.log("Executed");
    
// }

// console.log("not Executed");

const temp = 45

if (temp >= 30) {
    console.log("Hot");
    
}else{

    console.log("cold");
}

const score = 200

if (score> 100) {
    const power = 'fly'
    console.log(`User power: ${power}`);

    
    
}

// console.log(power);


//nested if

// const balance = 1000

// if (balance > 1000) {
//     console.log("yes");
    
// } else if(balance< 1000){
//     console.log("true is it");
    
    
// }else if(balance==1000){
//     console.log("correct ");
    
    
// }else{
//     console.log("not at all");
    
// }

// const userLoggedIn = true
// const isLoggedIn = true
// const loggedInFromEmail = true
// const loggedInFromGoogle = true

// if (userLoggedIn && isLoggedIn) {
//     console.log("welcome to our beautiful site");
    
// } if(loggedInFromEmail || loggedInFromGoogle){
//     console.log("logged in");
    
// }
// else {
//     console.log("please provide correct information");
    
// }


//loop

// for (let i = 0; i < 10; i++) {
// //   console.log(i);

// if (i<=5) {
//     console.log(i);
    
// }
  
// }


// for (let i = 1; i < 10; i++) {

//     console.log("outer",i);
    
//     for (let j = 1; j < 10; j++) {
//     // console.log(`inner value: ${j} and outer value is: ${i}`);
//     console.log(i + '*' + j + ' = ' + i*j );
    
    
        
//     }
    
// }


// let myArray = ["a","b","c"]
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
    
    
// }

// for (let index = 0; index < 20; index++) {
    
//     if (index == 5) {
//         console.log("Element is detected ");
//         // break
//         continue
        
//     }
//     console.log(`the element is: ${index}`);
    
    
// }

// let index = 0
// while (index <= 10) {
//     console.log(`value of index is ${index}`);
//     index = index + 3
    
// }

// let myArray = ["flash","batman","superman"]

// let arr = 0

// while (arr < myArray.length) {
//     console.log(`value is : ${myArray[arr]}`);
//     arr = arr+1
// }


// let score1 = 1

// do {
//     console.log(`Score is ${score1}`);
//     score1++
    
// } while (score1 <= 10);


//for of

const greeting = "Hello World"

for (const num of greeting) {
    // console.log(num);
    
}
// small notes -------- we can't iterate a plain object using for...of --[its iterate only string, array]
// const obj = {
//     user: 'Tukai',
//     id: 12345
// }

// for (const num of obj) {
//     console.log(`user is: ${num}`);
    
// }


// Maps


// const myMap ={
//     IN: "india",
//     USA: "united states of America",
//     RS: "russia"
// }

// console.log(myMap);

const map = new Map()

const userRoles = new Map();

userRoles.set(101, "Admin");
userRoles.set(102, "Editor");
userRoles.set(103, "User");

// console.log(userRoles.get(101)); // Admin
// console.log(userRoles.get(103)); 

const chars = "TukaiGhosh";
const count = new Map();

for (const ch of chars) {
    // console.log(ch);
    
    count.set(ch, (count.get(ch) || 0) + 1);
}

// console.log(count);


//for in

const myObj = {
    js: "javascript",
    py: "python",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
//   console.log(`${key} shortcut is for ${myObj[key]}`);  
}

// console.log(myObj.rb);


const myArray = ["js","ruby","py","ruby","java"]

for (const key in myArray) {
//    console.log(myArray[key]);
   
    
    
}


//for each


const coding = ["js","ruby","py","ruby","java"]

coding.forEach((item, index, arr)=>{
    console.log(item, index, arr
        
    );
    
});


// function printMe(item){
// console.log(item);

// }

// coding.forEach(printMe)

