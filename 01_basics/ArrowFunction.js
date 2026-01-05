// const user ={
//     username: "Hello",
//     price : "999",
//     webSite : function () {
//         console.log(`${this.username} welcome to my website`);//this refers to current context 
//         console.log(this);
        
        
//     }
// }

// user.webSite()//context means values and change the context means change the values 
// user.username = "sam"
// user.webSite()
// console.log(this);// *****//***in the browser which global object are present they all are window object**********


// function chai(){
//     let username = "Say Hii"
//     console.log(this.username);// output undefine and this only execute in object not function
    
// }

// chai()


// const sayHii = ()=>{
//      let username = "Say Hii"
//     console.log(this);// this is only used in object neither function nor arrow function
    
// }

// sayHii()

// const chai = function(){
//     let username = "Hello Tukai"
//     console.log(this.username);
   
    
    
// }

// chai()
const chai = ()=> {
    let username = "Hello Tukai"
    console.log(this);
   
    
    
}

chai()

// const addTwo =(num1,num2)=>{
//     return num1 + num2 //explicitly return

// }
// console.log(addTwo(3,4))
// const addTwo =(num1,num2)=> num1 + num2
// const addTwo =(num1,num2) => ( num1 + num2) // **** important for react in implicitly ()---if use parenthesis then not to be write return but if use {} carli-brases then write return keyword
const addTwo =(num1,num2) => ({username:"hello"})

console.log(addTwo(3,4))

function greet() {
  console.log(this.name);
}
const user = { name: "Tukai" };


greet.call(user);  // Output: "Tukai"
greet.apply(user); // Output: "Tukai"

const boundFn = greet.bind(user);
boundFn();         // Output: "Tukai"









