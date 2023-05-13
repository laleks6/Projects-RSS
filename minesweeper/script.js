// creat block

const { body } = document;

// header
const header = document.createElement('header');
header.className = 'header';
const logo = document.createElement('h1');
logo.className = 'logo';
header.prepend(logo);

// main
const main = document.createElement('main');
main.className = 'main';

const wrap = document.createElement('div');
wrap.className = 'wrap';

const mineSwiperBlock = document.createElement('div');
mineSwiperBlock.className = 'minesweeper-block';

const informationBlock = document.createElement('div');
informationBlock.className = 'minesweeper-block__information';
const informationFlagCount = document.createElement('div');
informationFlagCount.className = 'information__flag';
const informationLogo = document.createElement('div');
informationLogo.textContent = 'logo';
informationLogo.className = 'information__logo';
const informationTime = document.createElement('div');
informationTime.textContent = '00:00';
informationTime.className = 'information__timer';
informationBlock.append(informationFlagCount);
informationBlock.append(informationLogo);
informationBlock.append(informationTime);

const playingFieldBlock = document.createElement('div');
playingFieldBlock.className = 'minesweeper-block__playing-field';

main.prepend(wrap);
wrap.prepend(mineSwiperBlock);
mineSwiperBlock.append(informationBlock);
mineSwiperBlock.append(playingFieldBlock);

body.prepend(main);
body.prepend(header);

const playingField = document.querySelector('.minesweeper-block__playing-field');

const quantity = 10;
const creatBtn = (quantity) => {
  let x = 0;
  let y = 0;
  if (quantity === 10) {
    informationFlagCount.textContent = '10';
    playingFieldBlock.classList.add('grid-btn-easy');
    for (let i = 0; i < quantity * quantity; i += 1) {
      const btn = document.createElement('button');
      btn.className = 'btn zero';
      btn.id = i;
      if (x >= quantity) {
        x = 0;
        y += 1;
      }
      btn.dataset.x = x;
      btn.dataset.y = y;
      x += 1;
      playingFieldBlock.append(btn);
    }
  }
};

creatBtn(quantity);

function buttonAssembly(quantity, el) {
  if (!playingField.classList.contains('active-game')) {
    playingField.classList.toggle('active-game');
    const arrBtn = document.getElementsByClassName('btn');
    const array = [];
    rundomNumver(quantity, array, el);
    addClassBomb(array, arrBtn);
  }
  el.textContent = el.classList.contains('bomb') ? 'X' : bombCount(el, quantity);
}
function bombCount(el, quantity) {
  let count = 0;
  const { x } = el.dataset;
  const { y } = el.dataset;
  console.log(el);
  console.log(`${x} - x`);
  console.log(`${y} - y`);
  for (let i = -1; i <= 1; i += 1) {
    console.log(`${i}iiiii`);
    for (let k = -1; k <= 1; k += 1) {
      if (findingBomb(+x + i, +y + k, el, quantity)) {
        count += 1;
      }
    }
  }
  return count;
}
function findingBomb(x, y, el, quantity) {
  const arrBtn = document.getElementsByClassName('btn');
  const arr = [...arrBtn][+`${y}${x}`];
  console.log(x);
  console.log(y);
  console.log(arr);
  console.log(quantity);
  console.log([...arrBtn]);
  if (x >= 0 && y >= 0 && y < quantity && x < quantity) {
    if (arr.classList.contains('bomb')) { return true; }
  }
}
function rundomNumver(quantity, array, el) {
  for (let i = 0; i < quantity * quantity; i += 1) {
    if (+el.id !== +i) {
      array.push(i);
    }
  }
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function addClassBomb(array, arrBtn) {
  for (let i = 0; i < array.slice(0, 10).length; i += 1) {
    const btn = arrBtn[array[i]];
    btn.classList.add('bomb');
    btn.classList.remove('zero');
  }
}

const clickbtn = (el) => {
  if (el.target.classList.contains('btn')) {
    buttonAssembly(quantity, el.target);
    console.log(el);
    console.log(el.target);
    console.log(el.target.classList);
    console.log(`${el.x}--${el.y}`);
  }
};
playingField.addEventListener('click', clickbtn);

// https://itp.uni-frankfurt.de/~mwagner/teaching/C_WS17/projects/Minesweeper.pdf
// https://www.codewithfaraz.com/content/134/learn-how-to-create-a-minesweeper-game-with-html-css-and-javascript
//
