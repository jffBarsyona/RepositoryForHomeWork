function getNum(min, max, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            resolve(randomNum);
        }, delay);
    });
}

async function sumNumbers() {
    const onePromise = await getNum(1, 5, 3000);
    const twoPromise = await getNum(6, 10, 5000);
    const sum = onePromise + twoPromise;
    console.log(sum);
}

sumNumbers();
