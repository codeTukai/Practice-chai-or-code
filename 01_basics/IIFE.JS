// Immediately Invoked Function Expression (IIFE)
//IIFE used basically execution immediately and its handle the poluted of global scope //++ mainly global scope er variable er jonno je poluted hoi seta hatanor jonno iife use kora ho66a 

(function chai(){
    // name IIFE
    console.log(`DB CONNECTED`);
    
})();

// (() => { //declare
//     console.log(`DB CONNECTED TWO ${name}`);
    
// }) ("Tukai");//execution


(function chai(){

    //named IIFE
    console.log("DB CONNECTED");
    
})();//use purpose:------ Avoid polluting the global scope  ****//** */

(()=>{
    //UNNAMED IIFE
    console.log("Now db connected");
    
})();



(function Hii(params) {
    console.log("hii tukai");
    
})();

((name) =>{
    console.log(`${name} Localhost running`);
    
})('8086');


(function chai(){
console.log("db");

})();

(//  unnamed iife
        ()=>{
    console.log("hii");
    
})()