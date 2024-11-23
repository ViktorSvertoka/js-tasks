/** ЗАВДАННЯ 4 - Об'єднання рядків
 *
 * 1. Оголосіть три змінні зі значеннями:
 * - ваше ім'я
 * - ваше прізвище
 * - ваша професія
 *
 * 2. Створіть ще одну змінну. Її значення має бути, наприклад
 * "Мене звуть <ім'я> <прізвище> і я <професія>"
 *
 * 3. Виведіть значення останньої змінної в консоль
 */

const firstName = 'Viktor';

const lastName = 'Svertoka';

const myProfession = 'Software Developer';

// Варіант 1
const aboutMySelf1 = `Мене звуть ${firstName} ${lastName} і я ${myProfession}.`;

console.log(aboutMySelf1);

// Варіант 2
const aboutMySelf2 =
  'Мене звуть ' + firstName + ' ' + lastName + ' і я ' + myProfession + '.';

console.log(aboutMySelf2);
