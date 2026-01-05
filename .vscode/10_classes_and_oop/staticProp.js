class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }

  static createId(){
    return `123`
  }

}

const hello = new User("Say Hello")
// console.log(hello.createId())

class teacher extends User{
    constructor(username, email){
        super(username)
         this.email = email
         
    }
}

const iphone = new User("iphone", "i@gmail.com")
iphone.logMe()
console.log(teacher.createId())
console.log(User.createId())
