/** ЗАВДАННЯ 57 - Трансформація масиву об'єктів
 *
 * 1. Створіть функцію "processPosts", яка повертатиме новий масив повідомлень
 *
 * 2. Зверніть увагу, що
 * - деякі імена властивостей у кожному повідомленні змінені
 * - ID кожного повідомлення збільшено на 1000
 *
 * 3. Вихідний масив постів має залишитися без змін
 */

const processPosts = posts => {
  return posts.map(post => {
    const {
      postId,
      author: postAuthor,
      commentsQty: postCommentsQty = 0,
    } = post;

    return {
      postAuthor,
      postCommentsQty,
      postId: postId + 1000,
    };
  });
};

const testPosts = [
  {
    postId: 234,
    author: 'robd',
    commentsQty: 5,
  },
  {
    postId: 823,
    author: 'sady',
  },
  {
    postId: 161,
    author: 'merryl',
    commentsQty: 8,
  },
];

const processedPosts = processPosts(testPosts);
console.log(processedPosts);
/*
[
  {
    postId: 1234,
    postAuthor: 'robd',
    postCommentsQty: 5
  },
  {
    postId: 1823,
    postAuthor: 'sady',
    postCommentsQty: 0
  },
  {
    postId: 1161,
    postAuthor: 'merryl',
    postCommentsQty: 8
  }
]
*/

console.log(testPosts);
// оригінальний масив має залишитися без змін
