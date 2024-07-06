'use strict'

// Nous allons rmeplacer le second li de la liste présente dans le html 
// 1) Créer un nouvel élemnent 
let newElement = document.createElement('li');

// 2) Lui insérer un texte element.textContent
newElement.textContent = `Coucou je m'incruste`;
// 3) Je récupere l'élément parent (le conteneur)
let recupLi = document.getElementById('liste-perso');
// console.log(recupLi);

// 4) Je suis cible l'enfant que je souhaite remplacer (le second li)
let oldElement = recupLi.children[1]
// console.log(oldElement);

// 5) Je remplace le li visé ua point 4
recupLi.replaceChild(newElement, oldElement)