const user = {
    userName : "Hello",
    emailId  : "tukaighosh@gmail.com",
    isLoggedIn: true,
    loggedCount: 9,

    userDetails: function () {
        //console.log("Connected DB");
        // console.log(`Username: ${this.userName}`);
        // console.log(this);
        
        
    }
}


// console.log(user.userName);
// console.log(user.userDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function() {

        console.log(`Welcome ${this.username}`);
        
    }



    // return this
   

}
const userOne = new User("Tukai", 12, true)
const userTwo = new User("Tukai_Ghosh", 11, false)

console.log(userOne);
console.log(userTwo);

