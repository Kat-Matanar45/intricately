'use strict';
let addDiv = document.createElement('div');
document.body.append(addDiv);

const updateTime = () => {
    const date = new Date();
    const dateData = date.getDate();
    const dateHours = date.getHours();
    const dateMinutes = date.getMinutes();
    const dateSeconds = date.getSeconds();
    const dateMonth = date.getMonth();
    const dateYear = date.getFullYear();
    const dataRu = date.toLocaleString("ru", {
        timeZone: 'Asia/Yekaterinburg'
    });

    let week = () => {
        switch (date.getDay()) {
            case 0:
                return 'Воскресенье';
            case 1:
                return 'Понедельник';
            case 2:
                return 'Вторник';
            case 3:
                return 'Среда';
            case 4:
                return 'Четверг';
            case 5:
                return 'Пятница';
            case 6:
                return 'Суббота';
        }
    };

    let month = () => {
        switch (dateMonth) {
            case 0:
                return 'января';
            case 1:
                return 'ферваля';
            case 2:
                return 'марта';
            case 3:
                return 'апреля';
            case 4:
                return 'мая';
            case 5:
                return 'июня';
            case 6:
                return 'июля';
            case 7:
                return 'августа';
            case 8:
                return 'сентября';
            case 9:
                return 'октября';
            case 10:
                return 'ноября';
            case 11:
                return 'декабря';
        }
    };

    let declination = () => {
        switch (dateHours) {
            case 1:
            case 21:
                return 'час';
            case 2:
            case 3:
            case 4:
            case 22:
            case 23:
            case 24:
                return 'часа';
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
            case 20:
                return 'часов';
        }
    }

    let minutes = () => {
        let minutes2 = String(dateMinutes);

        let lastTwoDigits = minutes2.slice(-2);

        if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
            return " минут ";
        };

        switch (true) {
            case (minutes2.endsWith("1")):
                return " минута ";
            case (minutes2.endsWith("2")):
            case (minutes2.endsWith("3")):
            case (minutes2.endsWith("4")):
                return " минуты ";
            default:
                return " минут ";
        }
    };

    let seconds = () => {
        let seconds2 = String(dateSeconds);
        let lastTwoDigits = seconds2.slice(-2);

        if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
            return " секунд ";
        };

        switch (true) {
            case (seconds2.endsWith("1")):
                return " секунда ";
            case (seconds2.endsWith("2")):
            case (seconds2.endsWith("3")):
            case (seconds2.endsWith("4")):
                return " секунды ";
            default:
                return " секунд ";
        }
    };

    addDiv.innerHTML = `
    Сегодня: ${week()},  ${dateData} ${month()} ${dateYear} года ${dateHours} ${declination()} ${dateMinutes} ${minutes()} ${dateSeconds} ${seconds()} <br>
    ${dataRu}
`
};

setInterval(updateTime, 1000);

updateTime();