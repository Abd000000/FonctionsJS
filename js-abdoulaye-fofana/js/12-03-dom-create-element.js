'use strict'
//  ------ Nous allons supprimer le 3eme li
// 1) Je récupere l'élment parent (le conteneur)
let recupLi = document.getElementById('liste-perso');
// console.log(recupLi)

//  2) Je cible l'enfant que je souhaite supprimer .remove() (le troisième li)
recupLi.children[2].remove();
// console.log(oldElement);

// ---------Nous allons supprimer le premier h2
// 1) Récupérer les éléments 
let recupH2 = document.querySelectorAll("h2");
// console.log(recupH2)

// 2) Je supprime l'élément
recupH2[0].remove();