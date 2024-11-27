/** ЗАВДАННЯ 75 - Перебір символів рядка
 *
 * Підрахуйте кількість малих голосних літер у рядку.
 *
 * Голосні літери - a, e, i, o, u
 */

let vowelsCount = 0;

const vowels = ['a', 'e', 'i', 'o', 'u'];

const str = 'Today is the best day of my life';

// Напишіть код тут

str.split('').forEach(char => {
  if (vowels.includes(char)) {
    vowelsCount += 1;
  }
});

console.log(vowelsCount);
// 9
