"use strict";
function imprimir(msg) {
    var lectura = null;
    lectura = document.getElementById('log');
    //console.log(lectura);
    lectura.innerHTML = msg;
}
function funcionResponsive() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }