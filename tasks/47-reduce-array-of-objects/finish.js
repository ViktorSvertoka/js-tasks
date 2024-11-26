/** ЗАВДАННЯ 47 - Використання методу "reduce" для створення масиву
 *
 * 1. Створіть функцію "popularPostsIds" з двома параметрами "posts" та "minimalCommentsQty"
 *
 * 2. Ця функція "popularPostsIds" повинна повертати масив ідентифікаторів постів повідомлень,
 * у яких кількість коментарів не менше "minimalCommentsQty"
 */

const popularPostsIds = (posts, minimalCommentsQty) => {
  return posts.reduce(
    (postIds, post) =>
      post.comments >= minimalCommentsQty
        ? postIds.concat([post.postId])
        : postIds,
    [],
  );
};

const inputPosts = [
  {
    title: 'Як швидко вивчити JavaScript?',
    postId: 3421,
    comments: 25,
  },
  {
    title: 'Де використовується JavaScript?',
    postId: 5216,
    comments: 3,
  },
  {
    title: 'Яка різниця між React та Angular?',
    postId: 8135,
    comments: 12,
  },
];

console.log(popularPostsIds(inputPosts, 10)); // [3421, 8135]

console.log(popularPostsIds(inputPosts, 15)); // [3421]

console.log(popularPostsIds(inputPosts, 50)); // []
