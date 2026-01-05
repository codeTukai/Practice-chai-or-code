const myArr = [10, 20, 22, 30 ,40, 47]//Array is an object, arr means where we can store multiple values in a single variable.
const myHeroes = ["N","p","s"]

const Arr2 = myArr
// Arr2.shift(4)
// console.log(Arr2);



const myArr2 = new Array(1,2,3,4,5,6)

// console.log(myArr2[3]);
// console.log(myHeroes);
// console.log(myArr2);

//Array Methods
// myArr2.push(6)
// myArr2.push(7)
// myArr2.pop()          //remove the last element
// console.log(myArr2);


// myArr.unshift(9)
myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr);


// console.log(typeof myArr);// if in [] then its obj but without [] its perform an string 

// console.log(myArr.indexOf(9));
// console.log(myArr.includes(9));

 const newArr = myArr .join()
//  console.log(myArr);
//  console.log(newArr);
 

//  console.log(typeof newArr);

 // slice and spice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);
const myn2 = myArr.splice(1, 3)//  diff between slice and splice In JavaScript, slice () and splice () are array methods with distinct purposes. `slice ()` creates a new array containing selected elements from the original, while `splice ()` modifies the original array by adding, removing, or replacing elements.


console.log(myn2);
console.log("C", myArr);



// function rotateArr(arr,d) {
//     const n =arr.len

//     d = d % n

//     return arr.slice(d).concat(arr.slice(0,d));


// }

// console.log(rotateArr([1,2,3,4,5,6],2));

// function reverse(arr, start, end) {
//   while (start < end) {
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
//   }
// }

// function rotateLeftInPlace(arr, d) {
//   const n = arr.length;
//   d = d % n;

//   reverse(arr, 0, d - 1);     // step 1
//   reverse(arr, d, n - 1);     // step 2
//   reverse(arr, 0, n - 1);     // step 3

//   return arr;
// }

// console.log(rotateLeftInPlace([1, 2, 3, 4, 5, 6, 7], 2));
// // [3, 4, 5, 6, 7, 1, 2]


class Solution {
  nextPermutation(nums) {
    let n = nums.length;
    let i = n - 2;

    // Step 1: Find pivot
    while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
    }

    // Step 2: Find successor
    if (i >= 0) {
      let j = n - 1;
      while (nums[j] <= nums[i]) {
        j--;
      }
      // Step 3: Swap pivot and successor
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Step 4: Reverse the suffix
    this.reverse(nums, i + 1, n - 1);

    return nums;
  }

  reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
}
