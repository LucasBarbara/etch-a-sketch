let gridSize = 16;

const container = document.querySelector('.container');

const button = document.querySelector('#clearGrid');

const btn = document.querySelector('#randomColor');

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
      square.style.backgroundColor = 'black';
      let opacity = Number(square.style.opacity); 
      opacity += 0.1;
      square.style.opacity = opacity;
    })
  })

}

function paintRandom() {
  const squares = document.querySelectorAll('.content');

  squares.forEach((square) => {

    square.addEventListener('mouseover', (e) => {
      square.style.backgroundColor = random_bg_color();
    })
  })

}

function gridTemplate(x) {
  container.style.gridTemplateRows = "repeat(" + x + ", 1fr)";
  container.style.gridTemplateColumns = "repeat(" + x + ", 1fr)";
}

function random_bg_color() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  return bgColor = "rgb(" + x + "," + y + "," + z + ")";
  }

button.addEventListener('click', newGrid);

btn.addEventListener('click', paintRandom);

