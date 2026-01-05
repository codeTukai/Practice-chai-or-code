//truthy values
const userEmail = function () {
    
}

if (userEmail ) {
//     console.log("Hii, Tukai ");
// }else{
//     console.log("Don't have user email");
    
}

// Falsy values 

// false, 0, -0, BigInt 0n, "", undefined, NaN

//Truthy values 
// "0"(cabiet), 'false', " ", [], {}, function(){}


// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }else{
//     console.log("No there is a string ");
    
// }

const obj = {}

if(Object.keys(obj).length === 0) {
    // console.log("Object is empty");
    
}else{
    console.log("present");
    
}

// if false == 0 --(return true)
// false == '' --true
// 0 == '' --true

// Nullish Coalescing Operator (??): null undefined

let val1;
// let var1;
// val1  = 5 ?? 10
// val1 =  null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? undefined
// val1 = null ?? 10 ?? 20

// console.log(val1);

// Ternary operator


// condition ? true : false 
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

