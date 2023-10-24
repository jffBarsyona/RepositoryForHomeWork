function sortArr(arr, sortAscending = true) {
    //копия массива для избегания изменения оригинального массива
    const sortedArray = Array.from(arr);
    if (sortAscending) {
        sortedArray.sort((a, b) => a - b);
    } else {
        sortedArray.sort((a, b) => b - a);
    }
    return sortedArray;
}

const numbers = [3, 67, 15, 42, 9];

const sortedAscending = sortArr(numbers, true);
const sortedDescending = sortArr(numbers, false);

console.log("Сортировка по возрастанию:", sortedAscending);
console.log("Сортировка по убыванию:", sortedDescending);

