const accountID = 10033;
let accountEmail = "tukai@google.com"
var accountPassword = "12345" 
let accountCity = "jaipur"
let accountState;

{
    accountPassword = "13333";
}


// accountID = 2;  // not allowed
accountEmail = "ghosh@gmail.com"
// accountPassword = "189388"
let acc;
/*prefer not to use var
because of issues in block scope and functional scope */
// console.log(table("accountID,accountEmail,accountPassword,accountCity"));
accountPassword = "234544" 
console.log(accountID);
console.log(accountEmail);
console.log(accountPassword);
console.table([accountID,accountEmail,accountPassword,accountCity,acc,accountState]);



// function maxProductSubarray(arr) {
//   let maxProd = arr[0];
//   let minProd = arr[0];
//   let result = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     let num = arr[i];

//     if (num < 0) {
//       [maxProd, minProd] = [minProd, maxProd]; // swap
//     }

//     maxProd = Math.max(num, maxProd * num);
//     minProd = Math.min(num, minProd * num);

//     result = Math.max(result, maxProd);
//   }

//   return result;
// }

// // Example usage:
// console.log(maxProductSubarray([-2, 6, -3, -10, 0, 2])); // 180
// console.log(maxProductSubarray([-1, -3, -10, 0, 6]));   // 30


function circularSubarraySum(arr) {
  let n = arr.length;
  let res = arr[0];

  // Subarray that starts with index i
  for (let i = 0; i < n; i++) {
    let currSum = 0;

    // Considering all possible endpoints of the subarray that begins with i
    for (let j = 0; j < n; j++) {
      // Circular index
      let idx = (i + j) % n;
      currSum += arr[idx];
      res = Math.max(res, currSum);
    }
  }

  return res;
}

let arr = [8, -8, 9, -9, 10, -11, 12];
console.log(circularSubarraySum(arr));

