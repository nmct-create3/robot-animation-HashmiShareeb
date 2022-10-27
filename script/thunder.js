// de animatie starten
// Maak van het animate element een variable en maak een functie die de de animatie start met de method beginElement.
const lightningAnimate = () =>{
    document.querySelector('.js-button-lightning').addEventListener("click", () =>{
        const animate = document.getElementById('lightning');
        //ingebouwde functie om een animatie te starten op JS!
        animate.beginElement();
    })
    
}

document.addEventListener("DOMContentLoaded", () =>{
    lightningAnimate();
})
