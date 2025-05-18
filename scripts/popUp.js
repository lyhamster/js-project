"use strict"
/**
 * This file own every functions to enable to open and close a pop up and to share contents.
 * 
 * 
 */

/**
 * This function display the pop up to share the user score.
 */

function popupDisplay() {
    let showPopUp =document.querySelectorAll(".overlay-popup");
    showPopUp.forEach(popup =>{
    popup.classList.add("active");
    });
}
  
// /**
//  * This function hide the pop up 
//  */
function hidePopUp(){
    let showPopUp = document.querySelectorAll(".overlay-popup"); 
    showPopUp.forEach(popup =>{
        popup.classList.remove("active");
        });
}

/**
 * This function initialize the listening regarding the popup display
 */
function initAddEventListenerPopup(){
    let showPopUp = document.querySelectorAll(".overlay-popup"); 
    let sentFormButton = document.getElementById("sharedButton");
    
    sentFormButton.addEventListener("click", ()=>{
        popupDisplay();
        });
        
        showPopUp.forEach(popup=>{
            popup.addEventListener("click",(event)=>{
                if(event.target.classList.contains("overlay-popup")){
                    hidePopUp();
                }
            });
        });

    }

 

    

