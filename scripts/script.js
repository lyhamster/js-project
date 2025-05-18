"use strict";
// This file owns all functions necessary to make this game playable//
let i=0;
let nbMotsProposes=0;
let propositionList=listeMots;
let gameFinished= false;


/**
 * This function display the result of the user
 * @param {*} score : user's score
 * @param {*} nbMotsProposes : number of words showed to the user to type
 */

function afficherResultat(score,nbMotsProposes){
    document.querySelector(".score span").innerHTML = `${score} /${nbMotsProposes}`;
}

/**
 * This function display a words or sentences according what the user has picked. 
 * In the zone "display-generatedtext"
 * @param {*} proposition : the words or sentenced displayed
 */

function displayGeneratedWords(proposition){
    document.querySelector(".display-generatedtext").innerText= proposition;
}

/**
 * This function build and display the email
 * @param {*} yourName  : user name
 * @param {*} yourEmail : email of the person with whom the user want to share the score.
 * @param {*} score : the score 
 */
function openMailBox (yourName, yourEmail, score) {
    let mailtoLink=`mailto:${yourEmail}?subject= Partage du score Azertype que Lyly a codé elle même &body= Yo bg, c'est ${yourName} et je viens de réaliser le score de ${score}, c kdo`;    
    window.location.href= mailtoLink;
}

/**
 * This function check if the name put in the form has at least two letters.
 * @param {*} firstName : user name
 * @returns 
 */
function verifyName(firstName){
    let correctNameRegExp = new RegExp("^[a-zA-Z]{2,}$");

    if (!correctNameRegExp.test(firstName))
    throw new Error("The name should at least have 2 letters")
   
}

/**
 * This function check if the email is 
 * @param {*} mailValidity 
 */
function verifyEmail(mailValidity){
    let isEmailValid = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
   
    if (!isEmailValid.test(mailValidity)){ 
    throw new Error("Error email is not valid")
    }
}

function selectAllRadio(){
    return document.querySelectorAll(".zoneProposition input");
}

function lancerJeu() {
   
    selectAllRadio().forEach(radio => {
        radio.addEventListener("change",(event) =>{
            console.log(event.target.value);
            if(event.target.value === "mots"){
                propositionList=listeMots;
            }
            else{
                propositionList=listePhrases;
            }
            displayGeneratedWords(propositionList[i]);
        });
    });

    displayGeneratedWords("fais ton choix bitch");
    let inputUserTypings=document.getElementById("usertypings");
    let validateButton= document.getElementById("submitButton");
    validateButton.addEventListener("click",() => {
        if (inputUserTypings.value===propositionList[i]){
            score++;
            nbMotsProposes=propositionList.length;
        }
        i++;
        displayGeneratedWords(propositionList[i]);
        console.log(inputUserTypings.value);
        
        inputUserTypings.value = "";
        if (i >= propositionList.length){
            displayGeneratedWords("fin du game pétasse");
            validateButton.disabled=true;
            gameFinished=true;
            afficherResultat(score,nbMotsProposes);
        }
    });

    selectAllRadio().forEach(radio=>{
        radio.addEventListener("click",(event)=>{
            if (gameFinished){
                resetGame();
            }
            if(event.target.value==="mots"){
                propositionList = listeMots;
            }else{
                propositionList=listePhrases;
            }
            displayGeneratedWords(propositionList[i]);
        });
    });

}
  
function resetGame () {
    score = 0;
    i = 0;
    nbMotsProposes = 0;
    validateButton.disabled = false;
    gameFinished = false; 
   afficherResultat(0,0);
}
