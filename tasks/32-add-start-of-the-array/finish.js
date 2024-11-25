/** ЗАВДАННЯ 32 - Додавання елементів на початок масиву
 *
 * 1. Додайте елементи а початок масиву:
 * - спочатку рядок "Привіт"
 * - потім число 100
 *
 * 2. Виведіть довжину результуючого масиву в консоль
 */

const myArray = [true, null];

// Напишіть код тут
myArray.unshift('Hello');
myArray.unshift(100);

console.log(myArray); // [100, "Hello", true, null]

console.log(myArray.length);
