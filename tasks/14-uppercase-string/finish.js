/** ЗАВДАННЯ 14 - Рядок великими літерами
 *
 * 1. Створіть змінну і надайте їй будь-який рядок
 *
 * 2. Переконайтеся, що значення цієї змінної НЕ є екземпляром String
 * Використовуйте для цього оператор "instanceof"
 *
 * 3. Переконайтеся, що значення цієї змінної має тип "string"
 *
 * 4. Створіть іншу змінну та її значенням має бути значення
 * Першої змінної великими літерами
 *
 * 5. Виведіть у консоль значення другої змінної
 */

const myFavoritePerson = 'Steve Jobs';

console.log(myFavoritePerson instanceof String);

console.log(typeof myFavoritePerson);

const personToUpperCase = myFavoritePerson.toUpperCase();

console.log(personToUpperCase);

const myString = new String('Steve');

console.log(myString instanceof String);

console.log(typeof myString);

console.log(myString.toUpperCase());
