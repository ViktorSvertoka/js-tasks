/** ЗАВДАННЯ 45 - Пошук елементів у масивах
 *
 * 1. Створіть функцію isElementInArray з двома параметрами "searchElement" та "inputArray"
 *
 * 2. Якщо "searchElement" - не об'єкт, просто використовуйте метод "includes"
 *
 * 3. Якщо "searchElement" - це об'єкт чи масив,
 * вам необхідно спочатку перетворити кожен елемент "inputArray" у рядок,
 * а потім застосувати метод "includes" з аргументом, який також буде перетворено на рядок
 */
const isElementInArray = (searchElement, inputArray) => {
  if (typeof searchElement !== 'object') {
    return inputArray.includes(searchElement);
  }

  return inputArray
    .map(element => JSON.stringify(element))
    .includes(JSON.stringify(searchElement));
};

const tags = [
  ['javascript', 'es6'],
  ['css', 'flexbox'],
  ['html', 'web-browser'],
];

const fruits = [
  { title: 'Orange', quantity: 10 },
  { title: 'Banana', quantity: 5 },
  { title: 'Apple', quantity: 25 },
];

const primitiveTypesArray = [25, 'x', true, undefined, null];

console.log(isElementInArray(['css', 'flexbox'], tags)); // true

console.log(isElementInArray(['flexbox', 'css'], tags)); // false

console.log(isElementInArray({ title: 'Apple', quantity: 25 }, fruits)); // true

console.log(isElementInArray({ title: 'Banana' }, fruits)); // false

console.log(isElementInArray(25, primitiveTypesArray)); // true
