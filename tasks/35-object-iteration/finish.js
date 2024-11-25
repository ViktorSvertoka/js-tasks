/** ЗАВДАННЯ 35 - Ітерація за властивостями об'єкта
 *
 * 1. Переберіть усі власні властивості об'єкта
 *
 * 2. Якщо ім'я властивості (ключ) дорівнює "key1" або "key3",
 * Виведіть значення якості в консоль.
 */

const myObject = {
  key1: true,
  key5: 10,
  key3: 'abc',
  key4: null,
  key10: NaN,
};

const objectKeys = Object.keys(myObject);

objectKeys.forEach(element => {
  if (element === 'key1' || element === 'key3') {
    console.log(myObject[element]);
  }
});
