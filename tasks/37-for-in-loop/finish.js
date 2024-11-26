/** ЗАВДАННЯ 37 - Цикл "for .. in"
 *
 * Всередині циклу "for .. in" перед виведенням значення властивості в консоль
 * Виконайте перевірку того, що властивість є
 * Власною властивістю об'єкта
 */

const myObject = {
  name: 'Mike',
  age: 30,
  city: 'London',
};

Object.prototype.country = 'England';

for (let key in myObject) {
  if (myObject.hasOwnProperty(key)) {
    console.log(myObject[key]);
  }
}
