/** ЗАВДАННЯ 22 - Залишок від розподілу
 *
 * 1. Виведіть у консоль залишок від поділу "myNumber1" на "myNumber2".
 *
 * 2. Який пріоритет та асоціативність
 * Чи має оператор залишок від розподілу?
 *
 * 3. Перевірте асоціативність самостійно
 */

const myNumber1 = 10; // 10 = 3 + 3 + 3 + 1
const myNumber2 = 3;

const result = myNumber1 % myNumber2;

console.log(result);

// Пріоритет: Оператор % має пріоритет 13 (високий), на одному рівні з іншими арифметичними операторами множення (*), ділення (/) та піднесення до степеня (**).

// Асоціативність: Оператор залишку від ділення має асоціативність зліва направо (left-to-right).
