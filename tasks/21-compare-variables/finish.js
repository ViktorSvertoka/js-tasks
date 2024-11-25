/** ЗАВДАННЯ 21 - Порівняння змінних
 *
 * 1. Порівняйте 2 змінні "myVariable1" та "myVariable2".
 * Виведіть у консоль "true", якщо значення "myVariable1" менше або дорівнює "myVariable2".
 *
 * 2. Перетворіть обидві змінні на числа перед порівнянням.
 */

let myVariable1 = 10;
let myVariable2 = '5';

console.log(parseInt(myVariable1) <= parseInt(myVariable2));

myVariable1 = '20';
myVariable2 = 100;

console.log(parseInt(myVariable1) <= parseInt(myVariable2));
