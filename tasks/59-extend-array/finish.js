/** ЗАВДАННЯ 59 - Розширення масивів
 *
 * 1. Створіть новий клас "ExtendedArray", який має розширювати вбудований "Array"
 *
 * 2. Додайте до нового класу два методи користувача:
 * - "sum" - він повинен повертати суму всіх елементів масиву
 * - "onlyNumbers" - повинен повертати новий масив,
 * який міститиме лише числа з вихідного масиву
 *
 * 3. Створіть кілька екземплярів нового класу "ExtendedArray"
 * і протестуйте обидва методи "sum" та "onlyNumbers".
 *
 * 4. Переконайтеся, що інші методи масивів такі,
 * як "forEach", "map" також доступні
 */

class ExtendedArray extends Array {
  sum() {
    return this.reduce((sum, num) => sum + num, 0);
  }

  onlyNumbers() {
    return this.filter(element => typeof element === 'number');
  }
}

const myExtendedArray = new ExtendedArray(1, 5, 10);

console.log(myExtendedArray);

console.log(myExtendedArray.sum());

console.log(myExtendedArray.onlyNumbers());

const myExtendedArray2 = new ExtendedArray(
  'abc',
  true,
  10,
  null,
  44,
  undefined,
);

console.log(myExtendedArray2.onlyNumbers());

myExtendedArray2.forEach(element => console.log(element));
