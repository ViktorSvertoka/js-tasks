/** ЗАВДАННЯ 43 - Порівняння двох масивів
 *
 * 1. Створіть функцію "areArraysEqual" з двома параметрами "firstArray" та "secondArray"
 *
 * 2. Поверніть "true" якщо два масиви рівні, а саме:
 * - мають однакову кількість елементів
 * - всі елементи збігаються, наприклад, firstArray[0] === secondArray[0] і т. д.)
 *
 * 3. В іншому випадку поверніть "false"
 *
 * ВАЖЛИВО: Виходьте з того, що масиви містять елементи примітивних типів
 */

const areArraysEqual = (firstArray, secondArray) => {
  if (
    firstArray.length === secondArray.length &&
    firstArray.every((element, index) => element === secondArray[index])
  ) {
    return true;
  }

  return false;
};

const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(a === b); // false (Чому?)

const c = [2, 1, 3];
const d = [1, 2, 3, 4];

console.log(areArraysEqual(a, b)); // true
console.log(areArraysEqual(a, c)); // false
console.log(areArraysEqual(a, d)); // false
