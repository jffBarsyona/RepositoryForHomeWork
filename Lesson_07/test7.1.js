function reverseArr(arr) {
    return Array.from(arr).reverse();
}

const currentArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const reversedArray = reverseArr(currentArray);
console.log(reversedArray);