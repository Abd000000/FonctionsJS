`use strict`

function versus() {

    let lesHerosG = ["Naruto", "Ichigo", "Izuku", "Tanjiro", "Itadori", "Luffy", "Goku", "Kenshiro", "Ranma", "Seiya", "Mob", "Saitama"];
    console.log(lesHerosG);

    let lesHerosD = ["Naruto", "Ichigo", "Izuku", "Tanjiro", "Itadori", "Luffy", "Goku", "Kenshiro", "Ranma", "Seiya", "Mob", "Saitama"];
    console.log(lesHerosD);

    // generateur de chiffre aléatoire
    // let j = 0;
    do {
        // On fénit le perso de gauche
        i = Math.floor(Math.random() * 13);
        i = lesHerosG[i];

        // On definit le perso de droite
        f = Math.floor(Math.random() * 13);
        f = lesHerosD[f];
        document.getElementById("affichage").innerHTML = `<p>${i} VS ${f}</p>`
    } while (i != f)
    

    
}