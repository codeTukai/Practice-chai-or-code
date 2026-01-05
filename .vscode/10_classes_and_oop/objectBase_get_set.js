const user = {
    _email: "chai@123",//_(underScore) used because of its kept the values or property private.
    password: '123',
    


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }


}

const tea = Object.create(user)//factory based function
console.log(tea.email);
