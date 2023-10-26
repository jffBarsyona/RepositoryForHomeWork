function getNum() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomNum = Math.floor(Math.random() * 5) + 1;
            resolve(randomNum);
        }, 3000);
    });
}

async function squareNum() {
    const num = await getNum();
    const squareRandom = num * num;
    console.log(squareRandom);
}
squareNum();