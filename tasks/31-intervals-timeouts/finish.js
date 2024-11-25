/** ЗАВДАННЯ 31 - Інтервали та Таймаути
 *
 * Використовуйте такі вбудовані функції:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Потрібно вивести в консоль ТІЛЬКИ 5 повідомлень з інтервалом 2 секунди:
 * "Повідомлення номер 1"
 * "Повідомлення номер 2"
 * "Повідомлення номер 3"
 * "Повідомлення номер 4"
 * "Повідомлення номер 5"
 */

let i = 1;

const messageIntervalId = setInterval(() => {
  console.log(`Повідомлення номер ${i}`);
  i += 1;
}, 2000);

setTimeout(() => {
  clearInterval(messageIntervalId);
}, 11000);
