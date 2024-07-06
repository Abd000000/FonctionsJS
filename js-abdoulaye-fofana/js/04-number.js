'use strict';

let num01, num02, numNegatif, numVirgule;
num01 = 10;
num02 = 4;
numNegatif = -2;
numVirgule = 2.5;

// Addition 
let somme = num01 + num02;
console.log(somme);

// Soustraction
let difference = num01 - num02;
console.log(difference);

// Produit
let produit = numNegatif * numVirgule;
console.log(produit);

// Quotient
let quotient = num01 / numNegatif;
console.log(quotient);

// Modulo
let modulo = num01 % numNegatif;
console.log(modulo);

// Méthode (fonctions) Mathématiques 
// Valeur PI
let pi = Math.PI;
console.log(pi);


// Arrondir un chiffre
// Arrondi en dessous si inférieur ou égal à x,4
// Arrondi au dessus si inférieur ou égal à x,5

let arrondi = Math.round(2.41);
console.log(arrondi);
arrondi = Math.round(numVirgule);
console.log(arrondi);

// Méthode 02 : Math.floor(x) arrondi à l'entier inférieur
let arrondiBas = Math.floor(numVirgule);
console.log(arrondiBas)

// Méthode03 : Math.cell(x) arrondi à l'entier supérieur 
let arrondiHaut = Math.ceil(numVirgule);
console.log(arrondiHaut);

// Racine Carré : Maths.sqrt(x)
let racineCarre = Math.sqrt(num02);
console.log(racineCarre);

// valeur absolue : math.abs(x);
let valAbsolue = Math.abs(numNegatif);
console.log(valAbsolue);

// Puissance : Math.pox(chiffre, puissance)
let puissance = Math.pow(10, 5)
console.log(puissance)
puissance = Math.pow(num02, 2);
console.log(puissance);

// Valeur minimu d'une suite 
let valMinSuite = Math.min(1, 2, 3, 4, 5);
console.log(valMinSuite);

// Attention à ne pas insérer de chaine de caractère
valMinSuite = Math.min(1, 2, 3, 4, 5, "test");
console.log(valMinSuite);

// Valeur Maximum d'une suite 
let valMaxSuite = Math.max(1, 2, 3, 4, 5);
console.log(valMaxSuite);

// Choisir le nnombre de chiffres après la virgule 
let numLong = 2.8578664468646;
let arrondiChiffre = numLong.toFixed(2);
console.log(arrondiChiffre);

// Convertir un nombre en chaine de caractère
let converstring = String(num01);
console.log(converstring);

// Convertir une chaine d ecaractère au format nombre
