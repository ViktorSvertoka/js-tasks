/** ЗАВДАННЯ 78 - Класи
 *
 * 1. Створіть клас "Fruit"
 *
 * 2. У кожного екземпляра цього класу має бути
 * дві власні характеристики:
 * - title
 * - price
 *
 * 3. Також потрібно додати метод "priceInfo", який
 * повертатиме рядок, що містить назву та ціну фрукта
 *
 * 4. Висновки в консолі повинні збігтися
 */

class Fruit {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  priceInfo() {
    return `Price of the ${this.title} is ${this.price}$`;
  }
}

const apple = new Fruit('Apple', 2);
console.log(apple.priceInfo());
// Price of the Apple is 2$

const orange = new Fruit('Orange', 3);
console.log(orange.priceInfo());
// Price of the Orange is 3$
