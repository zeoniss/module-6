// Декларативный подход
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter(value => {
    return value > 3;
});

console.log(filteredNumbers); // [4, 5]