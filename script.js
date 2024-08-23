'use strict';

let array = [20,13,14,8,45,3,11];

for (let i=0; i<array.length; i++) {
    let currentElem = array[i];
    currentElem = String(currentElem);
    if ((currentElem.startsWith("2") === true) || (currentElem.startsWith("4") === true)) {
        console.log(currentElem);
    }};

for (let n=1; n<=100; n++) {
    let array = [];
for (let h=1; h<=n; h++) {
    let division = n%h;
    if (division === 0) {array.push(h);}
}
if (array.length == 2) {   
    console.log(n, 'Делители этого числа: 1 и ' + n);
}}

