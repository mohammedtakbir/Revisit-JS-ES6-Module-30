/* function add(num1, num2) {
    console.log(num1, num2);
    num2 = num2 || 0;
    console.log(num2)
    // if (num2 === undefined) {
    //     num2 = 0;
    // }
    return num1 + num2; 
}
const res = add(10);
console.log(res) */

function add(num1, num2=10){
    return num1 + num2
}
console.log(add(20, 0))