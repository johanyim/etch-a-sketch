const BLACK = "#000000"
let currentColor = BLACK
let dim = 10;

const grid = document.getElementById("grid")


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




console.log(grid)