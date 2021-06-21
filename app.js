const game = () => {
  let columns = 16;
  let rows = 16;
  const generateGrid = (columns, rows) => {
    const grid = document.querySelector('.container');
    const squares = columns * rows;
    for (i = 0; i < squares; i++) {
      const square = document.createElement('div');
      grid.appendChild(square);
    }
    grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    const boxes = document.querySelectorAll('.container div');
    boxes.forEach(box => {
      box.addEventListener('mouseenter', () => {
        const x = Math.floor(Math.random() * 256);
        const y = Math.floor(Math.random() * 256);
        const z = Math.floor(Math.random() * 256);
        const bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
        console.log(bgColor);

        box.style.background = bgColor;
      });
    });
  };
  generateGrid(columns, rows);
};

// function random_bg_color() {
//   const x = Math.floor(Math.random() * 256);
//   const y = Math.floor(Math.random() * 256);
//   const z = Math.floor(Math.random() * 256);
//   const bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
//   console.log(bgColor);

//   document.div.style.background = bgColor;
// }

// random_bg_color();

game();
