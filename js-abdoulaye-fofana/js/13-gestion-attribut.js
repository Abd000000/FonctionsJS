'use strict'
// -------- Ajouter une classe et/ou un id à une balise qui n'en a pas 
// Attention si la balise en possède elles seront supprimées 
// 1) Récupérer la balise dans une variable 

let recupH2 = document.querySelector("h2");
console.log(recupH2);

// 2) Ajouter les éléments setAttribute ('nomAttribut', 'valeur')
recupH2.setAttribute('class', 'green');
recupH2.setAttribute('id', 'gros-titre');

// ------- Supprimer un attribut removeAttribute("Nom de l'attribut")
recupH2.removeAttribute('id');

// ---- Récuperer la valeur d'un attribut ("Nom de l'attribut")
recupH2.getAttribute('class');
console.log(recupH2.getAttribute("class"));

// -------  vérifier la présence d'un attribut (retourne un boléen)
recupH2.hasAttribute("class", "nouvelle-classe");
console.log(recupH2.hasAttribute("class", "nouvelle-classe"));

// ---- Récupérer la liste de sclasses sous forme de string className 
let listeClassString = recupH2.className;
console.log(listeClassString);

// ------ Récupérer la liste des classe sous forme de string classList
let listeClassTab = recupH2.classList;
console.log(listeClassTab);

// ------ Ajouter une classe à une balise qui en possede déja 
recupH2.classList.add("nouvelle-classe");

// ------- Retire une classe remove("Nom de la classe")
recupH2.classList.remove("green");