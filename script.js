'use strict';

let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
const divWeek = document.createElement('div');
const date = new Date();
const nDay = date.getDay();

document.body.append(divWeek);
divWeek.textContent = week;

for (let i=0; i<week.length; i++) {
    const pWeek = document.createElement('p');
    divWeek.append(pWeek);
    pWeek.textContent = week[i];

    if ((week[i] === 'Суббота') || (week[i] === 'Воскресенье')) {
        pWeek.style.fontStyle = 'italic';
    };

    if ((i+1) === nDay) {
        pWeek.style.fontWeight = '700';
    }

}

console.log(week);
