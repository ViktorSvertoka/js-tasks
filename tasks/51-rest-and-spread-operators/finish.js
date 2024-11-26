/** ЗАВДАННЯ 51 - Оператори "rest" (залишок) та "spread" (поширення)
 *
 * 1. Створіть функцію "meanScore",
 * яка буде приймати будь-яку кількість аргументів,
 * об'єднувати в один масив і повертати середнє значення всіх аргументів,
 * округлено до 2 знаків після коми.
 *
 * 2. Якщо хоча б один елемент у цьому масиві не є числом -
 * Виводимо в консоль наступну помилку:
 * "Всі аргументи у виклику функції повинні бути числами!"
 *
 * ПІДКАЗКА: У цьому завданні ви повинні використовувати як оператор "rest",
 * Так і оператор "spread".
 */

const meanScore = (...numbers) => {
  if (numbers.some(num => typeof num !== 'number')) {
    return console.error('Усі аргументи у виклику функції мають бути числами!');
  }

  return numbers
    .reduce((mean, num) => mean + num / numbers.length, 0)
    .toFixed(2);
};

const scores1 = [0, 1.5, 2.5, 3.7];
const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2];
const scores3 = [1.3, 2.5, 1.9];
const scores4 = ['abc', 1.3, true, 2.5, 1.9];

console.log(meanScore(...scores1));
// 1.93

console.log(meanScore(...scores1, ...scores2));
// 2.8

console.log(meanScore(...scores1, ...scores2, ...scores3));
// 2.59

console.log(meanScore(...scores4));
// Усі аргументи у виклику функції мають бути числами!
