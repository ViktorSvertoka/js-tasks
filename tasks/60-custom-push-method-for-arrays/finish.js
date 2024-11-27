/** ЗАВДАННЯ 60 - Модифікований метод push для масивів
 *
 * 1. Створіть новий клас "CustomArray", який має розширювати вбудований "Array"
 *
 * 2. Додайте один метод "customPush" в новий клас.
 * Цей метод матиме один параметр "newElement".
 *
 * При виклику цього методу необхідно виконати такі дії:
 * - Додати новий елемент до існуючого масиву
 * (не використовуйте для цього метод "push")
 * - Змінити властивість "length" масиву (збільшити його на 1)
 * - Вивести в консоль наступний рядок:
 * "Новий елемент <newElement> був щойно доданий до масиву"
 *
 * 3. Створіть екземпляр нового класу "CustomArray"
 * і протестуйте новий метод "customPush" та порівняйте його з "push"
 *
 * 4. Що станеться, якщо ім'я користувача методу
 * у класі "CustomArray" також буде "push" замість "customPush"?
 * Спробуйте це.
 */

class CustomArray extends Array {
  customPush(newElement) {
    console.log(this.length);
    this[this.length] = newElement;
    console.log(this.length);
    console.log(`Новий елемент ${newElement} був щойно доданий до масиву`);
  }
}

const myCustomArray = new CustomArray(10, 5, 1, 777);

myCustomArray.customPush(24);

console.log(myCustomArray);
