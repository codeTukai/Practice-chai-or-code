// class Solution {
//     // n = [20,10,44,30,13,44]
//     getSecondLargestNumber(arr){
//         const n = arr.length;
//        if( n < 2)
//         return -1;

//         let first = - Infinity
//         let second = - Infinity

//         for (const num of arr) {
//             if (num > first) {
//                 second = first
//                 first = num
//             }
//             else{
//                 if (num > second && num !== first) {
//                     second = num
//                 }
//             }
//         }

//         return second === - Infinity ?  -1 : second  
//     }
// }

function pushZerosToEnd(arr) {
  let count = 0; // position of next non-zero element

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      // swap arr[i] with arr[count]
      let temp = arr[i];
      arr[i] = arr[count];
      arr[count] = temp;

      count++;
    }
  }

  return arr;
}

// Example usage
let arr = [1, 2, 0, 4, 3, 0, 5, 0];
console.log(pushZerosToEnd(arr)); 
// Output: [1, 2, 4, 3, 5, 0, 0, 0]

