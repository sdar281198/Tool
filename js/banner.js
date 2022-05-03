'use strict'
let galeria = [];
galeria[0]="img/S empresarial 4.png";
galeria[1]="img/sd.png";

let vBanner = document.getElementById('banner');

let aleatorio = Math.floor(Math.random()*galeria.length);

vBanner.src = galeria[aleatorio];

setInterval(cambiarImagen,3000);

function cambiarImagen() {
          let aleatorio = Math.floor(Math.random()*galeria.length);
          vBanner.src = galeria[aleatorio];


        }
