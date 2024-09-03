'use strict';

let dateTime = {
    day: "Вторник",
    number: 4,
    month: "Декабря",
    year: 2024,
    hour: 14,
    minutes: 5,
    seconds: 44
}

let declination = function() {
    switch (dateTime.hour) {
        case 1:
        case 21: return 'час';
        case 2:
        case 3:
        case 4:
        case 22:
        case 23:
        case 24: return 'часа';
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20: return 'часов';
    }
}

let minutes = function() {
    let minutes2 = String(dateTime.minutes);
    switch (true) {
        case (minutes2.endsWith("1")): return " минута ";
        case (minutes2.endsWith("2")):
        case (minutes2.endsWith("3")):
        case (minutes2.endsWith("4")): return " минуты ";
        default: 
            return " минут ";
    }
};

let seconds = function() {
    let seconds2 = String(dateTime.seconds);
    switch (true) {
        case (seconds2.endsWith("1")): return " секунда ";
        case (seconds2.endsWith("2")):
        case (seconds2.endsWith("3")):
        case (seconds2.endsWith("4")): return " секунды ";
        default: 
            return " секунд ";
    }
};

console.log('Сегодня: ' + dateTime.day  + ', ' + dateTime.number + " " + dateTime.month + " " + dateTime.year + " года " + dateTime.hour + " " + declination() + ' ' + dateTime.minutes + minutes() + dateTime.seconds + seconds());