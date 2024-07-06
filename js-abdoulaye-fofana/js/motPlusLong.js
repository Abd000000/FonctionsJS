`use strict`

let synopsis = document.getElementById("synopsis").innerText;
console.log(synopsis);

let longueur = synopsis.length;
console.log(longueur);

const searchRegExp = /[,.:?]/gi;
const replaceWith = ' '

rep = synopsis.replace(searchRegExp, replaceWith);
console.log(rep);

