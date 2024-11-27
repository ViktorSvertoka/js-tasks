/** ЗАВДАННЯ 61 - Сума чисел
 *
 * 1. Створіть функцію "sumNumbers", яка сумуватиме всі передані їй аргументи.
 * Кількість аргументів невідома
 *
 * 2. Використовуйте console.log всередині функції для виведення результату
 *
 * 3. Також поверніть цю суму як результат функції
 */

function sumNumbers() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log('Sum of all arguments is', sum);

  return sum;
}

sumNumbers(1, 3);
// 4

sumNumbers(10, 20, 5);
// 35

sumNumbers(2, 5, 80, 1, 10, 12);
// 110
