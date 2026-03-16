const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "Swift by app"
}

for (const key in myObject) { //for in is iterable but for of is not
    
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

 const programming = ["js", "rb", "py", "java", "cpp"]

// array.forEach(element => {
    
// });

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

console.log(map);

for (const key in map) {
    console.log(key, ':-', value);
    console.log(key);
    
}

//Notes:- for in loop not use in map because map is not iterable if it is not iterable so how can i used for in loop

// var x = 1

// a();
// b();
// console.log(x);

// function a(){
//     var x = 10;
    
//     console.log(x);
// }

// function b(){
//     var x = 100
//     console.log(x);
    
// }
