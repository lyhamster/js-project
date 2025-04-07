function afficherResultat(score,nbMotsProposes){
    console.log("votre score est de " + score + "sur" + nbMotsProposes)
}
function choisirPhrasesOuMots(){
    let choix= prompt("Choisir entre 'mots' ou 'phrases'")
    while (choix !== "mots" && choix !== "phrases"){
        choix= prompt("Choisir entre 'mots' ou 'phrases'")
}
    return choix
}
function lancerBoucleDeJeu(listePropositions){
    let score = 0
    for (let i = 0; i < listePropositions.length; i++){
        let motUtilisateur=prompt("entrez le mot : " +listePropositions[i])
        if (motUtilisateur === listePropositions[i]){
            score++
        }
    }
    return score
}

function lancerJeu(){
    let choix = choisirPhrasesOuMots()
    let score = 0
    let nbMotsProposes=0
    
    if(choix === "mots"){
        score = lancerBoucleDeJeu(listeMots)
        nbMotsProposes = listeMots.length
     } else {
        score=lancerBoucleDeJeu(listePhrases)
        nbMotsProposes = listePhrases.length
    }
    afficherResultat(score,nbMotsProposes)
}