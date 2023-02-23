const numbers = [10, 25, 34, 47, 56, 41, 65, 51];
// console.log(Math.max(10, 54, 47, 39, 55))
// console.log(Math.max(...numbers)) //? using spread operator

const numbers2= numbers;
numbers2[0] = 100;
numbers[1] = 200;
// console.log(numbers, numbers2)

const numbers3 = [...numbers];
numbers3.push(500)
console.log(numbers3, numbers, numbers2)