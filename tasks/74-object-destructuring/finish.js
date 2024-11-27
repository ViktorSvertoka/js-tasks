/** ЗАВДАННЯ 74 - Деструктуризація об'єктів
 *
 * Створіть функцію "shortPerson", яка деструктурує об'єкт
 * і повертає його коротку версію
 *
 * Приклад результату:
 * { n: "Mike", c: "Spain", a: 23, p: 100}
 *
 * Якщо вхідний об'єкт не має поля postsQuantity,
 * він повинен отримати значення за умовчанням 0
 */

const person1 = {
  name: 'Mike',
  info: {
    country: 'Spain',
    age: 23,
  },
  postsQuantity: 100,
};

const person2 = {
  name: 'Alice',
  info: {
    country: 'Italy',
    age: 25,
  },
};

// Напишіть функцію "shortPerson" тут

const shortPerson = person => {
  const {
    name: n,
    info: { country: c, age: a },
    postsQuantity: p = 0,
  } = person;

  return {
    n,
    c,
    a,
    p,
  };
};

console.log(shortPerson(person1));
// { n: "Mike", c: "Spain", a: 23, p: 100 }

console.log(shortPerson(person2));
// { n: "Alice", c: "Italy", a: 25, p: 0 }
