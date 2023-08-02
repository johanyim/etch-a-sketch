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

slider.oninput = function() {
    makeGrid(grid, this.value);
    sliderValue.innerHTML = this.value+" &times "+this.value
}
colorPicker.oninput = function() {
    chosenColor = this.value;
}
let drawing = false;


window.addEventListener('mousedown',()=>{
    drawing = true;
})

window.addEventListener('mouseup',()=>{
    drawing = false;;
})

function changeColor(e) {
    if(mode === "color"){
        e.target.style.backgroundColor = chosenColor;
    }

    if(mode === "eraser"){
        e.target.style.backgroundColor = ERASER;
    }

    if(mode === "rainbow"){
        e.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        
    }


}

colorButton.addEventListener('click',()=>{
    mode = "color"
})
eraserButton.addEventListener('click',()=>{
    mode = "eraser"
})
rainbowButton.addEventListener('click',()=>{
    mode = "rainbow"
})


function activateButton(mode) { 
    
}



function makeDrawable(square){
    square.addEventListener('mousedown', changeColor)
    square.addEventListener('mouseenter', (e) => {
        drawing ? changeColor(e) : null
    })
}





makeGrid(grid, dim);


