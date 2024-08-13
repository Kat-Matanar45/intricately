'use strict';
/** document = "index.html";
 
const exampleAttr = document.querySelector("html");
const lang = exampleAttr.getAttribute("lang");
console.log(exampleAttr, lang); */ 
// увы, но так и не заработал этот код

let lang = 'ru';

if (lang = 'ru') {
    console.log("Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
} else (lang = 'en') {
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}

switch(true) {
    case lang = "ru":
        console.log("Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
        break
    case lang = "en":
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
        break
}

let namePerson = "Артем";
namePerson = "Артем" ? console.log('Директор') : (= namePerson = "Александр" ? console.log('Преподаватель') : (= namePerson = !"Артем" && !"Александр" ? console.log('Студент')))
    