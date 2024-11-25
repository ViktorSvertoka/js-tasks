/** ЗАВДАННЯ 11 - Колбек функція
 *
 * 1. Виведіть у консоль "Hello World!" із затримкою 5 секунд
 *
 * 2. Використовуйте стрілочну функцію
 */

const greetings = () => {
  setTimeout(() => {
    console.log('Hello World!');
  }, 5000);
};

greetings();

setTimeout(() => console.log('Hello'), 5000);
