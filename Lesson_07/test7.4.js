function countSameValues(num1, num2) {
    const toString1 = num1.toString().split('').map(Number);
    const toString2 = num2.toString().split('').map(Number);
    const samePositionAndValue = [];
    const sameValues = [];
    for (let i = 0; i < 4; i++) {
        if (toString1[i] === toString2[i]) {
            samePositionAndValue.push(toString1[i]);
        }
        else if (toString1.includes(toString2[i])) {
            sameValues.push(toString2[i]);
        }
    }
    const samePositionAndValueCount = samePositionAndValue.length;
    const sameValuesCount = sameValues.length;


    return [samePositionAndValueCount, sameValuesCount];
}

const num1 = 3487;
const num2 = 3794;

const [samePositionAndValue, sameValues] = countSameValues(num1, num2);
console.log(`Всего совпадений по значению и позиции: ${samePositionAndValue}`);
console.log(`Всего совпадений только по значению: ${sameValues}`);

