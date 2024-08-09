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

let stepSum;
stepSum = sum ** 3;
console.log(stepSum);

let stepUmno;
stepUmno = umno ** 3;
console.log(stepUmno);

let array1 = [];
array1 = Array.from(String(stepSum), Number); 
console.log(array1[0], array1[1]);

let array2 = [];
array2 = Array.from(String(stepUmno), Number); 
console.log(array2[0], array2[1]);

