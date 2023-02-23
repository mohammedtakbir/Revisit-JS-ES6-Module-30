
//* let can be reassign
// let name = 'mohammed';
// name = 'takbir'
// console.log(name)

//* const cannot be reassign
// const name = 'mohammed';
// name = 'takbir'

//* we can use const this way
// const name = 'mohammed';
// const fullName = name + 'takbir';
// console.log(fullName)

//* do not allow to reassign when using const in an array/object
const arr = [25, 32, 14];
// arr = [25, 14, 36];
// console.log(arr) //? TypeError: Assignment to constant variable.

//* But we can partially change/add the value
arr[3] = 235;
// console.log(arr)

const obj = {name: 'takbir'};
// obj = {name: 'mohammed'}
// console.log(obj) //? TypeError: Assignment to constant variable

obj.name = 'mohammed'
// console.log(obj) //? we can partially change or add the constant variable's value

// for(var i = 0; i<5; i++){
//    var num = i;
// }
// console.log(num)