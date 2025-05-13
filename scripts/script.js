"use strict";
let score=0;
let i=0;
let nbMotsProposes=0;
let propositionList=listeMots;
let gameFinished= false;

let inputUserTypings=document.getElementById("usertypings");
let validateButton= document.getElementById("submitButton");

function afficherResultat(score,nbMotsProposes){
    document.querySelector(".score span").innerHTML = `${score} /${nbMotsProposes}`;
}

function displayGeneratedWords(proposition){
    document.querySelector(".display-generatedtext").innerText= proposition;
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

function popupDisplay() {
    let shareResultBtn= document.getElementById("sharedButton");
    let overlayForm = document.querySelectorAll(".overlay-popup");
    let sentForm= document.getElementById("shareForm");

    shareResultBtn.addEventListener("click",(event)=>{ 
        overlayForm.forEach((form)=>{
            form.style.display="flex";
        });
        event.stopPropagation()
    });

    sentForm.addEventListener("submit",(event)=>{
        event.preventDefault();
        let nameValue = document.getElementById("user-name").value
        let email = document.getElementById("email").value
    
        if (verifyName(nameValue) && verifyEmail(email)){
            openMailBox(nameValue,email);
        } else {
            console.log("erreur");
        }

    })

    document.addEventListener("click",(event)=>{
        let clickedOutside = true;
        overlayForm.forEach((form) => {
            if(form.contains(event.target)){
                clickedOutside=false;
            }
        });
            if (clickedOutside){
                overlayForm.forEach((form) => {
                form.style.display="none";
                })
            }
    });  
}

function openMailBox (yourName, yourEmail) {
    let subjectLine ="Je partage mon score avec tuwa";
    let scoreResult = `${score} sur ${nbMotsProposes}`;
    
    let encodedSubject = encodeURIComponent(`${subjectLine}`);
    let encodedBody= encodeURIComponent(`${yourName} a eu ${scoreResult} sur son jeu Azertype oh yeahh` );
    
    let mailtoLink=`mailto:${yourEmail}?subject=${encodedSubject}&body=${encodedBody}`;    
    window.location.href= mailtoLink;
}

function verifyName(firstName){
    let correctNameRegExp = new RegExp("^[a-zA-Z]{2,}$");

    if (correctNameRegExp.test(firstName)){
    return true;
    }
    return false;
}

function verifyEmail(mailValidity){
    let isEmailValid = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
   
    if (isEmailValid.test(mailValidity)){ 
    return true;
    } 
    return false;
}