// for of 

// ["", "", ""]
//[{}, {}, {}]

const arr= [1, 2, 3, 4, 5]

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

for (const [key, value] of myObject) {
    console.log(key,':-', value);
    
    
}