/** ЗАВДАННЯ 40 - Конвертація JSON на JavaScript об'єкти
 *
 * 1. Конвертуйте масив JSON об'єктів у масив об'єктів JavaScript
 *
 * 2. Виведіть у консоль результуючий масив
 *
 * 3. Виведіть у консоль "postId" другого об'єкта
 *
 * 4. Виведіть у консоль "commentsQuantity" останнього об'єкта
 */

const postsJSON = [
  '{"postId":1355,"commentsQuantity":5}',
  '{"postId":5131,"commentsQuantity":13}',
  '{"postId":6134,"commentsQuantity":2}',
  '{"postId":2351,"commentsQuantity":8}',
];

const postsJS = postsJSON.map(post => JSON.parse(post));

console.log(postsJS);

console.log(postsJS[1].postId);

console.log(postsJS[3].commentsQuantity);

console.log(postsJS[postsJS.length - 1].commentsQuantity);
