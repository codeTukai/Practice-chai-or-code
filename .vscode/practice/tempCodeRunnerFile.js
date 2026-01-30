const user = {
username: "Tukai",
price: "999",

welcomeMessage : function(){
    console.log(`${this.username},welcome to my website`);
    // console.log(this);
    
}

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hi"
//     console.log(this.username);
    
// }

// chai()


// const chai = function(){
// let username = "hi"
//    console.log(this.username);
// }

// chai()

// const chai = ()=>{
//     let username = "hi"
//     console.log(this);
// }

// chai()

const addNumber = (num1, num2)=>{
     num1 + num2
}

console.log(addNumber(4, 5));
