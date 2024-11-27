/** ЗАВДАННЯ 69 - Деструктуризація об'єктів
 *
 * Створіть функцію "mult", в якій будуть множитися
 * значення властивостей x, y, z переданого об'єкта
 *
 * Результат множення поверніть із функції
 */

const objectWithNumbers = {
  x: 5,
  y: 20,
  z: 3,
};

// Створіть функцію тут

const mult = ({ x, y, z }) => x * y * z;

const result = mult(objectWithNumbers);

console.log(result); // 300
