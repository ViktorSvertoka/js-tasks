/** ЗАВДАННЯ 62 - Різниця в оголошенні функцій
 *
 * 1. Поясніть різницю між двома варіантами оголошення функцій
 *
 * 2. Покажіть цю різницю, додавши додатковий код під функціями
 *
 * 3. Також викличте обидві функції
 */

// Можна викликати функцію до її ініціалізації

console.log(firstFunction(2, 2));

function firstFunction(a, b) {
  return a + b;
}

console.log(firstFunction(10, 10));

// Можна перевизначати функцію

firstFunction = 'Hello';

console.log(firstFunction);

// -------------------------------------------

const secondFunction = function (a, b) {
  return a + b;
};

console.log(secondFunction(11, 22));
