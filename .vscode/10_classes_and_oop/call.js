// function createUser(username){
//     this.username = username

//     console.log('called');
    

// }

//  function anotherUsername(username, email, password){
//     createUser.call(this, username)


//     this.email = email
//     this.password = password

//  }

//  const called = new anotherUsername("MeraChai", "chai@gmail.com", "12345")

//  console.log(called);














function setUserName(username){

    //complex db call
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    setUserName.call(this,username) //(this), hold the reference 
    console.log(this);
    
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@gmail", "123")
console.log(chai);