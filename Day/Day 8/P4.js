//Variables in javascript
var x = 10;
var x = 30;
x = 40;
console.log(x)

if (true){
    var message= "Hello";
}
// var in JS is not block-scoped
console.log(message)

//**************************************** */
//let keyword based variable
let score=100;
// let score=100; //Syntax Error
score=160;   // re-assignment is valid
console.log(score)

if(true){
    let secret ="Password@123";    //let in JS is block-scoped
}
console.log(secret)    //ReferenceError: secret is not defined