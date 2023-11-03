'use strict';

console.log("Перевірка зв'язку");

// Функція findNumber(start, end, divisor)
// приймає три параметра, які є цілими числами.

// Доповни код функції таким чином, щоб вона:

// повертала перше число у діапазоні від start до end включно,
// яке ділиться на divisor без остачі
// не використовуй оператор break

// function findNumber(start, end, divisor) {
//   for (let i = start; i < end; i++) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }

// console.log(findNumber(16, 35, 7)); // 21
// console.log(findNumber(2, 6, 5)); // 5
// console.log(findNumber(6, 9, 4)); // 8

// _______________________________________________________________
// Перед розв'язанням цієї задачі варто зазначити,
// що таке спільні елементи. Спільними елементами
// масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3]
// спільними будуть числа 3 і 5, оскільки вони присутні
// в обох вхідних масивах. А числа 0, 1 і 8 присутні тільки
// в одному з масивів.

// Функція getCommonElements(array1, array2), приймає два
// масиви (array1 та array2) довільної довжини в якості параметрів.

// Доповни код функції:

// Створи порожній масив для зберігання нового масиву.
// Використай цикл for для ітерації кожного елемента у array1.
// У тілі циклу перевір, чи поточний елемент існує у array2
// за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// Поверни наповнений масив спільних елементів як результат
// роботи функції.

// function getCommonElements(array1 = [], array2 = []) {
//   const newArray = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   return newArray;
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []

// ___________________________________________________

// Доповни код функції calculateTotalPrice(order) так,
//  щоб вона повертала загальну суму чисел в масиві order.
//  Використай цикл for...of для перебору масиву.

// Оголошена функція calculateTotalPrice(order)

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const element of order) {
//     total += element;
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116
// console.log(calculateTotalPrice([])); // 0

// ____________________________________________________

// Функція createReversedArray() може приймати довільну кількість
// аргументів. Доповни код функції так, щоб вона повертала масив
// усіх аргументів, але в масиві вони повинні йти у зворотному порядку.
// Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути
//  масив [3, 2, 1]. Використовуй цикл або метод масиву toReversed(),
//  який застосовується до масиву і результатом роботи повертає новий
//  масив з елементами у зворотньому порядку.

// function createReversedArray() {
//   const args = Array.from(arguments);
//   return args.reverse();
// }

// console.log(createReversedArray(12, 85, 37, 4)); // повертає [4, 37, 85, 12]
// console.log(createReversedArray(164, 48, 291)); // повертає [291, 48, 164]
// console.log(createReversedArray(412, 371, 94, 63, 176)); // повертає [176, 63, 94, 371, 412]
// console.log(createReversedArray()); // повертає []

// __________________________________________________________________

// Функція calculateTax(amount, taxRate) оголошує два параметри:

// amount - число, сума від якої потрібно обчислити податок.
// Обов'язковий параметр.
// taxRate - число, податкова ставка. Необов'язковий параметр.
// За замовчуванням його значення має бути 0.2.
// Доповни код функції так, щоб вона повертала суму податку -
// результат множення суми на податкову ставку.

// function calculateTax(amount, taxRate = 0.2) {
//   return amount * taxRate;
// }

// console.log(calculateTax(100, 0.1)); // повертає 10
// console.log(calculateTax(200, 0.1)); // повертає 20
// console.log(calculateTax(100, 0.2)); // повертає 20
// console.log(calculateTax(200, 0.2)); // повертає 40
// console.log(calculateTax(100, 0.3)); // повертає 30
// console.log(calculateTax(200, 0.3)); // повертає 60
// console.log(calculateTax(100)); // повертає 20
// console.log(calculateTax(200)); // повертає 40

// ____________________________________________________________________
// function count(from, to, step = 1) {
//   console.log(`from: ${from}, to: ${to}, step: ${step}`);

//   for (let i = from; i <= to; i += step) {
//     // ...
//   }
// }

// count(1, 15, 4); // "from: 1, to: 15, step: 4"
// count(1, 15); // "from: 1, to: 15, step: 1"

// ________________________________________________________________________
