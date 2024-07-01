let divs = [];
let titulos = ['MAÇÃ', 'BANANA', 'PERA', 'ABACAXI', 'MELANCIA', 'CEREJA'];
let textos = ['descrição', 'descrição', 'descrição', 'descrição', 'descrição', 'descrição'];
let imgs = ['logo.png', 'logo.png', 'img.png', 'logo.png', 'img.png', 'img.png'];


var cards_projetos = document.getElementById('cards_projetos');

for(var i = 0; i <titulos.length ; i++){
    var div = document.createElement('div');

    div.className = 'card';
    divs.push(div);
    cards_projetos.appendChild(div);
}

for(var i = 0; i <titulos.length ; i++){
    var img = document.createElement('img');
    var h3 = document.createElement('h3');
    var p = document.createElement('p');

    img.src = '../assets/img/'+ imgs[i];
    img.style.width = '5vw';

    h3.textContent = titulos[i];

    p.textContent = textos[i];

    divs[i].appendChild(img);
    divs[i].appendChild(h3);
    divs[i].appendChild(p);
}




























let bannerAtual = 1;
const totalBanners = 5;
let intervaloTroca;

function trocaBanner(numero) {
    let banner = document.getElementById("banner");
    banner.style.left = "-" + (numero - 1) + "00vw";

    for (let i = 1; i <= totalBanners; i++) {
        document.getElementById("btn_" + i).style.width = '1.2vw';
        document.getElementById("btn_" + i).style.height = '1.2vw';
    }

    document.getElementById("btn_" + numero).style.width = '1.7vw';
    document.getElementById("btn_" + numero).style.height = '1.7vw';
    bannerAtual = numero;
}

function autoTrocaBanner() {
    bannerAtual = (bannerAtual >= totalBanners) ? 1 : bannerAtual + 1;
    trocaBanner(bannerAtual);
}

function startAutoSwap() {
    intervaloTroca = setInterval(autoTrocaBanner, 3000); 
}

document.addEventListener("DOMContentLoaded", function() {
    trocaBanner(bannerAtual); 
    startAutoSwap();
})

// document.addEventListener('DOMContentLoaded', function() {
//     var btns = document.querySelectorAll('#btns div');

//     btns.forEach(function(btn) {
//         btn.addEventListener('click', function() {
//             // Remove 'selected' class from all buttons
//             btns.forEach(function(btn) {
//                 btn.classList.remove('selected');
//             });

//             // Add 'selected' class to the clicked button
//             this.classList.add('selected');
//         });
//     });
// });
