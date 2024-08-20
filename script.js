'use strict';

let array = [20,13,14,8,45,3,11];

for (let i=0; i<array.length; i++) {
    let currentElem = array[i];
    currentElem = String(currentElem);
    if ((currentElem.charAt(0) === '2') || (currentElem.charAt(0) === '4')) {
        console.log(currentElem);
    }};


for (let n=0; n<=100; n++) {
    console.log(n, 'Делители этого числа: 1 и ' + n);
}

let n=0;
while (n>=100) {
    console.log(n, 'Делители этого числа: 1 и ' + n);
}