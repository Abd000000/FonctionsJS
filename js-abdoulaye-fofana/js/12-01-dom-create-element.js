'use strict'

// Ajouter des attributs à une balise (ici le 1er H1 du code html)

// 1) Récupérer la balise dans une variable
let main = document.querySelector("h1");
console.log(main)
// ou
let main02 = document.getElementsByTagName("h1");
console.log(main02[0]);

// 2) Aouter les élémnets 

main.setAttribute('id', 'gros-titre');
main.setAttribute("id", 'gros-titre');

// Ajouter une balise dans le main
// 1) Répurer la balise du contenu dans une variable 
let lePrincipal = document.getElementsByTagName('main');

// 2) Ajouter la nouvelle balise 
let newH3 = document.createElement("h3");

// 3) Ajouter des attributs à la nouvelle balise si besoin
newH3.setAttribute('id', 'blue');
console.log(newH3);

// 4) Ajouter la nouvelle balise du main 
lePrincipal[0].appendChild(newH3);

// -------------------- Ajouter une balise a un endroit précis 
// 1) Créer une nouvelle balise et y 
// ajouter des atributs à la balise si besoin
let newH4 = document.createElement("h4");
newH4.setAttribute('id', 'yellow');
console.log(newH4);

// 2) Récupérer la balise qui lka suivra et transformer 
// en parentNode
let suivant = document.getElementById("second-h2");
console.log(suivant);
let transfoNode = suivant.parentNode;
console.log(transfoNode)

// 3) Ajouter la nouvelle balise au main le 2eme h2
transfoNode.insertBefore(newH4, suivant);



