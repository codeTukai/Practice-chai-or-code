function name(){
console.log("T");
console.log("U");
console.log("K");
console.log("A");
console.log("I");
}

// name()

// function addNumber(num1, num2){
//     console.log(num1 + num2);
  
    
// }



function addNumber(num1, num2){
//   let res = num1 + num2
//   return res

return num1 + num2
  
    
}
const res = addNumber( 5, 4)

// console.log("Result : ", res);

function loginUserMessage(username = "sam"){
    if (!username) {
        console.log("pls enter a username");
        return
        log
    }
    return `${username} just log in` 
}

// console.log(loginUserMessage("Hello User"))
// console.log(loginUserMessage())






//////////////////////////////////////////////////////////

function calculateCardPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCardPrice(200,300,400,500));

// const user = {
// username: "Tukai",
// price: "999"
// }

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} price is ${anyObject.price}`);
    
}

// handleObject(user)

// handleObject({
//     username: "ram",
//     price : "9999"
// })


const myArr = [200,300,400,800]

function findSecondNumber(checkarr){
    return checkarr[2]
}

// console.log(findSecondNumber(myArr));
console.log(findSecondNumber([400,900,900]));

