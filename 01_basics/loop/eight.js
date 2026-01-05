const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currValue){
//     console.log(`acc: ${acc} and currval: ${currValue}`);
    
//     return acc + currValue
// },0)

const myTotal =myNums.reduce( (acc, currValue) => acc + currValue, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js",
        price:  2999
    },
    {
        itemName: "py",
        price:  4999
    },{
        itemName: "MD",
        price:  5999
    },{
        itemName: "Graphics",
        price:  3999
    },
]

const addAllPrice = shoppingCart.reduce((acc, item)=> acc + item.price, 0);

// console.log(priceToPay);
console.log(addAllPrice);


// *********************************************************************//******************************************************//************ */ */

const arr = [33, 45,35,34,55,64]

console.log(arr.sort());

