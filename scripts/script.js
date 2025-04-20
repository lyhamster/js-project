function afficherResultat(score, nbMotsProposes){
    document.querySelector("score span").innerHTML = `${score}/${nbMotsProposes}`;
}


// // function choisirPhrasesOuMots(){
// //     // let choix= prompt("Choisir entre 'mots' ou 'phrases'")
// //     while (choix !== "mots" && choix !== "phrases") {
// //         // choix = prompt("Choisir entre 'mots' ou 'phrases'")
// //     }
// //     return choix
// // }


// function lancerBoucleDeJeu(listePropositions){
//     let score=0
//     for (let i = 0; i < listePropositions.length; i++){
//         // let motUtilisateur = prompt("Entrez le mot : " + listePropositions[i])
//         if (motUtilisateur === listePropositions[i]){
//             score++
//         }
//     }
//     return score
// }
function displayGeneratedWords(proposition){
    document.querySelector(".display-generatedtext").innerText= proposition

}

function lancerJeu() {
    let score=0
    let nbMotsProposes=0
    let i=0

    let inputUserTypings=document.getElementById("usertypings")
    let validateButton= document.getElementById("submitButton")

    displayGeneratedWords(listeMots[i])
    validateButton.addEventListener("click",() => {
        console.log(inputUserTypings.value)
        i++
        displayGeneratedWords(listeMots[i])
        if (i >= listeMots.length){
            displayGeneratedWords("fin du game pétasse")
            validateButton.disabled=true
        }
     
           
            
    })


   
    


    // // if (choix === "mots") {
    //     score = lancerBoucleDeJeu(listeMots)
    //     nbMotsProposes = listeMots.length
    // // } else {
    // //   //  score = lancerBoucleDeJeu(listePhrases)
    // //     nbMotsProposes = listePhrases.length
    // // 
    
    afficherResultat(score, nbMotsProposes)
}

