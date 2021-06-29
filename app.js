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

  // options menu
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

  // function to clear the current sketch
  const clearScreen = () => {
    const titleBtn = document.querySelector('.title');
    const screen = document.querySelector('#grid');

    titleBtn.addEventListener('click', () => {
      while (screen.firstChild) {
        screen.removeChild(screen.firstChild);
      }
      generateGrid(columns, rows);
      startPoint();
    });
  };
  clearScreen();
};
game();
