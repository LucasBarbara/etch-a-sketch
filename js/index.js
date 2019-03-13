let gridSize = 16;

const container = document.querySelector('.container');

const button = document.querySelector('#clearGrid');


drawGrid(gridSize);

function drawGrid(gridSize) {
  for (let j = 0; j < gridSize; j++) {
    for (let i = 0; i < gridSize; i++) {
      let content = document.createElement('div');
      content.classList.add('content');
      container.appendChild(content);
    }
  }
    paint();
}

function newGrid() {

  let newGridSize = +prompt('How many squares by side should the new grid be?');

  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
  drawGrid(newGridSize);
  gridTemplate(newGridSize);
}

function paint() {
  const squares = document.querySelectorAll('.content');

  squares.forEach((square) => {

    square.addEventListener('mouseover', (e) => {
      square.style.backgroundColor = 'blue';
    })
  })

}

function gridTemplate(x) {
  container.style.gridTemplateRows = "repeat(" + x + ", 1fr)";
  container.style.gridTemplateColumns = "repeat(" + x + ", 1fr)";
}

button.addEventListener('click', newGrid);
