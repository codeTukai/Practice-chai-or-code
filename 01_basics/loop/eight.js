const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, currValue){
//     console.log(`acc value is: ${acc} and current value is ${currValue}`);
    
//     return acc + currValue
// },0)

const myTotal =myNums.reduce( (acc, currValue) => acc + currValue, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js",
        price:  2999,
        Qnt: 2
    },
    {
        itemName: "py",
        price:  4999,
        Qnt: 3
    },{
        itemName: "MD",
        price:  5999,
        Qnt: 4
    },{
        itemName: "Graphics",
        price:  3999,
        Qnt: 5
    },
]

const addAllPrice = shoppingCart.reduce((acc, item)=> acc + item.Qnt, 0);

// console.log(priceToPay);
console.log(addAllPrice);


// *********************************************************************//******************************************************//************ */ */

const arr = [33, 45,35,34,55,64]

console.log(arr.sort());

