// const promiseOne = new Promise(function(resolve,reject){
//     //Do an async task
//     //DB calls, cryptography, network call
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log('Promise consumedṇ');
    
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task two");
//         resolve()
//     },2000)
// }).then(function(){
//     console.log("Async 2 resolved");
    
// })

// const promiseThird = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: "chai", email: "chai@gmail.com"})
//     },1000)
// })

// promiseThird.then(function(user){
// console.log(user.username);

// })

// const promiseFour =new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = false
//         if (!error) {
//             resolve({username: "Tukai", password: "123"})
//         }else{
//             reject('ERROR: Something Went Wrong')
//         }
//     }, 1000);

// })

// promiseFour
// .then(function(user){
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
// console.log(username);
// })
// .catch(function(error){
//     console.log(error);
    
// }).finally(()=>{
// console.log("The Promise is either resolved or rejected");
// })

// const promiseFive =new Promise(function(resolve,reject){
//      setTimeout(() => {
//         let error = false
//         if (!error) {
//             resolve({username: "JavaScript", password: "123"})
//         }else{
//             reject('ERROR: Something Went Wrong')
//         }
//     }, 1000);

// })

// async function consumePromiseFive() {
//   try {
//       const promise = await promiseFive
//     console.log(promise);
//   } catch (error) {
//     console.log(error);
    
//   }
    
// }

// consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response =await fetch('https://jsonplaceholder.typicode.com/users')
//        const data =await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// getAllUsers()



const promise = new Promise (function (resolve, reject){
setTimeout(()=>{
    let error = false 
if(! error){
resolve ({koyel: "IN Case of Good situation: I always with you, and i love you 😘"})
}else {
reject ("In case of bad situation: there will I always here with you")
}


},1000)
  
})

promise.then((user)=>{
console.log(user)
// return user.koyel
}).catch((err)=>{
console.log(err)
})