const game = () => {
  let columns = 16;
  let rows = 16;
  const generateGrid = (columns, rows) => {
    const grid = document.querySelector('.container');
    const boxes = columns * rows;
    for (i = 0; i < boxes; i++) {
      let box = document.createElement('div');
      grid.appendChild(box);
    }
    grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  };
  generateGrid(columns, rows);
};

// function random_bg_color() {
//   const x = Math.floor(Math.random() * 256);
//   const y = Math.floor(Math.random() * 256);
//   const z = Math.floor(Math.random() * 256);
//   const bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
//   console.log(bgColor);

//   document.body.style.background = bgColor;
// }

// random_bg_color();

game();
