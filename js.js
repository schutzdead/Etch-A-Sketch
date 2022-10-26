const table = document.querySelector('.table');
const inputNumber = document.getElementById('inputNumber');
const buttonNumber = document.getElementById('buttonNumber');
const firstspan = document.querySelector('.rules');
const reload = document.getElementById('reload');

var numberOfSquare = 0;
var brigtnessPurcent = 0;

// SETUP DE LA TABLE
function defineTable (){
    for(i=0;i<(numberOfSquare*numberOfSquare);i++){
        const divs = document.createElement("div");
        divs.classList.add('square');
        table.appendChild(divs);
        divs.style.width = `calc(100%/${numberOfSquare})`;
        divs.style.filter = 'brightness(100%)'
    }
};

// CHANGEMENT DE COULEUR (RAINBOW + BRIGHTNESS)
function  changeColor () {
    document.querySelectorAll('.square').forEach(div => div.addEventListener('mouseover', () => {
    let R = (Math.random()*255);
    let G = (Math.random()*255);
    let B = (Math.random()*255);
    div.style.backgroundColor = `rgb(${R},${G},${B})`;
    
    if(div.style.filter.slice(11,12)==='0') return;
    if(div.style.filter.slice(11,14)==='100'){
        brigtnessPurcent = (div.style.filter.slice(11,14))-10;
    } else {
        brigtnessPurcent = (div.style.filter.slice(11,13))-10;
    }
    div.style.filter = `brightness(${brigtnessPurcent}%)`
    })); 
};

//  EVENT METTRE TOUT EN PLACE
buttonNumber.addEventListener('click', () => {
    if (inputNumber.value==="" 
    || inputNumber.value<1 
    || isNaN(inputNumber.value) === true) 
    return firstspan.textContent="Choisit un chiffre supérieur à 0 bordel !";
    
    numberOfSquare = inputNumber.value;
    inputNumber.style.display = 'none';
    buttonNumber.style.display = 'none';
    firstspan.textContent = `Your table : ${numberOfSquare}x${numberOfSquare}, have fun !`
    reload.style.display = 'unset';
    defineTable();
    changeColor();
});

// BOUTON DE SORTIE
reload.addEventListener('click', () => {
    location.reload();
});