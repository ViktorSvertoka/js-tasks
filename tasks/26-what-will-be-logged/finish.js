/** ЗАВДАННЯ 26 - Що буде виведено в консолі
 *
 * Що буде виведено в консолі?
 * Дайте відповідь на запитання без запуску коду
 */

function fn() {
  console.log('Привіт із функції fn');

  return function (a) {
    console.log(a);
  };
}

fn()(true);
