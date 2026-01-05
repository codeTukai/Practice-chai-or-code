// for loop



for (let i = 0; i < 10; i++) {
    const element = i;
    if (element > 5) {
        // console.log("print this series");
        
        
    }
    // console.log(element);
    
}


for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop values is: ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop values is: ${j} and outer is: ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
        
                
    }
    
}

let myArray = ["Flash", "Batman", "Superman"]
// console.log(myArray.length);
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
    
    
// }


for (let index = 0; index <= 20; index++) {
    if (index == 5 ) {
        // console.log("print 5");
        break
        
    }
    // console.log(`values is : ${index}`);
    
    
}
// for (let index = 0; index <= 20; index++) {
//     if (index == 5 ) {
//         console.log("print 5");
//         continue
        
//     }
//     console.log(`values is : ${index}`);
    
    
// }


// for (let i = 5; i >= 5; i--) {
//     let
//     i--
    
//     for (let j = 0; j < 4; j++) {
//         console.log(j);
//         j++
        
        
//     }
    
// }

let n = 2; // height of the diamond (half)

for (let i = 0; i <= n; i++) {
    let row = "";
    // print spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    // print stars
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*";
    }
    console.log(row);
}

// lower half of diamond
for (let i = n - 1; i >= 1; i--) {
    let row = "";
    // print spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    // print stars
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*";
    }
    console.log(row);
}






































// let myArray = ["flash", "Batman", "Superman"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
    
// }

// break and continue 

// for (let i = 1; i <= 20; i++) {
//     // const element = i;
//     // console.log(element);
    
    
//     if (i==5) {
//         console.log("5 is found");
//         continue
        
//     }
    // console.log(`value of i is ${i}`);
    
// }


// print a pattern 


// function printWriter(array){
//     for (let i = 0; i <= array; i++) {
//         // let patternLine = ' ';
        
//         for (let j = 0; j <= i; j++) {
//         patternLine += '*';
            
    
            
//         }
//         console.log(patternLine);
        
        
//     }
// }
// printWriter(5)
