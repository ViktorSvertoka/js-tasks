/** ЗАВДАННЯ 64 - Hoisting
 *
 * Змініть код, щоб виправити помилку після рядка 13.
 *
 * Помилка після рядка 21 все одно має генеруватися.
 * Чому помилка після рядка 21 виникає?
 */

const a = 5;
const b = 10;

if (b > a) {
  let c = 2;
  c = a + b + c;

  // ДО: ReferenceError: Cannot access 'c' before initialization
  // ПІСЛЯ: Немає помилки

  console.log(c);
  // 17
}

console.log(c);
// Uncaught ReferenceError: c is not defined
