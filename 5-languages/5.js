const ru = ["ru","RU","Rus"];
const jp = ["jp","JP","Jap"];
const es = ["es","ES","Esp"];
const fr = ["fr","FR","Fra"];
const lang = String(prompt('Введите ваш язык из следующих вариантов: ru,jp,es,fr. По умолчанию будет стоит английский'))
switch(lang){
    case "ru":
    case "RU":
    case "Rus":
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
    default:
         console.log('Good afternoon!');
}
