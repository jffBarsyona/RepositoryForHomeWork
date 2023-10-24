function checkEquality(values) {
    const arr = Array.from(String(values), Number);
    const half = arr.slice(0, Math.ceil(arr.length / 2));

    let sumFirstHalf = 0;
    let sumLastHalf = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i < half.length) {
            sumFirstHalf += half[i];
        }
        else {
            sumLastHalf += arr[i];
        }
    }
    return sumFirstHalf === sumLastHalf ? 'Да' : 'Нет';
}
const num = 123456;

const resultEquality = checkEquality(num);
console.log(resultEquality);
