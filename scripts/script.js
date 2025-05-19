"use strict";
// This file owns all functions necessary to make this game playable//

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
    let mailto=`mailto:${yourEmail}?subject= Partage du score Azertype que Lyly a codé elle même &body= Yo bg, c'est ${yourName} et je viens de réaliser le score de ${score}, c kdo`;    
    window.location.href= mailto;
}

/**
 * This function check if the name put in the form has at least two letters.
 * @param {*} firstName : user name
 * @returns 
 */
function verifyName(firstName){
    if (firstName.value.length <= 2)
    throw new Error("The name should at least have 2 letters")
   
}

/**
 * This function check if the email is valid
 * @param {*} mailValidity 
 */
function verifyEmail(mailValidity){
    let isEmailValid = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
   
    if (!isEmailValid.test(mailValidity)){ 
    throw new Error("Error email is not valid")
    }
}

/**
 * This function enables the user to pick between words or sentences before starting typings game
 * @returns select both radios buttons
 */
function selectAllRadio(){
    return document.querySelectorAll(".zoneProposition input");
}


function lancerJeu() {
    initAddEventListenerPopup();
    let i=0;
    let score = 0;
    let nbMotsProposes=0;
    let propositionList=listeMots;
    let gameFinished= false;

   
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
                resetGame();}
        });
    });

    let sentForm = document.getElementById("shareForm")
    sentForm.addEventListener("submit",(event)=>{
        event.preventDefault();
        let nameInput = document.getElementById("user-name")
        let emailInput = document.getElementById("email")

        let emailValue= document.getElementById("email")
        let nameValue = document.getElementById("user-name")
        
        // if (verifyName(nameInput) && verifyEmail(emailInput)){
            openMailBox(nameValue,emailValue,`${score}/${i}`);
        // }
    })
}
  
function resetGame () {
   window.location.reload()
}
