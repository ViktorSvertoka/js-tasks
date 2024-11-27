/** ЗАВДАННЯ 79 - Перебір властивостей об'єкта
 *
 * 1. Створіть функцію "sumObjectValues", яка буде підсумовувати
 * Усі значення властивостей, які є числами.
 *
 * 2. Суму чисел необхідно повернути з функції
 *
 * 3. Переконайтеся, що ітерація виконується лише
 * за власними властивостями об'єкта
 */

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
};

// Створіть функцію тут

const sumObjectValues = nums => {
  let sum = 0;

  Object.keys(nums).forEach(key => {
    if (typeof nums[key] === 'number') {
      sum += nums[key];
    }
  });

  return sum;
};

const result = sumObjectValues(objectWithNumbers);
console.log(result);
//42
