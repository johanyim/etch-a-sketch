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
        }
        grid.appendChild(row)
    }
}

slider.oninput = function() {
    makeGrid(grid, this.value);
}



makeGrid(grid, dim);


