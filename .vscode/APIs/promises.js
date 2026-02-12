const promisesOne = new Promise(function(resolve, reject) {
    // Do and async task
    //DB calls, cryptography , network
    setTimeout(function() {
        console.log('Async task ls complete');
        resolve();
        
        
    },1000)
});

promisesOne.then(function() {
    console.log("Promise Consumed");
    
})


new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2");
        resolve();
        
        
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseThree = new Promise(function(resolve,reject) {
    setTimeout(function () {
        resolve({userName:"chai", email:"codetukai@gmail.com"})
        
    },1000)
})

promiseThree.then(function(params) {
    console.log(params);
    
    
})


const promiseFour = new Promise(function (resolve,reject) {
    setTimeout(function(){
        let error = true
                if (!error) {
            resolve({userName:"code", password: "123"});
            
        } else {
            reject('Error, Something went wrong')
            
        }
 
    }, 1000);
    
})

// promiseFour.then().catch() // then using to access the value and cath is using for show the error

 promiseFour
 .then((user)=>{
    console.log(user);
    return user.userName
    
  
})
.then((userName)=>{
    console.log(userName);
    

})
.catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    console.log("The Promises is resolve or reject");
    
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({userName:"Javascript", password: "123"});
            
        } else {
            reject('Error: JS went wrong')
            
        }
    }, 1000);
})

async function consumePromise() {
   try {
     const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
    
   }
    
    
}

consumePromise()


// async function getAllUsers() {
//   try {
//      const respose = await fetch('https://jsonplaceholder.typicode.com/users')
//    const data =await respose.json()
//    console.log(data);
//   } catch (error) {
//     console.log("E:", error);
    
//   }
   
// }

// getAllUsers()

fetch("https://api.github.com/users/hiteshchoudhary")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
})

console.log(typeof fetch);

