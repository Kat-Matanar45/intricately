'use strict';

let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

console.log(week);

for (let i=0; i<week.length; i++) {
    console.log(week[i]);

    if ((week[i] === "Суббота")) {
        let str = week[i];
        week[i] = str.bold();
    }
}

