const myNumber = [1, 2, 3, 4, 5, 6, 6,12]

// const newNums = myNumber.map((num)=>{return num + 10})


const addNum = myNumber.map((num)=>{
    return num + 10
})

console.log(addNum);

//chaining
const newNumbers = myNumber
.map((num)=>num + 10)
.map((num)=>num + 1)
// .map()
.filter((num) => num > 15)

console.log(newNumbers);




