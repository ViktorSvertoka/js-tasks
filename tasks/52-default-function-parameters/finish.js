/** ЗАВДАННЯ 52 - Параметри функції за промовчанням
 *
 * 1. Створіть функцію "weatherForecast" з двома параметрами "city" та "weather"
 *
 * 2. Якщо другий аргумент відсутній,
 * параметр "weather" повинен отримати значення "Відмінна погода!"
 *
 * ВАЖЛИВО:
 * - Спочатку вирішіть це БЕЗ параметра функції за замовчуванням
 * - Закоментуйте попереднє рішення
 * і вирішіть ту ж задачу з параметром функції за замовчуванням
 *
 * ПРИМІТКА:
 * Уважно порівняйте свої результати з результатами тестових викликів
 */

const weatherForecast = (city, weather) => {
  weather = weather !== undefined ? weather : 'Чудова погода';
  return `Прогноз погоди для міста ${city}: ${weather}.`;
};

console.log(weatherForecast('Dubai', 'Сонячно'));
// Прогноз погоди для міста Дубай: Соняшно

console.log(weatherForecast('London', 'Невеликий дощ'));
// Прогноз погоди для міста London: Без опадів.

console.log(weatherForecast('Paris'));
// Прогноз погоди для міста Paris: Чудова погода!

console.log(weatherForecast('Miami', ''));
// Прогноз погоди для міста Miami:

console.log(weatherForecast('Las Vegas', undefined));
// Прогноз погоди для міста Las Vegas: Чудова погода!
