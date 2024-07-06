'use strict'

// Un objet est une collection de données 
// (sorte de BDD) composée de clés (à gauche) et de valeurs (à droite)

// Déclarer un objet 
let personne = {
    prenom: "Abdoulaye",
    nom: "Fofana",
    age: 22,
    adresse: {
        cp: 78260,
        ville: "Acheres",
    },
    loisirs: ["manga/anime", "creation de contenu", "football", "NBA", "Voyage"]
}

// Afficher l'objet : nomObjet
console.log(personne);

// Afficher une clé et sa valeur (2 méthodes)
// Méthode 01 : nomObjet.cle
console.log(personne.prenom);
// Méthode 02 nomObjet["cle"]
console.log(personne["prenom"]);

// Afficher une clé de type tableau et sa valeur 
// (2 méthodes)
// Méthode 01 : nomObjet.cle[position-valeur]
console.log(personne.loisirs[0]);
// Méthode 02 : nomObjet["cle"][position]
console.log(personne["loisirs"][0]);

// Afficher plusieurs niveau d'objets (2 méthodes)
// méthode 01 : nomObjet.cle01.cle02
console.log(personne.adresse.cp);
// Méthode 02 : nomObjet["cle01"]["cle02"]
console.log(personne["adresse"]["cp"]);

// Tableau d'objet
let tableOjet = [
    {
        prenom: "Naruto",
        nom: "Uzumaki",
        age: 16,
        adresse: {
            cp: 93400,
            ville: "Konoha"
        },
        loisirs: ["famille", "sport", "jeux video"]
    },
    {
        prenom: "Lee",
        nom: "Rock",
        age: 18,
        adresse: {
            cp: 78130,
            ville: "Konoha"
        },
        loisirs: ["tai jutsu","arts martiaux","entrainement"]
    },
    {
        prenom: "Mob",
        nom: "Kageyama",
        age: 14,
        adresse: {
            cp: 100,
            ville: "Japan-city"
        },
        loisirs: ["famille","psycho","musculation"]   
    }
]

console.log(tableOjet);

// Afficher un élément du tableau 
console.log(tableOjet[1])

// Afficher une valeur d'une clé du tableau 
console.log(tableOjet[1].adresse.cp)

// Afficher une valeur d'une clé du tableau 
console.log(tableOjet[1].adresse.cp)

// Afficher tous les prénoms du tableau
for (let i = 0; i <= tableOjet.length-1; i++) {
    console.log(tableOjet[i].prenom)
} 