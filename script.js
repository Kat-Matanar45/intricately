'use strict';

let argument = prompt("Какая у вас сегодня погода? И как вы планируете провести сегодняшний день?");
let type;

if (!isNaN(argument)) {
    argument = parseFloat(argument);
    type = typeof argument;
} else {
    type = typeof argument;
}

function oneArgument (type, weather) {
    if (type !== "string") {return "Принимаются только буквенные значения!"}
    weather = weather.trim();
    if (weather.length > 30) {return weather.substr(0, 30) + '...';} else {return weather}
}

console.log(type);
console.log(oneArgument(type, argument));