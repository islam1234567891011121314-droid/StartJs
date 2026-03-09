const hasLicence = false;
const age = 21;
const isDrunk = false;
console.log(`Может ли он водить машину? ${(age >= 18) && (isDrunk === false) && (hasLicence === true)}.`)
console.log(`Может ли он водить машину? ${(age >= 18) && (!isDrunk) && (hasLicence) ? 'может' : 'не может'}.`)