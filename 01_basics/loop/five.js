const coding = ["js", "ruby", "java", "c++"]


// coding.forEach( function (item) {
//     console.log(item);
    
// } )

// coding.forEach( (item) => {
//     console.log(item);
    
// })

// function printMe(item) {
//     console.log(item);
    
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);
    
// })


const myCoding =
  [ 
     {
        languageName : "java",
        languageFilename: "js"
    },
    {
languageName : "python",
        languageFilename: "py"
    },
    {
languageName : "c++",
        languageFilename: "cpp"
    },
    {
languageName : "php",
        languageFilename: "php"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageFilename);
    
})