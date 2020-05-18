// У вас есть массив с элементами в виде положительных чисел.
// Найдите сумму таких элементов массива.
// Использовать встроенные методы массивов — нельзя.

////////////////// Задание //////////////////
// const array = [2, -1, -3, 15, 0, 4];

////////////////// Решение //////////////////
const array = [2, -1, -3, 15, 0, 4];
let sum = 0;
for (num of array) {
    if (num > 0) {
        sum += num;
    }
}
console.log(sum);