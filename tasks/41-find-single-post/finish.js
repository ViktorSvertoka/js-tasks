/** ЗАВДАННЯ 41 - Пошук об'єктів у масиві
 *
 * 1. Створіть функцію "findPostById" із двома параметрами:
 * - ID поста
 * - масив постів
 *
 * 2. Функція повинна повернути пост із певним ID
 *
 * 3. Якщо посту з певним ID у масиві постів немає,
 * функція має повернути "undefined"
 *
 * 4. Також всередині функції виведіть у консоль ID посту
 */

function findPostById(postId, posts) {
  return posts.find(post => post.postId === postId);
}

const posts = [
  { postId: 1355, commentsQuantity: 5 },
  { postId: 5131, commentsQuantity: 13 },
  { postId: 6134, commentsQuantity: 2 },
];

console.log(findPostById(6134, posts)); // { postId: 6134, commentsQuantity: 2 }

console.log(findPostById(4511, posts)); // undefined
