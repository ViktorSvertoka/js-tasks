/** ЗАВДАННЯ 65 - Тернарний оператор
 *
 * Змініть функцію "isNumber", використовуючи тернарний оператор
 */

function isNumber(a) {
  return typeof a === 'number' ? `${a} - це число` : `${a} - це не число`;
}

console.log(isNumber(10));
// 10 - це число

console.log(isNumber('Привіт'));
// Привіт - це не число

console.log(isNumber(true));
// true - це не число
