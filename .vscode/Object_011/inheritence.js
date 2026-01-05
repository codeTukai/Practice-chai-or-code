class User {
    constructor(username){
        this.username = username //set username
    }

    logMe(){

        console.log(`USERNAME is ${this.username}`);
        
    }

}

class teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCouese(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new teacher("chai", "code@gmail.com", "123")

chai.addCouese()

const tea = new User("masalaChai")
// tea.addCouese()
tea.logMe()
console.log(chai instanceof User);
