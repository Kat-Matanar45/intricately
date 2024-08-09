let num = 266219;
let array = [];
let sum = 0;
let umno = 1;

array = Array.from(String(num), Number);
console.log(array);

for(let i = 0; i<array.length; i++) {
    sum += array[i];
    umno *= array[i];
}

console.log("Сумма цифр числа равна" + " " + sum);
console.log("Умножение:" + " " + umno);