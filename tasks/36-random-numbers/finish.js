/** ЗАВДАННЯ 36 - Випадкові числа
 *
 * 1. Cгенеруйте нове 4-значне випадкове число.
 * Діапазон для випадкового числа 1000 – 9999.
 *
 * 2. Переконайтеся, що це нове випадкове число не збігається з жодним з чисел у масиві myNumbers.
 *
 * 3. Якщо збігається, вам потрібно згенерувати нове 4-значне число.
 *
 * 4. Якщо збігів немає (новий номер унікальний), додайте його до масиву myNumbers.
 *
 * ВАЖЛИВО: У вирішенні задачі використовуйте функції:
 * - для генерації випадкового числа у заданому діапазоні
 * - для додавання випадкового числа в масив із поверненням зміненого масиву
 */

const MIN = 1000;
const MAX = 9999;

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351];

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(randomNumber(MIN, MAX));

const addRandomNumberToArray = (arr, min, max) => {
  let newRandomNumber;
  const updateArr = [...arr];

  do {
    newRandomNumber = randomNumber(min, max);
  } while (updateArr.includes(newRandomNumber));

  updateArr.push(newRandomNumber);

  return updateArr;
};

const updatedArray = addRandomNumberToArray(myNumbers, MIN, MAX);

console.log('UPDATED ARRAY', updatedArray);

console.log('ORIGINAL ARRAY', myNumbers);
