/** ЗАВДАННЯ 48 - Використання методу "reduce" для створення об'єкта
 *
 * 1. Створіть функцію "quantitiesByCategories" з одним параметром "products"
 *
 * 2. Ця функція повинна повертати об'єкт із ключами,
 * рівними категоріям, і значеннями,
 * рівними сумі всіх кількостей у кожній категорії
 */

const quantitiesByCategories = products => {
  return products.reduce((qtysByCategories, product) => {
    const { category, quantity } = product;

    qtysByCategories[category] = (qtysByCategories[category] || 0) + quantity;

    return qtysByCategories;
  }, {});
};

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

console.log(quantitiesByCategories(inputProducts));

/* {
  Accessories: 3,
  Phones: 1,
  Watches: 2
} */
