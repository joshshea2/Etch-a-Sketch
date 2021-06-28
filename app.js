// entire game/webpage
const game = () => {
  // default dimensions
  let columns = 34;
  let rows = 16;

  // create divs based off dimensions.
  const generateGrid = (columns, rows) => {
    const grid = document.querySelector('.grid');
    columns = 34;
    rows = 16;
    // how many divs
    const squares = columns * rows;

    for (i = 0; i < squares; i++) {
      const square = document.createElement('div');
      square.setAttribute('id', 'pixel');
      // square.style.background = white;
      // place divs on webpage
      grid.appendChild(square);
    }

    // max divs for a column(so they're placed in a grid and not a line)
    grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  };

  generateGrid(columns, rows);

  const startPoint = () => {
    // for each div, make random color when you mouse over
    const boxes = document.querySelectorAll('.grid div');

    boxes.forEach(box => {
      box.addEventListener('click', function divColor() {
        const x = Math.floor(Math.random() * 256);
        const y = Math.floor(Math.random() * 256);
        const z = Math.floor(Math.random() * 256);
        const bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';

        box.style.background = bgColor;
        console.log(this.id);
      });
    });
  };
  startPoint();

  // hover effect for options menu
  const dropdownOptions = () => {
    const options = document.querySelector('.optionsBtn');
    const optionsMenu = document.querySelector('.optionsMenu');
    const confirmBtn1 = document.querySelector('.confirmBtn1');
    const confirmBtn2 = document.querySelector('.confirmBtn2');
    options.addEventListener('click', () => {
      optionsMenu.style.opacity = '50';
      optionsMenu.style.pointerEvents = 'all';
    });
    optionsMenu.addEventListener('mouseenter', () => {
      optionsMenu.style.opacity = '50';
      optionsMenu.style.pointerEvents = 'all';
    });
    confirmBtn1.addEventListener('click', () => {
      optionsMenu.style.opacity = '0';
      optionsMenu.style.pointerEvents = 'none';
    });
    confirmBtn2.addEventListener('click', () => {
      optionsMenu.style.opacity = '0';
      optionsMenu.style.pointerEvents = 'none';
    });
  };
  dropdownOptions();

  // function to clear current sketch
  const titleBtn = document.querySelector('.title');
  const screen = document.querySelector('#grid');

  const clearScreen = parent => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

  // clear current sketch when title is clicked
  titleBtn.addEventListener('click', () => {
    clearScreen(screen);
    generateGrid(columns, rows);
    startPoint();
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
      startPoint();
    });
  };
  newGrid();
};
game();
