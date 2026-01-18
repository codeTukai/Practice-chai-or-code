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

jsUser.email = "tukai@microsoft.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hii Tukai");
    
}
jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
    
}

console.log(jsUser.greeting());

console.log(jsUser.greetingTwo());







