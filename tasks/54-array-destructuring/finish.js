/** ЗАВДАННЯ 54 - Деструктуризація масиву
 *
 * Змініть розділ параметрів у функції "processQuantities" так,
 * щоб збіглися висновки в консолі
 *
 * Використовуйте деструктуризацію масиву
 */

const processQuantities = array => {
  const [minQty, maxQty, defaultQty = 0] = array;

  console.log(minQty); // 8
  console.log(maxQty); // 29
  console.log(defaultQty); // 10 у першому виклику, 0 у другому виклику
  return defaultQty + maxQty - minQty;
};

const inputQuantities1 = [8, 29, 10];
console.log(processQuantities(inputQuantities1)); // 31

const inputQuantities2 = [8, 29];
console.log(processQuantities(inputQuantities2)); // 21
