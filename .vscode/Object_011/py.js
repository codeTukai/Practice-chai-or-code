// console.log(Math.round(Math.PI));
// console.log(Math.PI);

// Math.PI = 5

// console.log(Math.PI);

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);

const chai = {
    name: 'ginger chai',
    price: '2500',
    isAvaible: true,

    chaiReady : function(){

        console.log("Chai is Not Ready");
        
    }
    
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable : true
})
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
       
    }
    
}