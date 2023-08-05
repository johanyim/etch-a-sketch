const BLACK = "#000000"
const ERASER = "#FFFFFF"
let chosenColor = BLACK
let dim = 10;

const grid = document.getElementById("grid")
const slider = document.getElementById("dimension");
const sliderValue = document.getElementById("slider-value");
const colorPicker = document.getElementById("color-picker")


let mode = "color";
const colorButton = document.getElementById("color-mode")
const eraserButton = document.getElementById("eraser-mode")
const rainbowButton = document.getElementById("rainbow-mode")


function makeGrid(grid, dim){
    //delete all elements in grid class
    grid.innerHTML = '';

    for(let i = 0; i < dim; i++){
        let row = document.createElement("div")
        row.classList.add("row")
        for(let j = 0; j < dim; j++){
            let square = document.createElement("div")
            square.classList.add("square")
            row.appendChild(square)
            makeDrawable(square)
        }
        grid.appendChild(row)
    }

}


// controls 
slider.oninput = function() {
    makeGrid(grid, this.value);
    sliderValue.innerHTML = this.value+" &times "+this.value
}
colorPicker.oninput = function() {
    chosenColor = this.value;
    document.documentElement.style.setProperty('--hover-color', this.value);
    activateMode("color")
}

function changeColor(e) {
    if(mode === "color"){
        e.target.style.backgroundColor = chosenColor;
        document.documentElement.style.setProperty('--hover-color', chosenColor);
    }
    if(mode === "eraser"){
        e.target.style.backgroundColor = ERASER;
        document.documentElement.style.setProperty('--hover-color', "#FFFFFF");
    }
    if(mode === "rainbow"){
        e.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);   
        document.documentElement.style.setProperty('--hover-color', "#FFFFFF");
    }
}

colorButton.addEventListener('click',()=>{
    activateMode("color");
})
eraserButton.addEventListener('click',()=>{
    activateMode("eraser");
})
rainbowButton.addEventListener('click',()=>{
    activateMode("rainbow");
})


function activateMode(newMode) { 
    if(mode == "color") {
        colorButton.classList.remove("active")
    }else if(mode == "eraser") {
        eraserButton.classList.remove("active")
    }else if(mode == "rainbow") {
        rainbowButton.classList.remove("active")
    }

    if(newMode == "color") {
        colorButton.classList.add("active")
    }else if(newMode == "eraser") {
        eraserButton.classList.add("active")
    }else if(newMode == "rainbow") {
        rainbowButton.classList.add("active")
    }

    mode = newMode
}


// drawing on canvas
let drawing = false;
window.addEventListener('mousedown',()=>{
    drawing = true;
})
window.addEventListener('mouseup',()=>{
    drawing = false;;
})

function makeDrawable(square){
    square.addEventListener('mousedown', changeColor)
    square.addEventListener('mouseenter', (e) => {
        drawing ? changeColor(e) : null
    })
}

//default grid 
makeGrid(grid, dim);


