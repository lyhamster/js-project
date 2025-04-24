function afficherResultat(score,nbMotsProposes){
    document.querySelector(".score span").innerHTML = `${score} /${nbMotsProposes}`
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
    let i=0
    let nbMotsProposes=0
    
    let propositionList=listeMots

    let inputUserTypings=document.getElementById("usertypings")
    let validateButton= document.getElementById("submitButton")
    displayGeneratedWords("fais ton choix bitch")
    let radioChoice= document.querySelectorAll(".zoneProposition input")
    for (let r=0; r<radioChoice.length; r++){
        radioChoice[r].addEventListener("change",(event) =>{
            console.log(event.target.value)
            if(event.target.value === "mots"){
                propositionList= listeMots
            }
            else{
                propositionList=listePhrases
            }
    displayGeneratedWords(propositionList[i])
        })
    }
  
    

        
    validateButton.addEventListener("click",() => {
        if (inputUserTypings.value===propositionList[i]){
            score++
            nbMotsProposes=propositionList.length
        } 
        i++
        displayGeneratedWords(propositionList[i])
        console.log(inputUserTypings.value)
        
        inputUserTypings.value = ""
        if (i >= propositionList.length){
            displayGeneratedWords("fin du game pétasse")
            validateButton.disabled=true
            afficherResultat(score,nbMotsProposes)
        }
    })
}

    // // if (choix === "mots") {
    //     score = lancerBoucleDeJeu(listeMots)
    //     nbMotsProposes = listeMots.length
    // // } else {
    // //   //  score = lancerBoucleDeJeu(listePhrases)
    // //     nbMotsProposes = listePhrases.length
    // // 
    

