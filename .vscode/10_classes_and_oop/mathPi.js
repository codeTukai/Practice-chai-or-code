const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);
// output is : 
//{
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

// in case of Math.PI value is not be iterable or changable because of its own property like writable enumerable and configurable value is false so it can't be change its property 
const chai = {
    name : "masala chai",
    price: 250,
    isAvailable: true,

    orderChai : function () {
        console.log("Chai is Not Ready Yet");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


Object.defineProperty(chai, 'name',{
    enumerable:true
})


for (let [key, value] of Object.entries(chai)) {
    if (typeof value !=='function') {
        console.log(`${key} : ${value}`);
        
    }
    
}



