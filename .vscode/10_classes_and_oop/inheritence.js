class User {
  constructor(username) {
    this.username = username;
  }

  logMe(){
    console.log(`USERNAME is ${this.username}`);
    
  }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourses(){
        console.log(`A new course is added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai", "chai@gmail,com","123")

chai.addCourses();
chai.logMe();
const masalaChai = new User("Masala")
masalaChai.logMe();

console.log(chai instanceof User);
console.log(chai instanceof Teacher);


