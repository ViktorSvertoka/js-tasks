/** ЗАВДАННЯ 38 - Тернарний оператор
 *
 * 1. Перепишіть інструкцію "if .. else" без використання "else"
 *
 * 2. Перепишіть вміст функції за допомогою тернарного оператора
 *
 * 3. Замініть звичайну функцію на стрілочну функцію
 */

// function isArrayEmpty(inputArray) {
//   if (inputArray.length > 0) {
//     return 'Масив не порожній';
//   } else {
//     return 'Масив порожній';
//   }
// }

const isArrayEmpty = inputArray => {
  return inputArray.length > 0 ? 'Масив не порожній' : 'Масив порожній';
};

console.log(isArrayEmpty([1, 3]));
console.log(isArrayEmpty([]));
