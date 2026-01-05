class user{
    constructor(email, password){

        this.email = email;
        this.password = password;

    }
    get email(){
        return this._email.toUpperCase()
    }

    set email(values){
        this._email = values
    }
    get password(){
        return this._newPassword.toUpperCase()
    }

    set password(value){
        this._newPassword = value
    }
}

const Hitesh = new user("user@gmail.com", "abc123")
console.log(Hitesh.email);


