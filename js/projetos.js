

let bannerAtual = 1;
const totalBanners = 5;
let intervaloTroca;

function trocaBanner(numero) {
    let banner = document.getElementById("banner");
    banner.style.left = "-" + (numero - 1) + "00vw";

    for (let i = 1; i <= totalBanners; i++) {
        document.getElementById("btn" + i).style.width = '1.2vw';
        document.getElementById("btn" + i).style.height = '1.2vw';
    }

    document.getElementById("btn" + numero).style.width = '1.7vw';
    document.getElementById("btn" + numero).style.height = '1.7vw';
    bannerAtual = numero;
}

function autoTrocaBanner() {
    bannerAtual = (bannerAtual >= totalBanners) ? 1 : bannerAtual + 1;
    trocaBanner(bannerAtual);
}

function startAutoSwap() {
    intervaloTroca = setInterval(autoTrocaBanner, 3000); 
}

function manualTrocaBanner(numero) {
    clearInterval(intervaloTroca);
    trocaBanner(numero);
    setTimeout(startAutoSwap, 5000); 
}

document.addEventListener("DOMContentLoaded", function() {
    trocaBanner(bannerAtual); 
    startAutoSwap();
})

document.addEventListener('DOMContentLoaded', function() {
    var btns = document.querySelectorAll('#btns div');

    btns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Remove 'selected' class from all buttons
            btns.forEach(function(btn) {
                btn.classList.remove('selected');
            });

            // Add 'selected' class to the clicked button
            this.classList.add('selected');
        });
    });
});
