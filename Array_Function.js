const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "flash", "Batman"]

// marvel_heros.push(dc_heros) //work on presenting/existing array 

// console.log(marvel_heros);
// console.log(marvel_heros.length);

// console.log(marvel_heros[3][1]);

// const a = marvel_heros.concat(dc_heros) //its represented a new array
// console.log(a);

const a1 =[...marvel_heros, ...dc_heros]
console.log(a1);

const another_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]]

const real_another_Array = another_Array.flat(Infinity)
console.log(real_another_Array);

console.log(Array.isArray("Tukai"));
console.log(Array.from("Tukai"));

console.log(Array.from({name:"tukai"})); //return an empty object when its define as key value pairs ---[]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2,score3));

