/** ЗАВДАННЯ 68 - Перевірка наявності аргументів у виклику функції
 *
 * Змініть функцію "square" так, щоб у разі її виклику
 * без аргументу генерувалася помилка
 * "Функція "square" не може бути викликана без аргументу"
 */

function square(a) {
  if (a === undefined) {
    throw new Error(`Функція "square" не може бути викликана без аргументу`);
  }

  // if (arguments.length === 0) {
  //   throw new Error(`Функція "square" не може бути викликана без аргументу`);
  // }
  console.log(a * a);
}

square(10);
// 100

square();
// ДО: NaN
// ПІСЛЯ: Uncaught Error: Функція "square" не може бути викликана без аргументу
