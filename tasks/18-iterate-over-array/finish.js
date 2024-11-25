/** ЗАВДАННЯ 18 - Перебір елементів масиву
 *
 * 1. Створіть масив із кількома елементами
 *
 * 2. Використовуючи один із методів масивів, переберіть усі елементи
 * і виведіть кожен елемент у консоль
 */

const myArray = [null, 'Evan', false, 8];

myArray.forEach(element => {
  console.log(element);
});

myArray.map(element => {
  console.log(element);
});
