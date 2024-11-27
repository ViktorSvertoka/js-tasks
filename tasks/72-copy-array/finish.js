/** ЗАВДАННЯ 72 - Копія масиву
 *
 * Створіть копію масиву.
 *
 * При зміні копії масиву оригінальний масив не повинен змінюватися
 */

const a = [1, 2, 3];

// Напишіть код тут

// const b = Array.from(a);

// const b = JSON.parse(JSON.stringify(a));

const b = [...a];

b.push('newElement');

console.log(a);
// [1, 2, 3]

console.log(b);
// [1, 2, 3, "newElement"]
