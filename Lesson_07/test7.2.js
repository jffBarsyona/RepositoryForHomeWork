function getMaxNum(arr) {
    return Math.max(...arr);
}

const numbers = [3, 67, 15, 42, 9];
const maxNumber = getMaxNum(numbers);

console.log(maxNumber);