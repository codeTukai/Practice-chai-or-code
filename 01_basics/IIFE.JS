// Immediately Invoked Function Expression (IIFE)

// (function chai(){
//     // name IIFE
//     console.log(`DB CONNECTED`);
    
// })();

// (() => { //declare
//     console.log(`DB CONNECTED TWO ${name}`);
    
// }) ("Tukai");//execution


(function chai(){

    //named IIFE
    console.log("DB CONNECTED");
    
})();//use purpose:------ Avoid polluting the global scope

(()=>{
    //UNNAMED IIFE
    console.log("Now db connected");
    
})();



(function Hii(params) {
    console.log("hii tukai");
    
})();

(() =>{
    console.log("localhost running");
    
})()
