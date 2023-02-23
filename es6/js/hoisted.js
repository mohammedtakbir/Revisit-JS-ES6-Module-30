//* variable declared with var can be used before it has been declared
// x = 5;
// console.log(x); //? return 5
// var x;

//* let, const are also hoisted
// function hois(){
//     console.log(x);
//     let x; //? ReferenceError: Cannot access 'x' before initialization
// }
// hois()

//? var
// function hois(){
//     console.log(x);
//     var x; //? return undefined
// }
// hois()

//* const 
// test = 5;
// const test //? SyntaxError: Missing initializer in const declaration

//* JavaScript only hoists declarations, not initializations.
 
var x = 5
console.log(x, y); //? y = undefined
var y = 7;