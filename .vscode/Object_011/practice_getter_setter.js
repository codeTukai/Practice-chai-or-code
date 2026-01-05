class User{
    constructor(email, username, password){
        this.username = username
        this.email = email
        this.password = password

    }

     get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        return this._email = value
    }

    

    get password(){

        return `${this._password}hitesh`.toUpperCase()
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const setter = new User("info@gmail.com", "sayHii", "123sayHello")
console.log(setter.password);
console.log(setter._password);
console.log(setter.username);
console.log(setter.email);
