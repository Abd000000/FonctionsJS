'use strict'
// Une classe permet de créer des objets 

// Déclaration de classe
class Personne {
    // Déclaration des paramètres de la classe (tjs nomme constructeur)
    constructor(nom, prenom, age) {
        this.leNom = nom;
        this.lePrenom = prenom;
        this.lage = age;
    }
}

// Déclaration d'objets (2 méthodes)
// Méthodes 01
let methode01 = new Personne()
methode01.leNom = "Uzumaki";
methode01.lePrenom = "Naruto";
methode01.lage = 18;
console.log(methode01);

// Méthode 02
let methode02 = new Personne ("Uchiwa", "Sasuke", 18)
console.log(methode02);