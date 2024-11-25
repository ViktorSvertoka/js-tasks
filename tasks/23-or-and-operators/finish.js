/** ЗАВДАННЯ 23 - АБО та І оператори
 *
 * Що буде виведено в консоль?
 */

console.log(3 || (true && null) || false); // <-- 3

/** КРОК 1
 * (true && null)
 * null
 */

/** КРОК 2
 * 3 || null || false
 * 3
 */

console.log(true && null && 10); // <-- null
console.log(true && 'abc' && 10); // <-- 10

console.log(10 || false); // <-- 10
