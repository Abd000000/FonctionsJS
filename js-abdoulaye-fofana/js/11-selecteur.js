`use script`

// Récuper le conteneur correspondant 
//  à l'IDet tous les éléments du DOM qui y sont présents
// document.getElementById("id")
let test01 = document.getElementById
console.log(test01);

// Récupérer une collection de balise 
// (renvoie un tableau)
let recupH2 = document.getElementsByTagName("h2");
console.log(recupH2);

// Récupérer une collection de balise par rapport 
// à leur classe (renvoie un tableau)
let recupClasse = document.getElementsByClassName('autres h2');
console.log(recupClasse);

// Récupérer une collection de balise par rapport 
//  à leu rattribuut name 
// (renvoie un tableau NodeList qui signifie que)
// toutes les modeifications du dom deront prises 
// en compte dans le résultat 
let recupNom = document.getElementsByTagName(`courage`);
console.log(recupNom);

// Récupérer le DOM d'une balise , classe, ID,
// Attention dans le vas de balise ou de classe 
// qui se réptent, querrySelector ne renvoie qu el premier résultat 
let myQuerySelector01 = document.querySelector("h2");
console.log(myQuerySelector01);

// Comme en css il est possible d'utiliser 
// un selcteur 
let myQuerySelector02 = document.querySelector("div .autres-h2");
console.log(myQuerySelector02);

// Récupere le DOM d'une balise, classe, ID,
// Attention dans le cas de classe ou de balise 
// qui se repetent, querrySelectorAll renvoire tous 
// les résultats mais sous forme de tableauy NodeList
let multipleResultSelector = document.querySelectorAll("h2");
console.log(multipleResultSelector);

// Afficher le contenu d'une page (2 méthodes)
// Méthode 01 : innerText
let methode01 = document.getElementById("first-h2").innerText;
console.log(methode01);
// Métjode02 : innerHTML
let methode02 = document.getElementById("first-h2").innerHTML;
console.log(methode02);

// Remplacer le contenu d'un élément dans le HTML (2 méthodes)
// Méthode 01 : remplacer uniquement le contenu 
// let modif01 = document.getElementById("first-h2").innerText="Gambaru Sasuke";

// Méthode 02 : remplacer le contenu et la structure du DOM 
// let modif02 = document.getElementById("test-02").innerHTML=`<h2 id =remplacement> Je prefere SNK </h2>`;

// Ajouter du contenudans le HTML += (2 méthodes)
// Méthode 01 : ajouter uniquement le contenu 
let modif03 = document.getElementById("first-h2").innerText+=" et Sasuke";

// Méthode 02 : ajouter du contenu et la structur edu DOM
let modif04 = document.getElementById("test-02").innerHTML+= '<h2 id=remplacement>Je prefere SNK</h2>'