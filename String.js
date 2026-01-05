const name = "Tukai"
const repoCount = 58


// console.log(name + repoCount+ " value");

console.log(`Hello my name is ${name} and my repo count is  ${repoCount}`); //string interpolation

const gameName = new String('Tukai_Gh')
console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));

// console.log(gameName.indexOf('i'));

// const newString = gameName.substring(0, 4)
// console.log(newString);


// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);


const myWord = new String("Hello")
const reverseOrder = myWord.split("").reverse().join("")
console.log(reverseOrder);







const newString1 ="     Tukai    "
console.log(newString1);

console.log(newString1.trim());// remove the starting and the ending space 

  const url = "https://tukai.com/tukai%20#@!@#ghosh"

  console.log(url.replace('%20', '-'));
  console.log(url.replace('#@!@#', '//').replace('%20', '-'));

  console.log (url.includes('ghosh'));

  console.log(gameName.split('_'));
  
  