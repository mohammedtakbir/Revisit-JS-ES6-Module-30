//* function declaration
//? function declarations are hoisted
// function add(num1, num2){
//     return num1 + num2
// }
// console.log(add(10, 10))

//* function expression
//? function expressions are not hoisted
// const add = function(num1, num2){
//     return num1 + num2
// }
// console.log(add(20, 30))

//* arrow function
//? arrow functions are not hoisted
// const add = (num1, num2) => num1 + num2; //? single line statement

// const add = (num1, num2) => {
//     return num1 + num2
// }; //? multi line statement

// console.log(add(10, 90)) 

//* regular functions have their own this
const player = {
    name: 'Sakib',
    regularFunction: function(){
        console.log(`Player name is ${this.name}`)
    }
}
player.regularFunction();


//* arrow functions don't have their own this. They refer window object when this called
const player2 = {
    name: 'Virat',
    arrowFunction: () => {
        console.log(`Player name is ${this.name}`)
    }
}
player2.arrowFunction();