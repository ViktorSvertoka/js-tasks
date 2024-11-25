/** ЗАВДАННЯ 20 - Дата
 *
 * 1. Створіть змінну та надайте їй поточний час у мілісекундах
 *
 * 2. Виведіть значення в консоль
 */

const currentDate = new Date().getTime();

console.log(currentDate);

const currentDate2 = new Date();

const currentDateInMs = currentDate2.getTime();

console.log(currentDateInMs);
