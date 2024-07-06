'use script'

// En JS il ya 3 facons de faire une condition 

// ------------- Méthode 01 : if...else
const iLoveJs = true;
if (iLoveJs) {
    console.log('Tu aimes JS');
} else {
    console.log('Tu detestes JS');
}
// Equivaut à 
if (iLoveJs === true) {
    console.log('Tu aimes JS');
} else {
    console.log('Tu detestes JS');
}

// Spécifications avec les nombres 
const theNumber = 1000;
// == vérifie unquement la valeur
if (theNumber == '1000') {
    console.log('Cest égal à 1000')
} else {
    console.log(`Ce n'est pas égal à 1000`)
}

// === vérifie la valeur et le type 
if (theNumber === '1000') {
    console.log(`C'est égal à 1000`)
} else {
    console.log(`Ce n'est pas égal`)
}

// Différent de 
if (theNumber !== 1000) {
    console.log(`Ce n'est pas égal à 1000`);
} else {
    console.log(`C'est égal à 1000`)
}

// Comparer une chaine de caractère 
const chaineCara = 'Coucou';
if (chaineCara === 'Hello') {
    console.log('OK');
} else {
    console.log('NOK')
}

// Vérifier si une variable contient un tableau 
const tab = [0, 1, 2];
if (Array.isArray(tab)) {
    console.log('OK')
} else {
    console.log('NOK');
}

// Equivaut à 
if (Array.isArray(tab)===true) {
    console.log('OK');
} else {
    console.log('NOK');
}

// Vérifier la valeur d'un tableau 
if (tab[1] === 3) {
    console.log('OK');
} else {
    console.log('NOK');
}

// Faire plusieurs conditions 
const timeIs = 19.30;
if (timeIs >= 0 && timeIs <= 6) {
    console.log('il est ${timeIs}h, il est trop tôt');
} else if (timeIs > 6 && timeIs <= 12) {
    console.log(`il est ${timeIs}h, c'est le matin`);
} else if (timeIs > 12 && timeIs <= 19) {
    console.log(`il est ${timeIs}h, c'est l'après midi`);
} else if (timeIs > 19 && timeIs <= 24) {
    console.log(`il est ${timeIs}h, c'est le soir`);
} else [
    console.log(`HEURE INVALIDE`)
]

// Plusieurs cas pour une condition
const comics = "Batman"
const mangas = "Berserk"

if (comics === "Batman" || mangas === "Berserk") {
    console.log("Tu es bien Dark")
}else console.log("Tu es coool");



// ---------- Méthode 02 : opérateur ternaire 
const iLovePhp = false;

let affichage = iLovePhp === true ? console.log('Tu aimes PHP') : console.log('Tu detestes PHP')
// Equivaut à 
if (iLovePhp) {
    console.log('Tu aimes PHP');
} else {
    console.log('Tu detestes PHP')
}

// -------------------- Méthode 03 : opérateur switch(variable)

let sum = 100;
let paymentMethod = 'espece';

switch(paymentMethod) {
    case 'espece':
        console.log(`Vous souhaitez payer la somme de ${sum} euros en ${paymentMethod}`)
        break;
    case 'carte' :
        console.log(`Vous souhaitez payer la somme de ${sum} euros en ${paymentMethod}`)
        break;
    case 'cheque' :
        console.log(`Vous souhaitez payer la somme de ${sum} euros en ${paymentMethod}`)
         break;
    default:
        console.log('Veuillez selectionner un mode de paiement SVP')
        break;
}

// Possibilité de possibi
if (paymentMethod !== ``) {
    switch (paymentMethod) {
        case 'espece':
            console.log(`Vous souhaitez payer la somme de ${sum} euros en ${paymentMethod}`)
            break;
        case 'carte' :
            console.log(`Vous souhaitez payer la somme de ${sum} euros en ${paymentMethod}`)
            break;
        case 'cheque' :
            console.log(`Vous souhaitez payer la somme de ${sum} euros en ${paymentMethod}`)
            break;
        default:
            console.log('Veuillez selectionner un mode de paiement SVP')
            break;
    }
} else {
    console.log('Veuillez selectionneer un mode de paiement SVP')
}