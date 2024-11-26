/** ЗАВДАННЯ 44 - Пошук елементів примітивних типів у масиві
 *
 * 1. Створіть функцію isElementInArray з двома параметрами "inputArray" та "searchElement"
 *
 * 2. Якщо "searchElement" знайдено в "inputArray" - повернути "true"
 *
 * 3. В іншому випадку повернути "false"
 */

const isElementInArray = (inputArray, searchElement) =>
  inputArray.includes(searchElement);

const transports = ['Bus', 'Car', 'Bicycle', 'Airplane'];

console.log(isElementInArray(transports, 'Bus')); // true
console.log(isElementInArray(transports, 'Phone')); // false
console.log(isElementInArray(transports, 'Airplane')); // true
