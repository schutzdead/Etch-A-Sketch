const table = document.querySelector('.table');
const inputNumber = document.getElementById('inputNumber');
const buttonNumber = document.getElementById('buttonNumber');
const firstspan = document.querySelector('.rules');
const reload = document.getElementById('reload');

var numberOfSquare = 0;

// FONCTION PERMETTANT DE SETUP LA TABLE
function defineTable (){
    for(i=0;i<(numberOfSquare*numberOfSquare);i++){
        const divs = document.createElement("div");
        divs.classList.add('square');
        table.appendChild(divs);
        divs.style.width = `calc(100%/${numberOfSquare})`;
    }
};

//  EVENT POUR EDITER LE VISUEL DE LA TABLE
buttonNumber.addEventListener('click', () => {
    numberOfSquare = inputNumber.value;
    inputNumber.style.display = 'none';
    buttonNumber.style.display = 'none';
    firstspan.textContent = `Your table : ${numberOfSquare}x${numberOfSquare}, have fun !`
    reload.style.display = 'unset';
    defineTable();
});

// BOUTON DE SORTI
reload.addEventListener('click', () => {
    location.reload();
});

// CHANGEMENT DE COULEUR LORS DU SURVOL
var allSquare = document.querySelectorAll('.square');

function changeColor (){
    this.style.backgroundColor = 'black'
};

allSquare.forEach(div => div.addEventListener('mouseover', changeColor, {once:true}));