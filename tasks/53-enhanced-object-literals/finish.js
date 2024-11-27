/** ЗАВДАННЯ 53 - Скорочене написання властивостей об'єктів
 *
 * 1. Виправте всі помилки в коді.
 *
 * 2. Змініть об'єкт, що повертається функцією "photosGallery", використовуючи:
 * - Скорочені імена властивостей
 * - Скорочені імена методів
 * - Також потрібно змінити одну властивість об'єкта
 * і зробити його обчислюваною властивістю
 *
 * 3. Повідомлення в консолі повинні бути такими ж,
 * як і в кінці цього завдання
 */

const photosGallery = (title, dimensions, date) => {
  return {
    date,
    title,
    [dimensions]: true,

    info() {
      console.log(`Фото "${title}" має дозвіл ${dimensions}`);
    },

    publishInfo() {
      console.log(
        `Фото "${title}" було опубліковано ${Math.floor(
          (new Date().getTime() - date.getTime()) / 1000,
        )} секунди тому`,
      );
    },
  };
};

const myDogPhoto = photosGallery('My dog', '1920x1080', new Date());

const testDimension1 = '1920x1080';
const testDimension2 = '1080x720';

myDogPhoto.info();
/* Фото "My dog" має дозвіл 1920x1080 */

setTimeout(() => myDogPhoto.publishInfo(), 2000);
/* Фото "My dog" було опубліковано 2 секунди тому */

/* ПИТАННЯ: Чому метод "publishInfo" все ще має доступ 
до параметрів "photosGallery" (наприклад "date")? */

console.log(myDogPhoto[testDimension1]); // true
console.log(myDogPhoto[testDimension2]); // undefined

console.log(Object.keys(photosGallery()));
