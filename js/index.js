const container = document.querySelector('.container');

for (let j = 0; j < 16; j++) {
  for (let i = 0; i < 16; i++) {
    let content = document.createElement('div');
    content.classList.add('content');
    container.appendChild(content);
  }
}

const squares = document.querySelectorAll('.content');

squares.forEach((square) => {

  square.addEventListener('mouseover', (e) => {
    square.style.backgroundColor = 'blue';
  })
})