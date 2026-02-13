const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(descripter);


// console.log(Math.PI);

// Math.PI = 1234

// console.log(Math.PI);


const chai ={
    name: "masala chai",
    price: 250,
    isAvaible: true,
    orderChai :function (){
        console.log("chai is not ready yet");
        
    }

}

console.log(chai.orderChai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));  //name is property in chai

Object.defineProperty(chai, "name",{
    // writable: false,
    enumerable: true
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
    
}





