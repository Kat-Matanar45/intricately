'use strict';
/** document = "index.html";
 
const exampleAttr = document.querySelector("html");
const lang = exampleAttr.getAttribute("lang");
console.log(exampleAttr, lang); */ 
// увы, но так и не заработал этот код

let lang = "ru";

if (lang == "ru") {
    console.log("Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
} else if (lang == "en") {
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}

switch(true) {
    case lang == "ru":
        console.log("Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
        break
    case lang == "en":
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
        break
}

let langsArray = []; 
langsArray["ru"] = ["Понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
langsArray["en"] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(langsArray[lang]);

let namePerson = "Александр";
namePerson == "Артем" ? console.log('Директор') : namePerson == "Александр" ? console.log('Преподаватель') : (namePerson != "Артем") && (namePerson != "Александр") ? console.log('Студент') : stop