'use strict';

let firstName = 'Abdoulaye';
console.log(firstName);

// Déclaration chaine de caractère 
let declarationGuillemet = "Bonjour guillemet, c'est super";
console.log(declarationGuillemet);
let declarationApostrophe = 'Bonjour apostrophe, c\'est super';
console.log(declarationApostrophe);
let declarationBacktick = `Bonjour "backtick", c'est super`;
console.log(declarationBacktick);
let insertionMot = `Bonjour ${firstName} et bienvenue au cours de JS`;
console.log(insertionMot);


// Concaténation (mettre bout à bout au moins de chaîne de caractère )
// Solution 01 avec des +
let heros = 'Gojo';
let herosPref = 'Mon perso manga préféré est ' + heros;
console.log(herosPref);

// Solution 2
let story 
story = 'Hier j\ai vu un film au ciné';
story += ', aujourd\'hui je serai sur Amazon Prime';
story+= ', demain je lirai';
console.log(story)

//  Attention avec les chiffres 
let exempleChiffreNumber = 1;
console.log(exempleChiffreNumber);
let exempleChiffreString = '1';
console.log(exempleChiffreString)

let chiffre = 1;
chiffre += 1;
console.log(chiffre)

let stringChiffreOK = "Un";
stringChiffreOK += 1;
console.log(stringChiffreOK);

let stringChiffreNok = "Deux";
stringChiffreNok = stringChiffreNok * 2;
console.log(stringChiffreNok)

let chiffreString = "1";
chiffreString += "1";
console.log(chiffreString)

let concatene=('10' + 20);
console.log(concatene);
let multiple=('10' * 20);
console.log(multiple);
let soustrait=('10' - 20);
console.log(soustrait);
let divise=('10' / 20);
console.log(divise);

// toUpperCase() fonction qui permet d emettre en majuscule 
let testMaj = "je veux être en majuscule";
let majuscule = testMaj.toUpperCase();
console.log(majuscule);

//  toLowerCase() fonction qui permet de mettre en minuscule 
let testMin = "JE VEUX ÊTRE EN MINUSCULE";
let minuscule = testMin.toLowerCase();
console.log(minuscule);

//  indexOf('Caractère') fonction qui permet de connaître 
//  la position d'un caractère dans la chaîne de caractère 
//  Attention, nous commençons à compter à partir de 0
let phraseIndex = "monmail@gmAil.com";
let position = phraseIndex.indexOf("A");
console.log(position);

// lenght fonction qui permet de connaître la longuer 
// d'une chaîne de caractère 
let longueur = phraseIndex.length;
console.log(longueur);

//  substring(point de départ, point d'arrivée) permet de récupérer 
// une partie d'une chaîne de caractère 
let recuperation = phraseIndex.substring(0,7);
console.log(recuperation);
recuperation = phraseIndex.substring(8);
console.log(recuperation);

//  Possible d'utiliser plusieurs fonctions
recuperation = phraseIndex.substring(phraseIndex.indexOf("@"));
console.log(recuperation);

// slice fonctionne comme substring
let decoupage = phraseIndex.slice(0,7);
console.log(decoupage);

// split permet de trransformer une chaine de caractère en liste

let passageListe = ("hello world").split("");
console.log(passageListe);
let listePerso = "Naruto, Goku, Luffy, Eren, Mob";
let transfoListePerso = listePerso.split(",");
console.log(transfoListePerso);

// replace(chaine2caractère) permet de modifier un élément d'une chaine d ecaractère 
let replaceHeros = listePerso.replace("Mob", "Saitama")
console.log(replaceHeros)

// ATTENTION si un mot apparait plusieurs fois, repa=lace ne remplace que la 1ère redondance 
let replaceVirgule = listePerso.replace(",", "/")
console.log(replaceVirgule)


