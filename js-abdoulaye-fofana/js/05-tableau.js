'use script'

// Déclaration 
let tableau01, tableau02;
tableau01 = [1, 2, 3, 4, 5, 6, 7];
console.log(tableau01);
tableau02 = new Array (8, 9, 10, 11, 12, 13);
console.log(tableau02);

// Connaitre le nombre d'éléments d'un tableau lenght
longueurTab = tableau01.length;
console.log(longueurTab);

// Savoir is on a bien un tableau 
let verifTab = Array.isArray(tableau01);
console.log(verifTab);

// Connaitre la position d'un élément du tableau 
let tableauHeros = ["Naruto", "Luffy", "Saitama"];
let positionElement = tableauHeros.indexOf("Luffy");
console.log(positionElement);

// Remplacer un élément du tableau 
// Méthode 01
tableauHeros[1] = "Goku";
console.log(tableauHeros);

// Méthode 02 : splice (attention possède 2 fonctions)
let viderTab = tableauHeros.splice(0, 1);
console.log(viderTab);

// Attention, splice peut aussi supprimer des valeurs d'un tableau 
tableauHeros.splice(0, 2);
console.log(tableauHeros);

// Vérifier la présence d'un élément dans le tableau 
let tabFruit = ["Fraise", "Banane", " Poire"];
let verifPresence = tabFruit.includes("orange");
console.log(verifPresence);

// Ajouter un élément à la fin d'un tableau : tableau.push
tabFruit.push("Tomate");
console.log(tabFruit);