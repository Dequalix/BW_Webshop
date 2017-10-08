/*
###############################################
## Name: main.js Webshop                    ###
## Funcion: Animation navBar                ###
## Date: 06-10-'17                          ###
## Autor: Wytse Pechler                     ###
###############################################
*/

window.onscroll = function() {  myFunction()};

function myFunction() {
    if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
        document.getElementById("navBar").className = "fixed";
    } else {
        document.getElementById("navBar").className = "";
    }
}