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


// clouser--- A clouser is the combination of a function bandled together(enclosed) with references to its surrounding state (the lexixal environment). in other word, a clouser gives you access to an outer functions scope from an inner function. in javascript, clouser are created every time s function is created, at function creation time.

function makeFun(){
    const name = "Firefox"

    function displayName(){
        console.log(name);
        
    }
    return displayName()
}

const myFun = makeFun()
myFun();