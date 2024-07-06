'use strict'

//  Attention nommez vos variables en utilisant le CamelCase
// écrire des mots ou des phrases composés de telle sorte que chaque
// mot ou abréviatiion au milieu de la phrase commence 
// par une majuscule, sans escape ni ponctuation 


// une variable déclaré en var peut êtr appelé n' importe où dans le code
// Etape 1 : je déclare ma variable
var nomPrenom;
console.log(nomPrenom);
// Etape 02 : je donne une valeure à sa variable
nomPrenom = 'Abdoulaye';
console.log(nomPrenom);

var monNom = 'Fofano';
console.log(monNom);
var monNom = 'Fofana';
console.log(monNom)

// Une variable déclaré en let ne peut être utilisée que dans son scope ou son enfant
// Elles ne peuvent déclaré qu'une seulefois 

// Déclaration dans la variable dans le scope de la fonction essai
function essai() {
    let resultat
    resultat = 5
    console.log(resultat)
}
essai()
// Impossible d'appekler resultat car contenu dans le scope de la fonction
// console.log(resultat)

let a = 3;
console.log(a)
a = 15;
console.log(a)

// Const fonctionne comme le let à l'exceptiion qu'on ne peut pas chnager la valeur

const MyConst = 500
console.log(MyConst)
MyConst = 3 
console.log(MyConst)
