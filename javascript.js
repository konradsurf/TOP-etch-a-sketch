generateGrid(4,4);
hoverEffect();
const btn = document.querySelector('#changeGridSize');
btn.addEventListener('click', () => {
  let gridSize = prompt('Enter desired grid size');
  deleteGrid();
  generateGrid(gridSize, gridSize);
  hoverEffect();
});


function generateGrid(width, height) {
  const gridContainer = document.querySelector('.gridContainer');
  for(let i = 1; i <= height; i++){
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('rowContainer');
    gridContainer.appendChild(rowContainer);
    for(let j = 1; j <= width; j++) {
      const newTile = document.createElement('div');
      newTile.classList.add('tile');
      rowContainer.appendChild(newTile);

    }
  }  
}

function hoverEffect() {
  const tiles = document.querySelectorAll('.tile');
  tiles.forEach((tile) => {
    tile.addEventListener('mouseover', () => {
      tile.classList.add('hoverTile');
    });
  });
  }

function deleteGrid() {
  // const gridContainer = document.querySelector('.gridContainer');
  const tiles = document.querySelectorAll('.tile');
  const rows = document.querySelectorAll('.rowContainer');
  const gridContainer = document.querySelector('.gridContainer');
  console.log(gridContainer);
  tiles.forEach((tile) => {
    tile.remove();
  });
  rows.forEach((row) => {
    row.remove();
  })
}



