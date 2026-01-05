function createUser(username){
    this.username = username

    console.log('called');
    

}

 function anotherUsername(username, email, password){
    createUser.call(this, username)


    this.email = email
    this.password = password

 }

 const called = new anotherUsername("MeraChai", "chai@gmail.com", "12345")

 console.log(called);
 