'use strict';

let array = [20,13,14,8,45,3,11];

for (let i=0; i<array.length; i++) {
    let currentElem = array[i];
    currentElem = String(currentElem);
    if ((currentElem.charAt(0) === '2') || (currentElem.charAt(0) === '4')) {
        console.log(currentElem);
    }};
