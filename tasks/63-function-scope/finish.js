/** ЗАВДАННЯ 63 - Зона видимості функції
 *
 * Що буде виведено в консоль?
 * Дайте відповідь на запитання без запуску коду
 */

const b = 2;
let d = 15;

function myFn1(a) {
  let b;
  let d = 10;
  myFn2(b);
}

function myFn2(a) {
  let c = 5;
  console.log(a, b, c, d); // undefined 2 5 15
}

myFn1();
