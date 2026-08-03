// for of 

// ["", "", ""]
//[{}, {}, {}]

const arr= [1, 2, 3, 4, 5]

for (const element of arr) {  // object means which element i used the loop
    console.log(element);
    
}



for (const num of arr) {
    // console.log(num);
    
    
}



const greetings = "Hello world!"
for (const arr of greetings) {
    // console.log(`Each Char is ${arr}`);
    
}

// maps ------there has no duplicate values 

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "UNITED STATE OF AMERICA")
map.set('FR', "FRANCE")
map.set('IN', "INDIA")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key,':-', value);
        
}

const myObject ={
    game1 : "NFS",
    game2 : "spiderman"
}

// for (const [key, value] of myObject) {
//     console.log(key,':-', value);
    
    
// }


//notes :- for of is used only map becoz it is not iterable with object i want to used loop on object then used for in 
        //    Map is not iterable its always return key value pairs 




        function generateToken (){
    let token = '';

    const options = ['A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q','R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','0', '1','2','3','4','5','6','7','8','9']

    for (let i = 0; i < 36; i++) {
        token += options[Math.floor(Math.random() * options.length)]

       
        
    }
     console.log(token);

    return token
}

generateToken()