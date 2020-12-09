// Декларативный подход
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => {
//     return value > 3;
// });

// console.log(filteredNumbers); // [4, 5]
// const dirtyMultiply = (array, value) => {
//     for (let i = 0; i < array.length; i += 1) {
//         array[i] = array[i] * value;
//     }
// };

// const numbers = [1, 2, 3, 4, 5];

// dirtyMultiply(numbers, 2);

// // Произошла мутация исходных данных
// console.log(numbers); // [2, 4, 6, 8, 10]
// const pureMultiply = (array, value) => {
//     const result = [];

//     for (let i = 0; i < array.length; i += 1) {
//         result.push(array[i] * value);
//     }

//     return result;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Не произошло мутации исходных данных
// console.log(numbers); // [1, 2, 3, 4, 5]

// // Функция вернула новый массив с измененными данными
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(numbers.filter(num => num > 5)); // [6, 7, 8, 9]

// console.log(numbers.filter(num => num < 5)); // [0, 1, 2, 3, 4]

// console.log(numbers.filter(num => num === 5)); // [5]
// const users = [
//     { name: 'Mango', isActive: true },
//     { name: 'Poly', isActive: false },
//     { name: 'Ajax', isActive: true },
//     { name: 'Chelsey', isActive: false },
// ];

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно true, то текущий элемент (user) будет записан в результирующий массив.
// const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно false, то текущий элемент (user) будет записан в результирующий массив.
// const inactiveUsers = users.filter(user => !user.isActive);
// console.log(inactiveUsers);
// Write code under this line
// Write code under this line
const getUsersWithGender = (array, genderIdeal) => array.filter(({ gender }) => gender === genderIdeal).map(({ name }) => name);

//console.log(getUsersWithEyeColor)
const users = [{
        id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        skills: ['ipsum', 'lorem'],
        gender: 'male',
        age: 37,
    },
    {
        id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
        gender: 'female',
        age: 34,
    },
    {
        id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        skills: ['ex', 'culpa', 'nostrud'],
        gender: 'male',
        age: 27,
    },
];
console.log(getUsersWithGender(users, 'male'));