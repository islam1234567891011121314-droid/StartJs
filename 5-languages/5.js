const ru = "ru";
const jp = "jp";
const es = "es";
const fr = "fr";
const de = "de";
const en = "en";
const lang = String(prompt('Введите ваш язык из следующих вариантов: ru,jp,es,fr. По умолчанию будет стоит английский'))
switch(lang){
    case "ru":
        console.log('Добрый день!');
        break
    case "jp":
        console.log('こんにちは!');
        break
    case "es":
        console.log('Buenas tardes!');
        break
    case "fr":
        console.log('Bon après-midi!');
        break
    case "de":
        console.log('Gutten tag!');
        break
    case "en":
        console.log('Good afternoon!');
        break
    default:
         console.log('Good afternoon!');
}
