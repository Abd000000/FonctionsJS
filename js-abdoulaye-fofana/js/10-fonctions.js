'use strict'

// ------------- Fonctions 
// &) Déclarer la fonction 
function sayHello() {
    console.log("Hello world")
}
// 2) Appeler la fonction 
sayHello();

// --------- Autre fonction
function verif(prenom) {
    if (prenom === "Naruto") {
        console.log("Bienvenue monsieur Uzumaki")
    }
    else console.log("Accès refusé")
}

verif("kakashi", "hatake");

// fonctions avec return 
// Attention la fonction s'arrete avec le return 
function addition(number01, number02) {
    let result = number01 + number02
    return result;
}

console.log(addition(3, 5))

    // FonctionIFE (Immediately Invoked Function Expression)
    // Expression d efonction invoquée imméditement 

    (function () {
        console.log("Je suis IEFE");
    })();

(function (variables01) {
    console.log(`Première IIFE dit : Coucou ${variables01} IIFE`);
    (function (variables02) {
        setTimeout(function () {
            console.log(`Très bien et ${variables02} IIFE et toi ?`);
        }, 5000);
    })('1er');
})('2eme');

// Mixer fonction classqiue et IIFE
function essai01(param01) {
    console.log(`V2 Première IIFE dit : Coucou ${param01} IIFE`);
    (function (param02){
        setTimeout(console.log(`V2 Très bien rt ${param02} IIFE et toi ?`), 500);
    })("1er");
}
essai01("2eme")


// ---------- Fonctions dans des objets 

const myPlayList = {
    singer : function (singer) {
    console.log(`Mon chanteur(se) du moment est : ${singer}`)
    },
    song : function (song){
        console.log(`avec sa chanson : ${song}`)
    }
}

myPlayList.singer(`MJ`);
myPlayList.song("Smooth Criminal");

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
