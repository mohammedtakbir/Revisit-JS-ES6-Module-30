//* object destructuring
const player = {
    name: 'Shanto',
    address: 'BCB',
    color: 'Black&White',
    phone: '+88018258963',
    price: 025741
};
const { name: GOAT, address, ...rest } = player;
// console.log(rest) //? copy rest of the value
console.log(GOAT) //? elias

const players = ['shanto', 'Mithun', 'Soumya', 'Mosaddek']
const [first, ...rst] = players;
// console.log(first, rst) //? return rst value as an array of elements