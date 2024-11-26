/** ЗАВДАННЯ 49 - Сортування об'єктів у масиві
 *
 * 1. Створіть функцію "sortProductsByPrice" з одним параметром "products"
 *
 * 2. Ця функція повинна відсортувати вхідний масив товарів
 * за ціною кожного товару в порядку зростання
 * і повернути відсортований масив
 *
 * 3. Оригінальний масив повинен залишитися без змін
 */

// const sortProductsByPrice = products => {
//   const copyOfProducts = [...products];
//   return copyOfProducts.sort((a, b) => a.price - b.price);
// };

const sortProductsByPrice = products =>
  [...products].sort((a, b) => a.price - b.price);

const inputProducts = [
  {
    title: 'Phone case',
    price: 23,
    quantity: 2,
    category: 'Accessories',
  },
  {
    title: 'Android phone',
    price: 150,
    quantity: 1,
    category: 'Phones',
  },
  {
    title: 'Headphones',
    price: 78,
    quantity: 1,
    category: 'Accessories',
  },
  {
    title: 'Sport Watch',
    price: 55,
    quantity: 2,
    category: 'Watches',
  },
];

const sortedProducts = sortProductsByPrice(inputProducts);

console.log(sortedProducts); // Масив відсортованих товарів

console.log(inputProducts); // Оригінальний масив не повинен змінитися
