const rates = {
    'usd' : 1,
    'rub' : 78.25,
    'eur' : 0.86,
    'jpy' : 158.44,
}
function converter(amount, from, to){
     if (rates[from] === undefined || rates[to] === undefined) {
        return null;
    } 
    const inUsd = amount / rates[from];
    const result = inUsd * rates[to];
    return result;
}
console.log(converter(413, 'rub', 'jpy'))