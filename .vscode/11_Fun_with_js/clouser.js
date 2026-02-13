function outer(){
    let name = "Hello world"
    function inner(){
        console.log("outer", name);
        
    }
    inner()
}
outer()


function createBankAccount(balance) {
    return {
        deposit(amount) {
            balance += amount
            console.log(balance)
        },
        withdraw(amount) {
            balance -= amount
            console.log(balance)
        }
    }
}

const account = createBankAccount(1000)

account.deposit(500)
account.withdraw(200)
