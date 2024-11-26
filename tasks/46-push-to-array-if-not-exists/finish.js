/** ЗАВДАННЯ 46 - Додавання унікальних елементів до масиву
 *
 * 1. Створіть функцію "pushIfUnique" з двома параметрами "inputArray" та "newElement"
 *
 * 2. Якщо "inputArray" вже містить "newElement",
 * виведіть у консоль "{newElement} вже знаходиться в масиві"
 *
 * 3. В іншому випадку додайте "newElement" в "inputArray"
 *
 * ПРИМІТКА: Ми припускаємо, що "inputArray" містить елементи лише примітивних типів
 */

const pushIfUnique = (inputArray, newElement) => {
  if (inputArray.includes(newElement)) {
    return console.log(`${newElement} вже знаходиться в масиві.`);
  }

  return inputArray.push(newElement);
};

const myNumbers = [123, 50, 27];

pushIfUnique(myNumbers, 50); // "50 вже в масиві"
console.log(myNumbers); // [123, 50, 27]

pushIfUnique(myNumbers, 80);
console.log(myNumbers); // [123, 50, 27, 80]

pushIfUnique(myNumbers, 80); // "80 вже в масиві"
console.log(myNumbers); // [123, 50, 27, 80]

pushIfUnique(myNumbers, 77);
console.log(myNumbers); // [123, 50, 27, 80, 77]
