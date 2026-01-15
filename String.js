const name = "Tukai"

const number = 35

// console.log(name + number + "Hello");  //concatenation
// console.log(`${name}`); //string interpolation

// console.log(`Hello, my name is ${name} and the value is ${number}`);
const gameName = new String("Hello-World-123")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('W'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 5)
console.log(anotherString);

const newStringOne = "   tukai   "
console.log(newStringOne);
console.log(newStringOne.trim());

console.log(gameName.trim().split("").reverse("").join(""));//reverse a string


const url = "https://tukai.com/tukai%300ghosh"

console.log(url.replace('%300', '_'))

console.log(url.includes('tukai'))

console.log(gameName.split('-'));