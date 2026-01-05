// Dates

 let myDate = new Date()
//  console.log(myDate);
 
//  console.log(myDate.toString());
//  console.log(myDate.toDateString());
//  console.log(myDate.toLocaleString());
//  console.log(myDate.toJSON());
 
//  console.log(typeof myDate);
 
// let myCreatedDate = new Date(2023, 0, 23)
//  console.log(myCreatedDate.toDateString()); 
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let timeStamp =  Date.now()
// console.log(timeStamp);

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${console.log(newDate.getDay())} and time is`

newDate.toLocaleString('default', {
    weekday:"long",
    
})

