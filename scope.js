////////////////  global scope
let a= 300
if (true) {
    let a =10
    const b=30               /// block scope
    
    // console.log("inner :", a);

        
}

// console.log(a);
// console.log(b);
// console.log(c);
 

//************ */
function one() {
    const username = "Hello"


    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);

    two()
    
}

// one()

if (true) {
    const username  ="name"
    if (username === "name") {
        const website  = "youtube"

        
        
        // console.log(username + website);
    }
    // console.log(website);
    
    
}

// console.log(username);


// +++++++++++++++++++ interesting ++++++++++++++++++++


addOne(45)

function addOne(num) {
    return num +1 
    
}

addTwo(10)

const addTwo = function(num){
      return num + 2
}

