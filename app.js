// entire game/webpage
const game = () => {
  // default dimensions
  let columns = 32;
  let rows = 16;
  // create divs based off dimensions.
  const generateGrid = (columns, rows) => {
    const grid = document.querySelector('.grid');
    // how many divs
    const squares = columns * rows;
    for (i = 0; i < squares; i++) {
      const square = document.createElement('div');
      // place divs on webpage
      grid.appendChild(square);
    }
    // max divs for a column(so they're placed in a grid and not a line)
    grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    const boxes = document.querySelectorAll('.grid div');
    // for each div, make random color when you mouse over
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

  const dropdownOptions = () => {
    const options = document.querySelector('.optionsBtn');
    const optionsMenu = document.querySelector('.optionsMenu');
    options.addEventListener('mouseover', () => {
      optionsMenu.style.opacity = '50';
      optionsMenu.style.pointerEvents = 'all';
    });
    optionsMenu.addEventListener('mouseover', () => {
      optionsMenu.style.opacity = '50';
      optionsMenu.style.pointerEvents = 'all';
    });
    options.addEventListener('mouseout', () => {
      optionsMenu.style.opacity = '0';
      optionsMenu.style.pointerEvents = 'none';
    });
    optionsMenu.addEventListener('mouseout', () => {
      optionsMenu.style.opacity = '0';
      optionsMenu.style.pointerEvents = 'none';
    });
  };
  dropdownOptions();
};

game();
