`use strict`



// Ensuite je crée une fonction qui créera une condition qui validera ou non du palindrome
function palindrome() {
    // Appeler les éléments du bouton à l'aide de getElementById.value (value permet de seulement récupérer à l'intérieur)
    let input = document.getElementById("id-mot-saisi").value;


    if (input.length === 0) {
        window.alert("Vous devez entrez un mot pour activer le programme !")
    }
    else if (input.split("").reverse("").join("") === input) {
        console.log("Ce mot est un palindrome !")

    document.getElementById("resultat").innerHTML = `<p>Le mot : ${input}</p>
        <p>Le mot à l'envers : ${input.split("").reverse("")}</p>
        <p>Le mot ${input} est un palindromme</p>`
    }
    else console.log("Ce mot n'est pas un palindrome !")  
    document.getElementById("resultat").innerHTML = `<p>Le mot : ${input}</p>
        <p>Le mot à l'envers : ${input.split("").reverse("")}</p>
        <p>Le mot ${input} n'est pas un palindromme</p>`
}





