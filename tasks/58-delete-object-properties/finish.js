/** ЗАВДАННЯ 58 - Видалення властивостей об'єкта
 *
 * 1. Використовуйте деструктуризацію об'єкта разом із rest опертором,
 * щоб швидко видалити певні властивості об'єкта.
 *
 * 2. Переконайтеся, що змінні, які будуть використовуватися для деструктуризації віддалених властивостей,
 * Не будуть доступні після операції деструктуризації.
 */

let person = {
  _id: '5ad8cefcc0971792dacb3f1f',
  index: 4,
  processed: false,
  cart: ['item1', 'item2', 'item3'],
  email: 'slarsen@test.com',
  name: 'Samanta Larsen',
  cartId: 435,
};

{
  let _id, processed, cart;

  ({ _id, processed, cart, ...person } = person);
}

console.log(person);

// delete person._id;
// delete person.processed;
// delete person.cart;

console.log(person);
/*
{
  index: 4,
  email: "slarsen@test.com",
  name: "Samanta Larsen",
  cartId: 435
}
*/
