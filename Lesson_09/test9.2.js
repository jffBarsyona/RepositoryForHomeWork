function divideNumber(value, minValue) {
    let num = 0;
    while (value >= minValue) {
        value = value / 2;
        num++;
    }
    return {
        result: value,
        iterations: num
    };
}

const currentValue = 1000;
const minValue = 50;

const { result, iterations } = divideNumber(currentValue, minValue);
console.log(`Результат деления: ${result}.Количество итераций: ${iterations}`);