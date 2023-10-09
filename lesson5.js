let str = '6';
let bool = true;
let num =  3;

console.log(`string = ${str}, boolean = ${bool}, number = ${num}\n`)

console.log('Сложение');
console.log(`string + boolean = ${str+bool}\nstring + number = ${str+num}\nnumber + boolean = ${num+bool}\n`);

console.log('Умножение');
console.log(`string * boolean = ${str*bool}\nstring * number = ${str*num}\nnumber * boolean = ${num*bool}\n`);

console.log('Деление');
console.log(`string / boolean = ${str/bool}\nstring / number = ${str/num}\nnumber / boolean = ${num/bool}\n`);

console.log('Преобразование строки в число:');
console.log(`Сейчас string - это ${typeof str}`);
let numFromStr = Number(str);
console.log(`После преобразования string стало ${typeof numFromStr}\n`);

console.log('Преобразование булиан в строку:');
console.log(`Сейчас boolean - это ${typeof bool}`);
let strFromBool = String(bool);
console.log(`После преобразования boolean стало ${typeof strFromBool}\n`);

console.log('Преобразование числа в булиан:');
console.log(`Сейчас number - это ${typeof num}`);
let boolFromNum = Boolean(num);
console.log(`После преобразования number стало ${typeof boolFromNum}\n`);