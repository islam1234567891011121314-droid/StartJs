const url = 'https://purpleschool.ru/course/javascript';

function getUrlParts(url) {
    const res = url.split('/');
    const [prot, _, dom, ...other] = res;
    const res2 = other.join('/');
    
    const replace = `
    Протокол ${prot.split(':')[0]}
    домен ${dom}
    путь сайта ${res2}`
    console.log(replace);
}
console.log(getUrlParts(url));
