class user {
    constructor(username, password) {
        this.username = username
        this.password = password
    }
    get password(){
         return this._password.toUpperCase()
    }

    set password(value){
        // this.password1 =value  //if the set password is to be same then the call stack is exceed this variable is must be change
        this._password = value.toUpperCase()
    }

  

    
}

const newUser = new user("hello", "123abic")

console.log(newUser.password);
