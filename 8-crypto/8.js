function crypto(password){
const word = password;
const middle = Math.floor(word.length / 2);
const part1 = word.slice(0, middle).split('').reverse().join('');
const part2 = word.slice(middle).split('').reverse().join('');
return part1.concat(part2)
}

function check(enry, password){
return crypto(enry) === password;
}
console.log(crypto('password'));
console.log(check('ssapdrow', 'password'));
console.log(check('ssapdrow', 'wrong'));