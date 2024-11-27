/** ЗАВДАННЯ 77 - Замикання
 *
 * 1. Створіть функцію "createGreeting", усередині якої створіть:
 * - змінну "greetingString" зі значенням "Hey, this is"
 * (Оголосіть її використовуючи "let")
 * - функцію "greet" з одним параметром, яка має повертати
 * рядок-вітання на підставі "greetingString" та параметра,
 * Наприклад, "Hey, this is Bob"
 * - функцію "changeGreeting" з одним параметром, яка повинна
 * змінювати значення змінної "greetingString"
 *
 * 2. Функція "createGreeting" повинна повернути об'єкт з двома методами:
 * - greet
 * - changeGreeting
 */

const createGreeting = () => {
  let greetingString = 'Hey, this is';

  function greet(name) {
    return `${greetingString} ${name}.`;
  }

  function changeGreeting(newGreeting) {
    greetingString = newGreeting;
  }

  return {
    greet,
    changeGreeting,
  };
};

const greeting1 = createGreeting();

console.log(greeting1.greet('Bob')); // Hey, this is Bob

greeting1.changeGreeting('Good Morning from');

console.log(greeting1.greet('Emily')); // Good Morning from Emily

greeting1.changeGreeting('Good Evening');

console.log(greeting1.greet('Emily')); // Good Evening Emily

/* ____________  */

const greeting2 = createGreeting();

console.log(greeting2.greet('Emily')); // Hey, this is Emily
