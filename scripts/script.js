let score=0
let i=0
let nbMotsProposes=0
let propositionList=listeMots
let gameFinished= false

let inputUserTypings=document.getElementById("usertypings")
let validateButton= document.getElementById("submitButton")

function afficherResultat(score,nbMotsProposes){
    document.querySelector(".score span").innerHTML = `${score} /${nbMotsProposes}`
}

function displayGeneratedWords(proposition){
    document.querySelector(".display-generatedtext").innerText= proposition
}

function selectAllRadio(){
    return document.querySelectorAll(".zoneProposition input")
}

function lancerJeu() {
    displayGeneratedWords("fais ton choix bitch")

    selectAllRadio().forEach(radio => {
        radio.addEventListener("change",(event) =>{
            console.log(event.target.value)
            if(event.target.value === "mots"){
                propositionList=listeMots
            }
            else{
                propositionList=listePhrases
            }
            displayGeneratedWords(propositionList[i])
        })
    })

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
            gameFinished=true
            afficherResultat(score,nbMotsProposes)
        }
    })

    selectAllRadio().forEach(radio=>{
        radio.addEventListener("click",(event)=>{
            if (gameFinished){
                resetGame()
            }
            if(event.target.value==="mots"){
                propositionList = listeMots
            }else{
                propositionList=listePhrases
            }
            displayGeneratedWords(propositionList[i])
        })
    })
}
  
function resetGame () {
    score = 0;
    i = 0;
    nbMotsProposes = 0;
    inputUserTypings.value = "";
    validateButton.disabled = false;
    gameFinished = false; 
   afficherResultat(0,0)
}


