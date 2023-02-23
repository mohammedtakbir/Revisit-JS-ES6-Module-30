//* problem-01
//? Write an arrow function where it will do the following:
//? a) It will take an array where the array elements will be the name of your favorite players
//? b) Check if the length of each element is even, push elements with even length to a new array and return the result

// const players = ['StevenSmith', 'ViratKohli', 'JimmyAnderson', 'KaneWilliamson', 'MohammedAmir', 'MichelStarc'];

// const player = (players) => {
//     let i = 0;
//     let evenPlayer = [];
//     while (i < players.length) {
//         const player = players[i];
//         if (player.length % 2 === 0) {
//             evenPlayer.push(player)
//         }
//         i++;
//     }
//     return evenPlayer;
// }
// console.log(player(players));

//* problem-02
//? Write an arrow function where it will do the following:
//? a) square each array element
//? b) calculate the sum of the squared element
//? c) return the average of the sum of the squared elements

// const numbers = [35, 95, 85, 61, 47, 25, 79, 28, 65, 52, 54, 47, 98, 67];

// const average = (numbers) => {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const number = numbers[i];
//         const square = number**2;
//         sum += square;
//     }
//     return sum / numbers.length
// };
// console.log(parseFloat(average(numbers).toFixed(2)))

//* problem-03
//? Write an arrow function where it will do the following:
//? a) It will take two array inputs
//? b) Combine the two arrays and assign them in a new array
//? c) Find the maximum number from the new array and return the result

const arr1 = [35, 95, 85, 61, 47, 25, 79, 28, 65, 52, 54, 47, 98, 67];
const arr2 = [74, 91, 64, 81, 39, 17];

const findMaximum = (arr1, arr2) => {
    const newArr = [...arr1, ...arr2];
    //* easy way
    // return Math.max(...newArr);
    let i = 0;
    let maximum = newArr[0];
    while (i < newArr.length) {
        const num = newArr[i];
        if (num > maximum) {
            maximum = num
        }
        i++;
    }
    return maximum;
}
console.log(findMaximum(arr1, arr2))