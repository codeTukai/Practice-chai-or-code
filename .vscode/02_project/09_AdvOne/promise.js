const promiseOne = new Promise(function(resolve, reject) {
    //Do an async task
    //DB calls, cryptography, network

    setTimeout(function() {
        console.log('Async task is complete');
        resolve()
        
    },1000)
})

promiseOne.then(function(){
console.log("Promise Consumed");
    
})

new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("Async task 2");
        
    resolve()
    
    }, 1000);
}).then(function() {
    console.log("Async task 2 consumed");
    
})

const promiseThree = new Promise(function(resolve,reject){
       setTimeout(() => {
        resolve({username: "chai", email:"chai@gmail.com"})
        
       }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise((resolve,reject)=>{
   setTimeout(()=>{
    let error = true;
    if (!error) {
        resolve({username:"user", password: "12345"})
    }else{
        reject('Error: Something Went Wrong')
    }

   },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
   console.log(username);
   
}).catch((error)=>{
  console.log(error);
  
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
    
})

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "JS", password:"12345"})
        } else {
            reject('Error: Something Went Wromg pls resolved it')
        }
    }, 1000);
});

async function consumePromiseFive(){
    try
{    const response = await promiseFive
    console.log(response);
    }catch(error){
        console.log(error);
        
    }
}

consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response =await fetch('https://jsonplaceholder.typicode.com/users')
        
        
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("Error: ", error);
        
//     }
    
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
   return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
    
})