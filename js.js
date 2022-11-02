// PROCHAINE AMELIORATION : BOUTON BRIHTNESS (-10% à chaqua passage)
var table = document.querySelector('.table');
const inputNumber = document.getElementById('inputNumber');
const buttonNumber = document.getElementById('buttonNumber');
const firstspan = document.querySelector('.rules');
const reload = document.getElementById('reload');
const slider = document.getElementById('rangeSlider');
const clear = document.querySelector('.clear');
const eraser = document.querySelector('.eraser');
const rainbow = document.querySelector('.rainbow');
const grid = document.querySelector('.border');
const classic = document.querySelector('.color');
const inputColor = document.querySelector('.easy');

var sliderValue=0;
var brigtnessPurcent = 0;
var mouseIsDown = false;

defineTable(20);
initialColor();

document.body.onmousedown = () => (mouseIsDown = true)
document.body.onmouseup = () => (mouseIsDown = false)

// SETUP DE LA TABLE
function defineTable (numberSquare){
    for(i=0;i<(numberSquare*numberSquare);i++){
        var divs = document.createElement("div");
        divs.classList.add('square');
        table.appendChild(divs);
        divs.style.width = `calc(100%/${numberSquare})`;
        divs.style.border = 'none';
    };
};

//  SLIDER
slider.addEventListener('mousemove', () => {
    sliderValue = slider.value;
    firstspan.textContent = `${sliderValue} x ${sliderValue}`;
    initialColor();
});

slider.addEventListener('mouseup', () => {
    table.innerHTML = '';
    defineTable(sliderValue);
});

// CLEAR
clear.addEventListener('click', () => {
    sliderValue = slider.value;
    table.innerHTML = '';
    defineTable(sliderValue);
    initialColor();
});

// EFFACER 
let white = e1 => e1.style.backgroundColor = 'rgb(240, 240, 240)';

function setWhite (e2) {
    if(mouseIsDown){
        white(e2)
    };
};

eraser.addEventListener('click', () => {
    var allSquare = document.querySelectorAll('.square');
    allSquare.forEach(select => select.addEventListener('mousedown', () => white(select))); 
    allSquare.forEach(select => select.addEventListener('mouseover', () => setWhite(select))); 
});

// RAINBOW
function setColor(r2){
    if(mouseIsDown){
        randomColor(r2)
    };
};

function randomColor(r1){
    let R = (Math.random()*255);
    let G = (Math.random()*255);
    let B = (Math.random()*255);
    r1.style.backgroundColor = `rgb(${R},${G},${B})`;
};

rainbow.addEventListener('click', () => {
    var allSquare = document.querySelectorAll('.square');
    for (square of allSquare) {
        square.addEventListener('mousedown', (e) => randomColor(e.target));
        square.addEventListener('mouseover', (e) => setColor(e.target));
    }
});

// COULEUR UNIQUE
let normal = n1 => n1.style.backgroundColor = inputColor.value;

function setnormal (n2) {
    if(mouseIsDown){
        normal(n2)
    };
};

function initialColor (){
    var allSquare = document.querySelectorAll('.square');
    allSquare.forEach(select => select.addEventListener('mousedown', () => normal(select))); 
    allSquare.forEach(select => select.addEventListener('mouseover', () => setnormal(select))); 
};

classic.addEventListener('click', () => {
    initialColor();
});

// GRID
grid.addEventListener('click', () => {
    var allSquare = document.querySelectorAll('.square');
    var squaare = document.querySelector('.square');
    if (squaare.style.border !== 'none'){
        allSquare.forEach(aa => aa.style.border = 'none');
    } else {
        allSquare.forEach(aa => aa.style.borderTop = '1px solid rgb(158, 158, 158)');
        allSquare.forEach(aa => aa.style.borderRight = '1px solid rgb(158, 158, 158)');
    }
});

