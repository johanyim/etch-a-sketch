const BLACK = "#000000"
let currentColor = BLACK
let dim = 10;

const grid = document.getElementById("grid")
const slider = document.getElementById("dimension");

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
}
let drawing = false;


window.addEventListener('mousedown',()=>{
    drawing = true;
})

window.addEventListener('mouseup',()=>{
    drawing = false;;
})

function changeColor(e) {
    e.target.style.backgroundColor = currentColor;
    // if (e.type === 'mouseover' && !drawing) return
    // if (currentMode === 'rainbow') {
    //     const randomR = Math.floor(Math.random() * 256)
    //     const randomG = Math.floor(Math.random() * 256)
    //     const randomB = Math.floor(Math.random() * 256)
    //     e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    // } else if (currentMode === 'color') {
    //     e.target.style.backgroundColor = currentColor
    // } else if (currentMode === 'eraser') {
    //     e.target.style.backgroundColor = '#fefefe'
    // }
}

function makeDrawable(square){
    
    square.addEventListener('mousedown', changeColor)
    square.addEventListener('mouseenter', (e) => {
        console.log("mouseenter", drawing)
        
        if(drawing){
            
            changeColor(e)
        }
    })
    // square.addEventListener('mousedown', () => {
    //     square.style.setProperty('background-color', currentColor);
    // })
    // square.addEventListener('mouseenter', () => {
        
        
    //     if(drawing){
            
    //         square.style.setProperty('background-color', currentColor);
    //     }
    // })

}





makeGrid(grid, dim);


