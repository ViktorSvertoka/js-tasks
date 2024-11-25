/** ЗАВДАННЯ 12 - Створення об'єкта
 *
 * 1. Створіть об'єкт із трьома властивостями:
 * - name
 * - surname
 * - favoriteNumber
 *
 * 2. Виведіть у консоль рядок
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const person = {
  name: 'Viktor',
  surname: 'Svertoka',
  favoriteNumber: 8,
};

console.log(
  `My name is ${person.name} ${person.surname} and my favorite number is ${person.favoriteNumber}.`,
);

const { name, surname, favoriteNumber } = person;

const personInfo = `My name is ${name} ${surname} and my favorite number is ${favoriteNumber}.`;

console.log(personInfo);
