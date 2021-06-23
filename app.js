// entire game/webpage
const game = () => {
  // default dimensions
  let columns = 34;
  let rows = 16;

  // create divs based off dimensions.
  const generateGrid = (columns, rows) => {
    const grid = document.querySelector('.grid');
    // how many divs
    const squares = columns * rows;

    for (i = 0; i < squares; i++) {
      const square = document.createElement('div');
      square.setAttribute('id', 'pixel');
      // place divs on webpage
      grid.appendChild(square);
    }

    // max divs for a column(so they're placed in a grid and not a line)
    grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

    // for each div, make random color when you mouse over
    const boxes = document.querySelectorAll('.grid div');

    boxes.forEach(box => {
      box.addEventListener('mouseenter', () => {
        const x = Math.floor(Math.random() * 256);
        const y = Math.floor(Math.random() * 256);
        const z = Math.floor(Math.random() * 256);
        const bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';

        box.style.background = bgColor;
      });
    });
  };
  generateGrid(columns, rows);

  // hover effect for options menu
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

  // function to clear current sketch
  const titlePress = document.querySelector('.title');
  const screen = document.querySelector('#grid');

  const clearScreen = parent => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

  // cleat current sketch when title is clicked
  titlePress.addEventListener('click', () => {
    clearScreen(screen);
    generateGrid(columns, rows);
  });

  // clear current sketch && generate new grid from user input
  const newGrid = () => {
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;
    const getInput = document.querySelector('.getInput');
    columns = input1;
    rows = input2;

    getInput.addEventListener('click', () => {
      clearScreen(screen);
      generateGrid(columns, rows);
    });
  };
  newGrid();
};
game();
