var table = document.querySelector('.table');
const inputNumber = document.getElementById('inputNumber');
const buttonNumber = document.getElementById('buttonNumber');
const firstspan = document.querySelector('.rules');
const reload = document.getElementById('reload');
const slider = document.getElementById('rangeSlider');
const eraser = document.querySelector('.eraser');

var sliderValue=0;
var brigtnessPurcent = 0;
var mouseIsDown = false;

defineTable(20);
changeColor();

// SETUP DE LA TABLE
function defineTable (numberSquare){
    for(i=0;i<(numberSquare*numberSquare);i++){
        const divs = document.createElement("div");
        divs.classList.add('square');
        table.appendChild(divs);
        divs.style.width = `calc(100%/${numberSquare})`;
        divs.style.filter = 'brightness(100%)'
    }
};

//  SLIDER
slider.addEventListener('mousemove', () => {
    sliderValue = slider.value;
    firstspan.textContent = `${sliderValue} x ${sliderValue}`;
    changeColor();
});

slider.addEventListener('mouseup', () => {
    table.innerHTML = '';
    defineTable(sliderValue);
});

// EFFACER
eraser.addEventListener('click', () => {
    sliderValue = slider.value;
    table.innerHTML = '';
    defineTable(sliderValue);
    changeColor();
})

document.body.onmousedown = () => (mouseIsDown = true)
document.body.onmouseup = () => (mouseIsDown = false)

// CHANGEMENT DE COULEUR (RAINBOW + BRIGHTNESS)
function setColor(){
    if(mouseIsDown){
        let R = (Math.random()*255);
        let G = (Math.random()*255);
        let B = (Math.random()*255);
        this.style.backgroundColor = `rgb(${R},${G},${B})`;
        if(this.style.filter.slice(11,12)==='0') return;
        if(this.style.filter.slice(11,14)==='100'){
            brigtnessPurcent = (this.style.filter.slice(11,14))-10;
        } else {
            brigtnessPurcent = (this.style.filter.slice(11,13))-10;
        }
            this.style.filter = `brightness(${brigtnessPurcent}%)`
}}  

function randomColor(aim){
    let R = (Math.random()*255);
    let G = (Math.random()*255);
    let B = (Math.random()*255);
    aim.style.backgroundColor = `rgb(${R},${G},${B})`;
    if(square.style.filter.slice(11,12)==='0') return;
    if(square.style.filter.slice(11,14)==='100'){
        brigtnessPurcent = (aim.style.filter.slice(11,14))-10;
    } else {
        brigtnessPurcent = (aim.style.filter.slice(11,13))-10;
    }
        aim.style.filter = `brightness(${brigtnessPurcent}%)`
}


function  changeColor () {
    var allSquare = document.querySelectorAll('.square');
    for (square of allSquare) {
        square.addEventListener('mousedown', () => randomColor(square));
        square.addEventListener('mouseover', setColor);
    }
};

