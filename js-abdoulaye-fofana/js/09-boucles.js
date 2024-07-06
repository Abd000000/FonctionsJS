'use strict'

// ---------------- Bocle for 
for (let i = 0; i < 10; i++) {
    console.log(`Je suis l'index ${i}`);
}

// Continue indique à la boucle de continuer 
// même quand la condition est repectée 
// Continue est facultatif et de bas dans la boucle 
for (let i = 0; i < 10; i ++) {
    if (i == 2) {
        console.log(`Je m'incruste`);
        continue;
    } else console.log(`Je suis l'index ${i}`);
}

// Break indique à la boucle de s'arréter quand la condition est respectée
for (let i = 0; i < 10; i++) {
    if (i == 2) {
        console.log(`Je m'incruste`);
        break;
    } else console.log(`Je suis l'index ${i}`)
}

// Autre exemple de boucles et conditions  

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} est pair`);
    } else console.log(`${i} est impair`);
}

// Incrémenter de plus qu'un 
for (let i = 0; i < 10; i = i + 2) {
    console.log(`Je suis l'index ${i}`)
}

// ------------ Boucle while 
let i = 0;
while (i < 10) {
    console.log("Hello");
    i = i + 1
}

let tab = ['pomme', 'cerise', 'poire']
let x = 0;
while (x < tab.length) {
    console.log(tab[x]);
    x = x + 1;
}

// Boucle do while 
let y = 0
do {
    console.log(`Je suis l'élément ${y}`);
    y++;
} while (y < 10)

// -----------Bouclefor each 
// (utilisable qu'avec les tableaux)
let tabHeros = ["batman","superman","spiderman"] 

tabHeros.forEach(function (element) {
    console.log(element);
});

tabHeros.forEach(function (element, position) {
    console.log(`${element} ${position}`);
})
// OU
tabHeros.forEach((element, position) => {
    console.log(`${element} ${position}`);
})

// ------------------- Boucle map 
// (utilisateur pour transformer un tableau d'objet en tableau)
let tabObjetCar = [
    {
        id: 1,
        marque: "Benteley",
        mode1: "Continent1 GT"
    },
    {
        id: 2,
        marque: "Land Rover",
        model: "Evoque"
    },
    {
        id: 3,
        marque: "Rolls Royce",
        model: "Phantom"
    }
]

// Renvoie le tableau d'objet
let infosCar = tabObjetCar.map(function(item) {
    return item; 
});
console.log(infosCar);

// Renvoyer les valeurs 
infosCar = tabObjetCar.map(function(item) {
    return item.marque;
});

// Renvoyer plusieurs valeurs 
infosCar = tabObjetCar.map(function(item) {
    return `${item.marque} $ {item.model}`;
});

// ------------------- Boucle d'objet 
let automobile = {
    id : 1,
    brand : "Bentley",
    model : "Continental",
    Year : 2019,
    doors : 4,
    speed : "Turbo"
};

for (let key in automobile) {
    console.log(`${key} : ${automobile[key]}`)
};


