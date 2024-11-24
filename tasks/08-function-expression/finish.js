/** ЗАВДАННЯ 8 - Надання функції змінної
 *
 * 1. Оголосіть змінну та надайте їй функціональний вираз
 *
 * 2. У функції має бути один параметр "name"
 *
 * 3. Поверніть з функції рядок "Привіт, <name>"
 *
 * 4. Викличте функцію двічі з різними аргументами
 *
 * 5. Результат викликів функції виведіть у консоль
 */

const person = name => {
  return `Привіт, ${name}`;
};

const hello = function (name) {
  return 'Привіт, ' + name;
};

console.log(person('Viktor'));
console.log(person('Evan'));

console.log(hello('Viktor'));
console.log(hello('Evan'));
