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
// const getSortedUniqueSkills = (array) =>
//     array
//     .reduce((totalSkills, { skills }) => [...totalSkills, ...skills], [])
//     .filter((skill, idx, skills) => skills.indexOf(skill) === idx)
//     .sort()

// //console.log(getUsersWithEyeColor)
// const users = [{
//         id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         skills: ['ipsum', 'lorem'],
//         gender: 'male',
//         age: 37,
//     },
//     {
//         id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//         gender: 'female',
//         age: 34,
//     },
//     {
//         id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//         gender: 'male',
//         age: 24,
//     },
//     {
//         id: '249b6175-5c30-44c6-b154-f120923736f5',
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         skills: ['adipisicing', 'irure', 'velit'],
//         gender: 'female',
//         age: 21,
//     },
//     {
//         id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         skills: ['ex', 'culpa', 'nostrud'],
//         gender: 'male',
//         age: 27,
//     },
//     {
//         id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         skills: ['non', 'amet', 'ipsum'],
//         gender: 'male',
//         age: 38,
//     },
//     {
//         id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         skills: ['lorem', 'veniam', 'culpa'],
//         gender: 'female',
//         age: 39,
//     },
// ]
// console.log(getSortedUniqueSkills(users))
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4.7,
//     price: 5000,
//     tags: ['premium', 'promoted', 'top', 'trusted'],
//     owner: {
//         name: 'Генри Сибола',
//         phone: '982-126-1588',
//         email: 'henry.carter@aptmail.com',
//     },
// }
// apartment.area = 60
// apartment.rooms = 3
// apartment.location = { country: 'Ямайка' }

// apartment.location = { city: 'Кингстон' }
//     // Пиши код ниже этой строки
// console.log(apartment)
// const book = {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['историческая проза', 'приключения'],
//     rating: 8.38,
// }

// for (const key in book) {
//     // Ключ
//     console.log(key)
//         // Значение свойства с таким ключом
//     console.log(book[key])
// }
// function countProps(object) {
//     let propCount = 0
//         // Пиши код ниже этой строки
//     for (const key in object)
//         if (object.hasOwnProperty(key)) {
//             propCount += [key].length
//         }

//         // Пиши код выше этой строки
//     return propCount
// }
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }))
// console.log(countProps({ name: 'Mango', age: 2 }))
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 9 },
// ]

// function getAllPropValues(propName) {
//     // Пиши код ниже этой строки
//     let result
//     if (propName === products[key]) {
//         result = Object.values(products)
//         return result
//     }

//     return []

//     // Пиши код выше этой строки
// }
// console.log(getAllPropValues('name'))
// console.log(getAllPropValues('quantity'))
// console.log(getAllPropValues('price'))
// console.log(getAllPropValues('category'))

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 9 },
// ]

// function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки
//     let totalPrice
//     for (const product of products) {
//         if (productName === product.name) {
//             totalPrice = product.price * product.quantity
//             return totalPrice
//         }
//     }
//     return 0
//         // Пиши код выше этой строки
// }
// console.log(calculateTotalPrice('Бластер'))
// console.log(calculateTotalPrice('Радар'))
// console.log(calculateTotalPrice('Захват'))

const add = function(...args) {
    console.log(args) // массив всех аргументов
}

console.log(add(1, 2, 3))
console.log(add(1, 2, 3, 4, 5))