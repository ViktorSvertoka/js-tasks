/** ЗАВДАННЯ 80 - Сума позитивних та негативних чисел
 *
 * 1. Створіть функцію "sumPositiveNegative", яка приймає масив
 * і підсумовує окремо позитивні та негативні числа.
 *
 * 2. Функція повинна повернути такий об'єкт:
 * {
 * positive: 74, // сума всіх позитивних чисел
 * negative: -54 // сума всіх негативних чисел
 * }
 */

const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

// Створіть функцію "sumPositiveNegative" тут

function sumPositiveNegative(arr) {
  return arr.reduce(
    (sums, num) => {
      if (num > 0) {
        return {
          positive: sums.positive + num,
          negative: sums.negative,

          // ...sums,
          // positive: sums.positive + num,
        };
      }
      return {
        positive: sums.positive,
        negative: sums.negative + num,

        // ...sums,
        // negative: sums.negative + num,
      };
    },
    { positive: 0, negative: 0 },
  );
}

const result = sumPositiveNegative(nums);

console.log(result); // { positive: 74, negative: -54 }
