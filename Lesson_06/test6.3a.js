function splitNum(num, parts) {
    let result = [];
    let lastNum = num;

    if (parts <= 0) {
        console.error(`Ошибка ввода. Число разбито на ${parts}.`);
        return null;
    }
    else {
        for (let i = 0; i < parts - 1; i++) {
            count = Math.floor(Math.random() * (lastNum));
            result.push(count);
            lastNum -= count;
        }
    }
    result.push(lastNum);
    return result;
}

let num = 15;
let parts = 3;
let result = splitNum(num, parts)

if (result != null) console.log(`Число ${num} разбито на ${parts}. Результат: ${result}`);
