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

for (let i = 0; i < 10; i++) {
//   console.log(i);

if (i<=5) {
    console.log(i);
    
}
  
}