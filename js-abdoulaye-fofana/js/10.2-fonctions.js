'use strict'


// ------- Arrow 
param01 => param01 * 10;
// OU
param01 => {return param01*10};
// OU
(param01) => param01*10;
// OU
(param01) => (param01 * 10);
// EQUIVAUT 
function multipleDix(param01) {
    let resultat = param01 * 10;
    return resultat;
}
console.log(multipleDix(15));