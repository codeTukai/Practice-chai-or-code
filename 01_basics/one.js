//if
const isUserLoggedIn = true;
const temp = 41;

// if (temp < 50) {
//   console.log("Ok its some hot");
// } else {
//   console.log("no its too warm");
// }

// console.log("Execute");

// comparison operator <,>, <= ,>=, ==(check the comparison of two elements), !=(its means not equal to) , ===(check the type of(data type) means string or boolean or number)

const score = 200

if (score>100) {
    let power = "fly"
    // console.log(`user power: ${power}`);
    
}
// console.log(`user power: ${power}`);

const balance = 1000

// if (balance > 500) console.log("test"),console.log("test"); not use this syntax

//nested if

// if (balance <  500) {
//     console.log("less than");
    
// }else if(balance <  750){
//     console.log("yes its greater than 750");

// }else if(balance <  1000){
//     console.log("OffCourse");
    
// }else{

//     console.log("All case are false");
// }

const userLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true

 if (userLoggedIn && debitCard ) {
    console.log("Allow to purchase the course");
    
 }

 if ( loggedInFromEmail || loggedInFromGoogle) {
    console.log("Yes Logged In");
    
 }
