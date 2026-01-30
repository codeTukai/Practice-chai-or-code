function sayMyName(){ // function is a keyword and sayMyName is variable name and {} 
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");    
}

// sayMyName() //reference of a function when we execute the function the () brackets is used for execution of a function and it is a reference

// function addTwoNumbers(num1,num2){ //(parameter)
//    console.log( num1 + num2);
   
    
// }


function addTwoNumbers(num1,num2){ //(parameter)
//   let result = num1 + num2

//   return result;


return num1 + num2
   
    
}

const result = addTwoNumbers(3,5)//arguments

// console.log("result", result);

// const result = add(3,10)

// console.log("Result: ",result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please please please enter a username");
        return
    }
    
    return `${username} just logged in `
}
// console.log(loginUserMessage("Tukai"));
// console.log(loginUserMessage("David"));



// function loginUserMessage(username) {
//     return `${username} just log in` 
// }

// const userName = loginUserMessage("tukai")

// console.log(userName);


// *****************************************************************//********************************* */
function calculateCardPrice(...num1){ //(...) rest operator / spared operator
    return num1 
}

// console.log(calculateCardPrice(200,300,400,500,400));


const user = {
    username : "David",
    price : 9999,


}

function handleObject( anyObject){
    console.log(`userName is ${anyObject.username} and prices is ${anyObject.price}`);
    
}
// handleObject(user)

handleObject({
    username: "Tim",
    price: 39999
})


const myNewArray = [200, 400, 500, 600]

function returnSecondValue(getAnyArray){
    return getAnyArray[1]  
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 4, 600, 800]));

