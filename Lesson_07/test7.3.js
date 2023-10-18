function getFibonacci(number) {
    return number <= 1 ? number : getFibonacci(number - 1) + getFibonacci(number - 2);
};

console.log(getFibonacci(10));