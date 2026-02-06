// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item //for each loop not return any values or item
    
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 4, 6, 10]
// // const newNums = myNum.filter((num)=> {
// //     return num > 4
    
// // })

// // const newNums = []

// // myNums.forEach((num)=>{
// // if (num > 4) {
// //     newNums.push(num)
    
    
    
// // }
// // })

// // console.log(newNums);



// const books =[{
//     title: 'Book one', genre: 'fiction', publish: 1991, Edition : 2008, 
// },
// {
//     title: 'Book two', genre: 'non-fiction', publish: 1992, Edition : 2009
// },
// {
//     title: 'Book three', genre: 'history', publish: 1993, Edition : 2010
// },
// {
//     title: 'Book four', genre: 'fiction', publish: 1994, Edition : 2011
// },
// {
//     title: 'Book five', genre: 'science', publish: 1995, Edition : 2012
// },
// {
//     title: 'Book six', genre: 'fiction', publish: 1996, Edition : 2013
// },
// {
//     title: 'Book seven', genre: 'history', publish: 1997, Edition : 2014
// },
// ];

// let userBooks = books.filter((bk) => bk.genre === 'history')

// userBooks = books.filter((bk)=>{
//     return bk.publish >= 1990 && bk.genre === "history"  


// })

// console.log(userBooks);



// const values = myNums.filter((num)=>{
//     let newNum = num > 4
//     return newNum

//     // console.log(num);
   
    

// })

// console.log(values);


const newValues = []

myNums.forEach((num)=>{
    if (num > 4) {
        newValues.push(num)
    }
})

console.log(newValues);


const books =[{
    title: 'Book one', genre: 'fiction', publish: 1991, Edition : 2008, 
},
{
    title: 'Book two', genre: 'non-fiction', publish: 1992, Edition : 2009
},
{
    title: 'Book three', genre: 'history', publish: 1993, Edition : 2010
},
{
    title: 'Book four', genre: 'fiction', publish: 1994, Edition : 2011
},
{
    title: 'Book five', genre: 'science', publish: 1995, Edition : 2012
},
{
    title: 'Book six', genre: 'fiction', publish: 1996, Edition : 2013
},
{
    title: 'Book seven', genre: 'history', publish: 1997, Edition : 2014
},
];

// const user = books.filter((bk)=>{
//     return bk.genre === 'history'
// })
const user = books.filter((bk)=>{
    return bk.publish <= 2000 && bk.genre === 'science'
})

console.log(user);
