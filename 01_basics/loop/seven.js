const myNumber = [1, 2, 3, 4, 5, 6, 6,12]

// const newNums = myNumber.map((num)=>{return num + 10})

const newNums = myNumber
.map((num)=> num *10)
.map((num)=> num +10 )
.map((num)=> num / 10 )
.filter((num) => num > 5)
console.log(newNums);



