/** ЗАВДАННЯ 34 - Масив об'єктів
 *
 * 1. Створіть масив із 3 об'єктами "cars"
 *
 * 2. Кожен об'єкт повинен мати три властивості
 * - carBrand (рядок)
 * - price (число)
 * - isAvailableForSale (логічне значення)
 *
 * 3. Додайте ще один об'єкт у масив
 *
 * 4. Виведіть результуючий масив у консоль
 */

const cars = [
  {
    carBrand: 'Tesla',
    price: 70000,
    isAvailableForSale: true,
  },
  {
    carBrand: 'BMW',
    price: 60000,
    isAvailableForSale: true,
  },
  {
    carBrand: 'Toyota',
    price: 40000,
    isAvailableForSale: false,
  },
];

cars.push({
  carBrand: 'Honda',
  price: 30000,
  isAvailableForSale: false,
});

const newCar = {
  carBrand: 'Mazda',
  price: 20000,
  isAvailableForSale: true,
};

cars.push(newCar);

console.log(cars);
